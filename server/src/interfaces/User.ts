export interface RegisterUser {
  user: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}
