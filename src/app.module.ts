import { Module } from '@nestjs/common';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [PersonasModule],  
  controllers: [],
  providers: [],
})
export class AppModule {}
