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
      images: [
        'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/10/mcdonalds-exterior.jpg?resize=1250%2C702&ssl=1',
        'https://www.marconfitout.com/wp-content/uploads/2014/10/McDonalds-Glenmachen-Street-1.jpg'
      ],
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
