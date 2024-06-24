import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlanoContasDto {
    @ApiProperty({})
    descricao?: string;

    @ApiProperty({})
    tipo?: string;
}
