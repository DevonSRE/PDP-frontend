export type TServiceOffer = {
  id: number;
  title: string;
  description?: string;
  bulletPoints?: { title: string; points: string[] };
};
export type TServiceTheme = "green" | "yellow" | "blue";
export type TService = {
  id: number;
  img: string;
  title: string;
  offers: TServiceOffer[];
  actionText: string;
  buttonAction: () => void;
  themeColor: TServiceTheme;
};
