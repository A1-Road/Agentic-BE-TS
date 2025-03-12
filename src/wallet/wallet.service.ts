import { Injectable } from '@nestjs/common';
import {
  WalletBuyRequestDto,
  WalletBuyResponseDto,
  WalletCreateRequestDto,
  WalletCreateResponseDto,
  WalletListRequestDto,
  WalletListResponseDto,
  WalletPromptRequestDto,
  WalletPromptResponseDto,
} from './dto/wallet.dto';
import { PrivyClient } from '@privy-io/server-auth';
import { UserService } from 'src/user/user.service';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class WalletService {
  constructor(
    private privyClient: PrivyClient,
    private userService: UserService,
  ) {}

  async create(req: WalletCreateRequestDto): Promise<WalletCreateResponseDto> {
    const { id, address, chainType } = await this.privyClient.walletApi.create({
      chainType: req.chainType,
    });
    await this.userService.addWallet(req.userId, {
      walletId: id,
      address,
      chainType,
    });
    return {
      id,
      address,
      chainType,
    };
  }

  async buy(req: WalletBuyRequestDto): Promise<WalletBuyResponseDto> {
    const user: User | null = await this.userService.findById(req.userId);
    if (!user) {
      throw new Error('User not found');
    }
    const wallet = user.wallets.find(
      (wallet) => wallet.chainType === req.chainType,
    );
    if (!wallet) {
      throw new Error('Wallet not found');
    }
    return { address: wallet.address };
  }

  async list(req: WalletListRequestDto): Promise<WalletListResponseDto> {
    const user: User | null = await this.userService.findById(req.userId);
    if (!user) {
      throw new Error('User not found');
    }
    return {
      wallets: user.wallets.map((wallet) => ({
        address: wallet.address,
        chainType: wallet.chainType,
        balance: 2000.098,
      }))
    };
  }

  async prompt(req: WalletPromptRequestDto): Promise<WalletPromptResponseDto> {
    class Wallet {
      chainType: string;
      address: string;
    }
    const user: User | null = await this.userService.findById(req.userId);
    if (!user) {
      throw new Error('User not found');
    }
    return {
      amount: 0.1,
      chainType: 'ETH',
      targets: [
        {
          userId: user._id,
          username: user.username,
          wallets: user.wallets.map((wallet) => ({
            chainType: wallet.chainType,
            address: wallet.address,
          })),
        },
      ],
      isRisky: false,
      riskDetail: null
    };
  }
}
