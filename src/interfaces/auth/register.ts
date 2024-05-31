// --------- Authorization  -------------

export interface Signin {
  email: string;
  password: string;
}

export interface Signup extends Signin {
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface AuthStore {
  data: any[];
  isLoading: boolean;
  signin: (data: Signin) => Promise<any>;
  signup: (data: Signup) => Promise<any>;
}

export interface Request {
  signin: (data: Signin) => unknown;
  signup: (data: Signup) => unknown;
  logout: () => unknown;
}
