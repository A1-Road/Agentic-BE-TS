import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import {
  WalletBuyRequestDto,
  WalletBuyResponseDto,
  WalletCreateRequestDto,
  WalletCreateResponseDto,
  WalletListRequestDto,
  WalletListResponseDto,
  WalletPromptRequestDto,
  WalletPromptResponseDto,
  WalletPromptSendRequestDto,
  WalletPromptSendResponseDto,
  WalletTransactionRequestDto,
  WalletTransactionResponseDto,
} from './dto/wallet.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiBearerAuth('JWT')
  @Post('create')
  async create(
    @Body() req: WalletCreateRequestDto,
  ): Promise<WalletCreateResponseDto> {
    // Create a new wallet using privy server wallets
    return await this.walletService.create(req);
  }

  @ApiBearerAuth('JWT')
  @Get('buy')
  async buy(
    // Return the necessary information to fund user's wallet from their fiat using coinbase onramp(https://github.com/coinbase/cbpay-js)
    @Param() req: WalletBuyRequestDto,
  ): Promise<WalletBuyResponseDto> {
    return await this.walletService.buy(req);
  }

  @ApiBearerAuth('JWT')
  @Get('list')
  async list(
    @Param() req: WalletListRequestDto
  ): Promise<WalletListResponseDto> {
    // List all wallets associated with the user
    return await this.walletService.list(req);
  }

  @ApiBearerAuth('JWT')
  @Post('prompt')
  async prompt(
    @Body() req: WalletPromptRequestDto
  ): Promise<WalletPromptResponseDto> {
    // parse the prompt request and return the potential transaction details
    return await this.walletService.prompt(req);
  }

  @ApiBearerAuth('JWT')
  @Post('send')
  async send(
    @Body() req: WalletPromptSendRequestDto
  ): Promise<WalletPromptSendResponseDto> {
    // send the transaction to the privy server
    return {
      isAccepted: true,
      reason: null,
    }
  }

  @ApiBearerAuth('JWT')
  @Get('transaction')
  async transaction(
    @Param() req: WalletTransactionRequestDto
  ): Promise<WalletTransactionResponseDto> {
    // return the transaction status
    return {
      transactions: [
        {
          id: '67cc979a59efa4cf7d69da22',
          status: 'pending',
        }
      ]
    }
  }
}
