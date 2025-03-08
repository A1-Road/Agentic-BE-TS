import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthLoginRequestDto,
  AuthLoginResponseDto,
  AuthRegisterRequestDto,
  AuthRegisterResponseDto,
} from './dto/auth.dto';
import { Public } from './public.decorator';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({ status: 200, type: AuthRegisterResponseDto })
  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('register')
  async register(
    @Body() registerDto: AuthRegisterRequestDto,
  ): Promise<AuthRegisterResponseDto> {
    return this.authService.register(registerDto);
  }

  @ApiResponse({ status: 200, type: AuthLoginResponseDto })
  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  logIn(@Body() logInDto: AuthLoginRequestDto): Promise<AuthLoginResponseDto> {
    return this.authService.logIn(logInDto);
  }
}
