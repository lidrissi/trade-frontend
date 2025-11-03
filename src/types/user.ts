export type User = {
  id: string;
  userId: string;
  email: string;
  name: string;
  role: string;
  phone?: string;
  bio?: string;
  address?: string;
  city?: string;
  country?: string;
  avatarUrl?: string;
  isPublic: boolean;
  isVerified: boolean;
  verificationStatus: string;
  verificationId?: string;
  verificationReason?: string;
  verifiedAt?: Date;
  isActive: boolean;
  lastLoginAt?: Date;
  permissions: string[];
};

export interface CreateUserRequest {
  name: string;
  email: string;
  role: string;
  password?: string;
}

export interface UpdateUserRequest {
  id: string;
  name?: string;
  email?: string;
  role?: string;
}

// Response types
export interface UsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

export interface UserResponse {
  user: User;
}
