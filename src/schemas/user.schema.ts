import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

@Schema({ versionKey: false })
export class User extends Document {
  //   @Prop({ unique: true, required: true })
  //   refId: string;

  //   @Prop({ required: true })
  //   name: string;

  // @Prop({ type: String, required: true, unique: true })
  // refId: string;

  @Prop({ type: String, required: false })
  referedByEthAddress: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: false })
  referredEthAddresses: [string];

  @Prop({ type: String, uniqye: true, required: true })
  ethAddress: string;

  @Prop({ type: String })
  solanaAddress: string;


}

export const UserSchema = SchemaFactory.createForClass(User);
