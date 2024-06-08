export interface Response {
  statusCode: number;
  statusMessage: string;
  message?: string;
  payload?: null | any[] | object;
}

export interface HttpStatus {
  [key: number]: {
    statusCode: number;
    statusMessage: string;
    message?: string;
  };
}

export interface Post {
  post_id: string;
  author: string;
  title: string;
  body: string;
}
