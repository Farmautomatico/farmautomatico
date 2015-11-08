# farmautomatico
Proyecto UV

## Instalación
###App
* Descargar e instalar NodeJS
* En el directorio de la app: ````npm install````

### Base de Datos
* Descargar e instalar MySQL 2.6
* Agregar al directorio PATH la carpeta:

  C:\Program Files\MySQL\MySQL Server 5.6\bin
* Para ello, ir a:

  Panel de control>Sistema y seguridad>Sistema>Configuración avanzada del sistema>Variables de entorno

  Editar o crear en su defecto la variable PATH, y pegar:

  ;C:\Program Files\MySQL\MySQL Server 5.6\bin

  (los directorios van separados por punto y coma)
  
###Importar BD

* Se llama farmautomatico.

está en el archivo farmautomatico.sql, hay que importarla a "farmautomatico".

Para que funcione, el usuario es farmautomatico y la contraseña es farmautomatico (la misma).

Para importarla es entrando a mysql:
````  mysql -u root -p````

luego crear la base de datos:
create database farmautomatico

crear el usuario y darle privilegios:
````sql
create user 'farmautomatico'@'localhost' identified by 'farmautomatico';
grant all previleges on farmautomatico.* to 'farmautomatico'@'localhost';
flush previleges;
````
importarla (comandos en la consola):
````
cd <carpeta del respaldo>
mysql -u root -p farmautomatico < farmautomatico-archivo-respaldo.sql
````
reemplazar farmautomatico-archivo-respaldo.sql con el nombre respectivo


## Ejecutar

````
gulp
````
