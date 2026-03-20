# Retrospectiva — Sprint 1

**Proyecto:** Ushuaia MusicStore  
**Sprint:** 1 — Planificación y Wireframes  
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## Comenzar a hacer

- Establecer tiempos estimados por tarea antes de comenzar cada sprint, para tener una referencia clara de si estoy avanzando a buen ritmo.
- Hacer commits más frecuentes en GitHub, registrando cada pequeño avance en lugar de hacer un solo commit al final.
- Investigar más antes de tomar decisiones de diseño, para no tener que volver atrás y corregir.

---

## Hacer más

- Consultar referencias visuales durante el proceso de diseño, no solo al principio.
- Anotar dudas y preguntas a medida que surgen, para resolverlas de manera ordenada.
- Revisar el material del curso antes de arrancar cada tarea para refrescar conceptos clave.

---

## Continuar haciendo

- Planificar antes de ejecutar: armar los wireframes antes de escribir código fue una decisión acertada que va a ahorrar tiempo en los próximos sprints.
- Mantener el repositorio ordenado desde el inicio, con una estructura de carpetas clara.
- Usar herramientas digitales para los wireframes (SVG/Figma) en lugar de bocetos a mano, lo que facilita editarlos más adelante.

---

## Hacer menos

- Dedicar demasiado tiempo a detalles estéticos del wireframe que todavía no son prioritarios en esta etapa.
- Dudar en la toma de decisiones simples como el nombre del sitio o la paleta de colores: elegir y avanzar.

---

## Dejar de hacer

- Postergar la escritura de documentación (como el README) para el final: es mejor ir completándola en paralelo al desarrollo.
- Subestimar el tiempo que lleva la etapa de planificación: aunque parece simple, requiere dedicación real.

---

## 📌 Conclusión general

El Sprint 1 fue una buena base para el proyecto. Se logró definir la temática, armar los wireframes de las 5 páginas principales y documentar el proyecto en el README. Los principales aprendizajes tienen que ver con la gestión del tiempo y la importancia de los commits frecuentes, dos hábitos que voy a mejorar a partir del Sprint 2.

---

*Sprint 1 finalizado*  
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*

---

# 🌟 Retrospectiva — Sprint 2

**Proyecto:** Ushuaia MusicStore  
**Sprint:** 2 — Maquetado HTML y CSS  
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## ⭐ Comenzar a hacer

- Probar el sitio en el navegador después de cada cambio importante,
  para detectar errores visuales antes de acumular demasiado código.
- Usar comentarios en el HTML y CSS para identificar mejor cada sección
  y facilitar la búsqueda cuando hay que modificar algo.
- Commitear con más frecuencia, por cada página terminada en lugar de
  esperar a tener todo listo.

---

## 🔼 Hacer más

- Revisar el código en el navegador con las herramientas de desarrollo
  (F12) para entender mejor cómo se aplican los estilos.
- Consultar la documentación de CSS cuando hay dudas en lugar de
  probar por ensayo y error.
- Prestar atención a la consistencia visual entre páginas — que todas
  se vean parte del mismo sitio.

---

## ✅ Continuar haciendo

- Mantener la estructura de carpetas ordenada desde el principio,
  facilita mucho encontrar los archivos.
- Usar variables CSS para los colores y tipografías — cualquier cambio
  de paleta se hace en un solo lugar.
- Separar el CSS en archivos por página — hace el código más limpio
  y fácil de mantener.
- Basarse en los wireframes del Sprint 1 como guía — evitó muchas
  dudas a la hora de maquetar.

---

## 🔽 Hacer menos

- Modificar estilos globales para solucionar problemas puntuales —
  es mejor usar clases específicas.
- Copiar y pegar el navbar y footer en cada página manualmente —
  en el Sprint 3 esto se resuelve con partials de EJS.

---

## ❌ Dejar de hacer

- Dejar la búsqueda y descarga de imágenes para el final — es mejor
  tenerlas desde el principio para ver el resultado real mientras
  se maqueta.
- Modificar archivos directamente en GitHub sin hacer pull antes —
  genera commits de merge innecesarios.

---

## 📌 Conclusión general

El Sprint 2 fue el más extenso hasta ahora. Se logró maquetar las 5
páginas principales del sitio con un diseño consistente, minimalista
y responsive. Los principales aprendizajes tienen que ver con la
organización del CSS, la importancia de las variables globales y la
necesidad de commitear con más frecuencia.

El mayor desafío fue mantener la consistencia visual entre todas las
páginas y resolver pequeños bugs de layout como el banner del Home.
De cara al Sprint 3, el foco estará en convertir todo el sitio a
Node.js + Express + EJS, lo que va a requerir una reorganización
importante de la estructura de carpetas.

