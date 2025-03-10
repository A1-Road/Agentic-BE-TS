import { Injectable } from '@nestjs/common';
import { WalletCreateRequestDto } from './dto/wallet.dto';
import { PrivyClient } from '@privy-io/server-auth';
import { UserService } from 'src/user/user.service';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class WalletService {
  constructor(
    private privyClient: PrivyClient,
    private userService: UserService,
  ) {}

  async create(createWalletDto: WalletCreateRequestDto): Promise<User | null> {
    const { id, address, chainType } = await this.privyClient.walletApi.create({
      chainType: createWalletDto.chain_type,
    });
    return await this.userService.addWallet(createWalletDto.user_id, {
      walletId: id,
      address,
      chainType,
    });
  }

  findAll() {
    return `This action returns all wallet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
