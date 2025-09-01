import { Controller, Get, Post, Body } from '@nestjs/common';
import { VisualizeService } from './visualize.service';

@Controller('visualize')
export class VisualizeController {
  constructor(private readonly visualizeService: VisualizeService) {}

  @Get('refresh')
  async refresh() {
    return await this.visualizeService.refreshData();
  }

  @Post('generate')
  async generateVisualization(@Body() body: { selectedName: string }) {
    return await this.visualizeService.generateVisualization(body.selectedName);
  }
}
