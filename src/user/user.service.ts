import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from 'src/schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    console.log('createUserDto service', createUserDto)
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async referAUser(ethAddressOfTheNewUser: string, referedByEthAddress: string) { 

    console.log('referedByEthAddress', referedByEthAddress)
    
    // jis ne refer kya
    const userOne = await this.userModel.findOneAndUpdate({ ethAddress: referedByEthAddress }, {  $push: { referredIds: ethAddressOfTheNewUser }}).exec() 

    // jis ko refer kya
    const userTwo = await this.userModel.findOneAndUpdate({ ethAddress: ethAddressOfTheNewUser }, { $set: { referedByEthAddress } }).exec();

    return { userOne, userTwo }
  }

  // calculateBonus
  // kis kis ko refer kya unka investment add hoga aur uska 10% calculate hoga

  async calculateReward(id: string) {
    const user = await this.userModel.findById(id);
    
    console.log('user', user);
    return user;
  }
}
