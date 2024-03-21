import { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'

import { useGetPostsQuery } from '@/entities/post/api'
import { IPost } from '@/entities/post/model/types.ts'
import { PostsList } from '@/entities/post/ui/post-list'

export const Posts = () => {
  const [page, setPage] = useState(1)
  const [visiblePosts, setVisiblePosts] = useState<IPost[]>([]) // Указываем тип данных для visiblePosts
  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
  } = useGetPostsQuery({
    _page: page,
    _limit: 5,
  })

  useEffect(() => {
    if (posts) {
      setVisiblePosts(prevPosts => [...prevPosts, ...posts.slice((page - 1) * 5, page * 5)])
    }
  }, [posts, page])

  const handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement
    const isBottom = window.innerHeight + scrollTop === offsetHeight

    if (isBottom && !isFetching && !isLoading) {
      setPage(prevPage => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isFetching])

  return (
    <Box margin={2}>
      {isError && <h2>Error</h2>}
      {isLoading && <h2>Loading</h2>}
      <Typography variant={'h3'}>All Posts Page</Typography>
      <PostsList posts={visiblePosts} />
    </Box>
  )
}
