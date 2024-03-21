export interface IPost {
  id: number
  userId: number
  title: string
  body: string
}

export type GetByIdParams = string

export type GetPostParams = {
  _limit: number
  _page: number
}
