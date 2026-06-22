# 🚚 MiniCore - Sistema de Reporte de Costos por Repartidor

## 📌 Nombre del proyecto
MiniCore - Reporte de costos por repartidor

---

## 🧠 MVC utilizado

Este proyecto implementa el patrón arquitectónico **MVC (Model - View - Controller)**:

- **Model:** Base de datos MySQL que contiene las entidades principales:
  - Repartidores
  - Envíos
  - Zonas

- **Controller:** Backend desarrollado en **Node.js con Express**, encargado de la lógica de negocio, filtrado por fechas y cálculo de costos.

- **View:** Frontend desarrollado en **Angular**, encargado de la interacción con el usuario y visualización de resultados.

---

## 📌 Descripción del proyecto

Este sistema permite calcular el costo total de envíos realizados por cada repartidor dentro de un rango de fechas.

Cada envío tiene un peso en kilogramos y pertenece a una zona con una tarifa específica por kilogramo.

El sistema filtra los envíos por fecha, calcula el costo por envío (peso × tarifa) y agrupa los resultados por repartidor.

---

## ⚙️ Tecnologías utilizadas

- Angular 21
- Node.js
- Express
- MySQL
- API REST

---

## 🚀 Instrucciones para correr el proyecto localmente

### 🔹 Backend (Node.js)

```
cd backend
npm install
npm start
```
El backend se ejecuta en:

http://localhost:3000

---
###🔹 Frontend (Angular)

```
cd minicore
npm install
ng serve
```

La aplicación estará disponible en:

http://localhost:4200

---
## 🌐 Deploy

### 🔵 Frontend 

https://zippy-creponne-83cf11.netlify.app/

### 🟢 Backend

https://minicore-backend-ujmd.onrender.com/api/reporte

---
## 📹 Video explicativo
https://drive.google.com/drive/folders/1mirJ8rRg2e0gwMeFppSMQh-jY8dRuXcH?usp=sharing

---
## ✉️ Autor
Estudiante: Daniel Mena
Email: daniel.mena.delgado@udla.edu.ec
