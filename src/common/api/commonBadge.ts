import { CommonBadge_T } from '../types/commonBadge'
import { axiosWithAuth } from './instance'

export async function getCommonBadgeData(badgeId: string) {
  const { data, status } = await axiosWithAuth.get<CommonBadge_T>(`/badge/${badgeId}`)

  if (status === 404) {
    return null
  }

  return data
}