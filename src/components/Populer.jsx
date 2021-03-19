import React,{Component} from 'react'
import {Grid, Header, Menu} from "semantic-ui-react";
import '../styles/style.scss'
import 'semantic-ui-css/semantic.min.css'

class Populer extends Component{
    state={
        activeMenuItem: 'Yayın Akışı'
    }

    handleMenuItemClick = (e, {itemName}) => this.setState({activeMenuItem: itemName})

    render() {
        const { activeMenuItem } = this.state

        return (
            <Grid padded>
                <Grid.Row stretched>
                    <Grid.Column width={3} verticalAlign='middle' textAlign='right'>
                        <Header>Popüler Olanlar</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Menu
                            secondary>
                            <Menu.Item
                                name='Yayın Akışı'
                                active={activeMenuItem === 'Yayın Akışı'}
                                onClick={this.handleMenuItemClick}
                            />
                            <Menu.Item
                                name='Televizyonda'
                                active={activeMenuItem === 'Televizyonda'}
                                onClick={this.handleMenuItemClick}
                            />
                            <Menu.Item
                                name='Kiralık'
                                active={activeMenuItem === 'Kiralık'}
                                onClick={this.handleMenuItemClick}
                            />
                            <Menu.Item
                                name='Sinemalarda'
                                active={activeMenuItem === 'Sinemalarda'}
                                onClick={this.handleMenuItemClick}
                            />
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Populer