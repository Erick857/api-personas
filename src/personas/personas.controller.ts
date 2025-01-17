import { Controller, Get, Post, Body } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Get()
  getAllPersonas(): string {
    return this.personasService.getAllPersonas();
  }

  @Post()
  createPersona(@Body() createPersonaDto: CreatePersonaDto): string {
    return this.personasService.createPersona(createPersonaDto);
  }
}