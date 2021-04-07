import { navigate, mapZoomToLocationWithOffset } from "../../../navigation/rootNavigation";
import * as api from "../../../api/map";

export const MAP_PREVIEW_PLACE = 'MAP_PREVIEW_PLACE'
export const MAP_CLOSE_PREVIEW = 'MAP_CLOSE_PREVIEW'
export const LOAD_OVERVIEW_PINS = 'LOAD_OVERVIEW_PINS'
export const VIEW_PLACE = 'VIEW_PLACE'
export const LOAD_FAVOURITES = 'LOAD_FAVOURITES'
export const SET_FILTERS = 'SET_FILTERS'

// TODO: remove
const place1 = {
  id: 1,
  rating: 4.5,
  name: "McDonald's",
  imageUrls: [
    'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/10/mcdonalds-exterior.jpg?resize=1250%2C702&ssl=1',
    'https://www.marconfitout.com/wp-content/uploads/2014/10/McDonalds-Glenmachen-Street-1.jpg'
  ],
  reviewsCount: 3,
  reviews: [
    {
      id: 1,
      user: {
        id: 1,
        login: 'terminator2005'
      },
      rating: 2,
      text: 'Great! Will never go there again'
    },
    {
      id: 2,
      user: {
        id: 2,
        login: 'NAGIBATOR228'
      },
      rating: 4,
      text: 'Bullshit! Liked it'
    },
    {
      id: 3,
      user: {
        id: 3,
        login: 'NAGIBATOR1337'
      },
      rating: 5,
      text: ''
    }
  ],
  isFavourite: true,
  mealCategories: [
    {
      id: 1,
      name: 'Горячие блюда',
      meals: [
        {
          id: 1,
          name: 'Биг Тейсти',
          price: 7.0,
          currency: 'BYN',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Чикен премьер',
          price: 5.5,
          currency: 'BYN',
          categoryId: 1
        }
      ]
    }
  ],
  location: {
    latitude: 53.954781,
    longitude: 27.619631
  },
  telephoneNumber: '+375296108465'
}
const place2 = {
  id: 2,
  rating: 0,
  name: "Pizza Tempo",
  imageUrls: [
    'https://www.tempo.by/img/Aisberg.jpg',
    'https://www.tempo.by/img/Nezavisimosti_78.jpg'
  ],
  reviewsCount: 0,
  reviews: [],
  isFavourite: false,
  mealCategories: [],
  location: {
    latitude: 53.946781,
    longitude: 27.608931
  }
}
const place = id => {
  switch (id) {
    case 1: return place1
    case 2: return place2
  }
}

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
  // GET request
  dispatch({
    type: VIEW_PLACE,
    payload: place(id)
  })
  navigate('PlaceView')
}

export const loadFavourites = () => dispatch => {
  dispatch({
    type: LOAD_FAVOURITES,
    payload: {
      favourites: [
        place1
      ]
    }
  })
}

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: {
    filters
  }
})
