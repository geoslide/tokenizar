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

### Registro de usuario
**POST /api/auth/register**
Body:
```json
{
  "email": "usuario@tokeniza.org",
  "password": "123456"
}
```
Respuesta:
```json
{
  "success": true,
  "message": "Usuario registrado correctamente"
}
```

### Login de usuario
**POST /api/auth/login**
Body:
```json
{
  "email": "usuario@tokeniza.org",
  "password": "123456"
}
```
Respuesta:
```json
{
  "success": true,
  "message": "Login exitoso",
  "token": "<JWT>"
}
```

### Validación de QR (protegido)
**POST /api/qr/validate**
Headers:
```
Authorization: Bearer <JWT>
```
Body:
```json
{
  "qrData": "..."
}
```
Respuesta:
```json
{
  "success": true,
  "message": "QR válido"
}
```

## Notas

- El backend usa CORS habilitado por defecto.
- Los usuarios se almacenan en memoria (no hay base de datos real, se borra al reiniciar el servidor).
- El endpoint de validación de QR requiere autenticación JWT.
- Puedes probar los endpoints con Postman siguiendo los ejemplos de arriba.