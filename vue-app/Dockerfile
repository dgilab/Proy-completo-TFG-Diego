# Uso de la imagen base de node.js 14 en version alpine para la construcción del contenedor
FROM node:14-alpine as build-stage

# Establezco el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia de los archivos de config de npm al directorio de trabajo
COPY package*.json ./

# Instalar las dependecias
RUN npm install

# Copia de todos los archivos del proyecto al directorio de trabajo
COPY . .

# Ejecución del script de construcción de la aplicación
RUN npm run build

# Uso de la imagen base de Apache HTTP Server 2.4 para el despliegue
FROM httpd:2.4

# Copia los archivos ya construidos "npm run build" al dir de apache
COPY --from=build-stage /app/dist /usr/local/apache2/htdocs/