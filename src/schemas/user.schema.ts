import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ExcludeProperty } from 'nestjs-mongoose-exclude';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    @ExcludeProperty()
    password: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    mobileNumber: string;

    @Prop({ required: true })
    socialSecurityNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
