import React from "react";
import s from "./ui/memecard.module.scss";

export interface MemeCardProps {
  id: string;
  imageUrl: string;
  userName: string;
  createdAt: string;
  title: string;
}

const MemeCard: React.FC<MemeCardProps> = ({
  imageUrl,
  userName,
  createdAt,
  title,
}) => {
  return (
    <section className={s.card}>
      <div className={s.card_wrap}>
        <img className={s.card_img} src={imageUrl} alt="Meme" />
        <div className={s.card_block}>
          <h3 className={s.card_txt}>{title}</h3>
          <h3 className={s.card_txt}>@{userName}</h3>
          <p>Created at: {new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  );
};

export default MemeCard;
