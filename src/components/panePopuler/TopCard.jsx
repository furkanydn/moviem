import React from 'react'
import axios from "axios";
import Circle from 'react-circle'
import {Grid} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import "../../styles/style.scss"
import Req from "../../actions/requests";
import LazyImage from "../lazyimage";


const MOVIE_URL= 'https://www.themoviedb.org/movie/'
const IMAGE_URL= 'http://image.tmdb.org/t/p/w500/'

class TopCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoaded: false,
        }
    }

    fetchAPI = () => {
        this.setState({isLoaded: true})
        return axios.get(Req.fetchPopulerOne)
            .then(response => {
                console.log(response)
                this.setState({ movies: response.data.results,isLoaded: true,})
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    componentDidMount() {
        this.fetchAPI()
    }

    render() {
        const { isLoaded,movies } = this.state;

        if(!isLoaded){
            return <div>Yukleniyor...</div>
        } else {
            return (
                <Grid>
                    <div className="grido">
                        <div className="scroll-container">
                        {
                            this.state.movies.map(data =>(
                                <div className="ui basic segment segcion">
                                    <div className="card">
                                        <div className="image">
                                            <LazyImage
                                                srcset={IMAGE_URL + data.poster_path}
                                                src={IMAGE_URL + data.poster_path}
                                                alt={data.original_title}
                                                width="200"
                                                height="300"
                                                />
                                        </div>
                                        <div className="content">
                                            <div className="header vonheader">{data.title}</div>
                                        </div>
                                        <div className="extra content">
                                            <span className="right floated">{data.release_date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </Grid>
            )
        }
    }
}

export default TopCard
