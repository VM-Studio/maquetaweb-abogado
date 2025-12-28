# Guía de Deployment

## 🚀 Deploy en Vercel (Recomendado)

Vercel es la plataforma oficial de Next.js y ofrece deploy automático, SSL gratis y CDN global.

### Opción 1: Deploy desde GitHub

1. **Subir el código a GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: AUGUSTO Filí & Asociados website"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

2. **Conectar con Vercel:**

   - Ve a [vercel.com](https://vercel.com)
   - Crea una cuenta o inicia sesión
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - Configura las variables de entorno (si las necesitás)
   - Click en "Deploy"

3. **Listo!** Tu sitio estará en: `https://tu-proyecto.vercel.app`

### Opción 2: Deploy directo con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configurar Dominio Personalizado

1. En Vercel Dashboard, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio: `augustofili.com`
4. Configura los registros DNS según las instrucciones

## 🌐 Deploy en Netlify

### Opción 1: Deploy desde Git

1. Subir código a GitHub (ver arriba)
2. Ve a [netlify.com](https://netlify.com)
3. "Add new site" → "Import an existing project"
4. Conecta GitHub y selecciona el repo
5. Build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```
6. Deploy!

### Opción 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 📦 Otras Opciones de Deployment

### Deploy en servidor VPS (DigitalOcean, Linode, etc)

1. **Conectar por SSH:**

   ```bash
   ssh usuario@tu-servidor-ip
   ```

2. **Instalar Node.js:**

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clonar repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

4. **Instalar dependencias y build:**

   ```bash
   npm install
   npm run build
   ```

5. **Instalar PM2 (Process Manager):**

   ```bash
   npm install -g pm2
   pm2 start npm --name "augustofili-web" -- start
   pm2 save
   pm2 startup
   ```

6. **Configurar Nginx como reverse proxy:**

   ```nginx
   server {
       listen 80;
       server_name tudominio.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Configurar SSL con Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d tudominio.com
   ```

## ⚙️ Variables de Entorno

Antes de deployar, configurá las variables de entorno necesarias:

### En Vercel:

1. Project Settings → Environment Variables
2. Agregar cada variable del archivo `.env.example`

### En Netlify:

1. Site Settings → Build & deploy → Environment
2. Agregar variables

### Ejemplo:

```env
NEXT_PUBLIC_SITE_NAME=AUGUSTO Filí & Asociados
NEXT_PUBLIC_PHONE=+54 9 11 1234-5678
NEXT_PUBLIC_EMAIL=contacto@augustofili.com
EMAIL_API_KEY=tu-api-key
```

## 🔍 Verificación Post-Deploy

Después del deploy, verificá:

- [ ] Sitio carga correctamente
- [ ] Todas las secciones son visibles
- [ ] Navegación funciona (anclas)
- [ ] Formulario de contacto funciona
- [ ] Responsive en mobile
- [ ] SSL está activo (HTTPS)
- [ ] Meta tags correctos (inspeccionar con DevTools)
- [ ] Performance (Google PageSpeed Insights)

## 🛠️ Optimizaciones para Producción

### 1. Configurar next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de imágenes
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Comprimir recursos
  compress: true,

  // Headers de seguridad
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 2. Agregar robots.txt

Crear `public/robots.txt`:

```txt
User-agent: *
Allow: /
Sitemap: https://tudominio.com/sitemap.xml
```

### 3. Agregar sitemap.xml

Crear `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tudominio.com</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📊 Monitoreo

### Google Analytics

1. Crear cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtener ID de medición (G-XXXXXXXXXX)
3. Instalar:
   ```bash
   npm install @next/third-parties
   ```
4. Agregar en `app/layout.tsx`:

   ```tsx
   import { GoogleAnalytics } from "@next/third-parties/google";

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>{children}</body>
         <GoogleAnalytics gaId="G-XXXXXXXXXX" />
       </html>
     );
   }
   ```

### Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu propiedad
3. Verifica ownership
4. Envía el sitemap

## 🔄 Actualización Continua

### Workflow recomendado:

1. **Desarrollo local:**

   ```bash
   git checkout -b feature/nueva-funcionalidad
   # hacer cambios
   git add .
   git commit -m "Descripción"
   git push origin feature/nueva-funcionalidad
   ```

2. **Pull Request en GitHub**
3. **Preview deployment automático en Vercel**
4. **Merge a main → Deploy automático a producción**

## 📱 PWA (Opcional)

Para convertir en Progressive Web App:

```bash
npm install next-pwa
```

Configurar en `next.config.ts`:

```typescript
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // tu config
});
```

## 🎯 Checklist Final

Antes de considerar el deploy completo:

- [ ] Código subido a Git
- [ ] Variables de entorno configuradas
- [ ] Dominio apuntando correctamente
- [ ] SSL activo
- [ ] Google Analytics configurado
- [ ] Google Search Console configurado
- [ ] Sitemap enviado
- [ ] robots.txt configurado
- [ ] Formulario de contacto testeado
- [ ] Performance > 90 en Lighthouse
- [ ] Responsive testeado en dispositivos reales
- [ ] Redes sociales configuradas
- [ ] Información de contacto verificada

## 🆘 Troubleshooting

### Build falla en Vercel:

```bash
# Verificar localmente
npm run build
# Si funciona local pero falla en Vercel, revisar:
# - Node version
# - Variables de entorno
# - Dependencias en package.json
```

### Página en blanco después del deploy:

- Verificar errores en la consola del navegador
- Revisar logs en Vercel/Netlify
- Verificar que todas las rutas sean correctas

### Imágenes no cargan:

- Verificar que estén en `/public`
- Usar rutas absolutas desde la raíz: `/imagen.jpg`

---

**¡Felicitaciones!** Tu sitio está listo para producción 🎉

Para soporte: consultar documentación de [Next.js](https://nextjs.org/docs) y [Vercel](https://vercel.com/docs)
