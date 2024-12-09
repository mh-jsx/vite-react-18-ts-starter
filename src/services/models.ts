export type ID = string;

export type ApiResponse<T> = {
  data?: T;
};

export interface IErrorType {
  [key: number]: string;
}
