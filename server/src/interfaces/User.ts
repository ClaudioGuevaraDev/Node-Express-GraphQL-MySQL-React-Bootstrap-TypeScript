export interface RegisterUser {
  user: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

export interface LoginUser {
  user: {
    username: string;
    password: string;
  };
}
