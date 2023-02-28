import { Injectable } from '@nestjs/common';
import { PrismaClient, Produtos } from '@prisma/client';

const prisma = new PrismaClient()
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  
}
