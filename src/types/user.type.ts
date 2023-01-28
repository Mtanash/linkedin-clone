type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  posts: string[];
  avatar?: string;
  likedPosts: string[];
};

export default User;
