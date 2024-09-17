import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService) {}

  @Post('/createUser')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto)
    return this.userService.create(createUserDto);
  }

  @Patch('refer')
  referAUser(@Body() referDto: { ethAddressOfTheNewUser: string, referedByEthAddress: string }) {
    const { ethAddressOfTheNewUser, referedByEthAddress } = referDto;
    console.log('refered by', referedByEthAddress)
    console.log('refer krne wala', ethAddressOfTheNewUser)
    return this.userService.referAUser(ethAddressOfTheNewUser, referedByEthAddress);
  }

  @Get('calculateReward/:id')
  calculateReward(@Param('id') id: string) {
    console.log('calculateReward', id)
    return this.userService.calculateReward(id);
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
