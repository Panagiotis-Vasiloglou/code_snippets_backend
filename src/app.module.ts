import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { SnippetsModule } from './snippets/snippets.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/code_snippets'), UsersModule, SnippetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
