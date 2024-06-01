export interface Response {
  statusCode: number;
  message: string;
  payload?: null | any[];
}

export interface ErrorCodeLibrary {
  [key: number]: Response;
}

export interface Post {
  author: string;
  post_id: string;
  title: string;
  body: string;
}
