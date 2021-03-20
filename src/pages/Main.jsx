import React,{Component} from 'react'
import {Helmet} from 'react-helmet';
import {Ust, TabPanel, AltTabPanel} from '../components/index'
import {Grid} from "semantic-ui-react";


class Main extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Moviem</title>
                </Helmet>
                <Ust/>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column>
                            <TabPanel/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <AltTabPanel/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Main
