# WanderLust-Visca-Canepa

# Datos importantes v2
  - Todas las funcionalidades fueron implementadas.
  - Los países de Europa tienen tienen una imagen en VR cada uno.
  - Para esta nueva versión, todos los Componentes Containers, fueron remplazados por HOCS. Pasando la responsabilidad de qué Container renderizar a los Componentes Presentacionales.
  - Cada Componente, ahora está dentro de una carpeta con su nombre, y el archivo JS pasa a llamarse index.js o index.native.js. De esta manera el Packager correspondiente (Web, iOS o Android) utiliza el indicado.

# Funcionalidades disponibles

   Todos los datos son persistidos en Firebase.

  - Panel Sesión
      - Ver lista de destinos elegidos (autenticado).
      - Borrar de la lista un destino (autenticado).
      - Mover de posición un elemento en la lista. Para esto, seleccionar el destino deseado, y moverlo con los botones con flechas (autenticado).
      - Iniciar sesión

  - Desde Continente
      - Ver la lista de continentes con sus respectivas regiones.
      - Ver la cantidad de lugares de cada región.
      - Ver el nombre de cada región.
      - Ver la foto principal de cada región.
      - Seleccionar una región, para ver los lugares dentro de esta.

  - Desde Región
      - Ver nombre y foto principal de la región, en el encabezado de la página.
      - Ir hacia la página anterior (/continents).
      - Ver lugares ubicados en esta región, con sus respectivos nombres y fotos principales.
      - Agregar un lugar a la lista de destinos.

  - Desde Lugar
      - Ver nombre, foto principal de la región y promedio de calificaciones, en el encabezado de la página.
      - Ir hacia la página anterior.
      - Agregar lugar a la lista de destinos (autenticado).
      - Ver todas las fotos disponibles del lugar, en forma de lista.
      - Ver descripción del lugar.
      - Ver actividades del lugar, con sus respectivos nombres, descripciones y precios.
      - Ver lista de calificaciones anteriores al lugar.
      - Agregar un comentario con su respectiva calificación al lugar (autenticado).
      - Imagen VR (Web).
      - Ver imagen de las calificaciones (App).
      - Elegir imagen de galería o sacar foto para una calificación (App)(autenticado).

# Jerarquía de componentes
## Root
    Este componente es el que es renderizado por el index.js o index.android.js principal del proyecto.
    Renderiza los componentes Provider y Router, que son utilizados por el resto de los componentes dentro de estos.

    La aplicación está compuesta por cuatro componentes principales.

