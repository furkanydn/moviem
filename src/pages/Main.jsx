import React,{Component} from 'react'
import {Helmet} from 'react-helmet';
import {Ust} from '../components/index'

class Main extends Component {
    state={}
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Moviem</title>
                </Helmet>
                <Ust/>
                <span>Buraya yazı geliyor</span>
            </div>
        )
    }
}

export default Main