import React, {Component} from 'react'
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import LazyLoadImage, {trackWindowScroll} from 'react-lazy-load-image-component'
import Circle from 'react-circle'
import {Card, Dropdown, Grid, Icon, Segment} from "semantic-ui-react";
import "../../styles/style.scss"
import Style from "../../styles/_variable.scss"

const API = 'https://api.themoviedb.org/4/list/1?page=1'
const API_KEY = '&api_key=1a6c5679f1a870fdd2b486f96e6bd7ff'
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

class TopCard extends Component{
    state = {
        filmPopuler: [],
    }

    handleChange = ( e, { clickedQuery }) => this.setState({ clickedQuery })

    componentDidMount(){
        axios.get(API + API_KEY)
            .then(res => {
                const films = res.data.results
                this.setState({
                    filmPopuler : films
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { scrollPosition } = this.props;

        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column width={12}>
                        {
                            this.state.filmPopuler.map(film =>
                                <Segment basic size='mini'>
                                    <LazyLoadImage
                                        alt={film.title}
                                        afterLoad={() => console.log("Lazy-load-image")}
                                        scrollPosition={scrollPosition}
                                        src={IMAGE_URL + film.resim}
                                    />
                                    <div className='circle'>
                                        <div className='circleItem'>
                                            <Circle
                                                animate={true}
                                                animationDuration="1s"
                                                responsive={true}
                                                size="1"
                                                lineWidth="20"
                                                progressColor="rgb(30,213,169)"
                                                progress={film.oyOrt * 10}
                                                textStyle={{
                                                    font: 'bold 8rem sans-serif'
                                                }}
                                                textColor="#fff"
                                            />
                                        </div>
                                    </div>

                                    <Dropdown
                                        onChange={this.handleChange}
                                        className='ideaIconT'
                                        trigger={trigger}
                                        options={options}
                                        lazyLoad
                                        icon={null}
                                        value={this.clickedQuery}>
                                    </Dropdown>

                                    <Card
                                        href={MOVIE + film.id}
                                    >
                                        <Card.Content>
                                            <Card.Header>{film.baslik}</Card.Header>
                                            <Card.Meta>{film.cikis}</Card.Meta>
                                        </Card.Content>
                                    </Card>
                                </Segment>
                            )
                        }
                                ))
                            }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default TopCard
