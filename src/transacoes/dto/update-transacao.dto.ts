import { PartialType } from '@nestjs/mapped-types';
import { CreateTransacaoDto } from './create-transacao.dto';

export class UpdateTransacaoDto extends PartialType(CreateTransacaoDto) {
    descricao?: string;
    data?: Date;
    planoContasId?: number;
    valor?: number;
}
