import React,{Component} from 'react'
import {Helmet} from 'react-helmet';
import {Ust, Populer, TopCard} from '../components/index'

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
                <Populer/>
                <TopCard/>
            </div>
        )
    }
}

export default Main