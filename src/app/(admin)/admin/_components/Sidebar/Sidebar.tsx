import Link from 'next/link'
import SidebarItem from './SidebarItem'

/**
 * 뱃지 페이지 - 뱃지 자체 관리 페이지 (뱃지 생성, 수정, 삭제)
 * 뱃지 발급 페이지 - 뱃지 발급 요청에 관한 페이지 (뱃지 발급 요청 승인, 거절)
 */

export default function SideBar() {
  return (
    <div className="fixed left-0 h-full w-64 bg-white text-white">
      <div className="px-5 py-5">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-[20px] font-bold text-black">Peeps</div>
        </Link>
      </div>
      <ul className="mt-5">
        <SidebarItem title="메인 페이지" url="/admin" />
        <SidebarItem title="뱃지 관리" url="/admin/badge" />
        <SidebarItem title="뱃지 발급 관리" url="/admin/badge/issue" />
      </ul>
    </div>
  )
}
