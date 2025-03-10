import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletCreateRequestDto } from './dto/wallet.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiBearerAuth('JWT')
  @Post()
  create(@Body() createWalletDto: WalletCreateRequestDto) {
    return this.walletService.create(createWalletDto);
  }

  @ApiBearerAuth('JWT')
  @Get()
  findAll() {
    return this.walletService.findAll();
  }

  @ApiBearerAuth('JWT')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletService.findOne(+id);
  }

  @ApiBearerAuth('JWT')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletService.remove(+id);
  }

  @ApiBearerAuth('JWT')
  @Post('create')
  createWallet(@Body() createWalletDto: WalletCreateRequestDto) {
    return this.walletService.create(createWalletDto);
  }
}
