import MyProfile from '@/components/mypage'
import MyProfileFeed from '@/components/mypage/myprofilefeed'
import MyProfileHome from '@/components/mypage/myprofilehome'

export default function ProfileChange() {
  return (
    <div className="w-full overflow-auto">
      <section className="box-border flex flex-col items-start justify-start flex-1 px-0 pt-3 pb-0 text-sm text-left text-black font-detail-b">
        <div className="flex flex-col items-start self-stretch justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
            {/* 프로필 */}
            <MyProfile />
            {/* 홈 & 피드 메뉴바 */}
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-0 px-[17px] pb-px gap-[24px] shrink-0 text-center text-tiny font-inter font-bold border-solid border-gray-200 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start relative min-w-[48px]">
                <div className="overflow-hidden flex flex-row items-start justify-start py-4 px-[18px]">
                  <b className="w-3 relative flex items-center justify-center min-w-[12px]">
                    홈
                  </b>
                </div>
                <div className="w-full h-[3px] absolute !m-[0] right-[0px] bottom-[-2px] left-[0px] bg-black z-[1]" />
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start py-4 px-[18px] box-border min-w-[48px] text-dimgray-200">
                <div className="flex flex-row items-start justify-start w-4">
                  <b className="ml-[-5px] w-[26px] relative flex items-center justify-center min-w-[26px] shrink-0 [debug_commit:1de1738]">
                    피드
                  </b>
                </div>
              </div>
            </div>
            {/* 홈 */}
            <MyProfileHome />
            {/* 피드 */}
            <MyProfileFeed />
          </div>
        </div>
      </section>
    </div>
  )
}
