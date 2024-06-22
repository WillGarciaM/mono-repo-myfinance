import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanoContasModule } from './plano-contas/plano-contas.module';
import { TransacoesModule } from './transacoes/transacoes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLDATABASE,
      port: parseInt(process.env.MYSQLPORT),
      username: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PlanoContasModule,
    TransacoesModule,
  ],
})
export class AppModule {}
