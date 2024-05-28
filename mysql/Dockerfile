# Establecer la imagen base
FROM ubuntu:20.04



# Actualizar el sistema e instalar MySQL
RUN apt-get update && \
    DEBIAN_FRONTEND="noninteractive" apt-get install -y mysql-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Configurar variables de entorno para MySQL
ENV MYSQL_ROOT_PASSWORD=a9yh7bxs3I1I
ENV MYSQL_DATABASE=bugs_db
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=a9yh7bxs3I1I

# Exponer el puerto 3306 para MySQL
EXPOSE 3306

# Copia del archivo de inicialización SQL al dir de scripts del contenedor.
# Permite al contenedor de la BD ejecutar automaticamente el script al iniciarse.
COPY init.sql /docker-entrypoint-initdb.d/init.sql

# Iniciar el servicio de MySQL al ejecutar el contenedor
CMD ["mysqld", "--user=mysql", "--console"]