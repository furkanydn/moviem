import React, {Component} from 'react'
import {Header, Tab} from 'semantic-ui-react'
import {SecondPane, TopCard, ThreePane, FourPane} from './index'

const panel = [
    {
        menuItem:
            <div className='tabHeader'>
                <Header as='h2'>Popüler Olanlar</Header>
            </div>
    },
    {
        menuItem: 'Yayın Akışı',
        render: () => <Tab.Pane attached={false}>
            <TopCard/>
        </Tab.Pane>
    },
    {
        menuItem: 'Televizyonda',
        render: () => <Tab.Pane attached={false}>
            <SecondPane/>
        </Tab.Pane>
    },
    {
        menuItem: 'Kiralık',
        render: () => <Tab.Pane attached={false}>
            <ThreePane/>
        </Tab.Pane>
    },
    {
        menuItem: 'Sinemalarda',
        render: () => <Tab.Pane attached={false}>
            <FourPane/>
        </Tab.Pane>
    },
]

export default class TabPanel extends Component {
    state = { activeIndex: 1 }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

    render() {

        return (
            <Tab
                menu={{secondary: true}}
                panes={panel}
                defaultActiveIndex={1}/>
        )
    }
}
