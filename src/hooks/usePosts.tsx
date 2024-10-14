import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

import { deletePost, getAllPosts, getCommentsByPostId, updatePost, createPost } from '../services/postService';
import { Post, PostFormData} from '../types/postTypes';

export const usePosts = () => {
  const { data: posts, isLoading, error } = useQuery({ queryKey: ['posts'], queryFn: getAllPosts })
  return { posts, isLoading, error }
}

export const useCommentsByPostId = (postId: number) => {
  return useQuery({ queryKey: ['comments', postId], queryFn: () => getCommentsByPostId(postId)})
}

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: ({ postId, postData }: { postId: number, postData: Post }) => updatePost(postId, postData)
  })
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()

  return useMutation({ 
    mutationFn: (postId: number) => deletePost(postId),
    // Comento el onSuccess para evitar que se vuelva a cargar la data una vez creada la publicación, ya que me traeria la data anterior y la publicacion borrada desapareceria al ser fake.

    // onSuccess: () => {
    //  queryClient.invalidateQueries({ queryKey: ['posts'] });
    // }, 
    onMutate: async (postId: number) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] })

      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])

      queryClient.setQueryData(['posts'], (oldPosts: Post[]) => {
        return oldPosts.filter((post) => post.id !== postId)
      })

      return { previousPosts }
    },
    onError: (context: any) => {
      queryClient.setQueryData(['posts'], context.previousPosts)
    }
  })
}

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (postData: PostFormData) => createPost(postData),
    // Comento el onSuccess para evitar que se vuelva a cargar la data una vez creada la publicación, ya que me traeria la data anterior y la publicacion creada desapareceria al ser fake.

    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['posts'] });
    // },
    onMutate: async (postData: PostFormData) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] })

      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])

      queryClient.setQueryData(['posts'], (oldPosts: Post[]) => {
        return [postData, ...oldPosts]
      })

      console.log(previousPosts);
      return { previousPosts }
    },
    onError: (context: any) => {
      queryClient.setQueryData(['posts'], context.previousPosts)
    }
  })
}