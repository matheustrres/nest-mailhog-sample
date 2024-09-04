import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { MailService } from './services/mail.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly mailService: MailService) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto);

    await this.mailService.sendMail(
      user.props.email,
      'Platform registration',
      'Welcome to the Nestjs plataform',
    );

    return user;
  }
}
