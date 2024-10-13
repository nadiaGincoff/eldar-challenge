interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostFormData {
  title: string;
  userId: number;
  body: string;
}

export type { Post, PostFormData };
