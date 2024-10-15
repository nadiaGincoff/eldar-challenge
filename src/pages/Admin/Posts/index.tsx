import { useState } from "react";
import {
  Box,
  Typography,
  Skeleton,
  Divider,
} from '@mui/material';
import {
  Add as AddIcon,
} from '@mui/icons-material';

import PostCard from "../../../components/PostCard";
import FormDialog from "./FormDialog";
import SelectComponent from "../../../components/Select";
import CustomButton from "../../../components/CustomButton";

import { useDeletePost, usePosts, useCreatePost } from "../../../hooks/usePosts";
import { useAllUsernames } from "../../../hooks/useUsers";
import { useSelect } from "../../../hooks/useSelect";
import { useAuth } from "../../../contexts/AuthProvider";

import { PostFormData } from "../../../types/postTypes";
const Posts = () => {
  const { user } = useAuth()
  const { posts, isLoading, error } = usePosts()
  const [isCreatingPost, setIsCreatingPost] = useState(false)
  const { selectedItem, handleSelectChange } = useSelect();
  const {
    mutate: deletePost,
  } = useDeletePost();

  const {
    mutate: createPost,
    isPending: isCreating,
  } = useCreatePost();

  const { data: usernames } = useAllUsernames()

  const handleDeletePost = (postId: number) => {
    deletePost(postId)
  }

  const handleCreatePost = (title: string, description: string) => {
    if (!user?.id) {
      console.error("User ID is required");
      return;
    }

    const newPost: PostFormData = {
      userId: user?.id,
      title,
      body: description,
    }

    createPost(newPost)
  }

  if (error) return <div>Error:{error.message}</div>

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'secondary.main' }}>
      <Box
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginY: 5,
        }}
      >
        <Typography 
          color="text.secondary" 
          sx={{ 
            xs: { fontSize: '10px' }, 
            sm: { fontSize: '15px' }, 
            md: { fontSize: '20px' }
          }}
        >
          Aquí podrás visualizar y crear publicaciones.
        </Typography>
        {Number(user?.id) === Number(selectedItem) ? (
         <CustomButton
            variant="contained"
            startIcon={<AddIcon />}
            label="Agregar"
            onClick={() => setIsCreatingPost(true)}
          />
        ) : null}
      </Box>
      <SelectComponent
        items={usernames}
        label="Selecciona un usuario"
        selectedItem={selectedItem}
        handleSelectChange={handleSelectChange}
      />
      <Divider sx={{ my: 2 }} />
      {isLoading ? (
        <Skeleton variant="rectangular" height={118} />
      ) : (
        <Box sx={{ width: '100%' }}>
          {posts?.filter(post => Number(post.userId) === Number(selectedItem)).map((post) => (
            <Box key={post.id}>
              <PostCard 
                post={post} 
                handleDeletePost={() => handleDeletePost(post.id)}
              />
              <Divider sx={{ my: 2 }} />
            </Box>
          ))}
        </Box>
      )}
      <FormDialog 
        open={isCreatingPost} 
        handleClose={() => setIsCreatingPost(false)} 
        onFormSubmit={handleCreatePost}
        isCreatingPost={isCreating}
      />
    </Box>
  )
}

export default Posts;

