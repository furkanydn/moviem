import React, {Component} from 'react'
import {Button, Header, Segment, Tab} from 'semantic-ui-react'
import { FreePaneOne, FreePaneTwo} from './index'

const panel = [
    {
        menuItem:
            <div className='tabHeader'>
                <Header as='h2'>İzlemek Ücretsiz</Header>
            </div>
    },
    {
        menuItem: (
            <Segment basic size='mini'>
                <Button
                    className='tabButActive'>
                    <span className='spanned'>Filmler</span>
                </Button>
            </Segment>
        ),
        render: () => <Tab.Pane attached={false}>
            <FreePaneOne/>
        </Tab.Pane>
    },
    {
        menuItem: (
            <Segment basic size='mini'>
                <Button
                    className='tabBut'>
                    <span className='tabBut'>TV</span>
                </Button>
            </Segment>
        ),
        render: () => <Tab.Pane attached={false}>
            <FreePaneTwo/>
        </Tab.Pane>
    }
]

class AltTabPanel extends Component {

    handleTab = (e, { activeItemIndex }) => this.setState({ activeItemIndex })

    render() {

        return (
            <Tab
                menu={{secondary: true}}
                panes={panel}
                defaultActiveIndex={1}/>
        )
    }
}

export default AltTabPanel
