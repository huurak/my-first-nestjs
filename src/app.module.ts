import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//! @Name - называется декоратором
// Декоратор Module
// Декораторы позволяют добавить определенный функционал в класс AppModule (ниже)
@Module({
  //! Три ключа
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
