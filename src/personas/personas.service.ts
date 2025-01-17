import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';

@Injectable()
export class PersonasService {
  private personas = []; 

  getAllPersonas(): string {
    return JSON.stringify(this.personas);
  }

  createPersona(createPersonaDto: CreatePersonaDto): string {
    const newPersona = { ...createPersonaDto, id: this.personas.length + 1 };
    this.personas.push(newPersona);
    return `Persona creada: ${JSON.stringify(newPersona)}`;
  }
}