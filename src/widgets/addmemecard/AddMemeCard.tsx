import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import MemeCard, { MemeCardProps } from "../MemeCard/MemeCard";
import s from "./ui/addmemecard.module.scss";

const API_URL = "https://67968bd6bedc5d43a6c58fc6.mockapi.io/memes";

export const AddMemeCard = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [editingCard, setEditingCard] = useState<MemeCardProps | null>(null);
  const queryClient = useQueryClient();

  const {
    data: memeCards = [],
    isLoading,
    isError,
  } = useQuery<MemeCardProps[]>({
    queryKey: ["memes"],
    queryFn: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },
  });

  const addMemeMutation = useMutation({
    mutationFn: (newMemeCard: Omit<MemeCardProps, "id">) =>
      axios.post(API_URL, newMemeCard),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
      setImageUrl("");
      setUserName("");
      setTitle("");
    },
    onError: () => {
      console.error("Ты опоздал юзер, я съел твой мем!");
    },
  }); 
 
  const deleteMemeMutation = useMutation({
    mutationFn: (id: string) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
    },
    onError: () => {
      console.error("Мем в покер не проебался, сори(((");
    },
  });

  const updatedMemeMutation = useMutation({
    mutationFn: (updatedMemeCard: MemeCardProps) =>
      axios.put(`${API_URL}/${updatedMemeCard.id}`, updatedMemeCard),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
      setEditingCard(null);
      setImageUrl("");
      setUserName("");
      setTitle("");
    },
    onError: () => {
      console.log("Мем не поменял, сорян(((");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newMemeCard = {
      imageUrl,
      userName,
      createdAt: new Date().toISOString(),
      title,
    };

    if (editingCard) {
      const updatedMemeCard = {
        ...editingCard,
        imageUrl,
        userName,
        title,
      };
      updatedMemeMutation.mutate(updatedMemeCard);
    } else {
      addMemeMutation.mutate(newMemeCard);
    }
  };
  const handleDelete = (id: string) => {
    deleteMemeMutation.mutate(id);
  };

  const handleEdit = (card: MemeCardProps) => {
    setEditingCard(card);
    setImageUrl(card.imageUrl);
    setUserName(card.userName);
    setTitle(card.title);
  };

  if (isLoading) {
    return <div className={s.loader}>ГОООООООЛ!</div>;
  }

  if (isError) {
    return (
      <div className={s.loader}>
        Ты опоздал Богдан, я проебал твои мемы в покер!
      </div>
    );
  }

  return (
    <>
      <form className={s.input_block} onSubmit={handleSubmit}>
        <input
          className={s.card_img}
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button className={s.accept_button} type="submit">
          {editingCard ? "Update Meme" : "Add Meme"}
        </button>
        {editingCard && (
          <button type="button" onClick={() => setEditingCard(null)}>
            Cancel
          </button>
        )}
      </form>

        {memeCards.map((card, index) => (
          <div key={index}>
            <MemeCard
              id={card.id}
              imageUrl={card.imageUrl}
              userName={card.userName}
              createdAt={card.createdAt}
              title={card.title}
            />
            <div className={s.button_block}>
              <button onClick={() => handleEdit(card)}>Edit</button>
              <button onClick={() => handleDelete(card.id)}>Delete</button>
            </div>
          </div>
        ))}
    </>
  );
};
