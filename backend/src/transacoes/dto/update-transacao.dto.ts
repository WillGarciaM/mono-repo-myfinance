import { PartialType } from '@nestjs/mapped-types';
import { CreateTransacaoDto } from './create-transacao.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTransacaoDto extends PartialType(CreateTransacaoDto) {
    @ApiProperty({})
    descricao?: string;

    @ApiProperty({})
    data?: Date;

    @ApiProperty({})
    planoContasId?: number;

    @ApiProperty({})
    valor?: number;
}
