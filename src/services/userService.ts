import jsonplaceholderApi from "./api";
import { User } from "../types/userTypes";

interface Username {
  id: number;
  name: string;
}

export const getAllUsernames = async (): Promise<Username[]> => {
  try {
    const response = await jsonplaceholderApi.get("/users");
    const usernames = response.data.map((user: User) => {
      return {
        id: user.id,
        name: user.name,
      }
    });

    if (usernames.length === 0) {
      return [];
    }

    return usernames;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export const getUserById = async (userId: number): Promise<User> => {
  try {
    const response = await jsonplaceholderApi.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
