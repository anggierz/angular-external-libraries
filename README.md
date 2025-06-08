# Angular External Libraries

Este proyecto es parte de un ejercicio práctico de la asignatura **Desarrollo Front con Frameworks II** en la Universidad Europea.

## 📚 Descripción

La aplicación demuestra el uso de **librerías externas en Angular**, específicamente:

- **Angular Material**: para crear una interfaz con diálogo modal y formulario.
- **ngx-charts**: para representar datos mediante gráficos (líneas y barras).

## 🧩 Componentes principales

### 1. `FormDialogComponent`
- Botón que abre un `MatDialog`.
- El diálogo contiene un formulario con los campos:
  - Nombre
  - Email
  - Dirección
- Al enviar el formulario, los datos se muestran en el HTML del componente principal.

### 2. `DialogFormComponent`
- Contenido del diálogo.
- Usa `FormsModule` y `ngModel` para enlazar los campos del formulario.

### 3. `ChartsComponent`
- Contiene dos gráficos:
  - Gráfico de líneas (ventas por mes).
  - Gráfico de barras (ventas por producto).
- Implementado con `@swimlane/ngx-charts`.

## ⚙️ Instalación

1. Clona el repositorio
```bash
git clone https://github.com/anggierz/angular-external-libraries.git
cd angular-external-libraries
```
2. Instala las dependencias
```bash
npm install
```

3. Ejecuta el servidor
```bash
ng serve
```