import { Post } from '../content/post.interface';

export interface TokenPayload {
  updateDate: string;
  createDate: string;
  posts: Post[];
  comments: string[];
  followers: string[];
  following: string[];
  blockedUsers: string[];
  _id: string;
  email: string;
  role: number;
}
