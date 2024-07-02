export interface userDto {
  gmail: string;
  password: string;
  is_active: boolean;
  role: "user" | "author" | "admin" | "super_admin";
}
