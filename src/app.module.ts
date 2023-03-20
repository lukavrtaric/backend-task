import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://vercel-admin-user:0103990Luka@cluster0.0xbmhrc.mongodb.net/?retryWrites=true&w=majority',
        ),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