## 1.DestinationsPanel

    Este componente es presentacional, y está siempre visible, ya que representa el itinerario de viaje.
    Está compuesto por:
    - Un panel con el título.
    - Dos componentes contenedores, DestinationsContainer que contiene la lista de destinos, y DestinationsFooterContainer los botones de bajar y subir.

  #### DestinationsContainer
    Este es un componente contenedor, que se encarga de hacer el request al servidor, pidiendo todos los destinos en el itinerario.
    Luego renderiza el componente llamado Destinations, con los datos obtenidos.

  #### Destinations
    Es un componente presentacional, que se encarga de recorrer la lista de destinos, y para cada uno renderizar un componente llamado DestinationContainer.
    Si no hay destinos en el viaje del usuario, muestra un mensaje correspondiente.

  #### DestinationContainer
    Es un componente contenedor, que se encarga de renderizar el componente Destination. Se encarga de mapear propiedades y el dispatch al estado.

  #### Destination
    Es un componente presentacional, que se encarga de renderizar los datos de un destino en particular.

  #### DestinationsFooterContainer
    Este es un componente contenedor, que mapea propiedades y el dispatch al estado.
    Renderiza el componente llamado DestinationsFooter, con lo antes mencionado. 

  #### DestinationsFooter
    Es un componente presentacional, que se encarga de renderizar los botones de bajar y subir los destinos.


  ## 2.ContinentsContainer
    Este es un componente contenedor, que se encarga de hacer el request al servidor, y mapear los continentes obtenidos al estado. Luego renderiza el componente Continents.
    Está compuesto por:
      - El título donde se muestra el nombre del continente.
      - Un componente contenedor llamado Continents.

  #### Continents
    Es un componente presentacional, que se encarga de para cada continente mapear otro componente llamado Continent, pasando a cada uno la información necesaria.
	
  #### Continent
    Es un componente presentacional, que se encarga de mostrar la información sobre un continente. Renderiza el nombre de este,y luego otro componente Regions, al cual le pasa todas las regiones del continente.

  #### Regions
    Es un componente presentacional, que se encarga de para cada región recibida, mapear un componente Region.

  #### Region
    Es un componente presentacional, que renderiza la imagen principal de la región, y el nombre de la misma, con la cantidad de lugares que contiene.


  ## 3.PlacesContainer
    Este es un componente contenedor, que se encarga de hacer el request al servidor, y mapear los lugares obtenidos de la región seleccionada, al estado. También mapea propiedades y funciones que utilizan el dispatch al estado.
    Luego renderiza el componente Places.
    Está compuesto por:
      - Un componente llamado Places, que se muestra si hay lugares para esa región.
      - Un componente llamado NotFound, que se muestra si no hay.
	
  #### Places
    Es un componente presentacional, que se encarga de mostrar dos secciones:
      - La superior, muestra el nombre de la región y su imagen de fondo. Con un botón para ir hacia atrás.
      - La inferior, mapea para cada lugar un componente llamado Place, pasandole los datos necesarios.

  #### Place
    Es un componente presentacional, que se renderiza la imagen principal del lugar, su nombre, y el componente AddDestinationContainer.

  #### AddDestinationContainer
    Es un componente contenedor, que se encarga de mapear una función que recibe el dispatch al estado. Luego renderiza el componente AddDestination, pasandole sus propiedades. 

  #### AddDestination
    Es un componente presentacional, que se encarga de renderizar un botón para poder agregar un destino al itinerario del viaje.
  
  
  ## 4.PlaceDetailContainer
    Este es un componente contenedor, que se encarga de hacer el request al servidor, y mapear los datos del detalle del lugar seleccionado, al estado. También mapea propiedades y funciones que utilizan el dispatch al estado.
    Luego renderiza el componente PlaceDetail.
    Está compuesto por:
      - Un componente PlaceDetail, que se muestra si el id del lugar ingresado en la url existe.
      - Sino, muestra el componente NotFound (descrito anteriormente).

  #### PlaceDetail
    Es un componente presentacional, que se encarga de mostrar toda la información del detalle del lugar seleccionado.
    Este contiene varias secciones:
    La superior, muestra el nombre del lugar, con su imagen de fondo, el componente PlaceRating, con el promedio de calificaciones, y un botón para ir hacia atrás.
      - Renderiza el componente AddDestinationContainer (previamente descrito), para poder agregar el lugar al itinerario.
      - Renderiza los componentes PlaceDescription, PlaceActivities, Reviews, AddReview y PlaceImages.
	
  #### PlaceRating
    Es un componente presentacional, que no está conectado a Redux. Se encarga de mostrar las estrellas de calificación. Permitiendo ser editable o no. 
    Para renderizar las estrellas, utilizamos una librería llamada react-rater, que para instalarla ejecutamos yarn add react-rater.

  #### PlaceDescription
    Es un componente presentacional, que se encarga de renderizar la descripción del lugar.

  #### PlaceActivities
    Es un componente presentacional, que se encarga de renderizar para cada actividad, un componente PlaceActivity, mapeando los atributos necesarios.

  #### PlaceActivity
    Es un componente presentacional, que renderiza el nombre, descripción y precio de la actividad correspondiente.

  #### Reviews
    Es un componente presentacional, que renderiza el título de la sección, y para cada reseña, mapea un componente Review.

  #### Review
    Es un componente presentacional, formado por:
      - El título.
      - El componente PlaceRating (descrito previamente), con la calificación.
      - El comentario de la reseña.

  #### AddReview
    Es un componente mezcla de presentacional y contenedor, cuya funcionalidad es agregar reseñas al lugar y  está formado por:
      - El título de la sección.
      - El componente PlaceRating (descrito previamente), para poder ingresar la calificación.
      - El campo para ingresar el comentario.
      - El botón agregar, para confirmar la reseña.
		
  #### PlacesImages
	  Es un componente presentacional, que muestra cada imagen del lugar.


## Estado interno de Redux

### Destinations
	
    Mantiene el estado de los lugares a visitar. Cada lugar tiene la id del lugar, su nombre, y 	orden en el que se encuentra.
    Está formado por los siguientes sub-reducers, que son combinados con la función combineReducers:
      - destinationsHashById: mantiene un hash con los datos necesarios de los destinos. La id de estos son la key del objeto. De esta manera accedemos en orden 1 a su información.
      - destinationList: mantiene en un array, con las ids de los destinos en el viaje ordenados según se eligió. De manera de no repetir información que ya se tiene en otros estados. Y aún así se puede acceder en orden 1 a sus datos, ya que se utiliza el sub-reducer anterior.
      - selectedDestination: mantiene un hash, con el id del destino seleccionado en la lista. 	

    Contiene los siguientes selectores, para poder acceder a información del estado desde los componentes:
      - getDestinations: retorna los destinos ordenados.
      - getSelectedDestinationId: retorna la id del destino seleccionado.
      - getSelectedInfo: retorna la id y posición en la lista, del destino seleccionado, y del de arriba y abajo de este. De manera de poder especificarle al servidor cuáles destinos actualizar, en caso de que se quiera mover alguno.

