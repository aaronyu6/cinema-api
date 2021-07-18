import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Controller('cinema')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) { }

  @Post()
  create(@Body() createCinemaDto: CreateCinemaDto) {
    return this.cinemaService.create(createCinemaDto);
  }

  @Get()
  findAll() {
    return this.cinemaService.findAll();
  }

  /** sample url: http://localhost:3000/cinema/name/shaw */
  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.cinemaService.findByName(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cinemaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCinemaDto: UpdateCinemaDto) {
    return this.cinemaService.update(+id, updateCinemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cinemaService.remove(id);
  }
}
