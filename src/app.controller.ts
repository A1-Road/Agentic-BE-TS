import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBearerAuth('JWT')
  @ApiResponse({
    status: 200,
    description: 'Agentic TS Backend is running!',
    type: String,
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
