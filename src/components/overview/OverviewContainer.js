import React, {Component} from 'react'
//route related components
import {Link,Route} from 'react-router-dom'
//route component page
import List from './List'
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
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span><Icon type="user" />subnav 1</span>
                            }
                        >
                            <Menu.Item key="1"><Link to="/overview/now_playing/1">Now Playing</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/overview/top_rated/1">Top Rated</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/overview/upcoming/1">Up Coming</Link></Menu.Item>
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
                        <Route path="/overview/:type/:page" component={List}/>
                    </div>
                    {/*/!*<Content*!/*/}
                        {/*/!*style={{*!/*/}
                            {/*/!*background: '#fff',*!/*/}
                            {/*/!*padding: 24,*!/*/}
                            {/*/!*margin: 0,*!/*/}
                        {/*/!*}}*!/*/}
                    {/*/!*>*!/*/}
                        {/*<Route path="/overview/:type/:page" component={List}/>*/}
                    {/*</Content>*/}
                </Layout>
            </Layout>
        )
    }
}