import ProfileCircleBadge from '@/src/common/components/Badge/ProfileCircleBadge'
import { Badge_T, BadgeAuthData_T, BadgeAuthType, BadgeDetail_T } from '@/src/common/types/badge'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import { formatDate } from '@/src/common/utils/Date/formatDate'
import NextImg from '@/src/common/utils/NextImg'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

type BadgeBoxProps = {
  badges: Badge_T[]
}

export default function BadgeBox({ badges }: BadgeBoxProps) {
  const [selectedBadge, setSelectedBadge] = useState<Badge_T | null>(null)

  useEffect(() => {
    if (badges.length <= 0) return

    setSelectedBadge(badges[0])
  }, [badges])

  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[8px] px-[14px] py-[16px] shadow-popupBox">
      <div className="kr-bold-14 text-left">뱃지</div>
      {!selectedBadge ? (
        <div>등록된 뱃지가 없습니다.</div>
      ) : (
        <>
          <CanSelectBadgeList
            badges={badges}
            selectedBadgeId={selectedBadge.bdg_id}
            setSelectedBadge={setSelectedBadge}
          />
          <div className="mt-[9px] flex flex-col gap-[30px]">
            <GlobalBadgeInfo selectedBadge={selectedBadge} />
            <BadgeDetailBox AuthDetail={selectedBadge} />
          </div>
        </>
      )}
    </div>
  )
}

/**
 * @description 뱃지 선택 가능한 리스트
 */

type BadgeListProps = {
  badges: Badge_T[]
  selectedBadgeId?: number
  setSelectedBadge: React.Dispatch<React.SetStateAction<Badge_T | null>>
}

export function CanSelectBadgeList({ badges, selectedBadgeId = -1, setSelectedBadge }: BadgeListProps) {
  return (
    <>
      <div className="flex w-full gap-[10px] overflow-x-auto border-b-[1px] border-solid border-underline px-0.5 pb-[0.4em] pt-[0.2rem]">
        {badges.map((badge) => (
          <button key={badge.bdg_id} onClick={() => setSelectedBadge(badge)}>
            <ProfileCircleBadge badge={badge} selectedBadgeId={selectedBadgeId} />
          </button>
        ))}
      </div>
    </>
  )
}

/**
 * @description 선택된 뱃지의 전체 정보
 */

export function GlobalBadgeInfo({ selectedBadge }: { selectedBadge: Badge_T | CommonBadge_T }) {
  return (
    <div className="flex justify-between gap-[20px]">
      <div className="flex gap-[10px]">
        <div className="relative h-[60px] w-[60px]">
          <NextImg alt="badge of Korea.Univ" src={selectedBadge.image} />
        </div>
        <div className="flex flex-col justify-center gap-[10px]">
          <h1 className="h-[30px] w-[6em] truncate text-left text-huge font-bold leading-[1em] tracking-[-0.01em]">
            {selectedBadge.name}
          </h1>
          <div className="font-roboto flex items-center text-detail">
            <span className="font-medium leading-[14px] tracking-[-0.01em]">인증 {selectedBadge.member_count}명</span>
            <span className="flex items-center justify-center px-[0.3em] text-center">‧</span>
            <span className="font-medium leading-[14px] tracking-[-0.01em]">
              팔로잉 {selectedBadge.followingCount ?? '-'}명
            </span>
          </div>
        </div>
      </div>
      <Link
        href={'/circle/' + selectedBadge.name}
        className="h-fit w-fit text-nowrap rounded-8xs bg-gray-dark px-[1.6em] py-[0.8em] text-detail hover:bg-gray-afterDark"
      >
        구경가기
      </Link>
    </div>
  )
}

/**
 * @description 뱃지 디테일 정보
 */

const BADGE_AUTH_TYPE: { key: BadgeAuthType; ko: string }[] = [
  { key: 'login', ko: '로그인' },
  { key: 'email', ko: '이메일' },
  { key: 'file', ko: '서류' },
  { key: 'blockchain', ko: '블록체인' },
]

type BadgeDetailBoxProps = {
  AuthDetail: Badge_T | null
}

function BadgeDetailBox({ AuthDetail }: BadgeDetailBoxProps) {
  if (!AuthDetail) return null

  const { auth } = AuthDetail
  return (
    <div className="text-dimgray-lighter0 flex flex-col gap-[12px]">
      <b className="relative flex w-32 items-center font-bold leading-[100%] tracking-[-0.01em]">상세정보</b>
      {BADGE_AUTH_TYPE.map((type) => {
        if (!auth[type.key]) return null

        const { authDay, detail } = auth[type.key] as BadgeAuthData_T

        return (
          <div className="text-dimgray-lighter0 flex flex-col gap-[12px] rounded-md bg-[#eee] p-4" key={type.key}>
            <BadgeDetail title="인증 방식" content={type.ko} />
            <BadgeDetail title="인증 날짜" content={formatDate(new Date(authDay))} />
            {detail.map((addData: BadgeDetail_T) => (
              <Fragment key={addData.title}>
                {addData.isPublic && <BadgeDetail title={addData.title} content={addData.content} />}
              </Fragment>
            ))}
          </div>
        )
      })}
    </div>
  )
}

type BadgeDetailProps = {
  title: string
  content: string
}

function BadgeDetail({ title, content }: BadgeDetailProps) {
  return (
    <div className="flex justify-between gap-[20px] text-micro">
      <span className="min-w-[47px] truncate text-left leading-[100%] tracking-[-0.01em]">{title}</span>
      <b className="min-w-[58px] truncate text-right font-bold leading-[100%] tracking-[-0.01em] text-black">
        {content}
      </b>
    </div>
  )
}
