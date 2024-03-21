import { GetByIdParams, GetPostParams, IPost } from '@/entities/post/model/types.ts'
import { baseApi } from '@/shared/api'

export const postsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<IPost[], GetPostParams>({
      query: params => ({
        url: '/posts',
        params,
      }),
      serializeQueryArgs: ({ endpointName }) => ({ endpointName }),
      merge: (currentCache, newItems) => [...currentCache, ...newItems],
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
      providesTags: ['Posts'],
    }),
    getPostById: builder.query<IPost[], GetByIdParams>({
      query: id => ({
        url: `/posts/?id=${id}`,
      }),
      providesTags: ['Posts'],
    }),
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi
