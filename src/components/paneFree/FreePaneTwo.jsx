import React, {Component} from 'react'
import axios from "axios";
import LazyLoadImage from 'react-lazy-load-image-component'
import Circle from 'react-circle'
import "react-multi-carousel/lib/styles.css"
import {Card, Dropdown, Grid, Icon, Segment} from "semantic-ui-react";
import "../../styles/style.scss"

const API = 'https://api.themoviedb.org/4/list/7082656?page=1'
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

export default class FreePaneTwo extends Component{
    state = {
        filmFree: []
    }

    handleChange = ( e, { clickedQuery }) => this.setState({ clickedQuery })

    constructor(props) {
        super(props);

        axios.get(API + API_KEY)
            .then(sonuc => {
                const filmFree = sonuc.data.results.map(
                    obje => ({
                        baslik: obje.original_name,
                        ozet: obje.overview,
                        oyOrt: obje.vote_average,
                        cikis: obje.first_air_date,
                        resim: obje.poster_path,
                        no: obje.id
                    })
                )
                this.setState({
                    filmFree
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
                                {
                                    this.state.filmFree.map(data =>(
                                        <Segment basic size='mini'>
                                            <LazyLoadImage
                                                alt={data.title}
                                                src={IMAGE_URL + data.resim}
                                                scrollPosition={{ x: 0, y: 0 }}
                                            />
                                            <div className='circle'>
                                                <div className='circleItem'>
                                                    <Circle
                                                        animate={true}
                                                        animationDuration="1s"
                                                        responsive={true}
                                                        size="1"
                                                        lineWidth="20"
                                                        progressColor= {'sevenUp'}
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
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
