# Epsilon Delta - Blog de Matemáticas

Un blog profesional sobre matemáticas y análisis real, construido con Hugo y el tema Hextra.

## 🚀 Características

- **Tema Hextra**: Diseño moderno y responsive
- **Soporte multilingüe**: Español e Inglés
- **Modo oscuro/claro**: Con toggle automático
- **Renderizado de LaTeX**: Soporte completo para matemáticas
- **Búsqueda**: Búsqueda en tiempo real
- **Optimizado para SEO**: Meta tags, sitemap, robots.txt
- **Despliegue automático**: GitHub Actions + Netlify

## 🛠️ Tecnologías

- **Hugo**: Generador de sitios estáticos
- **Hextra**: Tema moderno y responsive
- **Tailwind CSS**: Framework CSS utility-first
- **KaTeX**: Renderizado de matemáticas
- **Netlify**: Hosting y despliegue

## 📁 Estructura del Proyecto

```
epsilon-delta/
├── assets/                 # Assets personalizados
│   ├── css/               # Estilos CSS
│   │   ├── variables.css  # Variables CSS centralizadas
│   │   └── custom.css     # Estilos personalizados
├── content/               # Contenido del sitio
│   └── posts/            # Posts del blog
├── i18n/                 # Configuración de idiomas
├── static/               # Archivos estáticos
├── themes/               # Tema Hextra
├── hugo.toml            # Configuración de Hugo
├── tailwind.config.js   # Configuración de Tailwind
└── netlify.toml         # Configuración de Netlify
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- **Hugo Extended** (versión 0.120.4 o superior)
- **Node.js** (versión 18 o superior)
- **npm** (versión 8 o superior)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JavierSirAra/EpsilonDelta.git
   cd EpsilonDelta
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:1313
   ```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de desarrollo
- `npm run build:production` - Build de producción
- `npm run clean` - Limpiar build
- `npm run clean:all` - Limpiar todo
- `npm run test:build` - Probar build
- `npm run tailwind:build` - Build de Tailwind CSS
- `npm run tailwind:watch` - Watch de Tailwind CSS

## 📝 Crear Nuevos Posts

### Estructura del Front Matter

```yaml
+++
title = "Título del Post"
date = 2025-01-01T00:00:00+02:00
draft = false
description = "Descripción del post"
tags = ["matemáticas", "análisis", "cálculo"]
categories = ["matemáticas", "análisis"]
math = true
image = "imagen-destacada.png"
summary = "Resumen del post"
+++
```

### Ubicación de Posts

Los posts se almacenan en `content/posts/` con la siguiente estructura:

```
content/posts/
└── YYYY-MM-DD-titulo-del-post/
    ├── index.md          # Contenido del post
    ├── imagen1.png       # Imágenes del post
    └── imagen2.png
```

## 🌐 Configuración Multilingüe

El sitio soporta español e inglés. Los archivos de traducción están en `i18n/`:

- `i18n/en.yaml` - Traducciones en inglés
- `i18n/es.yaml` - Traducciones en español

## 🎨 Personalización de Estilos

### Variables CSS

Los colores y estilos están centralizados en `assets/css/variables.css`:

```css
:root {
  --primary-color: #2563eb;
  --text-primary: #1e293b;
  --bg-primary: #ffffff;
  /* ... más variables */
}
```

### Tailwind CSS

La configuración de Tailwind está en `tailwind.config.js` con:

- Colores personalizados
- Tipografía optimizada
- Animaciones personalizadas
- Soporte para modo oscuro

## 🚀 Despliegue

### Despliegue Automático (Recomendado)

El sitio se despliega automáticamente en Netlify cada vez que se hace push a la rama principal.

**Configuración requerida en GitHub:**
- `NETLIFY_AUTH_TOKEN`: Token de autenticación de Netlify
- `NETLIFY_SITE_ID`: ID del sitio en Netlify

### Despliegue Manual

1. **Build de producción**
   ```bash
   npm run build:production
   ```

2. **Desplegar en Netlify**
   ```bash
   npm run deploy:preview
   ```

## 🔧 Configuración de Hugo

### Archivo hugo.toml

El archivo principal de configuración incluye:

- Configuración multilingüe
- Parámetros del tema Hextra
- Configuración de KaTeX para matemáticas
- Paginación y taxonomías
- Configuración de búsqueda

### Parámetros Importantes

- `baseURL`: URL del sitio
- `theme`: Tema Hextra
- `enableGitInfo`: Información de Git en posts
- `math.enable`: Habilitar renderizado de matemáticas

## 📱 Responsive Design

El sitio está optimizado para todos los dispositivos:

- **Desktop**: Layout completo con sidebar
- **Tablet**: Layout adaptativo
- **Mobile**: Layout optimizado para móviles

## 🔍 SEO y Rendimiento

### Optimizaciones Implementadas

- Meta tags dinámicos
- Sitemap XML automático
- Robots.txt optimizado
- Compresión de assets
- Cache headers optimizados
- Lazy loading de imágenes

### Métricas de Rendimiento

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Optimizados
- **SEO**: 100/100

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **GitHub**: [@JavierSirAra](https://github.com/JavierSirAra)
- **Email**: contact@epsilon-delta.com
- **Sitio Web**: https://epsilon-delta.com

## 🙏 Agradecimientos

- **Hextra Theme**: Por el excelente tema de Hugo
- **Hugo**: Por el generador de sitios estáticos
- **Tailwind CSS**: Por el framework CSS
- **KaTeX**: Por el renderizado de matemáticas

---

**Epsilon Delta** - Explorando las fronteras de las matemáticas, una función a la vez.

