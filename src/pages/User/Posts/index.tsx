import { usePosts } from "../../../hooks/usePosts";
import PostCard from "../../../components/PostCard";
import { Box, Divider } from "@mui/material";

const Posts = () => {
  const { posts, isLoading, error } = usePosts()

  if (error) return <div>Error:{error.message}</div>

  return (
    <Box>
      <h1>Posts</h1>
      {posts?.map((post) => (
        <>
          <Box key={post.id}>
            <PostCard key={post.id} post={post} />
            <Divider sx={{ my: 2 }} />
          </Box>
        </>
      ))}
    </Box>
  )
}

export default Posts;