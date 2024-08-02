import React, { forwardRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  MapProvider,
  ZoomableGroup,
  useMapContext,
  Marker
} from "react-simple-maps";
import json from './t.json';
import { makers } from './BajaCaliforniaSur/makers';

export default function Map() {

  return (<>
    <div className="test">
      <MapProvider
        width={300}
        height={300}
        projection="geoMercator"
        style={{
          borderColor: "#0a0a0a"
        }}
        projectionConfig={{
          // rotate: [-10.0, -53.0, 0],

        }}
      >
        {/* <ZoomableGroup center={[-109.59326764990284, 23.365121723265915]} zoom={4} ></ZoomableGroup> */}

        <svg viewBox="-100 10 400 600" style={{
          //background: "#8CD8FE"
          // background: "#fff",
          // borderColor: "#000"
        }}>

          <ComposableMap projection="geoMercator">
            <ZoomableGroup center={[-101.12760940892848, 15.57193171174201]} zoom={8} >

              <Geographies geography={json}>
                {({ geographies, borders }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} style={{
                      default: { fill: "#c3c3c3" },
                      hover: { fill: "#04D" },
                      pressed: { fill: "#02A" },
                      borderWidth: 1
                    }}
                    />
                  ))
                }
              </Geographies>

              {/* {makers.map(({ name, coordinates, pv, markerOffset }) => (

              <Marker key={pv} coordinates={coordinates}>
                <circle r={0.1} fill="#F53" stroke="#000" strokeWidth={0.00001} />
                
                <text
                  textAnchor="small"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "#000", fontSize: "1px", fontStyle: "small" }}
                >
                  {name}
                </text>
              </Marker>
            ))} */}
            </ZoomableGroup>
          </ComposableMap>


        </svg>

      </MapProvider >
    </div>
  </>);
}