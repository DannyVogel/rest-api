export interface Response {
  statusCode: number;
  message: string;
  payload?: null | any[];
}

export interface ErrorCodeLibrary {
  [key: number]: Response;
}

export interface Post {
  userId: number;
  id: string;
  title: string;
  body: string;
}
