import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Layout from '../partials/layout'
import SSRProvider from 'react-bootstrap/SSRProvider';
import SlideShow from './components/slide-show/slide-show';
import OurService from './components/our-service/our-service';
import AboutUs from './components/about-us/about-us';
import Calendar from './components/calendar/calendar';
import { searchAll } from '../core/utils/search';
import Search from './components/search/search';
import Certificate from './components/certificate/certificate';
import { getInfoPage } from '../core/apis';


const Home: NextPage = (props: any) => {
 
  if (props.param) {
    return (
      <SSRProvider>
        <Layout infoPage={props.infoPage} title="Belle Palace Deptford – Belle Palace of Deptford – Belle Palace Deptford – Belle Palace of Deptford">
        <Search param={props.param} listData={props.data}/>
        </Layout>
      </SSRProvider>
    )
  }
  
 
  return (
    <SSRProvider>
      <Layout infoPage={props.infoPage} title="Belle Palace Deptford – Belle Palace of Deptford – Belle Palace Deptford – Belle Palace of Deptford">
        <SlideShow />
        <OurService />
        <AboutUs />
        <Certificate/>
      </Layout>
    </SSRProvider>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pramSearch = context.query.s
  if (pramSearch) {
    const listData = searchAll(pramSearch.toString())
    const infoPage = await getInfoPage()
    return {
      props: {
        param:pramSearch,
        data: listData,
        infoPage: infoPage
      }
    }
  }else{
    const infoPage = await getInfoPage()
    return {
      props: {
        infoPage: infoPage
      }
    }
  }
}

export default Home
