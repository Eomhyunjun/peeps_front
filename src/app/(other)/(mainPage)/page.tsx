import CategorySection from './_components/CategorySection'
import DataWrapperForMainPage from './_components/DataWrapperForMainPage'
import Footer from './_components/Footer'
import Header from './_components/Header'
import NewUserAndClub from './_components/NewUserAndClub'
import HeroSection from './_components/Slider'

export default function Main() {
  return (
    <DataWrapperForMainPage>
      <div className="w-full bg-white">
        <Header />
        <HeroSection />
        <div className="bg-[#f5f5f5]">
          <NewUserAndClub />
        </div>
        <CategorySection />
        <Footer />
      </div>
    </DataWrapperForMainPage>
  )
}
