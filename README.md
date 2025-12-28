# AUGUSTO Filí & Asociados - Sitio Web

Sitio web profesional para el estudio jurídico AUGUSTO Filí & Asociados, desarrollado con Next.js 14, React 19 y Tailwind CSS 4.

## 🎯 Características

- **Diseño Moderno y Profesional**: Inspirado en las mejores prácticas de diseño web para estudios jurídicos
- **Totalmente Responsivo**: Adaptado para dispositivos móviles, tablets y escritorio
- **Optimizado para SEO**: Metadata configurada para mejor posicionamiento en buscadores
- **Animaciones Suaves**: Transiciones y efectos visuales profesionales
- **Formulario de Contacto**: Sistema de consulta integrado
- **6 Áreas de Práctica**: Derecho Civil, Comercial, Laboral, Inmobiliario, Familia y Penal

## 🚀 Tecnologías

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Estilos**: Tailwind CSS 4
- **TypeScript**: 5.x
- **Fuentes**: Inter (Google Fonts)

## 📋 Secciones del Sitio

1. **Header/Navegación**: Menú fijo con logo y navegación principal
2. **Hero Section**: Presentación principal con llamados a la acción
3. **Áreas de Práctica**: Grid con las 6 especialidades legales
4. **Metodología**: Proceso de trabajo en 4 pasos
5. **Por qué elegirnos**: Comparativa y ventajas diferenciales
6. **FAQ**: Preguntas frecuentes
7. **Contacto**: Formulario y datos de contacto
8. **Footer**: Links, redes sociales y información legal

## 🛠️ Instalación y Desarrollo

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor de desarrollo:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
maquetaweb-abogado/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Methodology.tsx
│   │   ├── WhyUs.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

## 🎨 Personalización

### Colores Principales

- **Azul Principal**: `#2563eb` (blue-600)
- **Azul Hover**: `#1d4ed8` (blue-700)
- **Fondo**: Blanco y grises suaves

### Fuentes

- **Sans-serif**: Inter (Variable)

## 📝 Contenido

El sitio incluye:

- Información completa sobre las áreas de práctica legal
- Proceso de trabajo detallado
- FAQs sobre servicios legales
- Formulario de contacto funcional
- Información de contacto completa

## 🔧 Configuración Adicional

Para personalizar el contenido:

1. **Información de contacto**: Editar `/app/components/Contact.tsx`
2. **Áreas de práctica**: Editar `/app/components/Services.tsx`
3. **Preguntas frecuentes**: Editar `/app/components/FAQ.tsx`
4. **Metadata SEO**: Editar `/app/layout.tsx`

## 📱 Redes Sociales

El sitio incluye enlaces para:

- LinkedIn
- Facebook
- Instagram

Actualizar los links en `/app/components/Footer.tsx`

## 🌐 Deploy

Recomendado: [Vercel](https://vercel.com)

```bash
vercel deploy
```

---

© 2025 AUGUSTO Filí & Asociados. Todos los derechos reservados.