---

*Sprint 2 finalizado*
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*

---

# 🌟 Retrospectiva — Sprint 3

**Proyecto:** Ushuaia MusicStore
**Sprint:** 3 — Node.js + Express + EJS
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## ⭐ Comenzar a hacer

- Corregir bugs detectados antes de avanzar al siguiente sprint, para no arrastrar problemas acumulados.
- Verificar el orden de las rutas en Express desde el inicio — las rutas específicas siempre antes que las parametrizadas (`/create` antes de `/:id`).
- Crear el `.gitignore` al inicio de cada proyecto con Node.js, antes del primer `npm install`.

---

## 🔼 Hacer más

- Probar cada ruta en el navegador a medida que se crea, no esperar a tener todo listo para probar.
- Usar `<%= title %>` en los partials desde el principio para que cada vista tenga su propio título.
- Commitear por funcionalidad terminada, no acumular muchos cambios en un solo commit.

---

## ✅ Continuar haciendo

- Mantener la separación en carpetas `routes/`, `controllers/` y `views/` — hace el código mucho más ordenado y fácil de escalar.
- Usar partials de EJS para header, footer y head — evita la repetición de código y centraliza los cambios.
- Basarse en los HTMLs del Sprint 2 para convertir las vistas a EJS — reutilizar lo ya hecho ahorra tiempo.

---

## 🔽 Hacer menos

- Acumular cambios sin commitear — dificulta entender qué se cambió y por qué.
- Hardcodear valores en los partials (como el título) que deberían ser dinámicos.

---

## ❌ Dejar de hacer

- Subir archivos a staging sin verificar qué se está incluyendo — revisar siempre con `git status` antes de commitear.
- Avanzar con nuevas vistas sin haber probado que el servidor levanta correctamente.

---

## 📌 Conclusión general

El Sprint 3 fue el más técnico hasta ahora. Se migró todo el sitio a Node.js + Express + EJS, se reorganizó la estructura de carpetas siguiendo buenas prácticas, y se completaron todas las vistas dinámicas. El mayor desafío fue entender cómo funciona el flujo entre rutas, controllers y vistas en Express.

De cara al Sprint 4, el foco estará en conectar las vistas con datos reales provenientes de archivos JSON, implementando el CRUD completo de productos.

---

*Sprint 3 finalizado*
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*

---

# 🌟 Retrospectiva — Sprint 4

**Proyecto:** Ushuaia MusicStore
**Sprint:** 4 — CRUD con JSON
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## ⭐ Comenzar a hacer

- Probar cada acción del CRUD inmediatamente después de implementarla, sin esperar a tener todo listo.
- Verificar el archivo JSON después de cada operación (crear, editar, eliminar) para confirmar que los datos se guardan correctamente.
- Planificar la estructura de datos desde el principio — los campos definidos en el JSON van a impactar directamente en Sprint 6 (base de datos).

---

## 🔼 Hacer más

- Usar `console.log` durante el desarrollo para inspeccionar los datos que llegan por `req.body` antes de guardarlos.
- Revisar el orden de las rutas en Express cada vez que se agregan nuevas — `/create` y `/cart` siempre antes de `/:id`.

---

## ✅ Continuar haciendo

- Separar la lógica de lectura y escritura del JSON en funciones auxiliares (`getProducts`, `saveProducts`) — hace el código más limpio y reutilizable.
- Mantener el archivo JSON con datos realistas del negocio — facilita detectar problemas visuales mientras se desarrolla.
- Usar `method-override` para soportar PUT y DELETE desde formularios HTML — es la solución estándar en proyectos Express.

---

## 🔽 Hacer menos

- Hardcodear datos en las vistas EJS — todo valor que pueda cambiar debe venir del controller.
- Mezclar lógica de negocio dentro de las rutas — esa lógica va en los controllers.

---

## ❌ Dejar de hacer

- Avanzar al siguiente sprint sin probar el flujo completo (crear → editar → eliminar → verificar en JSON).

---

## 📌 Conclusión general

El Sprint 4 fue el primero donde el sitio cobró vida real. Se implementó el CRUD completo de productos usando archivos JSON como fuente de datos, con las 7 rutas requeridas funcionando correctamente. El mayor aprendizaje fue entender el flujo completo: formulario → controller → JSON → redirección.

De cara al Sprint 5, el foco estará en los usuarios: registro con imagen (Multer), login con contraseña encriptada (bcrypt) y rutas protegidas con sesiones.

---

*Sprint 4 finalizado*
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*

---

# 🌟 Retrospectiva — Sprint 5

