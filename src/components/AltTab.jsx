import React from 'react'
import {Grid, Header, Tab} from 'semantic-ui-react'
import {FreePaneOne, FreePaneTwo} from './index'
import "../styles/style.scss"

const panel = [
    {
        menuItem:
            <div className='tabHeader'>
                <Header as='h2'>İzlemek Ücretsiz</Header>
            </div>
    },
    {
        menuItem: 'Filmler',
        render: () => <Tab.Pane attached={false}><FreePaneOne/></Tab.Pane>
    },
    {
        menuItem: 'TV',
        render: () => <Tab.Pane attached={false}><FreePaneTwo/></Tab.Pane>
    },
]

class AltTabPanel extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Column className="coltab">
                    <Tab menu={{ secondary: true }} panes={panel} defaultActiveIndex={1} renderActiveOnly={true} />
                </Grid.Column>
            </Grid>
        )
    }
}

export default AltTabPanel
