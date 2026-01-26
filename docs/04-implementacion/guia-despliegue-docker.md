```md
# Guía de Despliegue con Docker

Este documento describe los pasos necesarios para poner en marcha el **backend** en cualquier entorno compatible con **Docker**.

---

## Estructura de Carpetas

La raíz del proyecto debe tener la siguiente estructura:

```

/
├── Backend/        # Código fuente
├── certs/          # Certificados SSL
└── docker-compose.yml

````

---

## Pasos para el Despliegue

### 1. Construir la imagen

Desde la raíz del proyecto, ejecutar:

```bash
docker-compose build
````

---

### 2. Levantar los servicios

Para iniciar el servidor en segundo plano:

```bash
docker-compose up -d
```

---

### 3. Verificar logs

Para comprobar que el servicio inició correctamente y sin errores:

```bash
docker-compose logs -f api
```

---

## Acceso al Servicio

El backend quedará disponible en:

```
https://localhost/api/v1/convert/all
```

```
```