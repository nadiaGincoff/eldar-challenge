
import {  
  useQuery,
} from '@tanstack/react-query'

import { getUserById, getAllUsernames } from '../services/userService'

export const useAllUsernames = () => {
  return useQuery({ queryKey: ['users'], queryFn: () => getAllUsernames() })
}

export const useUserById = (userId: number) => {
  return useQuery({ queryKey: ['users', userId], queryFn: () => getUserById(userId)})
}