import React, {Component} from 'react'
import {Grid, Header, Segment} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

class Ust extends Component {
    render() {
        return (
            <Grid centered padded>
                <Grid.Row>
                    <Segment basic size='mini'>
                        <Header as='h1' color='blue' dividing>Front-End Developer Değerlendirme Ödevi</Header>
                    </Segment>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Ust
