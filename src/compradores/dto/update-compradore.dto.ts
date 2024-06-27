import { PartialType } from '@nestjs/swagger';
import { CreateCompradoreDto } from './create-compradore.dto';

export class UpdateCompradoreDto extends PartialType(CreateCompradoreDto) {}
