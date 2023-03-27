import React, {useState }  from 'react'
import 'leaflet/dist/leaflet.css'; // Importa el CSS de Leaflet
import {Marker,Popup,Circle,Pane} from 'react-leaflet' // Importa los componentes de Marker y Popup de react-leaflet


const Markers = (props) => {
  const L = require("leaflet")
  const [state, setState] = useState({
    lat: 0,
    lng: 0,
  })

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function(position){
        setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      function (error){
        console.log(error)
      },
      {
        enableHighAccuracy: true
      }
    )
    // Cuando el componente se monta, se ejecuta esta función
   // Importa Leaflet
    // La imagen de los marcadores en Leaflet no se muestra correctamente en React, así que se elimina
    delete L.Icon.Default.prototype._getIconUrl;
    // Se establecen las opciones para los marcadores
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"), // Imagen para pantallas retina
      iconUrl: require("leaflet/dist/images/marker-icon.png"), // Imagen para pantallas normales
      shadowUrl: require("leaflet/dist/images/marker-shadow.png") // Sombra del marcador
    });
  }, [L.Icon.Default]);

  const meCoords = L.latLng(state)

  // Devuelve el componente de Marker con una posición específica y un Popup
  const {places} = props
  const markers = places.places.map((place)=>(
    <Circle key={place.name} center={place.geometry} radius={280}>
      <Popup>
        {place.name}
      </Popup>
    </Circle>
  ))

  const refLatLngs = places.places.map(({ name, geometry }) => ({ name, latLng: L.latLng(geometry) }))

  let isWithinZone = false; // Variable para saber si el usuario está dentro de una zona

  refLatLngs.forEach(({ name, latLng }) => {
    if (meCoords.distanceTo(latLng) <= 280) {
      if (!isWithinZone) {
        alert(`My location is within ${280}m of ${name}`);
        isWithinZone = true;
      }
    } else {
      console.log(`My location is not within`);
    }
  });

  return(
    <>
      <Pane>
        {markers}
        <Pane>
          <Marker position={meCoords}>
            <Popup>
              Me
            </Popup>
          </Marker>
        </Pane>
      </Pane>
    </>
  )
}

export default Markers