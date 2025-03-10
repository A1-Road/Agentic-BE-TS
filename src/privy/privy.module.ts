import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrivyClient } from '@privy-io/server-auth';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: PrivyClient,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        new PrivyClient(
          configService.get<string>('PRIVY_APP_ID') || '',
          configService.get<string>('PRIVY_SECRET_KEY') || '',
          {
            walletApi: {
              authorizationPrivateKey:
                configService.get<string>(
                  'PRIVY_WALLET_API_AUTHORIZATION_PRIVATE_KEY',
                ) || '',
            },
          },
        ),
    },
  ],
  exports: [PrivyClient],
})
export class PrivyModule {}
