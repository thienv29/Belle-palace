import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Layout from '../partials/layout'
import SSRProvider from 'react-bootstrap/SSRProvider';
import SlideShow from './components/slide-show/slide-show';
import OurService from './components/our-service/our-service';
import AboutUs from './components/about-us/about-us';
import Calendar from './components/calendar/calendar';
import { useRouter } from 'next/dist/client/router';
import { searchAll } from '../core/utils/search';
import { Container } from 'react-bootstrap';
import Search from './components/search/search';
import { useEffect } from 'react';
import Certificate from './components/certificate/certificate';


const Home: NextPage = (props: any) => {
 
  if (props.data) {
    console.log(props.data);
    return (
      <SSRProvider>
        <Layout title="Belle Palace Deptford – Belle Palace of Deptford – Belle Palace Deptford – Belle Palace of Deptford">
        <Search param={props.param} listData={props.data}/>
        </Layout>
      </SSRProvider>
    )
  }
 
  return (
    <SSRProvider>
      <Layout title="Belle Palace Deptford – Belle Palace of Deptford – Belle Palace Deptford – Belle Palace of Deptford">
        <SlideShow />
        <OurService />
        <AboutUs />
        <Calendar />
        <Certificate/>
      </Layout>
    </SSRProvider>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pramSearch = context.query.s
  if (pramSearch) {
    const listData = searchAll(pramSearch.toString())
    return {
      props: {
        param:pramSearch,
        data: listData
      }
    }
  }
  return {
    props: {
      data: null
    }
  }
}

export default Home
