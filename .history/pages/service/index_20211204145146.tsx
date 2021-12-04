import type { GetServerSideProps, NextPage } from "next";
import Layout from "../../partials/layout";
import SSRProvider from "react-bootstrap/SSRProvider";
import style from "./service.module.css";
import { Container } from "react-bootstrap";
import ListServices from "./components/list-services/list-services";
import { getInfoPage, getServices } from "../../core/apis";

const Service: NextPage = (props:any) => {
    return (
        <SSRProvider>
            <Layout info title="Belle Palace Deptford – Belle Palace of Deptford – Belle Palace Deptford – Belle Palace of Deptford">
                <div className={style.bg}>
                    <div className={style.overlayWhite}>
                        <Container className={style.container}>
                            <div className={style.heading}>
                                <h2 className="color-primary">Our Services</h2>
                            </div>
                            <ListServices data={props.res.services}/>
                            
                        </Container>
                    </div>
                </div>
            </Layout>
        </SSRProvider>
    );
};
export const getServerSideProps: GetServerSideProps = async () => {
    const serviecs = await getServices()
    const infoPage = await getInfoPage()
    return {
        props: {
            res: {
                infoPage,
                serviecs
            }
        }
    }
}
export default Service;
