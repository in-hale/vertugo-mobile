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
