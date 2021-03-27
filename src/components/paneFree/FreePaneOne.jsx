import React, {Component} from 'react'
import Circle from 'react-circle'
import {Card, Dropdown, Grid, Icon, Segment} from "semantic-ui-react";
import "../../styles/style.scss"

const MOVIE = 'https://www.themoviedb.org/movie/'
const IMAGE_URL = 'http://image.tmdb.org/t/p/w185/'

const trigger = (
    <Icon name='idea'/>
)
const options= [
    {
        key: 1,
        icon:'thumbs up outline',
        value: 1
    },
    {
        key: 2,
        icon:'thumbs down outline',
        value: 2
    }
]

const ChangeColor = () => {
    // eslint-disable-next-line no-unused-vars
    const [progressColor, setProgressColor] = React.useState();

    return progressColor
}

class FreePaneOne extends Component{
    state = {
        filmFree: [],
    }

    handleChange = ( e, { clickedQuery }) => this.setState({ clickedQuery })


    render() {
        const { clickedQuery } = this.state

        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column className="uicolumn" width={12}>
                                {/*{*/}
                                {/*    this.state.filmFree.map(data =>(*/}
                                {/*        <Segment basic size='mini'>*/}
                                {/*            <LazyLoadImage*/}
                                {/*                alt={data.title}*/}
                                {/*                src={IMAGE_URL + data.resim}*/}
                                {/*                scrollPosition={{ x: 0, y: 0 }}*/}
                                {/*            />*/}
                                {/*            <div className='circle'>*/}
                                {/*                <div className='circleItem'>*/}
                                {/*                    <Circle*/}
                                {/*                        animate={true}*/}
                                {/*                        animationDuration="1s"*/}
                                {/*                        responsive={true}*/}
                                {/*                        size="1"*/}
                                {/*                        lineWidth="20"*/}
                                {/*                        progressColor={ChangeColor}*/}
                                {/*                        progress={data.oyOrt * 10}*/}
                                {/*                        textStyle={{*/}
                                {/*                            font: 'bold 8rem sans-serif'*/}
                                {/*                        }}*/}
                                {/*                        textColor="#fff"*/}
                                {/*                    />*/}
                                {/*                </div>*/}
                                {/*            </div>*/}

                                {/*            <Dropdown*/}
                                {/*                onChange={this.handleChange}*/}
                                {/*                className='ideaIconT'*/}
                                {/*                trigger={trigger}*/}
                                {/*                options={options}*/}
                                {/*                lazyLoad*/}
                                {/*                icon={null}*/}
                                {/*                value={clickedQuery}>*/}
                                {/*            </Dropdown>*/}

                                {/*            <Card*/}
                                {/*                href={MOVIE + data.id}*/}
                                {/*            >*/}
                                {/*                <Card.Content>*/}
                                {/*                    <Card.Header>{data.baslik}</Card.Header>*/}
                                {/*                    <Card.Meta>{data.cikis}</Card.Meta>*/}
                                {/*                </Card.Content>*/}
                                {/*            </Card>*/}
                                {/*        </Segment>*/}
                                {/*    ))*/}
                                {/*}*/}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default FreePaneOne
