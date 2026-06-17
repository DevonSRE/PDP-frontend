export interface ApiResponse<T = Record<string, unknown>> {
  message: string;
  status: number;
  data: T | null;
  error: Record<string, unknown> | string | null;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type GENDER = "MALE" | "FEMALE";
export type STATUS = "ACTIVE" | "INACTIVE";
export type ROLE = "PLATFORM_ADMIN" | "ADMIN" | "USER";

/* User schema */

export type TFullUser = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  profile_image: string;
  date_of_birth: string;
  gender: GENDER;
  status: STATUS;
  user_type: ROLE;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
};


export type TUser = Pick<
  TFullUser,
  "id" | "first_name" | "last_name" | "email" | "user_type" | "profile_image"
>

export type TSessionData = {
  user?: TUser;
  token: string;
  expires?: number;
}
