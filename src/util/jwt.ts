import jwt from 'jsonwebtoken';
import auth from '../config/auth';
import { User } from '../modules/accounts/entities/User';

export function generateToken(user: User) {
    return jwt.sign({ userId: user.id, email: user.email }, auth.jwt_access_secret, {
      expiresIn: auth.expires_in_token,
    });
}

