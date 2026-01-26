# Configuración de Variables de Entorno

Este proyecto utiliza variables de entorno para gestionar la seguridad (SSL) y el despliegue sin modificar el código fuente.

## Archivo de configuración (.env)
Se debe crear un archivo llamado `.env` en la raíz del proyecto (al lado del docker-compose.yml) con el siguiente formato:

| Variable | Descripción | Valor Ejemplo |
| :--- | :--- | :--- |
| `APP_PORT` | Puerto interno del contenedor | `8443` |
| `SSL_KEY` | Nombre del archivo de clave privada | `localhost+1-key.pem` |
| `SSL_CERT` | Nombre del archivo del certificado | `localhost+1.pem` |

## Configuración de Certificados
Los archivos de certificados mencionados arriba DEBEN estar ubicados en la carpeta `./certs/` para que Docker pueda montarlos correctamente.