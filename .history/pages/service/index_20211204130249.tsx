import type { GetServerSideProps, NextPage } from "next";
import Layout from "../../partials/layout";
import SSRProvider from "react-bootstrap/SSRProvider";
import style from "./service.module.css";
import { Container } from "react-bootstrap";
import LineOver from "../components_shared/line-over/line-over";
import axios from "axios";
import ListServices from "./components/list-services/list-services";

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
                            <ListServices data={props.res.result}/>
                            
                        </Container>
                    </div>
                </div>
            </Layout>
        </SSRProvider>
    );
};
export const getServerSideProps: GetServerSideProps = async () => {
    
    const data = await get
    return {
        props: {
            res: data.data
        }
    }
}
export default Service;