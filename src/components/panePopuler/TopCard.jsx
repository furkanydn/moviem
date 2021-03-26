import React, {Component, useState, useEffect} from 'react'
import LazyLoadImage from 'react-lazy-load-image-component'
import Circle from 'react-circle'
import {Card, Dropdown, Grid, Icon, Segment} from "semantic-ui-react";
import "../../styles/style.scss"
import apiC from "../../actions/apiControl";
import Req from "../../actions/requests";

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

function GET_MOVIES({fetchURL}){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const request = apiC.get(Req.fetchPopulerOne)
        setMovies(request.data.results)
        console.log(request.data.results)
        return request
    }, [fetchURL])
}

class TopCard extends Component{
    state: { loading: boolean };

    handleChange = ( e, { clickedQuery }) => this.setState({ clickedQuery })

    constructor(props) {
        super(props);

        this.state = {
            filmPopuler: [],
        }
    }

    componentDidMount() {
        const request = apiC.get(Req.fetchPopulerOne)
        this.state.filmPopuler(request.data.results)
        console.log(this.state.filmPopuler)
    }


    render() {
        const { scrollPosition } = this.props;

        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column width={12} className='scrolling'>
                            {
                                console.log(this.sa)
                                // this.state.filmPopuler.map(film =>
                                //     <Segment basic size='mini'>
                                //         <LazyLoadImage
                                //             alt={film.title}
                                //             scrollPosition={scrollPosition}
                                //             src={IMAGE_URL + film.resim}
                                //         />
                                //         <div className='circle'>
                                //             <div className='circleItem'>
                                //                 <Circle
                                //                     animate={true}
                                //                     animationDuration="1s"
                                //                     responsive={true}
                                //                     size="1"
                                //                     lineWidth="20"
                                //                     progressColor='greenUp'
                                //                     progress={film.oyOrt * 10}
                                //                     textStyle={{
                                //                         font: 'bold 8rem sans-serif'
                                //                     }}
                                //                     textColor="#fff"
                                //                 />
                                //             </div>
                                //         </div>
                                //
                                //         <Dropdown
                                //             onChange={this.handleChange}
                                //             className='ideaIconT'
                                //             trigger={trigger}
                                //             options={options}
                                //             lazyLoad
                                //             icon={null}
                                //             value={this.clickedQuery}>
                                //         </Dropdown>
                                //
                                //         <Card
                                //             href={MOVIE + film.id}
                                //         >
                                //             <Card.Content>
                                //                 <Card.Header>{film.baslik}</Card.Header>
                                //                 <Card.Meta>{film.cikis}</Card.Meta>
                                //             </Card.Content>
                                //         </Card>
                                //     </Segment>
                                // )
                            }
                        )
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default TopCard
