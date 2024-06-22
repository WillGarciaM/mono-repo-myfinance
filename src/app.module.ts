import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanoContasModule } from './plano-contas/plano-contas.module';
import { TransacoesModule } from './transacoes/transacoes.module';
import { PlanoContas } from './plano-contas/plano-contas.entity';
import { Transacao } from './transacoes/transacao.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DBHOST'),
        port: configService.get<number>('DBPORT'),
        username: configService.get<string>('DBUSER'),
        password: configService.get<string>('DBPASSWORD'),
        database: configService.get<string>('DBDATABASE'),
        entities: [PlanoContas, Transacao],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PlanoContasModule,
    TransacoesModule,
  ],
})
export class AppModule {}
