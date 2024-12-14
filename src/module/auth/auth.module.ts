// src/auth/auth.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { SecretService } from './secret.service';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: async (secretService: SecretService) => {
                const secret = await secretService.getSecretValue(process.env.SECRECT_NAME); // Replace with your secret name
                return {
                    secret,
                    signOptions: { expiresIn: '60s' },
                };
            },
            inject: [SecretService],
        }),
    ],
    providers: [JwtStrategy, SecretService],
})
export class AuthModule implements OnModuleInit {
    constructor(private readonly secretService: SecretService) {}

    async onModuleInit() {
        // You can perform any initialization logic here if needed
    }
}
