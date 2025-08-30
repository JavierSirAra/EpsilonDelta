# Despliegue en Netlify

## Configuración Automática

Este proyecto ya está configurado para Netlify con el archivo `netlify.toml`. Solo necesitas conectar tu repositorio.

## Pasos para Desplegar

### 1. Conectar el Repositorio

1. Ve a [Netlify](https://netlify.com) y crea una cuenta
2. Haz clic en "New site from Git"
3. Conecta tu proveedor de Git (GitHub, GitLab, Bitbucket)
4. Selecciona tu repositorio `epsilon-delta-blog`

### 2. Configuración del Build

Netlify detectará automáticamente que es un proyecto Hugo y usará esta configuración:

- **Build command**: `npm run build:production`
- **Publish directory**: `public`
- **Node version**: `18` (o la versión que prefieras)

### 3. Variables de Entorno (Opcional)

Puedes añadir estas variables en Settings > Build & Deploy > Environment:

```
HUGO_VERSION = 0.120.4
HUGO_ENV = production
HUGO_ENABLEGITINFO = true
```

### 4. Desplegar

1. Haz clic en "Deploy site"
2. Espera a que termine el build
3. Tu sitio estará disponible en `https://tu-sitio.netlify.app`

## Configuración del Dominio

### Dominio Personalizado

1. Ve a Settings > Domain management
2. Haz clic en "Add custom domain"
3. Sigue las instrucciones para configurar DNS

### Subdominio de Netlify

Puedes cambiar el subdominio en Settings > Domain management > Change site name.

## Configuración de Formularios

Si quieres añadir formularios de contacto:

1. Añade el atributo `netlify` a tu formulario HTML
2. Netlify procesará automáticamente los envíos
3. Los resultados aparecerán en la pestaña "Forms" de tu dashboard

## Configuración de Redirecciones

El archivo `netlify.toml` ya incluye redirecciones básicas. Si necesitas más:

```toml
[[redirects]]
  from = "/old-page"
  to = "/new-page"
  status = 301

[[redirects]]
  from = "/api/*"
  to = "https://api.tu-sitio.com/:splat"
  status = 200
```

## Configuración de Headers

Los headers de seguridad ya están configurados en `netlify.toml`:

- **X-Frame-Options**: Previene clickjacking
- **X-XSS-Protection**: Protección básica XSS
- **X-Content-Type-Options**: Previene MIME sniffing
- **Referrer-Policy**: Controla información del referrer

## Configuración de Cache

Los assets estáticos (CSS, JS, imágenes) tienen cache de 1 año para mejor rendimiento.

## Despliegue Automático

Cada vez que hagas push a tu rama principal, Netlify desplegará automáticamente.

### Ramas de Desarrollo

Para desplegar ramas de desarrollo:

1. Ve a Settings > Build & Deploy > Continuous Deployment
2. Añade tu rama de desarrollo
3. Configura el subdominio si quieres

## Monitoreo y Analytics

### Build Logs

- Ve a la pestaña "Deploys" para ver logs de build
- Los logs muestran errores y advertencias
- Puedes hacer rollback a versiones anteriores

### Analytics

Netlify proporciona analytics básicos gratuitos:
- Visitas únicas
- Páginas más populares
- Referrers
- Dispositivos y navegadores

## Solución de Problemas

### Build Falla

1. **Error de Hugo**: Verifica que `HUGO_VERSION` sea correcto
2. **Error de Node.js**: Verifica que `package.json` tenga las dependencias correctas
3. **Error de Tailwind**: Ejecuta `npm run tailwind:build` localmente

### Error 404

1. Verifica que `baseURL` en `hugo.toml` sea correcto
2. Asegúrate de que las rutas en `netlify.toml` estén bien configuradas
3. Verifica que no haya conflictos con el tema

### CSS no se Carga

1. Verifica que Tailwind CSS se haya construido
2. Comprueba que `main.min.css` exista en `public/css/`
3. Verifica que no haya conflictos de rutas

### LaTeX no Funciona

1. Verifica que `math: true` esté en el front matter
2. Comprueba que KaTeX se cargue en el navegador
3. Verifica que no haya bloqueadores de scripts

## Optimización del Rendimiento

### Compresión

Netlify comprime automáticamente:
- HTML, CSS, JavaScript
- Imágenes (si usas Netlify Image Optimization)

### CDN

Netlify distribuye tu contenido globalmente para mejor velocidad.

### Minificación

El comando `npm run build:production` minifica automáticamente:
- HTML
- CSS
- JavaScript

## Seguridad

### HTTPS

Netlify proporciona HTTPS automático con Let's Encrypt.

### Headers de Seguridad

Los headers ya están configurados en `netlify.toml`.

### Protección DDoS

Netlify incluye protección DDoS básica.

## Backup y Recuperación

### Versionado

- Cada deploy crea una versión nueva
- Puedes hacer rollback a cualquier versión
- Los assets se versionan automáticamente

### Repositorio

- Tu código está seguro en Git
- Puedes restaurar desde cualquier commit
- Netlify se sincroniza automáticamente

## Costos

### Plan Gratuito

- 100GB de ancho de banda por mes
- Builds ilimitados
- Dominios personalizados
- HTTPS automático

### Planes de Pago

- Más ancho de banda
- Builds más rápidos
- Soporte prioritario
- Funciones avanzadas

## Recursos Adicionales

- [Documentación de Netlify](https://docs.netlify.com/)
- [Guía de Hugo en Netlify](https://docs.netlify.com/integrations/frameworks/hugo/)
- [Configuración de Netlify](https://docs.netlify.com/configure/overview/)
- [Soporte de Netlify](https://www.netlify.com/support/)

