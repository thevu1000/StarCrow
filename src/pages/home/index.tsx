import Layout from '@/components/layout/_root/Layout'
import Banner from './components/Banner'
import DailyUniform from './components/DailyUniform'
import Focus from './components/Focus'
import Section from './components/Section'
import AsicsFootwear from './components/AsicsFootwear'
import {banner1, banner2, banner3} from '@/assets/images'
import TeamSelection from './components/TeamSelection'
import Contact from '../../components/shared/Contact'


const Home = () => {
  return (
    <Layout>
      <Banner image={banner1} title='Nouveautés' description="Check'em out" className='lg:h-[75vh]'/>
      <DailyUniform />
      <Section title="Focus" link='voir tout' children={<Focus />}/>
      <Section title="News" link='check them out' children={<AsicsFootwear/>}/>
      <Banner image={banner2} title='New Patta Collection' description='ICI' className='lg:h-[75vh]'/>
      <Section title="Team Selection" link='Gear up' children={<TeamSelection/>}/>
      <Banner image={banner3} title='-30% Last chance Nike SB' description="Don't miss 'em !" className='lg:h-[75vh]'/>
      <Contact />
    </Layout>
  )
}

export default Home