**Proyecto:** Ushuaia MusicStore
**Sprint:** 5 — Usuarios, Autenticación y Middlewares
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## ⭐ Comenzar a hacer

- Encriptar las contraseñas existentes antes de implementar bcrypt — los datos de prueba deben estar en el mismo formato que los datos reales.
- Planificar la estructura de carpetas de middlewares desde el inicio — separar `multerConfig.js` y `auth.js` en `src/middlewares/` facilita la reutilización.
- Agregar `onerror` en imágenes de usuario desde el primer momento para evitar broken images.

---

## 🔼 Hacer más

- Probar el flujo completo de autenticación (registro → login → perfil → logout) antes de avanzar.
- Verificar que los formularios no tengan `e.preventDefault()` bloqueando el envío al servidor.
- Revisar que los `name` de los inputs coincidan exactamente con lo que espera el controller.

---

## ✅ Continuar haciendo

- Separar la lógica en archivos específicos — controller, middlewares, rutas — hace el código más fácil de mantener y entender.
- Usar `res.locals` para variables globales como `userLogged` — disponible en todas las vistas sin pasarla manualmente.
- Usar `connect-flash` para mensajes entre redirecciones — da feedback claro al usuario sin JavaScript extra.

---

## 🔽 Hacer menos

- Guardar información sensible en la sesión — la contraseña nunca va en `req.session.userLogged`.
- Hardcodear validaciones en el frontend sin tener el backend como respaldo — el frontend puede deshabilitarse.

---

## ❌ Dejar de hacer

- Avanzar sin probar las rutas protegidas — verificar siempre que `isGuest`, `isUser` e `isAdmin` redirigen correctamente.

---

## 📌 Conclusión general

El Sprint 5 fue el más complejo hasta ahora. Se implementó el flujo completo de autenticación: registro con imagen (Multer) y contraseña encriptada (bcrypt), login con sesiones (express-session), mensajes flash (connect-flash) y rutas protegidas con middlewares. El mayor aprendizaje fue entender cómo fluye la información entre middlewares, controllers y vistas a través de `req.session` y `res.locals`.

De cara al Sprint 6, el foco estará en migrar toda la lógica de JSON a MySQL con Sequelize — el mayor cambio técnico del proyecto.

---

*Sprint 5 finalizado*
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*

---

# 🌟 Retrospectiva — Sprint 6

**Proyecto:** Ushuaia MusicStore
**Sprint:** 6 — Base de datos MySQL + Sequelize
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## ⭐ Comenzar a hacer

- Crear el script de seeders desde el inicio del sprint para no depender de datos hardcodeados durante el desarrollo.
- Verificar las credenciales de MySQL en el `.env` antes de arrancar — un error de conexión puede bloquear todo el sprint.
- Usar getters en los modelos Sequelize para transformar datos automáticamente (como el array de colores) — evita bugs en las vistas.

---

## 🔼 Hacer más

- Probar cada query Sequelize por separado antes de integrarla al controller.
- Revisar que el campo en la sesión (`role`) coincida con lo que verifican los middlewares — fue la causa del bug en `isAdmin`.
- Verificar en Workbench después de cada migración que los datos se insertaron correctamente.

---

## ✅ Continuar haciendo

- Separar la configuración de Sequelize en `database/config.js` y los modelos en `database/models/` — mantiene el código ordenado y fácil de escalar.
- Usar `async/await` en todos los controllers — hace el código más legible que los callbacks.
- Guardar credenciales sensibles en `.env` y asegurarse de que esté en `.gitignore` — nunca subir contraseñas al repositorio.

---

## 🔽 Hacer menos

- Hardcodear IDs en las vistas — siempre usar los IDs reales que vienen de la base de datos.
- Mezclar lógica de transformación de datos en las vistas — esa lógica va en los modelos o controllers.

---

## ❌ Dejar de hacer

- Avanzar al siguiente sprint sin probar el CRUD completo con la base de datos real.
- Ignorar los warnings de Sequelize — algunos son inofensivos pero otros indican problemas reales.

---

## 📌 Conclusión general

El Sprint 6 fue el más técnico y el de mayor impacto en la arquitectura del proyecto. Se migró toda la lógica de archivos JSON a MySQL con Sequelize, se creó el diagrama DER, los scripts SQL y los seeders para poblar la base. El mayor aprendizaje fue entender cómo Sequelize abstrae las queries SQL y cómo las relaciones entre modelos (`hasMany`, `belongsTo`) simplifican el acceso a datos relacionados.

De cara al Sprint 7, el foco estará en agregar validaciones tanto en el backend (Express Validator) como en el frontend (JavaScript), protegiendo los formularios de datos inválidos.

---

*Sprint 6 finalizado*
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*

---

