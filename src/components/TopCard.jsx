import React, {Component} from 'react'
import axios from "axios";
import Carousel from "react-multi-carousel"
import Lazyload from 'react-lazyload'
import Circle from 'react-circle'
import "react-multi-carousel/lib/styles.css"
import {Card, Dropdown, Grid, Icon, Image, Label, Segment} from "semantic-ui-react";
import "../styles/style.scss"

const API = 'https://api.themoviedb.org/4/list/1?page=1'
const API_KEY = '&api_key=1a6c5679f1a870fdd2b486f96e6bd7ff'
const MOVIE = 'https://www.themoviedb.org/movie/'
const IMAGE_URL = 'http://image.tmdb.org/t/p/w185/'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};
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

export default class TopCard extends Component{
    state = {
        filmPopuler: []
    }

    handleChange = ( e, { clickedQuery }) => this.setState({ clickedQuery })


    constructor(props) {
        super(props);

        axios.get(API + API_KEY)
            .then(sonuc => {
                const filmPopuler = sonuc.data.results.map(
                    obje => ({
                        baslik: obje.original_title,
                        ozet: obje.overview,
                        oyOrt: obje.vote_average,
                        cikis: obje.release_date,
                        resim: obje.poster_path,
                        no: obje.id
                    })
                )
                this.setState({
                    filmPopuler
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { clickedQuery } = this.state

        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column width={12}>
                        <Lazyload>
                        <Carousel
                            additionalTransfrom={0}
                            centerMode={false}
                            containerClass="container"
                            dotListClass=""
                            focusOnSelect={true}
                            infinite={false}
                            keyBoardControl
                            minimumTouchDrag={100}
                            showDots={false}
                            swipeable={true}
                            draggable={true}
                            responsive={responsive}>
                            {
                                this.state.filmPopuler.map(data =>(
                                    <Segment basic size='mini'>
                                        <Image
                                            fluid
                                            rounded
                                            className='panelItemBack'
                                            src={IMAGE_URL + data.resim}
                                            data-thumb={IMAGE_URL + data.resim}
                                            size='medium'
                                            label={{
                                                className: 'dot',
                                                corner: 'right',
                                                icon: 'idea'}}
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
                                                    progress={data.oyOrt * 10}
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
                                            value={clickedQuery}>
                                        </Dropdown>

                                        <Card
                                            href={MOVIE + data.id}
                                        >
                                            <Card.Content>
                                                <Card.Header>{data.baslik}</Card.Header>
                                                <Card.Meta>{data.cikis}</Card.Meta>
                                            </Card.Content>
                                        </Card>



                                    </Segment>
                                ))
                            }
                        </Carousel>
                        </Lazyload>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
