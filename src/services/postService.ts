import JSONPlaceholderApi from "./api";
import { Post, PostFormData} from "../types/postTypes";
import { Comment } from "../types/commentTypes";

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await JSONPlaceholderApi.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export const getCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await JSONPlaceholderApi.get(`/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

export const createPost = async (postData: PostFormData) => {
  try {
    const response = await JSONPlaceholderApi.post("/posts", postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const updatePost = async (postId: number, postData: Post) => {
  try {
    const response = await JSONPlaceholderApi.put(`/posts/${postId}`, postData);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

export const deletePost = async (postId: number) => {
  try {
    const response = await JSONPlaceholderApi.delete(`/posts/${postId}`);
    return response.data; 
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};