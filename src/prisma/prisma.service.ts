import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const categories = ['sporting', 'outdoor', 'electronics', 'furniture'];
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect()
      .then(async () => {
        console.log('Connected to DB');
        for (const name of categories) {
          const exists = await this.category.findFirst({
            where: {
              name,
            },
          });
          if (!exists) {
            await this.category.create({
              data: { name },
            });
          }
        }
      })
      .catch((err) => console.log(err));
  }
}
