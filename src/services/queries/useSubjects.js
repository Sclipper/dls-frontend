// @flow

import { useQuery } from 'react-query'
import { getClasses } from 'services/api'

export function useSubjects() {
  return useQuery(['getClasses'], () => getClasses(), {
    refetchOnWindowFocus: false,
    retry: false,
  })
}
