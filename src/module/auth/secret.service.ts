import { Injectable } from '@nestjs/common';
import { SecretsManager } from 'aws-sdk';

@Injectable()
export class SecretService {
    private secretsManager: SecretsManager;

    constructor() {
        this.secretsManager = new SecretsManager();
    }

    async getSecretValue(secretName: string): Promise<string> {
        try {
            const data = await this.secretsManager.getSecretValue({ SecretId: secretName }).promise();
            if ('SecretString' in data) {
                return data.SecretString;
            } else {
                throw new Error('Secret is not a string');
            }
        } catch (error) {
            console.error('Error retrieving secret:', error);
            throw error;
        }
    }
}
