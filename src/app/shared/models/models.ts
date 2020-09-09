export interface FbAuthPayload {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface User {
  email: string;
  password: string;
}

export type ErrorMessage =
  | 'EMAIL_NOT_FOUND'
  | 'INVALID_EMAIL'
  | 'INVALID_PASSWORD';
