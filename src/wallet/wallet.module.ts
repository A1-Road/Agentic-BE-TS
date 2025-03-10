import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { PrivyModule } from 'src/privy/privy.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrivyModule, UserModule],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletModule {}
