import React,{Component} from 'react'
import {Helmet} from 'react-helmet';
import {Ust, Populer, TopCard, TabPanel} from '../components/index'
import {Grid} from "semantic-ui-react";


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
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <TabPanel/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        )
    }
}

export default Main
