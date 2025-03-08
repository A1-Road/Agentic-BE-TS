import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  AuthLoginRequestDto,
  AuthLoginResponseDto,
  AuthRegisterRequestDto,
} from './dto/auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  private readonly saltRounds = 10;

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async logIn(dto: AuthLoginRequestDto): Promise<AuthLoginResponseDto> {
    const { email, password } = dto;
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (
      (await this.comparePasswords(password, user.hashedPassword)) === false
    ) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }
    const result = {
      username: user.username,
    };
    return {
      id: user._id,
      username: user.username,
      wallets: user.wallets.map((wallet) => ({
        chainType: wallet.chainType,
        balance: 2000.098,
      })),
      access_token: this.jwtService.sign(result),
    };
  }

  async register(dto: AuthRegisterRequestDto): Promise<AuthLoginResponseDto> {
    const { username, email, password } = dto;
    const hashedPassword = await this.hashPassword(password);
    const user = this.userService.create(username, email, hashedPassword);
    const result = {
      username,
    };
    return {
      id: (await user)._id,
      username,
      wallets: [],
      access_token: this.jwtService.sign(result),
    };
  }
}
