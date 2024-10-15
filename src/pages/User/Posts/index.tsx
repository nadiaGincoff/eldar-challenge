import { usePosts } from "../../../hooks/usePosts";
import PostCard from "../../../components/PostCard";
import { Box, Divider, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { posts, isLoading, error } = usePosts()
  const navigate = useNavigate();
  
  if (isLoading) return <CircularProgress />
  if (error) return <div>Error:{error.message}</div>

  return (
    <Box 
      sx={{ 
        p: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        mt: 5,
        cursor: 'pointer'
      }}
    >
      {posts?.map((post) => (
        <Box  
          key={post.id} 
          onClick={() => navigate(`/user/post/${post.id}`)}
        >
          <PostCard key={post.id} post={post} />
          <Divider sx={{ my: 2 }} />
        </Box>
      ))}
    </Box>
  )
}

export default Posts;