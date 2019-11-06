import React, {Component} from 'react'


//NavBar in the main page
class NavBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style = {{color: "white", backgroundColor: "Blue"}}>
                {this.props.title}
                {this.props.children}
            </div>
        )
    }
}

export default NavBar