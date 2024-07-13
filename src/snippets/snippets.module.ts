import { Module } from '@nestjs/common';
import { SnippetsService } from './services/snippets.service';
import { SnippetsController } from './controllers/snippets.controller';

@Module({
  providers: [SnippetsService],
  controllers: [SnippetsController]
})
export class SnippetsModule {}
