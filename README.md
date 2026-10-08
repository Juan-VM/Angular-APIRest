# 🎬 Angular-APIRest

Aplicación web desarrollada con **Angular** que consume una API REST para obtener y mostrar información de películas de Studio Ghibli mediante una interfaz visual, sencilla y adaptable a diferentes dispositivos.

## 📖 Descripción del proyecto

El objetivo de este proyecto es poner en práctica el desarrollo de aplicaciones web con Angular, utilizando componentes y servicios para consumir información proveniente de una API REST.

La aplicación presenta un catálogo de películas que permite visualizar sus imágenes, títulos, descripciones, directores y productores en tarjetas organizadas.

## ✨ Características

* 🎥 **Catálogo de películas:** muestra las películas obtenidas desde la API.
* 🖼️ **Imágenes:** presenta la imagen correspondiente a cada película.
* 📝 **Información detallada:** incluye el título y la descripción de cada película.
* 🎬 **Director y productor:** muestra los responsables de cada producción mediante etiquetas.

## 🛠️ Tecnologías utilizadas

* **Angular:** desarrollo de la aplicación frontend.
* **TypeScript:** lógica y manejo de datos.
* **HTML5:** estructura de la interfaz.
* **CSS3:** diseño y estilos visuales.
* **API REST:** obtención de información de las películas.

## 📋 Requisitos previos

Antes de ejecutar el proyecto, necesitas tener instalado:

* [Node.js](https://nodejs.org/)
* npm, incluido con Node.js.
* [Angular CLI](https://angular.dev/tools/cli).
* Git, para clonar el repositorio.

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Juan-VM/Angular-APIRest.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd Angular-APIRest/WebApp
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

```bash
ng serve
```

### 5. Abrir en el navegador

Visita la siguiente dirección:

http://localhost:4200/

## 📚 Estructura de la información

La aplicación utiliza los siguientes campos para representar cada película:

| Campo         | Descripción                      |
| ------------- | -------------------------------- |
| `id`          | Identificador de la película.    |
| `title`       | Título de la película.           |
| `image`       | URL de la imagen de la película. |
| `description` | Descripción o sinopsis.          |
| `director`    | Nombre del director.             |
| `producer`    | Nombre del productor.            |


## 👨‍💻 Autor

**Juan-VM**

GitHub: [Juan-VM](https://github.com/Juan-VM)

Repositorio: [Angular-APIRest](https://github.com/Juan-VM/Angular-APIRest)

---

*Proyecto desarrollado con fines educativos para practicar el consumo de APIs REST y el desarrollo de interfaces web con Angular.*
