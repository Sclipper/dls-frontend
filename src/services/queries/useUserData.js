// @flow

import { useQuery } from 'react-query'
import { getUserData } from 'services/api'

export function useUserData(email) {
  return useQuery(['userData'], () => getUserData({ email }), {
    refetchOnWindowFocus: false,
    retry: false,
  })
}
