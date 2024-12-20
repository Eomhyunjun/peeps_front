'use client'

import { getBadgeList } from '@/src/common/api/admin'
import { isAdminAtom } from '@/src/common/recoil/adminAtom'
import { AdminBadgeListAtom } from '@/src/common/recoil/badgeAtom'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

type Props = {
  children: React.ReactNode
}

export default function DataWrapperForAdminBadgePage({ children }: Props) {
  const setBadgeData = useSetRecoilState<CommonBadge_T[]>(AdminBadgeListAtom)
  const isAdmin = useRecoilValue<boolean>(isAdminAtom)

  const { data: badgeDataQuery, isSuccess } = useQuery({
    queryKey: ['admin', 'badge'],
    queryFn: async () => await getBadgeList(),
    enabled: isAdmin,
  })

  useEffect(() => {
    if (isSuccess) {
      setBadgeData(badgeDataQuery)
    }
  }, [badgeDataQuery])

  return <>{children}</>
}
