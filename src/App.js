import React, {Component} from 'react';
import './App.css';
//import router component
import {HashRouter, Route, Link} from 'react-router-dom'
//import route components
import HomeContainer from './components/home/HomeContainer'
import AboutContainer from './components/about/AboutContainer'
import OverviewContainer from './components/overview/OverviewContainer'
import ContactContainer from './components/contact/ContactContainer'
//import UI from antd
import {Layout, Menu} from 'antd'

const {Header, Content, Footer} = Layout;

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
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="movie"><Link to="/home">Home</Link></Menu.Item>
                            <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="overview"><Link to="/overview/now_playing/1">Overview</Link></Menu.Item>
                            <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
                        </Menu>
                    </Header>

                    {/*Content*/}
                    <Content style={{ padding: '0px', background: '#fff', flex: 1}}>
                        <Route path="/home" component={HomeContainer}/>
                        <Route path="/about" component={AboutContainer}/>
                        <Route path="/overview" component={OverviewContainer}/>
                        <Route path="/contact" component={ContactContainer}/>
                    </Content>

                    {/*Footer*/}
                    <Footer style={{ textAlign: 'center' }}>React Project ©2019 Created by Ruyue and Yufei</Footer>
                </Layout>
            </HashRouter>
        );
    }
}


export default App;
