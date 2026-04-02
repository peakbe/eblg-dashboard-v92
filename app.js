// ======================================================
// IMPORTS
// ======================================================

// Carte + layers
import { initMap, initClusterToggle, initDebugPanel } from "./js/map.js";

// Runways (important : doit être chargé avant METAR)
import "./js/runways.js";

// METAR / TAF / FIDS
import { loadMetar } from "./js/metar.js";
import { loadTaf } from "./js/taf.js";
import { loadFids } from "./js/fids.js";

// UI
import { initUI } from "./js/ui.js";

// Heatmap
import { initHeatmapToggle, initHeatmapHistory } from "./js/sonometers.js";


// ======================================================
// INITIALISATION
// ======================================================

window.onload = () => {

    // 1) Carte
    window.map = initMap();

    // 2) UI
    initUI();

    // 3) Heatmap
    initHeatmapToggle(window.map);
    initHeatmapHistory(window.map);

    // 4) Clusters
    initClusterToggle(window.map);

    // 5) Debug
    initDebugPanel(window.map);

    // 6) Données
    loadMetar();
    loadTaf();
    loadFids();
};
