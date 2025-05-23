'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import Button from '@/src/common/components/Btn/Button'
import { LogedInUserReqDataAtom } from '@/src/common/recoil/userAtom'
import { LoginUserData_T } from '@/src/common/types/user'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import EditProfileModal from './EditProfileModal'
import { OwnerProfile_T } from '@/src/common/types/owner'
import { OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'

/**
 * 팔로우 & 프로필 보기 버튼
 */

type FollowAndProfileButtonProps = {
  isOwner: boolean
}

type isFollow = -1 | 0 | 1 // -1: 로그인 안됨, 0: 팔로우 안함, 1: 팔로우 중

export function FollowAndProfileButton({ isOwner }: FollowAndProfileButtonProps) {
  const loginedUserData = useRecoilValue<LoginUserData_T>(LogedInUserReqDataAtom)
  const ownerData = useRecoilValue<OwnerProfile_T>(OwnerProfileStateAtom)

  const [isEditOpen, setIsEditOpen] = useState(false)
  const queryClient = useQueryClient()

  const handleFollowClick = () => {
    handleEditProfile()
  }

  const isFollow: isFollow = ownerData.isFollow ?? -1

  async function handleEditProfile() {
    // 로그인 검증
    if (!loginedUserData.user_data.user_seq) alert('로그인이 필요합니다.')

    // isFollow
    if (isFollow === 0) {
      const { data, status } = await axiosWithAuth.post(`${ownerData.user_seq}/follow`)
      if (status === 201) {
        queryClient.invalidateQueries({ queryKey: ['userData'] })
        queryClient.invalidateQueries({ queryKey: ['LoginUserFollowList'] })
      }
    } else if (isFollow === 1) {
      const { data, status } = await axiosWithAuth.delete(`${ownerData.user_seq}/unfollow`)
      if (status === 200) {
        queryClient.invalidateQueries({ queryKey: ['userData'] })
        queryClient.invalidateQueries({ queryKey: ['LoginUserFollowList'] })
      }
    }
  }

  return (
    <div className="mt-[1rem] flex items-center gap-[10px] text-center">
      {isOwner ? (
        <Button
          title="프로필 수정"
          onClickFn={() => setIsEditOpen(true)}
          styles={
            isFollow
              ? 'bg-blue-primary text-white hover:bg-blue-primaryHover'
              : 'bg-blue-secondary text-white hover:bg-blue-secondaryHover'
          }
        />
      ) : (
        <Button
          title={isFollow === 1 ? '팔로우 중' : '팔로우'}
          onClickFn={handleFollowClick}
          styles={
            isFollow
              ? 'bg-blue-primary text-white hover:bg-blue-primaryHover'
              : 'bg-blue-secondary text-white hover:bg-blue-secondaryHover'
          }
        />
      )}

      {isEditOpen && <EditProfileModal setIsOpen={setIsEditOpen} />}
    </div>
  )
}
