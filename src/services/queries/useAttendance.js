// @flow

import { useQuery } from 'react-query'
import { getAttendance } from 'services/api'

export function useAttendance(email) {
  return useQuery(['useAttendance'], () => getAttendance({ email }), {
    refetchOnWindowFocus: false,
    retry: false,
  })
}
