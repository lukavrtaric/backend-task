import { Controller, Get, Post, Delete, Body, UseInterceptors, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';
import { hash } from 'bcrypt';

@Controller('api')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseInterceptors(new SanitizeMongooseModelInterceptor())
    @Get('users')
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Post('user')
    async create(@Body() user: CreateUserDto): Promise<User> {
        const hashedPassword = await hash(user.password, 10);
        return this.userService.create({
            ...user,
            password: hashedPassword,
        });
    }

    @Delete('user/:id')
    delete(@Param('id') id: string): Promise<boolean> {
        return this.userService.delete(id);
    }
}
