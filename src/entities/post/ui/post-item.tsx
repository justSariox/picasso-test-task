import { Button, Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { IPost } from '../model/types.ts'

export const PostItem = ({ ...post }: IPost) => {
  const navigate = useNavigate()

  return (
    <Card sx={{ margin: 3 }}>
      <CardContent>
        <Typography variant={'h5'}>title: {post.title}</Typography>
        <Typography variant={'body1'}>description: {post.body}</Typography>
      </CardContent>
      <Button onClick={() => navigate(`/post/${post.id}`)}> Get more</Button>
    </Card>
  )
}
