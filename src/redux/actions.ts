import { createAction } from "@reduxjs/toolkit";
import { AppTheme, MapStyle, LineState, Alternatives } from "./state";
import { LinearScaleTwoTone } from "@material-ui/icons";

export const setDrawerOpen = createAction<boolean>("setDrawerOpen");

export const setShow3DBuildings = createAction<boolean>("setShow3DBuildings");

export const setUseAccessibleLabels = createAction<boolean>(
  "setUseAccessibleLabels"
);

export const setAppTheme = createAction<AppTheme>("setAppTheme");

export const setMapStyle = createAction<MapStyle>("setMapStyle");

export const setShowLine = createAction<[keyof LineState, boolean]>(
  "setShowLine"
);

export const setTargetZoom = createAction<number>("setZoom");
export const zoomIn = createAction("zoomIn");
export const zoomOut = createAction("zoomOut");

export const enableAlternative = createAction<Alternatives>(
  "enableAlternative"
);
export const disableAlternative = createAction<Alternatives>(
  "disableAlternative"
);
