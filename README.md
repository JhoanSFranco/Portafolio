# Portafolio Personal - Jhoan Sebastián Franco Ruiz

Portafolio web personal desarrollado con React, TypeScript, Bootstrap y CSS moderno.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción rápida
- **Bootstrap 5** - Framework CSS para diseño responsive
- **React Bootstrap** - Componentes de Bootstrap para React
- **CSS3** - Estilos personalizados y animaciones

## 📋 Características

- ✅ Diseño responsive y moderno
- ✅ Navegación suave entre secciones
- ✅ Secciones: Home, About, Services, Projects, Contact
- ✅ Integración con redes sociales (LinkedIn, GitHub)
- ✅ Formulario de contacto funcional
- ✅ Animaciones y transiciones suaves
- ✅ Código limpio siguiendo buenas prácticas
- ✅ Soporte multiidioma (Español/Inglés)

## 🛠️ Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 📁 Estructura del Proyecto

```
portafolio/
├── public/                  # Archivos públicos
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   ├── CardProjects.tsx
│   │   │   ├── CardProjects.css
│   │   │   ├── Container.tsx
│   │   │   ├── Container.css
│   │   │   ├── SocialIcons.tsx
│   │   │   └── SocialIcons.css
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.css
│   │   │   ├── Navigation.tsx
│   │   │   └── Navigation.css
│   │   └── sections/        # Secciones de la página
│   │       ├── MainBanner.tsx
│   │       ├── MainBanner.css
│   │       ├── About.tsx
│   │       ├── About.css
│   │       ├── Services.tsx
│   │       ├── Services.css
│   │       ├── Projects.tsx
│   │       ├── Projects.css
│   │       ├── Contact.tsx
│   │       └── Contact.css
│   ├── hooks/               # Hooks personalizados
│   │   ├── useScroll.ts
│   │   ├── useSmoothScroll.ts
│   │   ├── useProjects.ts
│   │   └── useContactForm.ts
│   ├── utils/               # Utilidades y helpers
│   │   ├── helpers.ts
│   │   └── validators.ts
│   ├── constants/           # Constantes del proyecto
│   │   └── index.ts
│   ├── assets/              # Recursos estáticos
│   │   ├── icons/
│   │   └── images/
│   ├── context/             # Contextos de React
│   │   └── LanguageContext.tsx
│   ├── data/                # Datos y configuraciones
│   │   ├── personalData.ts
│   │   └── translations.ts
│   ├── styles/              # Estilos globales
│   │   ├── globals.css
│   │   └── variables.css
│   ├── types/               # Definiciones de tipos TypeScript
│   │   └── index.ts
│   ├── App.tsx              # Componente principal
│   ├── App.css
│   ├── main.tsx             # Punto de entrada
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🏗️ Buenas Prácticas Implementadas

### ✅ Modularidad
- **Separación de responsabilidades**: Cada componente tiene una responsabilidad única
- **Hooks personalizados**: Lógica reutilizable extraída a hooks (`useScroll`, `useProjects`, `useContactForm`, `useSmoothScroll`)
- **Utilidades centralizadas**: Funciones helper y validadores en carpetas dedicadas
- **Constantes organizadas**: Valores mágicos movidos a constantes

### ✅ Optimización de Rendimiento
- **React.memo**: Componentes memoizados para evitar re-renders innecesarios
- **useMemo y useCallback**: Optimización de cálculos y funciones
- **Event listeners pasivos**: Scroll listeners optimizados con `{ passive: true }`

### ✅ TypeScript
- **Tipos estrictos**: Interfaces bien definidas para todos los componentes
- **Tipos exportados**: Tipos reutilizables en carpeta `types/`
- **Validación de tipos**: TypeScript configurado en modo estricto

### ✅ Organización de Código
- **Estructura modular**: Componentes organizados por función (common, layout, sections)
- **Separación de concerns**: Lógica de negocio separada de presentación
- **Traducciones separadas**: Archivo independiente para traducciones
- **Helpers reutilizables**: Funciones comunes en `utils/`

### ✅ Mantenibilidad
- **Código DRY**: Sin duplicación de lógica
- **Nombres descriptivos**: Variables y funciones con nombres claros
- **Comentarios JSDoc**: Documentación en hooks y utilidades
- **Consistencia**: Patrones consistentes en todo el proyecto

## 🎨 Personalización

Los datos personales se encuentran en `src/data/personalData.ts`. Puedes modificar:

- Información personal
- Proyectos
- Servicios
- Tecnologías
- Enlaces de redes sociales

Los estilos globales y variables CSS están en `src/styles/`:
- `variables.css` - Variables CSS personalizables
- `globals.css` - Estilos globales

## 📝 Notas

- Asegúrate de tener tu CV en formato PDF en la carpeta `public/` con el nombre `CV_JHOAN_SEBASTIAN_FRANCO.pdf`
- Actualiza los enlaces de proyectos cuando tengas URLs reales
- Personaliza los colores en `src/styles/variables.css` si deseas cambiar el tema
- El proyecto incluye soporte multiidioma (Español/Inglés) mediante el contexto de idioma

## 📄 Licencia

Este proyecto es de uso personal.

---

Desarrollado con ❤️ por Jhoan Sebastián Franco Ruiz
