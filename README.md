# jobs-send-email

WebApp Busqueda DE OFERTAS LABORALES usando tecnicas webscraping de portales de trabajo.

Envio de Alertas al correo gmail

# Technologies used.
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "nodemailer": "^6.7.3",
    "nodemailer-express-handlebars": "^5.0.0"

# Getting Started
1. Clone repo and install npm nodejs git.
2. npm i
3. Run script:

```
  npm run dev 
  
  /api/v1/jobs
  /api/v1/getJobs

Crear un archivo .env en la raiz
```
.env
```
  HOST=http://localhost
  PORT=3000
  FROM_GMAIL=CORREO@gmail.com
  PASSWORD_GMAIL=PASSWORD
```

version npm 6.14.14

version node v14.17.5

# Entorno Local
Buscar trabajo de portales Indeed,Linkedin y GetOnboard

Ejemplos

GET http://localhost:3001/


envia un correo electronico



GET http://localhost:3001/api/v1/subscribirse?email=[CORREO]@gmail.com&subject=EnviodesdeBackend&text=testing usuario




