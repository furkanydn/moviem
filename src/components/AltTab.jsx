import React, {Component} from 'react'
import {Header, Tab} from 'semantic-ui-react'
import { FreePaneOne, FreePaneTwo} from './index'

const panel = [
    {
        menuItem:
            <div className='tabHeader'>
                <Header as='h2'>İzlemek Ücretsiz</Header>
            </div>
    },
    {
        menuItem: 'Filmler',
        render: () => <Tab.Pane attached={false}>
            <FreePaneOne/>
        </Tab.Pane>
    },
    {
        menuItem: 'TV',
        render: () => <Tab.Pane attached={false}>
            <FreePaneTwo/>
        </Tab.Pane>
    }
]

class AltTabPanel extends Component {
    state = { }

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
