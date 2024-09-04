import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'localhost',
      port: 1025, // Default mailhog port
      secure: false, // MailHog does not use SSL/TLS
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: '"NestJS App" <no-reply@nestjs.com>',
      to,
      subject,
      text,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
