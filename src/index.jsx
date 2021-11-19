import React from "react";
import ReactDOM from "react-dom";
import { Layout, Row, Col } from "antd";

import "antd/dist/antd.css";
import "./index.css";

import { ToDo } from "./components/ToDo";

const { Header, Footer, Content } = Layout;

const App = () => {
    return (
        <Layout>
            <Header>
                <Content>
                    <Row>
                        <Col span={12} offset={6} className="todo">
                            <ToDo></ToDo>
                        </Col>
                    </Row>
                </Content>
                <Footer></Footer>
            </Header>
        </Layout>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));