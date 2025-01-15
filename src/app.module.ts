import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './features/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'mydb.sqlite',
    entities:[User],
    synchronize:true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
