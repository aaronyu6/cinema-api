import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { Cinema, CinemaBaseDoc } from './schemas/cinema.schema';

@Injectable()
export class CinemaService {
  constructor(@InjectModel('Cinema') private cinemaModel: Model<CinemaBaseDoc>
  ) { }

  async create(createCinemaDto: CreateCinemaDto): Promise<CinemaBaseDoc> {
    return new this.cinemaModel(createCinemaDto).save();
  }

  async findAll() {
    return this.cinemaModel.find();
  }

  async findOne(id: string) {
    //return `This action returns a #${id} cinema`;
    return await this.cinemaModel.findById(id);
  }

  async findByName(filterName: string): Promise<CinemaBaseDoc[]> {
    //let wildCardName;
    //wildCardName = "/" + filterName + "/";
    //console.log(wildCardName);
    //return wildCardName;
    //return await this.cinemaModel.find({ name: filterName });
    return await this.cinemaModel.find({ name: { $regex: filterName } });
  }

  async update(id: number, updateCinemaDto: UpdateCinemaDto) {
    return `This action updates a #${id} cinema`;
  }

  async remove(id: string) {
    return this.cinemaModel.findByIdAndRemove(id);
  }
}
