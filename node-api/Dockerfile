# Uso de la imagen base de node.js 14 para l aconstrucción del contenedor
FROM node:14

# Establezco el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia de los archivos de configuracion/dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copia de todos los archivos del proyecto al directorio del contenedor
COPY . .

# copia de los .env al directorio del contenedor
COPY .env .env

# Exponer el puerto 3000 para la api
EXPOSE 3000

# Comando de ejecución para levantaar la api
CMD ["node", "app.js"]