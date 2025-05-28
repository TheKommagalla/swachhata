import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const colonies = [
  { name: "SitaNagar", lat: 17.5202, lng: 78.8881 },
  { name: "IndiraNagar", lat: 17.5225, lng: 78.8823 },
  { name: "RamNagar", lat: 17.5184, lng: 78.8869 },
  { name: "KishanNagar", lat: 17.5195, lng: 78.8895 },
];

function Routing({ selectedColonies }) {
  const map = useMap();
  const routeRef = useRef(null);

  useEffect(() => {
    if (routeRef.current) {
      map.removeControl(routeRef.current);
      routeRef.current = null;
    }

    if (selectedColonies.length >= 2) {
      const waypoints = selectedColonies
        .map((name) => colonies.find((c) => c.name === name))
        .filter(Boolean)
        .map((c) => L.latLng(c.lat, c.lng));

      routeRef.current = L.Routing.control({
        waypoints,
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        show: false,
        fitSelectedRoutes: true,
        lineOptions: {
          styles: [{ color: "blue", weight: 4 }],
        },
        createMarker: (i, wp) =>
          L.marker(wp.latLng).bindPopup(selectedColonies[i]),
      }).addTo(map);
    }
  }, [selectedColonies, map]);

  return null;
}

function RouteSetup() {
  const [selectedColonies, setSelectedColonies] = useState([]);

  const toggleColony = (name) => {
    setSelectedColonies((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Select Colonies & View Route</h2>
      <div className="row g-4">
        {/* Checkbox Panel */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Colonies</h5>
            </div>
            <div className="card-body">
              {colonies.map((colony) => (
                <div key={colony.name} className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`colony-${colony.name}`}
                    checked={selectedColonies.includes(colony.name)}
                    onChange={() => toggleColony(colony.name)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`colony-${colony.name}`}
                    style={{ userSelect: "none" }}
                  >
                    {colony.name}
                  </label>
                </div>
              ))}
              <small className="text-muted">
                Select at least two colonies to view the route.
              </small>
            </div>
          </div>
        </div>

        {/* Map Panel */}
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-0" style={{ height: "500px" }}>
              <MapContainer
                center={[17.5202, 78.8881]}
                zoom={15}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
              >
             <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

                <Routing selectedColonies={selectedColonies} />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteSetup;
