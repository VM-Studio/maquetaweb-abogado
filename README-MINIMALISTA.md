# AUGUSTO Filí & Asociados - Sitio Web Minimalista

Sitio web profesional con diseño minimalista y elegante para el estudio jurídico AUGUSTO Filí & Asociados.

## 🎨 Diseño

Diseño inspirado en **vmstudioweb.com** con enfoque minimalista:

- Tipografía elegante y espaciado generoso
- Paleta de colores neutral (grises y negro)
- Animaciones sutiles y transiciones suaves
- Layout limpio y moderno

## 📄 Estructura de Páginas

El sitio está organizado en páginas separadas:

### 1. **Inicio** (`/`)

- Hero principal minimalista
- Estadísticas clave
- CTAs principales

### 2. **Áreas de Práctica** (`/areas-de-practica`)

- 6 especialidades legales en grid
- Derecho Civil, Comercial, Laboral, Inmobiliario, Familia, Penal
- Diseño en cuadrícula elegante

### 3. **Nosotros** (`/nosotros`)

- Valores del estudio
- Metodología de trabajo
- Estadísticas y experiencia
- Proceso en 4 pasos

### 4. **Contacto** (`/contacto`)

- Formulario minimalista
- Información de contacto
- Diseño a dos columnas

## 🎯 Características de Diseño

### Tipografía

- **Fuente:** Inter (Google Fonts)
- **Pesos:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold)
- **Tracking:** Amplio para títulos, normal para texto
- **Tamaños:** Jerarquía clara y escalable

### Colores

```
Primarios:
- Blanco: #ffffff
- Negro: #111827 (gray-900)
- Gris oscuro: #4b5563 (gray-600)
- Gris medio: #9ca3af (gray-400)
- Gris claro: #f3f4f6 (gray-100)
```

### Espaciado

- Secciones con padding generoso (py-24, py-32)
- Margen entre elementos amplio
- Diseño con mucho "aire" (whitespace)

### Animaciones

- Transiciones suaves (duration-300)
- Hover states sutiles
- Sin animaciones exageradas

## 🚀 Instalación

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## 📁 Estructura

```
app/
├── page.tsx                    # Inicio
├── areas-de-practica/
│   └── page.tsx               # Áreas de Práctica
├── nosotros/
│   └── page.tsx               # Nosotros
├── contacto/
│   └── page.tsx               # Contacto
├── components/
│   ├── Header.tsx             # Navegación
│   ├── Hero.tsx               # Hero minimalista
│   └── Footer.tsx             # Footer simple
├── globals.css                # Estilos globales
└── layout.tsx                 # Layout principal
```

## 🎨 Componentes Clave

### Header

- Navegación fija con backdrop blur
- Logo minimalista
- Links a páginas principales
- Indicador de página activa

### Hero

- Tipografía grande y elegante
- Espaciado generoso
- CTAs con hover effects sutiles
- Estadísticas en grid

### Footer

- Layout en 4 columnas
- Links mínimos y esenciales
- Redes sociales
- Copyright simple

## 🔧 Personalización

### Cambiar Colores

Editar en `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #111827;
}
```

### Modificar Contenido

- **Hero:** `app/components/Hero.tsx`
- **Áreas:** `app/areas-de-practica/page.tsx`
- **Nosotros:** `app/nosotros/page.tsx`
- **Contacto:** `app/contacto/page.tsx`

### Ajustar Tipografía

Editar en `app/layout.tsx`:

```tsx
const inter = Inter({
  weight: ["300", "400", "500", "600"],
  // ...
});
```

## 📱 Responsive

- **Mobile First:** Diseñado primero para móvil
- **Breakpoints:** sm, md, lg, xl
- **Grid adaptativo:** 1 columna en móvil, múltiples en desktop
- **Navegación móvil:** Menú hamburguesa

## ✨ Características Minimalistas

✅ Sin elementos decorativos innecesarios
✅ Tipografía como elemento principal
✅ Espaciado generoso
✅ Paleta monocromática
✅ Animaciones sutiles
✅ Navegación clara
✅ Jerarquía visual clara
✅ Contenido priorizado

## 🌐 Deploy

### Vercel (Recomendado)

```bash
vercel deploy
```

### Otros

El sitio es una aplicación Next.js estándar y puede deployarse en:

- Vercel
- Netlify
- AWS Amplify
- Cualquier hosting con soporte Node.js

## 📊 Performance

- Fuentes optimizadas con `next/font`
- Imágenes con `next/image`
- Código dividido por ruta
- CSS optimizado con Tailwind

## 🎓 Stack Tecnológico

- **Framework:** Next.js 16
- **UI:** React 19
- **Estilos:** Tailwind CSS 4
- **Tipado:** TypeScript
- **Fuentes:** Inter via Google Fonts

## 📝 SEO

- Metadata configurada por página
- HTML semántico
- URLs amigables
- Textos descriptivos
- Alt tags en imágenes

---

© 2025 AUGUSTO Filí & Asociados
