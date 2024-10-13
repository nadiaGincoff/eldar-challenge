import jsonplaceholderApi from "./api";
import { User } from "../types/userTypes";

export const getAllUsernames = async () => {
  try {
    const response = await jsonplaceholderApi.get("/users");
    const usernames = response.data.map((user: User) => user.name);
    return usernames;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export const getUserById = async (userId: number) => {
  try {
    const response = await jsonplaceholderApi.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
