import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

import { PostDetailsPage, Posts } from '@/pages'
import { NotFound } from '@/pages/notfound.tsx'
import { Layout } from '@/shared/ui/Layout'

const routes: RouteObject[] = [
  { path: '/', element: <Posts /> },
  { path: '/post/:id', element: <PostDetailsPage /> },
  { path: '*', element: <NotFound /> },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...routes],
  },
])

export const Router = () => <RouterProvider router={router} />
