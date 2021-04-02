import {MAP_PREVIEW_PLACE, MAP_CLOSE_PREVIEW, LOAD_OVERVIEW_PINS} from "../actions/map.actions";

const initialState = {}

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
        previewedPlace: undefined
      }
    }
    case LOAD_OVERVIEW_PINS: {
      return {
        ...state,
        overviewPins: action.payload.overviewPins
      }
    }
    default: {
      return state;
    }
  }
}

export default mapReducer;
