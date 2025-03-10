import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { PrivyModule } from './privy/privy.module';

@Module({
  imports: [
    // 環境変数を読み込む
    ConfigModule.forRoot(),

    // MongooseのDB_URIを環境変数から取得
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),

    AuthModule,

    UserModule,

    WalletModule,

    PrivyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
