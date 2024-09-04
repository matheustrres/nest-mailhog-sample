import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MailService } from './services/mail.service';

@Module({
  controllers: [UsersController],
  providers: [MailService, UsersService],
})
export class UsersModule {}
