// src/auth/jwt.strategy.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { SecretService } from './secret.service';
import * as jwt from 'jsonwebtoken'; // Import jwt for verification

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) implements OnModuleInit {
    private secret: string;

    constructor(private readonly secretService: SecretService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async onModuleInit() {
        this.secret = await this.secretService.getSecretValue(process.env.SECRECT_NAME); // Replace with your secret name
    }

    async validate(payload: JwtPayload) {
        // You can perform additional validation here if needed
        return { identification: payload.identification };
    }

    async validateToken(token: string) {
        // Use the secret to validate the token
        return jwt.verify(token, this.secret);
    }
}
