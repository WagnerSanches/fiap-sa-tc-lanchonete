import { Module } from '@nestjs/common';
import { ClienteApplicationService } from './application/client-application.service';
import { ClientController } from './adapters/in/client.controller';
import { ClientRepositoryPrisma } from './adapters/out/client-repository.prisma';
import { PrismaService } from 'src/module/prisma';

@Module({
  controllers: [ClientController],
  providers: [ClienteApplicationService, ClientRepositoryPrisma, PrismaService,
    {
      provide: 'ClienteApplicationService',
      useExisting: ClienteApplicationService
    },
    {
      provide: 'ClientRepositoryPrisma',
      useExisting: ClientRepositoryPrisma
    }
  ],
})
export class ClientModule {}
