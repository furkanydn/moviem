import React from 'react'
import {Header, Tab} from 'semantic-ui-react'
import {FreePaneOne} from './index'

const panel = [
    {
        menuItem:
            <div className='tabHeader'>
                <Header as='h2'>İzlemek Ücretsiz</Header>
            </div>
    },
    {
        menuItem: 'Yayın Akışı',
        render: () => <Tab.Pane attached={false}>
            <FreePaneOne/>
        </Tab.Pane>
    },
    {
        menuItem: 'Televizyonda',
        render: () => <Tab.Pane attached={false}>
            <FreePaneOne/>
        </Tab.Pane>
    }
]

const AltTabPanel = () => (
    <Tab menu={{secondary: true}} panes={panel} />
)

export default AltTabPanel
