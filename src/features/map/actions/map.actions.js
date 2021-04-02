export const MAP_PREVIEW_PLACE = 'MAP_PREVIEW_PLACE'
export const MAP_CLOSE_PREVIEW = 'MAP_CLOSE_PREVIEW'
export const LOAD_OVERVIEW_PINS = 'LOAD_OVERVIEW_PINS'

export const previewPlace = (id) => dispatch => {
  if(id == 1) {
    dispatch({
      type: MAP_PREVIEW_PLACE,
      payload: {
        id: 1,
        rating: 4.5,
        name: "McDonald's",
        images: [
          'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/10/mcdonalds-exterior.jpg?resize=1250%2C702&ssl=1',
          'https://www.marconfitout.com/wp-content/uploads/2014/10/McDonalds-Glenmachen-Street-1.jpg'
        ],
        reviewCount: 10,
        reviews: [],
        isStarred: true,
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
              }
            ]
          }
        ]
      }
    })
  } else {
    dispatch({
      type: MAP_PREVIEW_PLACE,
      payload: {
        id: 2,
        rating: 3,
        name: "Pizza Tempo",
        images: [
          'https://www.tempo.by/img/Aisberg.jpg',
          'https://www.tempo.by/img/Nezavisimosti_78.jpg'
        ],
        reviewCount: 10,
        reviews: [],
        isStarred: false,
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
              }
            ]
          }
        ]
      }
    })
  }

  // GET Request

}



export const closePreview = () => ({
  type: MAP_CLOSE_PREVIEW,
  payload: {},
})

export const loadOverviewPins = () => dispatch => {
  dispatch({
    type: LOAD_OVERVIEW_PINS,
    payload: {
      overviewPins: [
        {
          id: 1,
          location: {
            latitude: 53.954781,
            longitude: 27.619631
          }
        },
        {
          id: 2,
          location: {
            latitude: 53.956781,
            longitude: 27.619931
          }
        },
        {
          id: 3,
          location: {
            latitude: 53.946781,
            longitude: 27.608931
          }
        }
      ]
    }
  })
}
