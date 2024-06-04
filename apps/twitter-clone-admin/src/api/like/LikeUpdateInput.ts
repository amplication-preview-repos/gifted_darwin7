import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeUpdateInput = {
  author?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
