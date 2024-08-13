# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Cria e define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Compila o TypeScript
RUN npm run build

# Comando padrão para rodar a aplicação
CMD ["npm", "start"]
