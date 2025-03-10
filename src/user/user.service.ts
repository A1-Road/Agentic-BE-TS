import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument, Wallet } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById({ _id: id });
  }

  async create(
    username: string,
    email: string,
    hashedPassword: string,
  ): Promise<User> {
    // email must be unique
    const user = await this.findByEmail(email);
    if (user) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel({
      username,
      email,
      hashedPassword,
    });
    return createdUser.save();
  }

  async addWallet(id: string, wallet: Wallet): Promise<User | null> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user.wallets.push(wallet);
    return user.save();
  }
}
