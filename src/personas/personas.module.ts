import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { UpdatePersonaDto } from '../personas/dto/update-persona.dto';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}