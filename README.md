# IMPORTANTE
O uso de monorepo foi uma idea para facilitar a inicialização do projeto, porque com o uso de monorepo com docker conseguimos subir a aplicação com menos passos. </br>
Inicialmente operamos com mais de um repositório, fazendo a migração para este repositório posteriormente - mesmo assim, mantemos o histórico de commits dos repositórios anteriores.

Entretanto, é necessário dar os crédito aos repositórios iniciais, e também é interessante acessar os outros repositórios criados pelos outros integrantes da equipe:

Frontend (Leonardo Ronchini): https://github.com/leoronchini/myfinance-react </br>
Backend (William Neto): https://github.com/neto6/myfinance-nestjs-api/tree/master

---

# MyFinance
### Equipe

- Leonardo Ronchini [@leoronchini](https://github.com/leoronchini)
- William Garcia [@willgarciam](https://github.com/WillGarciaM)
- William Neto [@neto6](https://github.com/neto6)

### Motivação

Aplicação para satisfazer a entrega de Atividade Final sugerida pelo Professor Filipe Tório, na matéria de PRÁTICAS DE IMPLEMENTAÇÃO E EVOLUÇÃO DE SOFTWARE, no curso de Pós-Graduação em Engenharia de Software pela PUC - Minas.

---

## Escopo Inicial

> Vamos criar uma aplicação web para que famílias possam registrar suas receitas e despesas para análise de seus gastos e consequentemente um melhor planejamento financeiro. Esta aplicação deve permitir que o usuário monte uma espécie de Plano de Contas para categorizar todas as Transações realizadas. É importante que se tenha também relatórios de despesas por período, permitindo uma análise detalhada das finanças.
>
> Filipe Tório.

## Metodologia
### Diagrama de Arquitetura

![Diagrama de Arquitetura](readme-images/archtecture-diagram.png)
- A aplicação é versionada através de um repositório mono-repo.
- A aplicação tem seu processo de deploy baseado em Docker.
- A aplicação frotend é desenvolvida em React.
- A aplicação backend é desenvolvida em NestJS.
- O banco de dados utilizado é PostgreSQL.

---

## Como inicializar
> [!WARNING]
> Você precisará ter o Docker instalado em sua máquina.
> 
> Caso não tenha, por favor, realize a instalação: https://docs.docker.com/desktop/install/windows-install/

1. renomeie o arquivo ".env-example" como ".env"

2. Com o Docker instalado, execute o seguinte comando através do terminal na pasta raiz do projeto:
```
$ docker compose up
```

Aguarde a subida do docker e o sistema estará pronto para ser usado.


#### Após o build, o sistema estará exposto nas seguintes rotas:
```
- frontend: localhost:3000
- backend: localhost:3001
- backend/swagger: localhost:3001/api/#
- banco de dados: localhost:5432
```
> [!WARNING]
> Atente-se as portas utilizadas
> 
> Caso ocorra algum conflito com as portas, o docker irá avisar.
>
> Pare os processos que estão utilizando as mesmas portas e o problema estará resolvido.

--- 
## Screenshots
![1](readme-images/1.png)

![2](readme-images/2.png)

![3](readme-images/3.png)

![4](readme-images/4.png)

![5](readme-images/5.png)


