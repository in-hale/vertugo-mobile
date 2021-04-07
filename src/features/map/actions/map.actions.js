import { navigate, mapZoomToLocationWithOffset } from "../../../navigation/rootNavigation";
import * as api from "../../../api/map";

export const MAP_PREVIEW_PLACE = 'MAP_PREVIEW_PLACE'
export const MAP_CLOSE_PREVIEW = 'MAP_CLOSE_PREVIEW'
export const LOAD_OVERVIEW_PINS = 'LOAD_OVERVIEW_PINS'
export const VIEW_PLACE = 'VIEW_PLACE'
export const LOAD_FAVOURITES = 'LOAD_FAVOURITES'
export const SET_FILTERS = 'SET_FILTERS'

export const previewPlace = (id) => dispatch => {
  api.getPlacePreview(id).then(result => {
    const selectedPlace = result.data.allPlaces[0]

    dispatch({
      type: MAP_PREVIEW_PLACE,
      payload: selectedPlace
    })
    navigate('HomeMap')
    mapZoomToLocationWithOffset(selectedPlace.location, {
      x: 0,
      y: -0.004
    })
  })
}

export const closePreview = () => ({
  type: MAP_CLOSE_PREVIEW,
  payload: {},
})

export const loadOverviewPins = filters => dispatch => {
  const apiFriendlyFilters = Object.fromEntries(
    filters.map(f => [f.name, f.value])
  )

  api.getOverviewPins(apiFriendlyFilters).then(result => {
    dispatch({
      type: LOAD_OVERVIEW_PINS,
      payload: {
        overviewPins: result.data.allPlaces
      }
    })
  })
}

export const viewPlace = id => dispatch => {
  api.getPlace(id).then(result => {
    const selectedPlace = result.data.allPlaces[0]

    dispatch({
      type: VIEW_PLACE,
      payload: selectedPlace
    })
    navigate('PlaceView')
  })
}

export const loadFavourites = () => dispatch => {
  api.getFavourites().then(result => {
    dispatch({
      type: LOAD_FAVOURITES,
      payload: {
        favourites: result.data.allPlaces
      }
    })
  })
}

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: {
    filters
  }
})
