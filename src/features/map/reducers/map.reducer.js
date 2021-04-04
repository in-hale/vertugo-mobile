import {
  MAP_PREVIEW_PLACE,
  MAP_CLOSE_PREVIEW,
  LOAD_OVERVIEW_PINS,
  VIEW_PLACE,
  LOAD_FAVOURITES,
  SET_FILTERS
} from "../actions/map.actions";

const initialState = {
  viewedPlace: {},
  filters: []
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_PREVIEW_PLACE: {
      return {
        ...state,
        isPreviewActive: true,
        overviewPins: state.overviewPins.map(pin => {
          if (pin.id == action.payload.id) {
            pin.isSelected = true
          } else {
            pin.isSelected = undefined
          }
          return pin;
        }),
        previewedPlace: action.payload
      }
    }
    case MAP_CLOSE_PREVIEW: {
      return {
        ...state,
        isPreviewActive: false,
        overviewPins: state.overviewPins.map(pin => {
          pin.isSelected = undefined
          return pin;
        }),
        previewedPlace: undefined
      }
    }
    case LOAD_OVERVIEW_PINS: {
      return {
        ...state,
        overviewPins: action.payload.overviewPins
      }
    }
    case VIEW_PLACE: {
      return {
        ...state,
        viewedPlace: action.payload,
      }
    }
    case LOAD_FAVOURITES: {
      return {
        ...state,
        favourites: action.payload.favourites
      }
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: action.payload.filters
      }
    }
    default: {
      return state;
    }
  }
}

export default mapReducer;
