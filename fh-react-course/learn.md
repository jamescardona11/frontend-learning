---
Curso: React de Fernando Herrera.
Link: https://www.udemy.com/course/react-cero-experto
Mi-Nivel: Junior en frontend.
Notas:
Rating:
---

# Curso React de Fernando Herrera. [LINK](https://www.udemy.com/course/react-cero-experto)

### ¿Qué es React?

-> Es una librería que nos permite crear aplicaciones
-> Declarativa, podemos seguir patrones
-> Es muy eficiente
-> Predecible (La información fluye en una sola via)
-> Se divide en pequeñas piezas (Componentes)
-> Server side con node
-> React native para mobiles

--
Trabaja con JSX = JS + XML
Create app docs = https://create-react-app.dev/

### ¿Qué es babel?

Transpila el código para que sea compatible en todos los navegadores

### Componentes

Crear piezas reutilizables que nos ayude a dividir nuestra aplicación
Cada componente cumple una unica función
Puede tener estado o no

### Conceptos

Functional Components= Cuando creamos una funcion para devolver un componente
Fragment: Es un higher component
En vez de fragment puedo colocar: <>
Los objetos no pueden devolverse en componente dentro de {}, usar JSON.stringigy
Todo componente tiene algo que se llama props (properties)
usar PropTypes para pedir los valores y decidir el tipo. (propTypes)
se puede usar defaultProps para los valores por defecto.
Eventos: https://es.reactjs.org/docs/events.html
React hook: https://es.reactjs.org/docs/hooks-intro.html
Hook = es simplemente función
handleSubtract y HandleReset
cambios de la 18= https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html

### Test

No son una perdida de tiempo
tipos: Unitarias(pequeños pedazos) y pruebas de integración(Varios elementos)
Probar la ruta critica de la aplicación

##### Caracteristicas:

-   Fáciles de escribir
-   Fáciles de leer
-   Confiables
-   Rápidas
-   Principalmente unitarias
-   AAA

##### AAA

1. **arrange** (arreglas): Preparamos el estado inicial de la prueba (sujeto de prueba)

-   inicializamos variables
-   Mockeamos
-   Importaciones

2. **Act** (actuar): Aplicamos acciones o estímulos al sujeto de prueba

-   Llamar métodos
-   Simulamos clicks

3. **Assert** (Afirmar): Observar el comportamiento resultante

-   Son los resultados esperados
    ex: que algo cambie, algo incremente o que no suceda nada

##### Mitos

-   Hacen la aplicaciópn no tenga errores
-   Las pruebas no pueden fallar
-   Hacen más lenta mi aplicación
-   Es una perdida de tiempo (si probamos cosas innecesarias)
-   Hay que prbar todo

Libreria para probar: https://jestjs.io/

#### Animations CSS

https://animate.style/
