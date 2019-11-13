# Sushi Factory

1. Entrar a MySQL
```
mysql -u root -p
```

2. Crear su usuario
```
CREATE USER 'admin_sushi'@'localhost' IDENTIFIED BY 'sOJ8f8SRMoc5vyn';
```

3. Correr script SQL (`/db/sql/DDL.sql`), solo es copiar y pegar en el CLI o cliente de MySQL

4. Usar la base de datos que acabamos de crear
```
USE `sushi_factory`;
```

5. Darle privilegios al usuario
```
GRANT ALL PRIVILEGES ON sushi_factory.* TO 'admin_sushi'@'localhost';
```

Correr el server como dev:
1. Si es la primera vez corriendo el proyecto:
```
npm i
```
2. Luego:
```
npm run react
o
npm run angular
```
