export interface Response {
  statusCode: number;
  statusMessage: string;
  message?: string;
  payload?: null | any[] | object;
}

export interface ErrorCodeLibrary {
  [key: number]: Response;
}

export interface Post {
  post_id: string;
  author: string;
  title: string;
  body: string;
}
