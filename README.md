# Proyecto TFG Diego - Sant 

Proyecto realizado para el Trabajo de Fin de Grado, haciendo uso de VUE como la aplicacion de la interfáz, NodeJS para la API, MySQL para la base de datos, y Docker para el despliegue temporal para presentación y compartido del proyecto

## Requisitos para desplegar la aplicación

> [!IMPORTANT]
> Es completamente necesario para poder desplegar la aplicación con Docker.


No es necesario instalar Docker Compose además de Docker ya que está incluido en la instalación de Docker, pero lo añado por si necesitas informarte.

- Docker: [Instrucciones de instalación](https://docs.docker.com/get-docker/)
- Docker Compose: [Instrucciones de instalación](https://docs.docker.com/compose/install/)

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/dgilab/Proy-completo-TFG-Diego.git
```

2. Accede a la Raíz del proyecto

```bash
cd proyecto-completo-tfg
```

## Configuración

No es necesaria ninguna configuración ya que los datos de pruebas son públicos, tanto en el .env de node, como en las configuraciones de los contenedores dentro del compose.

Igualmente tiene el archivo de ejemplo dentro de node-api llamado `.env.example`.

Si lo necesita puede renombrar el archivo quitandole el `.example`.

## Uso y Despliegue

Sigue estos pasos para ejecutar la aplicación 

1. Desde la raíz del proyecto, levanta los contenedores Docker utilizando Docker Compose en el Terminal:

```bash
docker-compose up --build
```

Espera a que los contenedores se inicien correctamente.

2. Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación desde tu navegador web:

- **Frontend:** [http://localhost:8080](http://localhost:8080)
- **Backend:** [http://localhost:3000](http://localhost:3000)

## Detener la aplicación

Para detener la aplicación y apagar los contenedores Docker. 

- Utiliza el atajo de teclado `Ctrl + c` 1 vez para detenerlo de forma recomendada. 
- Utiliza el atajo de teclado `Ctrl + c` + `Ctrl + c` dos veces para detenerlo forzosamente. ¡No es recomendable!
- También puedes usar Docker Desktop para detener el proyecto.

> [!WARNING]
> Hacer uso de la fuerza bruta al detener el contenedor, puede ocasionar errores.

