export const MAP_PREVIEW_PLACE = 'MAP_PREVIEW_PLACE'
export const MAP_CLOSE_PREVIEW = 'MAP_CLOSE_PREVIEW'

export const previewPlace = (id) => dispatch => {
  // GET Request
  dispatch({
    type: MAP_PREVIEW_PLACE,
    payload: {
      id: 1,
      rating: 4.5,
      name: "McDonald's",
      images: [],
      reviewCount: 10,
      reviews: [],
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



export const closePreview = () => ({
  type: MAP_CLOSE_PREVIEW,
  payload: {},
})
