# Configuración de Unity WebGL para Café Window

## Pasos para embeber tu build de Unity

### 1. Exportar el build desde Unity

1. Abre tu proyecto en Unity
2. Ve a **File > Build Settings**
3. Selecciona **WebGL** como plataforma
4. Haz clic en **Build** y elige una carpeta de destino
5. Unity generará una carpeta con los archivos necesarios

### 2. Estructura de archivos del build

Tu build de Unity debería tener esta estructura:
```
Build/
  ├── Build.loader.js    (o el nombre que Unity haya generado)
  ├── Build.data
  ├── Build.framework.js
  ├── Build.wasm
  └── TemplateData/      (opcional, contiene assets de UI)
```

### 3. Colocar los archivos en el proyecto

**Opción A: Carpeta en `public/` (Recomendado)**
```
public/
  └── unity-build/        (o el nombre que prefieras)
      ├── Build.loader.js
      ├── Build.data
      ├── Build.framework.js
      ├── Build.wasm
      └── TemplateData/
```

**Opción B: Servidor externo**
Si tu build está en otro servidor, puedes usar una URL completa.

### 4. Configurar la ruta en el componente

Edita `components/webgl-showcase.tsx` y actualiza estas constantes:

```typescript
const UNITY_BUILD_PATH = '/unity-build'  // Cambia a tu ruta
const UNITY_LOADER_FILE = 'Build.loader.js'  // Cambia si tu loader tiene otro nombre
```

**Ejemplos:**
- Si está en `public/unity-build/` → `UNITY_BUILD_PATH = '/unity-build'`
- Si está en `public/Builds/MyGame/` → `UNITY_BUILD_PATH = '/Builds/MyGame'`
- Si está en otro servidor → `UNITY_BUILD_PATH = 'https://tu-servidor.com/build'`

### 5. Nombres de archivos personalizados

Si Unity generó archivos con nombres diferentes (por ejemplo, `MyGame.loader.js`), actualiza:

```typescript
const UNITY_LOADER_FILE = 'MyGame.loader.js'  // Tu nombre de archivo
```

Y también actualiza las rutas en el código:
```typescript
dataUrl: `${UNITY_BUILD_PATH}/MyGame.data`,
frameworkUrl: `${UNITY_BUILD_PATH}/MyGame.framework.js`,
codeUrl: `${UNITY_BUILD_PATH}/MyGame.wasm`,
```

### 6. Verificar que funciona

1. Inicia el servidor de desarrollo: `npm run dev`
2. Navega a la sección "Café Window"
3. Deberías ver:
   - Un estado de carga mientras se descarga el build
   - Tu juego Unity cargándose y ejecutándose

### Solución de problemas

**Error: "Could not load Unity build"**
- Verifica que la ruta `UNITY_BUILD_PATH` sea correcta
- Asegúrate de que los archivos estén en la carpeta `public/`
- Revisa la consola del navegador para más detalles

**El juego no se muestra**
- Verifica que todos los archivos del build estén presentes
- Asegúrate de que el nombre del loader sea correcto
- Revisa que no haya errores de CORS si estás usando un servidor externo

**El juego se ve muy pequeño/grande**
- El contenedor usa `aspect-video` (16:9). Ajusta el CSS si necesitas otra proporción
- Puedes modificar el estilo del contenedor en el componente

### Notas importantes

- Los builds de Unity WebGL pueden ser grandes. Considera comprimir los archivos
- Para producción, asegúrate de configurar compresión gzip/brotli en tu servidor
- El componente maneja automáticamente estados de carga y errores
- El diseño mantiene el estilo "Café Window" con el marco tipo navegador

