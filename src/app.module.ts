import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './features/user/entities/user.entity';
import { ConsoleModule } from './console/console.module';
import { Console } from './console/entities/console.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'mydb.sqlite',
    entities:[User,Console],
    synchronize:true,
  }), ConsoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
