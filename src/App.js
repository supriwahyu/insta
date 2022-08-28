import React from 'react';
import { Layout, Image, Typography } from "antd";
import Logo from "./images/insta.png";
import Home from "./components/Home";
import styles from "./styles";
import 'antd/dist/antd.min.css';

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return (
        <Layout style={styles.layout}>
            <Header style={styles.header}>
                <Image style={styles.image} width={45} preview={false} src={Logo} />
                &nbsp;
                <Title style={styles.title}>Insta</Title>
                </Header>
                <Home />
                <Footer style={styles.footer}>
                    2022 Insta
                </Footer>
        </Layout>
    )
}

export default App;