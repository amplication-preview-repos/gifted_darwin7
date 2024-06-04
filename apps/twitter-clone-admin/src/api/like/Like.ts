import { Tweet } from "../tweet/Tweet";

export type Like = {
  author: string | null;
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
};
