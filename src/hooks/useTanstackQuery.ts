import { useQuery } from "@tanstack/react-query";

export interface IWeather {
  location: {
    name: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    humidity: number;
    condition: {
      icon: string;
      text: string;
    };
    wind_mph: number;
  };
}

export const useTanstackQuery = (
  callbackFn: (arg?: any) => Promise<IWeather>,
  arg?: any,
  ...keys: any[]
) => {
  const { data, isLoading, error } = useQuery<IWeather>({
    queryKey: [...keys],
    queryFn: () => callbackFn(arg),
  });

  return { data, isLoading, error };
};
