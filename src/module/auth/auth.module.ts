// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET, // Use the environment variable
            signOptions: { expiresIn: '60s' }, // Token expiration time
        }),
    ],
    providers: [JwtStrategy],
})
export class AuthModule {}
