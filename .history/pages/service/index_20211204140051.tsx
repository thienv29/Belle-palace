import type { GetServerSideProps, NextPage } from "next";
import Layout from "../../partials/layout";
import SSRProvider from "react-bootstrap/SSRProvider";
import style from "./service.module.css";
import { Container } from "react-bootstrap";
import ListServices from "./components/list-services/list-services";
import { getServices } from "../../core/apis";

const Service: NextPage = (props:any) => {
    return (
        <SSRProvider>
            <Layout title="Belle Palace Deptford – Belle Palace of Deptford – Belle Palace Deptford – Belle Palace of Deptford">
                <div className={style.bg}>
                    <div className={style.overlayWhite}>
                        <Container className={style.container}>
                            <div className={style.heading}>
                                <h2 className="color-primary">Our Services</h2>
                            </div>
                            <ListServices data={props.res}/>
                            
                        </Container>
                    </div>
                </div>
            </Layout>
        </SSRProvider>
    );
};
export const getServerSideProps: GetServerSideProps = async () => {
    
    const data = await getServices()
    log
    return {
        props: {
            res: data
        }
    }
}
export default Service;
