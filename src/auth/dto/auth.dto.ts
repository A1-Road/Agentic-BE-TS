import { ApiProperty } from '@nestjs/swagger';

type Wallet = {
  chainType: string;
  balance: number;
};

export class AuthRegisterRequestDto {
  @ApiProperty({ example: 'testuser', description: 'Username' })
  username: string;
  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  email: string;
  @ApiProperty({ example: 'password', description: 'Password' })
  password: string;
}

export class AuthRegisterResponseDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  id: string;
  @ApiProperty({ example: 'testuser', description: 'Username' })
  username: string;
  @ApiProperty({
    example: '[{"chainType":"ETH","balance":2000.098}]',
    description: 'Wallets',
  })
  wallets: Wallet[];
  @ApiProperty({
    example: '67cc979a59efa4cf7d69da22',
    description: 'Access token',
  })
  access_token: string;
}

export class AuthLoginRequestDto {
  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  email: string;
  @ApiProperty({ example: 'password', description: 'Password' })
  password: string;
}

export class AuthLoginResponseDto extends AuthRegisterResponseDto {}
