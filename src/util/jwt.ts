import jwt from 'jsonwebtoken';
import { User } from '../modules/accounts/entities/User';
import { printEnv } from '../server';

export function generateToken(user: User) {
    return jwt.sign({ userId: user.id, email: user.email }, printEnv(process.env.JWT_ACCESS_SECRET!), {
      expiresIn: printEnv(process.env.EXPIRES_IN_TOKEN!),
    });
}

export function verifyToken(token: string) {
  return jwt.verify(token, printEnv(process.env.JWT_ACCESS_SECRET!))
}

