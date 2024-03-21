import { memo } from 'react'

import { IPost } from '@/entities/post/model/types.ts'
import { PostItem } from '@/entities/post/ui'

type PostListProps = {
  posts: IPost[]
}

const MemoizedPostItem = memo(PostItem)

export const PostsList = ({ posts }: PostListProps) => {
  return <>{posts?.map(post => <MemoizedPostItem key={post.id} {...post} />)}</>
}
