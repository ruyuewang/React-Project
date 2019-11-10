import React, {Component} from 'react'
import { Spin, Alert } from 'antd'
import Item from './Item'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[], //movie list
            currentPage: parseInt(props.match.params.page)|| 1, //current page number
            pageSize: 14,
            total: 0,
            isLoading: true,//true: is loading
            movieType: props.match.params.type
        }
    }

    componentWillMount() {
        this.loadMovieListByType()
    }

    render() {
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }

    loadMovieListByType = () => {
        // const start = this.state.pageSize*(this.state.currentPage - 1);
        // const url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`;
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data =>{
        //         console.log(data);
        //         this.setState({
        //             isLoading: false,
        //             movies:data.subjects,
        //             total: data.total
        //         })
        //     });
        const data = require('../data/top250');
        setTimeout(()=>{
            this.setState({
                isLoading: false,
                movies:data.subjects,
                total: data.total
            })
        }, 1000)
    };


    renderList = () => {
        if(this.state.isLoading) {
            return(
            <Spin tip="Loading...">
                <Alert
                    message="Requesting Movie Data"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>)
        }else {
            return(
                <div style={{display: 'flex', flexWrap:'wrap'}}>
                    {this.state.movies.map(item => {
                        return(
                            <Item {...item} key={item.id}/>
                        )
                    })}
                </div>
            )

        }
    }


}

//use fetch API to get data, fetch API is base on Promise