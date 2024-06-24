import { ApiProperty } from '@nestjs/swagger';

export class CreateTransacaoDto {
    @ApiProperty({})
    descricao: string;

    data: Date;

    @ApiProperty({})
    planoContasId: number;

    @ApiProperty({})
    valor: number;
}
