import React, {Component} from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        fetch('http://vue.studyit.io/api/getlunbo')
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return(
            <div>
                <h1>List Page</h1>
                <h2>{this.props.match.params.type}</h2>
                <h2>{this.props.match.params.page}</h2>
            </div>
        )
    }
}

//use fetch API to get data, fetch API is base on Promise