import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
};
