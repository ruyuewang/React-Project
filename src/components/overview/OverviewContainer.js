import React, {Component} from 'react'
//route related components
import {Link,Route, Switch} from 'react-router-dom'
//route components page
import List from './List'
import MovieDetail from './MovieDetail'
//layout related component
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class OverviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <Layout style={{height:'100%'}}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span><Icon type="user" />subnav 1</span>
                            }
                        >
                            <Menu.Item key="now_playing"><Link to="/overview/now_playing/1">Now Playing</Link></Menu.Item>
                            <Menu.Item key="top_rated"><Link to="/overview/top_rated/1">Top Rated</Link></Menu.Item>
                            <Menu.Item key="upcoming"><Link to="/overview/upcoming/1">Up Coming</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span><Icon type="laptop" />subnav 2</span>
                            }
                        >
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ paddingLeft: '1px'}}>
                    <div>
                        {/*exact will also match each from top to bottom, so use switch instead*/}
                        <Switch>
                            <Route exact path="/overview/detail/:id" component={MovieDetail}/>
                            <Route exact path="/overview/:type/:page" component={List}/>
                        </Switch>
                    </div>
                </Layout>
            </Layout>
        )
    }
}