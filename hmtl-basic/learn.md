# HTML y CSS Básico

### 5 Pasos que hace el navegador

1. Pasa los archivos a objetos (DOM)
2. Calcula el estilo correspondiente a cada nodo del DOM
3. Calcula las dimensiones de cada nodo y dónde va en la pantalla
4. Pinta las diferente cajas
5. Toma las capas y las convierte en una image para la pantalla

### Etiquetas más usadas

[DOC](https://htmlreference.io/)

###### Layout:

- Header
- Nav
- Section
- Article
- Aside
- Footer

###### Enlaces:

- a

###### Textos:

- h1...h6
- p
- span

###### Imágenes y videos:

- img
- svg
- iFrame
- Video

###### Formularios:

- form
- input
- label
- button

###### Listas:

- ul
- ui
- ol

### CSS

- Selectores:

```
selector {
  prop: value
}
```

#### Tipos de selectores

###### Básicos

- type (div, h1)
- class (.elemento)
- id: #id-element
- attr (a[href = ""])
- universal (\* {})

###### Combinadores

- element **>** element (primer hijo directo)
- element + element (al lado)
- element ~ element (hermanos)

###### PseudoClases (:)

- :active
- :focus
- :hover

###### PseudoElementos (::)

- ::after
- ::before
- ::first-letter
- ::placeholder

### Orden de los estilos en CSS

Se sobrescriben en cascada
Tienen una especificidad

1. !important
2. Estilos en línea
3. #id
4. class, atributos, pseudoclases
5. elementos, PseudoElementos
6. selector universal

### Tipos de display

1. Block
   - Busca el ancho de la pantalla
   - Puedo poner alto y ancho
2. Inline

   - Busca ajustar el tamaño a lo mínimo
   - No puedo colocar alto y ancho
   - Margin no aparece para alto y ancho

3. Inline Block (wrap flutter)
   - Combina las dos características
4. Flex (column+row flutter)

   - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

5. Grid

### Modelo de caja

