'use client'

import FetchUserProfileCom from '@/common/fetch/UserProfileData'

interface DataWrapperForMainPageProps {
  children: React.ReactNode
}

export default function DataWrapperForMainPage({
  children,
}: DataWrapperForMainPageProps) {
  return <FetchUserProfileCom>{children}</FetchUserProfileCom>
}
