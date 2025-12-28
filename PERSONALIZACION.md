# Guía de Personalización - AUGUSTO Filí & Asociados

## 🎨 Paleta de Colores

La paleta de colores está basada en tonos azules profesionales que transmiten confianza y seriedad:

- **Azul Principal**: `#2563eb` (blue-600) - Botones, enlaces, acentos
- **Azul Oscuro**: `#1d4ed8` (blue-700) - Hover estados
- **Azul Claro**: `#3b82f6` (blue-500) - Fondos suaves
- **Gris Oscuro**: `#111827` (gray-900) - Texto principal
- **Gris Medio**: `#6b7280` (gray-600) - Texto secundario
- **Gris Claro**: `#f9fafb` (gray-50) - Fondos

## 📝 Cómo Modificar el Contenido

### 1. Información del Estudio

**Logo y Nombre** (`app/components/Header.tsx` y `Footer.tsx`):

```tsx
<span className="text-2xl font-bold text-gray-900">
  AUGUSTO <span className="text-blue-600">Filí</span>
</span>
```

### 2. Hero Section (`app/components/Hero.tsx`)

**Título Principal**:

```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold...">
  Protegemos tus derechos con experiencia y dedicación
</h1>
```

**Estadísticas**:

- Años de Experiencia: Línea 47
- Casos Exitosos: Línea 51
- Clientes Satisfechos: Línea 55

### 3. Áreas de Práctica (`app/components/Services.tsx`)

Modificar el array `services` (línea 3) para agregar/editar áreas:

```tsx
{
  icon: '⚖️',
  title: 'Nueva Área',
  description: 'Descripción detallada...',
  features: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
}
```

### 4. Metodología (`app/components/Methodology.tsx`)

Editar el array `steps` para modificar el proceso de trabajo:

```tsx
{
  number: '01',
  title: 'Paso 1',
  description: 'Descripción del paso...',
  time: 'TIEMPO ESTIMADO'
}
```

### 5. Comparativa (`app/components/WhyUs.tsx`)

**Competencia** (array `competitors`):

```tsx
{ feature: 'Desventaja competencia', hasIt: false }
```

**Ventajas propias** (array `ourFeatures`):

```tsx
{ feature: 'Tu ventaja diferencial', icon: '✓' }
```

### 6. FAQ (`app/components/FAQ.tsx`)

Agregar/editar preguntas en el array `faqs`:

```tsx
{
  question: '¿Tu pregunta?',
  answer: 'Respuesta detallada...'
}
```

### 7. Información de Contacto (`app/components/Contact.tsx`)

**Teléfono** (línea 129):

```tsx
<a href="tel:+5491112345678">+54 9 11 1234-5678</a>
```

**Email** (línea 142):

```tsx
<a href="mailto:contacto@augustofili.com">contacto@augustofili.com</a>
```

**Dirección** (línea 155):

```tsx
<p className="text-gray-600">
  Av. Corrientes 1234, Piso 5<br />
  Ciudad Autónoma de Buenos Aires
  <br />
  Argentina
</p>
```

**WhatsApp** (línea 169):

```tsx
<a href="https://wa.me/5491112345678">Chatear ahora</a>
```

## 🔧 Configuración Técnica

### Metadata SEO (`app/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: "Tu Título | Subtítulo",
  description: "Descripción optimizada para SEO...",
  keywords: "palabra1, palabra2, palabra3",
};
```

### Opciones de Servicio en Formulario (`app/components/Contact.tsx`)

Editar las opciones del select (línea 129):

```tsx
<option value="nueva-area">Nueva Área de Derecho</option>
```

## 🌐 Redes Sociales

### Footer (`app/components/Footer.tsx`)

Actualizar los enlaces de redes sociales (líneas 26-68):

```tsx
<a href="https://linkedin.com/tu-perfil" target="_blank">
<a href="https://facebook.com/tu-pagina" target="_blank">
<a href="https://instagram.com/tu-cuenta" target="_blank">
```

## 🎯 Llamados a la Acción (CTAs)

Los CTAs principales están distribuidos en:

1. **Header**: Botón "Consulta Gratuita"
2. **Hero**: "Agendar Consulta Gratuita" y "Ver Áreas de Práctica"
3. **Services**: "Consultar mi caso"
4. **Methodology**: "Empezar ahora"
5. **FAQ**: "Hacer una consulta"
6. **Contact**: Formulario completo

Todos usan `href="#contacto"` para llevar a la sección de contacto.

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Los breakpoints de Tailwind usados:

- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

## 🎨 Animaciones

### Blob Animation (Hero Section)

Definida en `app/globals.css`:

```css
@keyframes blob {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}
```

### Smooth Scroll

Activado globalmente con:

```tsx
<html lang="es" className="scroll-smooth">
```

## 🛠️ Extensiones Futuras

Ideas para mejorar el sitio:

1. **Blog de Artículos Jurídicos**
2. **Sistema de Reserva de Turnos Online**
3. **Chat en Vivo / WhatsApp Bot**
4. **Portal de Clientes**
5. **Casos de Éxito Detallados**
6. **Calculadoras Legales**
7. **Recursos Descargables**
8. **Newsletter**

## 📊 Analytics

Para agregar Google Analytics:

1. Instalar: `npm install @next/third-parties`
2. Agregar en `app/layout.tsx`:

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

## 🔒 Consideraciones de Seguridad

- Validar todos los inputs del formulario
- Implementar CAPTCHA para prevenir spam
- Usar HTTPS en producción
- Implementar rate limiting para el formulario
- Sanitizar datos antes de enviar emails

---

Para cualquier duda sobre personalización, consultar la documentación de:

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)
