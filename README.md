# Tokenizar Backend

## Instalación

```sh
npm install
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores necesarios.

## Ejecución

```sh
npm start
```
o
```sh
node src/index.js
```

## Endpoints principales

- **POST /api/auth/login**  
  Body: `{ "email": "demo@tokeniza.org", "password": "123456" }`  
  Respuesta: `{ success, message, token }`

- **POST /api/auth/register**  
  Body: `{ "email": "...", "password": "..." }`  
  Respuesta: `{ success, message }`

- **POST /api/qr/validate**  
  Body: `{ "qrData": "..." }`  
  Respuesta: `{ success, message }`

## Notas

- El backend usa CORS habilitado por defecto.
- Los datos de usuario y QR son simulados, no hay base de datos real.