import { client } from "../client";
import { gql } from '@apollo/client';

export const getOverviewPins = (filters) => {
  const variables = { filters }
  const query = gql`
    query GetOverviewPins($filters: PlaceFilter) {
      allPlaces(filters: $filters) {
        id
        location {
          latitude
          longitude
        }
      }
    }
  `

  return client.query({
    query, variables
  })
}

export const getPlacePreview = (id) => {
  const variables = { filters: { id: id } }
  const query = gql`
    query GetOverviewPins($filters: PlaceFilter) {
      allPlaces(filters: $filters) {
        id
        name
        rating
        reviewsCount
        imageUrls
        isFavourite
        location {
          latitude
          longitude
        }
      }
    }
  `

  return client.query({
    query, variables
  })
}

export const getPlace = (id) => {
  const variables = { filters: { id: id } }
  const query = gql`
    query GetOverviewPins($filters: PlaceFilter) {
      allPlaces(filters: $filters) {
        id
        name
        rating
        reviewsCount
        imageUrls
        isFavourite
        reviews {
          id
          text
          rating
          user {
            login
          }
        }
        telephoneNumber
        location {
          latitude
          longitude
        }
        mealCategories {
          id
          name
          meals {
            id
            name
            price
            currency
          }
        }
      }
    }
  `

  return client.query({
    query, variables
  })
}

export const getFavourites = () => {
  const variables = {
    filters: {
      isFavourite: true
    }
  }
  const query = gql`
    query GetOverviewPins($filters: PlaceFilter) {
      allPlaces(filters: $filters) {
        id
        name
        rating
        reviewsCount
      }
    }
  `

  return client.query({
    query, variables
  })
}
