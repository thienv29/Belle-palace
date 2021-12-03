import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import head from "../../core/constants/head";
import Footer from "../footer/footer";
import Header from "../header/header";


const Layout = ({ children,pageMeta }: any) => {
    const router = useRouter()
    const meta = {
        title:'Belle Palace Deptford',
        descriptions:'',
        type:'website',
        ...pageMeta
    }
    
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={meta.description} /> 
                <meta property="og:url" content={`${head.host+ router.asPath}`}/>
                <meta property="og:type" content={meta.type}/> 
                <meta property="og:site_name" content={head.site_name}/> 
                <meta property="og:title" content={meta.title}/> 
                <link rel="icon" href="/images/Belle-Palace32.png" sizes="" />
                <link rel="icon" href="/images/Belle-Palace192.png" sizes="" />
                <link rel="apple-touch-icon" href="/images/Belle-Palace180.png"  />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <header>
                <Header  />
            </header>
            <main style={{marginTop:"113px"}}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Layout
