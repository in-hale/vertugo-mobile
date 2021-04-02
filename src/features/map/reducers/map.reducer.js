import { MAP_PREVIEW_PLACE, MAP_CLOSE_PREVIEW } from "../actions/map.actions";

const initialState = {
  isPreviewActive: false,
  // previewedPlace: {},
  overviewPins: [
    {
      id: 1,
      location: {
        latitude: 53.954781,
        longitude: 27.619631
      }
    }
  ]
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_PREVIEW_PLACE: {
      return {
        ...state,
        isPreviewActive: true,
        previewedPlace: action.payload
      }
    }
    case MAP_CLOSE_PREVIEW: {
      return {
        ...state,
        isPreviewActive: false,
        previewedPlace: initialState.previewedPlace
      }
    }
    default: {
      return state;
    }
  }
}

export default mapReducer;