# 🌟 Retrospectiva — Sprint 7

**Proyecto:** Ushuaia MusicStore
**Sprint:** 7 — Validaciones Frontend y Backend
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## ⭐ Comenzar a hacer

- Definir las reglas de validación antes de escribir código — tener claro qué se valida y dónde evita inconsistencias entre frontend y backend.
- Crear el archivo de validaciones centralizado (`middlewares/validations.js`) desde el inicio del sprint para no dispersar reglas en diferentes archivos.

---

## 🔼 Hacer más

- Probar las validaciones con datos inválidos de cada tipo (vacío, muy corto, formato incorrecto) antes de dar por terminado cada formulario.
- Verificar que los flash messages lleguen correctamente a las vistas — el nombre de la variable en `res.locals` debe coincidir exactamente con lo que usa el EJS.

---

## ✅ Continuar haciendo

- Separar las validaciones en un archivo dedicado (`validations.js`) — hace el código más ordenado y fácil de mantener.
- Aplicar validaciones tanto en backend como en frontend — el frontend mejora la UX, el backend es la protección real.
- Usar `res.locals` para variables globales como `errorMsg` y `successMsg` — disponibles en todas las vistas sin pasarlas manualmente.

---

## 🔽 Hacer menos

- Hardcodear opciones de select en las vistas (como categorías) — siempre traerlas de la base de datos para mantener consistencia.
- Duplicar lógica de validación entre rutas — centralizarla en middlewares reutilizables.

---

## ❌ Dejar de hacer

- Avanzar sin verificar que los mensajes de error llegan a la vista — un flash message seteado que no se muestra da la ilusión de que la validación no funciona.

---

## 📌 Conclusión general

El Sprint 7 completó la capa de validaciones del proyecto. Se implementó `express-validator` en el backend para registro, login y productos, y validaciones JavaScript en el frontend para los mismos formularios. El mayor aprendizaje fue entender la diferencia entre validación de UX (frontend, puede deshabilitarse) y validación de seguridad (backend, siempre activa).

De cara al Sprint 8, el foco estará en exponer los datos como API REST y construir un dashboard en React que los consuma.

---

*Sprint 7 finalizado*
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*

---

# 🌟 Retrospectiva — Sprint 8

**Proyecto:** Ushuaia MusicStore
**Sprint:** 8 — API REST + Dashboard React
**Dinámica:** Estrella de Mar (Starfish Retrospective)

---

## ⭐ Comenzar a hacer

- Diseñar los endpoints de la API antes de construir el dashboard — saber exactamente qué datos devuelve cada endpoint facilita el desarrollo del frontend.
- Configurar el proxy de Vite desde el inicio del proyecto React para evitar problemas de CORS durante el desarrollo.
- Agregar CORS al servidor Express desde el momento en que se expone una API — cualquier cliente externo lo va a necesitar.

---

## 🔼 Hacer más

- Probar los endpoints directamente en el navegador o con Thunder Client antes de consumirlos desde React.
- Verificar que ambos servidores (Express en :3000 y Vite en :5173) estén corriendo antes de probar el dashboard.

---

## ✅ Continuar haciendo

- Separar la API en su propio archivo de rutas (`api.js`) y controller (`apiController.js`) — mantiene el código organizado y fácil de extender.
- Usar `Promise.all` en React para cargar múltiples endpoints en paralelo — mejora la performance del dashboard.
- Estructurar los componentes React por responsabilidad — `StatCard`, `LastCreated`, `CategoryList`, `ProductTable` — hace el código más legible y mantenible.

---

## 🔽 Hacer menos

- Mezclar lógica de negocio en los componentes React — los componentes deben solo mostrar datos, no procesarlos.
- Hardcodear URLs en los componentes — usar el proxy de Vite o variables de entorno.

---

## ❌ Dejar de hacer

- Avanzar sin tener el servidor Express corriendo — el dashboard depende de la API y no funciona sin ella.

---

## 📌 Conclusión general

El Sprint 8 marcó el cierre del proyecto. Se expusieron los datos del sitio como API REST con cuatro endpoints funcionales y se construyó un dashboard en React que los consume en tiempo real. El mayor aprendizaje fue entender la arquitectura desacoplada: un backend Express como proveedor de datos y un frontend React como consumidor independiente.

Con este sprint finalizado, el proyecto **Ushuaia MusicStore** está completo — desde la planificación y el maquetado hasta la base de datos, autenticación, validaciones y dashboard de administración. Un recorrido completo por el stack de un desarrollador Full Stack.

---

*Sprint 8 finalizado — Proyecto completo* 🎸
*Proyecto: Ushuaia MusicStore — Digital House Full Stack*
