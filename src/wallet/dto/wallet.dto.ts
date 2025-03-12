import { ApiProperty } from "@nestjs/swagger";

export class WalletCreateRequestDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  userId: string;
  @ApiProperty({ example: 'ETH', description: 'Chain Type' })
  chainType: string;
}

export class WalletCreateResponseDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'Wallet ID' })
  id: string;
  @ApiProperty({ example: '0x1234567890', description: 'Wallet Address' })
  address: string;
  @ApiProperty({ example: 'ETH', description: 'Chain Type' })
  chainType: string;
}

export class WalletBuyRequestDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  userId: string;
  @ApiProperty({ example: 'ETH', description: 'Chain Type' })
  chainType: string;
}

export class WalletBuyResponseDto {
  @ApiProperty({ example: '0x1234567890', description: 'Wallet Address' })
  address: string;
}

export class WalletListRequestDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  userId: string;
}

class WalletListItem {
  address: string;
  chainType: string;
  balance: number;
}

export class WalletListResponseDto {
  @ApiProperty({ example: [{"address":"0x1234567890","chainType":"ETH","balance":2000.098}], description: 'Wallets' })
  wallets: WalletListItem[];
}

export class WalletPromptRequestDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  userId: string;
  @ApiProperty({ example: 'Send 0.1 ETH to 0x1234567890', description: 'Prompt' })
  prompt: string;
}

class Wallet {
  chainType: string;
  address: string;
}

class Target {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  userId: string;
  @ApiProperty({ example: 'testuser', description: 'Username' })
  username: string;
  @ApiProperty({ example: [{"chainType":"ETH","balance":2000.098}], description: 'Wallets' })
  wallets: Wallet[];
}

export class WalletPromptResponseDto {
  @ApiProperty({ example: 0.1, description: 'Amount' })
  amount: number;
  @ApiProperty({ example: 'ETH', description: 'Chain Type' })
  chainType: string;
  @ApiProperty({ example: [{userId: '67cc979a59efa4cf7d69da22', username: 'testuser', wallets: [{"chainType":"ETH","balance":2000.098}]}], description: 'Targets' })
  targets: Target[];
  @ApiProperty({ example: true, description: 'Is Risky' })
  isRisky: boolean;
  @ApiProperty({ example: 'Risk detail', description: 'Risk Detail' })
  riskDetail: string | null;
}

export class WalletPromptSendRequestDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  userId: string;
  @ApiProperty({ example: 'ETH', description: 'Chain Type' })
  SwapFrom: string;
  @ApiProperty({ example: 'ETH', description: 'Chain Type' })
  SwapTo: string;
  @ApiProperty({ example: 0.1, description: 'Amount' })
  amount: number;
  @ApiProperty({ example: '0x1234567890', description: 'Wallet Address' })
  address: string;
}

export class WalletPromptSendResponseDto {
  @ApiProperty({ example: true, description: 'Is Accepted' })
  isAccepted: boolean;
  @ApiProperty({ example: 'Reason', description: 'Reason' })
  reason: string | null;
}

export class WalletTransactionRequestDto {
  @ApiProperty({ example: '67cc979a59efa4cf7d69da22', description: 'User ID' })
  userId: string;
}

class Transaction {
  @ApiProperty({ example: '9d8f7a59efa4cf7d69da22', description: 'Transaction ID' })
  id: string;
  @ApiProperty({ example: 'Done', description: 'Status' })
  status: string;
}

export class WalletTransactionResponseDto {
  @ApiProperty({ example: [{"id":"9d8f7a59efa4cf7d69da22","status":"Done"}], description: 'Transactions' })
  transactions: Transaction[];
}