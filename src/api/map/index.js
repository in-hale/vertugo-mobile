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
