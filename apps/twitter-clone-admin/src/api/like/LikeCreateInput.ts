import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeCreateInput = {
  author?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
