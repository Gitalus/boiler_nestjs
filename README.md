## Boilerplate Nestjs
```
npm i
```

#### Docker
Recordar tener corriendo docker desktop.
Ejecutar en la carpeta raiz:
```
docker-compose up -d
```

#### Conectarse a la db
La aplicación se conectará de forma automática a la base de datos, pero necesita que se cree un .env, si solo se desea conectar a la db de docker se debe copiar el contenido de .env.example y pegar en un .env en la ruta raiz. Una vez hecho eso la aplicación se conectará de inmediato

#### migraciones
Como se ve en los comandos del package.json, para crear una migración se ejecuta:
```
npm run migrations:generate -- "nombre de la migración"
```

Para ver como utilizarlas y crear las tablas, se debe crear entidades y luego al crear una migración se detectará de forma automática el cambio.
Luego de tener la migración se debe hacer:
```
npm run migrations:run
```

#### Deploy en AWS
Por el momento el deploy no funcionará, ya que la aplicación tratará de conectarse a una db que no existe en el localhost de AWS. Para que se pueda hacer el deploy se deben otorgar las variables de entorno de conexión para TypeORM.


#### Variables de entorno
Como se explicó antes, se realiza una configuración con ConfigModule para cargar las variables de entorno. La validación con Joi por el momento está vacía, con el fin de que cada equipo haga sus propias validaciones y puedan iniciar la aplicación sin problemas.