### Continents

    Mantiene el estado de los continentes y sus regiones. De las regiones solo su nombre, id, url de su imagen principal y cantidad de lugares dentro.
    Está formado por los siguientes sub-reducers, que son combinados con la función combineReducers:
      - continentsHashById: mantiene un hash con todos los continentes y su información, donde la id de este es la key del objeto. Esto nos permite poder acceder en orden 1 a los datos de cada uno.
      - continentsIdByName: mantiene un array con las ids de los continentes, ordenados por el nombre de estos. De manera de solo tener la información mínima necesaria y no tenerla repetida. Como se explicó anteriormente.

    Contiene los siguientes selectores:
      - getContinents: retorna los continentes ordenados por nombre.
      - getRegionImageById: retorna la imagen de una región según su id. 

### Places
    Mantiene el id, la imagen principal, nombre, id y nombre de la región de los lugares de la región seleccionada. 
    Está formado por los siguientes sub-reducers, que son combinados con la función combineReducers:
      - placesHashById: mantiene en un hash con la id del lugar como key, los datos de cada lugar de la región.
      - placesIdByName: mantiene un array, con las ids de los lugares, ordenadas alfabéticamente.

    Contiene los siguientes selectores:
      - getVisiblePlaces: retorna los lugares ordenados por nombre.
      - getPlace: retorna el lugar según su id.
      - getPlacesRegionName: retorna el nombre de la región seleccionada.

	
### PlaceDetail
    Mantiene los detalles del lugar seleccionado. Estos son: su id, actividades, descripción, imágenes y nombre.

    Está formado por los siguientes sub-reducers, que son combinados con la función combineReducers:
      - placeInformation: mantiene en un hash con la id del lugar como key, las actividades y descripción del lugar.
    reviewList: mantiene en un array las reseñas del lugar.
      - placeRating: mantiene un hash, con el promedio y suma de todas las calificaciones, y la cantidad de reseñas del lugar.

    No contiene selectores.

### Session
	Mantiene la información de la sesión del usuario.
    Está formado por los siguientes sub-reducers, que son combinados con la función combineReducers:
      - user: guarda el token de autenticación y el mail del usuario.
      - signedIn: guarda un boolean para saber si esta logueado o no.
      - signingIn: guarda un boolean para saber si está autenticándose o no.

##### LocalStorage
    Para poder cargar la sesión que estaba logeada, Firebase nos ofrece un método llamado 'firebase.auth().onAuthStateChanged', que nos permite saber cuándo el estado de autenticación del usuario cambia. Esto nos permite recibir el usuario que estaba logueado previamente. Pero encontramos ciertos casos en lo que esto no funcionaba, por lo tanto decidimos utilizar localStorage. En este guardamos el token de autenticación y el mail del usuario.

## APP
  - Decidimos enfocarnos en la plataforma Android.
  - Utilizamos las siguientes libererías:
    - react-native-fetch-blob: para la transmisión de archivos.
    - react-native-image-picker: para la elección de imágenes.
    - react-navigation: para manejar las rutas de la aplicación.
  - Para renderizar utilizamos un TabNavigator, el cual contiene las dos pestañas de "Mi Viaje" y "Buscar". La primera tiene las opciones de "Iniciar Sesión" y "Ver Mi Viaje". La segunda contiene un NavigationContainer con el resto de las pantallas.

## Realidad Virtual
Para el desarrollo de VR se creó una nueva app con react-vr-cli. Debido a que no requiere de una complejidad mayor a la de mostrar una imagen 360, se renderizó la misma con un componente Pano. La imagen se obtiene desde los static assets. El nombre del archivo de la imagen a cargar es recibido por medio de una query string (ej: /?image=pano1). Desde la aplicación web react, se utilizó un iframe que apunta a la aplicación VR hosteada en Firebase, aquí es donde se arma el query string a partir del campo vrImage del lugar. Este campo se obtiene desde la base de datos de Firebase de lugares.


## Instrucciones para configurar un nuevo ambiente

    1. Clonar la rama master del repositorio.

    2. Posicionarse en la carpeta donde se clonó mediante la Consola o  Terminal.

    3. Ejecutar el comando 'yarn', para que se descarguen las dependencias del proyecto.

    4. Para ejecutar la Web
      a. Ejecutar el comando 'yarn web', para que se inicie el servidor local.
      b. En la dirección localhost:3000, se abrirá en su explorador la página web. 
    
    5. Para ejecutar la App (solo Android)
      a. Ejecutar el comando 'yarn android' o 'react-native run-android', teniendo previamente un emulador o dispositivo conectado.

