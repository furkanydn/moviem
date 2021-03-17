import React,{Component} from 'react'
import {Helmet} from "react-helmet";

class Main extends Component{

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Moviem</title>
                </Helmet>
            </div>
        )
    }
}

export default Main