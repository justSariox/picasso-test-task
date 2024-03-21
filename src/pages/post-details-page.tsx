import { Box, Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { useGetPostByIdQuery } from '@/entities/post/api'

export const PostDetailsPage = () => {
  const { id = '' } = useParams()
  const { data: post, isLoading, isError } = useGetPostByIdQuery(id)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <Box sx={{ backgroundColor: '#4c4c4c', height: '100vh', margin: 2 }}>
      <Typography variant={'h3'}>Personal Post Page</Typography>
      {post?.map(p => (
        <Card key={`${p.id} ${p.title}`} sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant={'body1'}>Author id: {p.userId}</Typography>
            <Typography variant={'body1'}>Post Id: {p.id}</Typography>
            <Typography variant={'body1'}>Post Title: {p.title}</Typography>
            <Typography variant={'body1'}>Description: {p.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
