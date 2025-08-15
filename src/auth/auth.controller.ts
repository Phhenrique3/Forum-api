import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {} // ✅ injeção via construtor

  @Post('signin')
  signin(@Body() body: Prisma.UserCreateInput) {
    return this.authService.signin(body);
  }
}
