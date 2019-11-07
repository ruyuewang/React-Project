import React, {Component} from 'react'
import Menu from 'antd/es/menu'

//NavBar in the main page
export default class NavBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentKey: '/',
            navData:[
                {
                    key:'/',
                    pathname: '/',
                    name:'Home'
                },
                {
                    key:'/overview',
                    pathname: '/overview',
                    name:'Overview'
                },
                {
                    key:'/about',
                    pathname: '/about',
                    name:'About'
                },
                {
                    key:'/contact',
                    pathname: '/contact',
                    name:'Contact'
                }
            ]
        }
    }

    render(){
        return(
            <div className='navBar'
                 style = {{color: "white", backgroundColor: "Blue"}}
            >
                <Menu/>
            </div>
        )
    }
}
