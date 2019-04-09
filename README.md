# node-api-sequelizer

Para correr la aplicación en modo desarollo, se deberá ejecutar el comando "npm run dev".
Para compilar la aplicación productiva: "npm run build" , y para correrla "npm run start"


La api consta con un Alta, Baja y Consulta de Hoteles y Amenities:
Para utilizar la api se debe:

Para obtener el listado de Hoteles y Amenities se puede hacer desde el navegador:
- http://localhost:3005/hotels
- http://localhost:3005/hotels

# Para borrar o insertar se necesita alguna aplicación que permita realizar los metodos DELETE y POSTA
(Ejemplo Postman)

Para borrar un Hotel o una Amenity por id:

- http://localhost:3005/hotels/(id del hotel)
- http://localhost:3005/amenities/(id de la amenity)

Para Insertar un Hotel:

- http://localhost:3005/hotels

Los datos de entrada para insertar un Hotel deben ir de la siguiente manera en formato json (ejemplo):
{
    "id": "249942",
    "name": "Hotel Stefanos",
    "stars": 3,
    "price": 994.18,
    "image": "4900059_30_b.jpg"
 }
 

Para insertar una Amenity:

- http://localhost:3005/amenities

Los datos de entrada para insertar una Amenity deben ir de la siguiente manera en formato json (ejemplo):

{
	"description":"sheets"
}
