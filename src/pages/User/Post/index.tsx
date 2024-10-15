import { Box, Typography, Avatar, CardContent, CardMedia, CircularProgress } from '@mui/material';
import { usePostById } from '../../../hooks/usePosts';
import { useParams } from 'react-router-dom';
import { useUserById } from '../../../hooks/useUsers';

const BlogPostCard = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePostById(Number(id));
  const { data: user } = useUserById(Number(post?.userId));

  if (isLoading) return <CircularProgress />
  if (error) return <div>Error:{error.message}</div>
  
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.pexels.com/photos/4947143/pexels-photo-4947143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Card media"
      />
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            alt={user?.name}
            src="./" // Replace with actual avatar URL
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {user?.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Publicado en Tigre  · 15 de Octubre, 2024
            </Typography>
          </Box>
        </Box>

        <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
          {post?.title}
        </Typography>

        <Typography variant="body1" color="textSecondary" gutterBottom>
          {post?.body}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post?.body}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post?.body}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default BlogPostCard;