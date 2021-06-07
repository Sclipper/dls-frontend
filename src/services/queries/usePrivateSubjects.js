// @flow

import { useQuery } from 'react-query'
import { getUserClasses } from 'services/api'

export function usePrivateSubjects(email) {
  return useQuery(['UserClasses'], () => getUserClasses({ email }), {
    refetchOnWindowFocus: false,
    retry: false,
  })
}
