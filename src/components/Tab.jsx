import React from 'react'
import {Grid, Header, Tab} from 'semantic-ui-react'
import {SecondPane, TopCard, ThreePane, FourPane} from './index'
import "../styles/style.scss"

const panel = [
    {
        menuItem:
            <div className='tabHeader'>
                <Header as='h2'>Popüler Olanlar</Header>
            </div>
    },
    {
        menuItem: 'Yayın Akışı',
        render: () => <Tab.Pane attached={false}><TopCard/></Tab.Pane>
    },
    {
        menuItem: 'Televizyonda',
        render: () => <Tab.Pane attached={false}><SecondPane/></Tab.Pane>
    },
    {
        menuItem: 'Kiralık',
        render: () => <Tab.Pane attached={false}><ThreePane/></Tab.Pane>
    },
    {
        menuItem: 'Sinemalarda',
        render: () => <Tab.Pane attached={false}><FourPane/></Tab.Pane>
    },
]

export default class TabPanel extends React.Component {

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
