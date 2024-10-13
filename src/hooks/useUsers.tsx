
import {  
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { getUserById, getAllUsernames } from '../services/userService'
import { User } from '../types/userTypes'

// function getAllUsernames(): User[] {
//   const user = useQuery({ queryKey: ['users'], queryFn: () => getAllUsernames() })
//   return user
// }

export const useUserById = (userId: number) => {
  return useQuery({ queryKey: ['users', userId], queryFn: () => getUserById(userId)})
}