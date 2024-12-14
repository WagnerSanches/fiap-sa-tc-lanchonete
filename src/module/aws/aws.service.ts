import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsService {

    private secretsManager: AWS.SecretsManager;

    constructor() {
      this.secretsManager = new AWS.SecretsManager({
        region: 'us-east-1',
      });
    }

    async getSecretValue(secretName: string): Promise<string> {
        try {
          const data = await this.secretsManager.getSecretValue({ SecretId: secretName }).promise();
          
          if ('SecretString' in data && data.SecretString) {
            return data.SecretString; 
          } else if ('SecretBinary' in data && data.SecretBinary) {
            const buff = Buffer.from(data.SecretBinary as string, 'base64'); 
            return buff.toString('utf-8');
          } else {
            throw new Error('Secret not found or empty');
          }
        } catch (err) {
          console.error(`Error retrieving secret ${secretName}:`, err);
          throw err;
        }
      }
}
