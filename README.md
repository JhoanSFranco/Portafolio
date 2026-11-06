# Portafolio Personal - Jhoan Sebastián Franco Ruiz

Portafolio web personal desarrollado con React + TypeScript + Vite.

## 🚀 Stack Tecnológico

**Frontend:** React 18, TypeScript, Vite, Bootstrap 5, React Bootstrap, CSS3  
**Formulario:** EmailJS, SweetAlert2  
**Otros:** i18n (Español/Inglés), React Context API

## 📋 Características

- Diseño responsive y moderno
- Soporte multiidioma (ES/EN/FR)
- Formulario de contacto con envío automático y confirmación
- Navegación suave entre secciones
- CV descargable según idioma
- Integración con redes sociales

npm run build      # Build de producción

## 📁 Estructura

```
src/
├── components/        # Componentes React
│   ├── common/        # Reutilizables (Button, CardProjects, etc.)
│   ├── layout/        # Layout (Header, Footer, Navigation)
│   └── sections/      # Secciones (MainBanner, About, Services, Projects, Contact)
├── hooks/             # Custom hooks
├── context/           # React Context (LanguageContext)
├── data/              # Datos y traducciones
├── styles/            # CSS global y variables
├── types/             # TypeScript types
└── utils/             # Helpers y validadores
```

## � Personalización

**Datos personales:** `src/data/personalData.ts`  
**Traducciones:** `src/data/translations.ts`  
**Estilos/colores:** `src/styles/variables.css`  
**CVs:** Añadir PDFs en `public/assets/resumes/` con nombres según idioma

---

**Desarrollado por Jhoan Sebastián Franco Ruiz**
