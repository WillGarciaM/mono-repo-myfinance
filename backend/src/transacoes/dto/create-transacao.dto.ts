import { ApiProperty } from '@nestjs/swagger';

export class CreateTransacaoDto {
    @ApiProperty({})
    descricao: string;

    @ApiProperty({})
    data: Date;

    @ApiProperty({})
    planoContasId: number;

    @ApiProperty({})
    valor: number;
}
