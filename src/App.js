import React, {Component} from 'react';
import './App.css';

//import router component
import {HashRouter, Route, Link} from 'react-router-dom'

//import UI from antd
import {Layout, Menu} from 'antd'
const { Header, Content, Footer } = Layout;

// //import component
// import NavBar from './components/NavBar'
// import Button from './components/Button'
// import Input from './components/Input'
// import NavButton from './components/NavButton'

//Home Page

class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <HashRouter>
                <Layout className="layout" style={{height:'100%'}}>

                    {/*Header*/}
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">About</Menu.Item>
                            <Menu.Item key="3">Overview</Menu.Item>
                            <Menu.Item key="4">Contact</Menu.Item>
                        </Menu>
                    </Header>

                    {/*Content*/}
                    <Content style={{ padding: '0 50px', background: '#fff'}}>
                        {/*<div style={{ background: '#fff', padding: 24, minHeight: 280, height:'100%'}}>Content</div>*/}
                        Home Page(modify the padding if needed)
                    </Content>

                    {/*Footer*/}
                    <Footer style={{ textAlign: 'center' }}>React Project ©2019 Created by Ruyue and Yufei</Footer>
                </Layout>
            </HashRouter>
        );
    }
}


export default App;
