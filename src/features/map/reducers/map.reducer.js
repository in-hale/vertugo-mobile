import {
  MAP_PREVIEW_PLACE,
  MAP_CLOSE_PREVIEW,
  LOAD_OVERVIEW_PINS,
  VIEW_PLACE,
  LOAD_FAVOURITES,
  SET_FILTERS,
  UPDATE_ADS,
} from '../actions/map.actions';

const initialState = {
  viewedPlace: {},
  filters: [],
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_PREVIEW_PLACE: {
      return {
        ...state,
        isPreviewActive: true,
        overviewPins: state.overviewPins.map((pin) => {
          if (pin.id == action.payload.id) {
            pin.isSelected = true;
          } else {
            pin.isSelected = undefined;
          }
          return pin;
        }),
        previewedPlace: action.payload,
      };
    }
    case MAP_CLOSE_PREVIEW: {
      return {
        ...state,
        isPreviewActive: false,
        overviewPins: state.overviewPins.map((pin) => {
          pin.isSelected = undefined;
          return pin;
        }),
        previewedPlace: undefined,
      };
    }
    case LOAD_OVERVIEW_PINS: {
      return {
        ...state,
        overviewPins: action.payload.overviewPins,
      };
    }
    case VIEW_PLACE: {
      return {
        ...state,
        viewedPlace: action.payload,
      };
    }
    case LOAD_FAVOURITES: {
      return {
        ...state,
        favourites: action.payload.favourites,
      };
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: action.payload.filters,
      };
    }
    case UPDATE_ADS: {
      const ads = state.overviewPins.map((pin) => pin.advertisements).flat().filter((e) => e);
      const currentAd = state.currentAd || ads[ads.length - 1];
      const currentAdIndex = ads.findIndex((ad) => ad.id === currentAd.id);
      const nextAdIndex = currentAdIndex + 1 >= ads.length ? 0 : currentAdIndex + 1;

      return {
        ...state,
        currentAd: ads[nextAdIndex],
      };
    }
    default: {
      return state;
    }
  }
};

export default mapReducer;
