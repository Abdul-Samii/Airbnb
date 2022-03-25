import ReactMapGl, { Marker } from 'react-map-gl';
import {useState} from 'react';
import { getCenter } from 'geolib';

export const Map = ({searchResults})=>{

    const coordinates = searchResults.map((result)=>({
        longitude:result.long,
        latitude:result.lat,
    }));
    

    // The longitute & latitude of center of locations coordinate
    const center = getCenter(coordinates)

    const [viewport,setViewport] = useState({
        width:"100%",
        height:"100%",
        latitude:center.latitude,
        longitude:center.longitude,
        // latitude:37.7577,
        // longitude:-122.4376,
        zoom:11,
    });

    return(
        <ReactMapGl
            onViewportChange={(nextViewport)=>setViewport(nextViewport)}
            {...viewport}
            mapStyle='mapbox://styles/papareact/cl15xobpf003v15l6s4ehfzsp'
            mapboxAccessToken={process.env.mapbox_key}
        >

            {searchResults.map((result)=>(
                <div>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        // offsetLeft={-20}
                        // offsetTop={-10}
                    >
                        ajshdkalsjhdjkash
                        {/* <p className='text-2xl'>S</p> */}
                    </Marker>
                </div>
            ))}

        </ReactMapGl>
    )
}