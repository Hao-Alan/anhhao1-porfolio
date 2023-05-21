import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 200,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/feature.json"
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"Paris"}
        </text>
      </Annotation>

      <Annotation
        subject={[148.18, -19.96]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"Lao"}
        </text>
      </Annotation>

      <Annotation
        subject={[29.75, -4.45]}
        dx={-180}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"Arabic"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
