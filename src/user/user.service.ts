import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }

  async create(
    username: string,
    email: string,
    hashedPassword: string,
  ): Promise<User> {
    // email must be unique
    const user = await this.findOne(email);
    if (user) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel({
      username,
      email,
      hashedPassword,
      wallets: [],
    });
    return createdUser.save();
  }
}
