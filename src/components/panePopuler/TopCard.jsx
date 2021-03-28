import React from 'react'
import axios from "axios";
import {Grid} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import "../../styles/style.scss"
import Req from "../../actions/requests";
import LazyImage from "../lazyimage";
import {PieChart} from "react-minimal-pie-chart";


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
        const { isLoaded } = this.state;

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
                                            <a  href={MOVIE_URL + data.id}>
                                                <LazyImage
                                                    srcset={IMAGE_URL + data.poster_path}
                                                    src={IMAGE_URL + data.poster_path}
                                                    alt={data.original_title}
                                                    width="200"
                                                    height="300"
                                                />
                                            </a>
                                        </div>
                                        <div className="outchart">
                                            <div className="chart">
                                                <PieChart
                                                    data={[{
                                                        value:data.vote_average * 10,
                                                        color: (data.vote_average * 10 > 70 ? '#21D07A':data.vote_average * 10 > 50 ? '#D2D531':'#D93B63')
                                                    }]}
                                                    totalValue={100}
                                                    lineWidth={18}
                                                    label={({dataEntry}) => `${Math.round(data.vote_average *10)} %`}
                                                    labelStyle={{
                                                        fontSize:'2.5em',
                                                        fontFamily: 'Arial, sans-serif',
                                                        fill: "#fff",
                                                    }}
                                                    labelPosition={40}
                                                    animate
                                                    rounded
                                                />
                                            </div>
                                        </div>
                                        <br/>
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
