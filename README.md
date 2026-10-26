# NEODOC Editor

Editor de texto para PDF que funciona **enteramente en el navegador**. No usa Docker, no necesita backend y los archivos no se suben a ningún servidor: el PDF se abre, se edita y se exporta en local con PDFium (WASM).

Esta versión incluye únicamente el editor de texto PDF. El resto de herramientas de Stirling-PDF no está expuesto.

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`; la app redirige directamente al editor.

## Producción

```bash
npm run build
npm run preview
```

El resultado queda en `dist/`. Es un sitio estático: se puede servir con cualquier hosting (Vercel, Netlify, Cloudflare Pages, nginx...).

## Desplegar en Vercel

1. Importa el repositorio en Vercel.
2. Framework: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

`vercel.json` ya contiene esa configuración y la reescritura SPA necesaria para que `/pdf-text-editor` funcione al recargar.

## Funciones

- Abrir PDF desde el ordenador o arrastrarlo.
- Editar texto existente, añadir texto, imágenes y tablas.
- Mover, redimensionar y eliminar elementos.
- Buscar en el documento.
- Guardar una copia en la biblioteca local (IndexedDB) o descargar el PDF editado.
- Interfaz en español e inglés.

## Limitaciones de la versión estática

- **OCR deshabilitado**: requiere el backend de Stirling-PDF.
- Algunas fuentes no embebidas pueden no editarse con total fidelidad; el editor usa la fuente de respaldo incluida (`NotoSans-Regular`).
- No hay cuentas, carpetas compartidas ni almacenamiento en servidor. La biblioteca vive en el navegador.

## Privacidad y datos

- No hay registro de usuarios, cuentas ni inicio de sesión.
- No se recogen ni se validan licencias.
- Los PDF se abren, editan y exportan únicamente en el navegador: ningún documento ni dato se envía, guarda o recopila en un servidor.
- No se usan cookies de seguimiento ni herramientas de analítica.

## Licencia y atribución

Basado en [Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF), publicado bajo licencia MIT. Consulta `LICENSE` para el texto completo y las atribuciones de terceros.
