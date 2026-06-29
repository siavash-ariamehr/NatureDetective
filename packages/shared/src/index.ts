export type UserRole = 'CHILD' | 'PARENT' | 'TEACHER' | 'SCHOOL_ADMIN' | 'MUNICIPAL_OFFICER' | 'GOVERNMENT_ADMIN' | 'INTERNAL_ADMIN';

export type AgeTier = 1 | 2 | 3;

export type SupportedLocale = 'fi' | 'export default 'fi';

export interface AppError {
  statusCode: number;
  message: string;
  isOperational: boolean;
}

export interface ChildProfile {
  id: string;
  nickname: string;
  birthYear: number;
  ageTier: AgeTier;
  discoveryCount: number;
  totalScore: number;
}