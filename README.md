# perithus

Desafio para vaga de Desenvolvedor Junior Node.JS

O projeto consiste em uma API desenvolvida em Node.JS vinculado ao banco de dados não relacional MongoDB.

A API seria um gerenciador para aluguel de carros, permitindo incluir, listar, atualizar e deletar registro de veiculos.

A API ainda esta em fase de desenvolvimento.

####################################################################################################

Para rodar aplicação:

1 - Copie todos os arquivos que estão no repositório em uma pasta destinada somente a eles; 
2 - Instale o gerenciador de pacotes Yarn;
3 - Na pasta do projeto, no Terminal(Linux) ou CMD (Windows) digite "yarn init -y" para configurar a pasta, e assim que tudo estiver pronto, um arquivo chamado "package.json" irá aparecer;
4 - Ainda no Terminal ou CMD digite "yarn add express mongoose multer cors" para instalar as bibliotecas necesarias para rodar a aplicação;
5 - Em seguida digite "yarn add nodemon sucrase -D" para instalar mais duas bibliotecas como dependencias de desenvolvimento;
6 - Para rodar a API digite o comando no Terminal ou CMD "yarn dev";

###################################################################################################

URL para checar a API:

Para criar um usuario e um id para esse usuario: http://localhost:3333/sessions (POST)
Para cadastrar um veiculo: http://localhost:3333/cars (POST)
Para visualizar o veiculo cadastrado: http://localhost:3333/cars (GET)
Para atualizar o registro de um veiculo: http://localhost:3333/cars/:car_id (UPDATE)
Para deletar um veiculo cadastrado: http://localhost:3333/cars (DELETE)
Para ver todos os veiculos cadastrados: http://localhost:3333/dashboard (GET)
Para fazer alugar um veiculo: http://localhost:3333/cars/:car_id/rent (POST)
