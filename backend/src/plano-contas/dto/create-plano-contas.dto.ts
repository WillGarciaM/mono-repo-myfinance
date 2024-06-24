import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanoContasDto {
    @ApiProperty({})
    descricao: string;

    @ApiProperty({})
    tipo: string;
}
