import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async delete(id: string): Promise<boolean> {
        const filter = { _id: id };
        const deleted = await this.userModel.deleteOne(filter);

        return deleted.acknowledged;
    }
}
