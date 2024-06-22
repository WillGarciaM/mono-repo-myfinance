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
        type: 'mysql',
        host: configService.get<string>('MYSQLHOST'),
        port: configService.get<number>('MYSQLPORT'),
        username: configService.get<string>('MYSQLUSER'),
        password: configService.get<string>('MYSQLPASSWORD'),
        database: configService.get<string>('MYSQLDATABASE'),
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
