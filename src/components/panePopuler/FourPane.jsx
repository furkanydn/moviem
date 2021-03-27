import React, {Component} from 'react'
import axios from "axios";
import {Grid} from "semantic-ui-react";
import "../../styles/style.scss"

const MOVIE = 'https://www.themoviedb.org/movie/'
const IMAGE_URL = 'http://image.tmdb.org/t/p/w185/'

export default class FourPane extends Component{
    state = {
        filmPopuler: []
    }

    render() {

        return (
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column width={12}>
                        {/*<LazyLoadComponent>*/}
                        {/*    <Carousel*/}
                        {/*        additionalTransfrom={0}*/}
                        {/*        centerMode={false}*/}
                        {/*        containerClass="container"*/}
                        {/*        dotListClass=""*/}
                        {/*        focusOnSelect={true}*/}
                        {/*        infinite={false}*/}
                        {/*        keyBoardControl*/}
                        {/*        minimumTouchDrag={100}*/}
                        {/*        showDots={false}*/}
                        {/*        swipeable={true}*/}
                        {/*        draggable={true}*/}
                        {/*        responsive={responsive}>*/}
                        {/*        {*/}
                        {/*            this.state.filmPopuler.map(data =>(*/}
                        {/*                <Segment basic size='mini'>*/}
                        {/*                    <LazyLoadImage*/}
                        {/*                        alt={data.title}*/}
                        {/*                        src={IMAGE_URL + data.resim}*/}
                        {/*                        scrollPosition={{ x: 0, y: 0 }}*/}
                        {/*                    />*/}
                        {/*                    <div className='circle'>*/}
                        {/*                        <div className='circleItem'>*/}
                        {/*                            <Circle*/}
                        {/*                                animate={true}*/}
                        {/*                                animationDuration="1s"*/}
                        {/*                                responsive={true}*/}
                        {/*                                size="1"*/}
                        {/*                                lineWidth="20"*/}
                        {/*                                progressColor="rgb(30,213,169)"*/}
                        {/*                                progress={data.oyOrt * 10}*/}
                        {/*                                textStyle={{*/}
                        {/*                                    font: 'bold 8rem sans-serif'*/}
                        {/*                                }}*/}
                        {/*                                textColor="#fff"*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}

                        {/*                    <Dropdown*/}
                        {/*                        onChange={this.handleChange}*/}
                        {/*                        className='ideaIconT'*/}
                        {/*                        trigger={trigger}*/}
                        {/*                        options={options}*/}
                        {/*                        lazyLoad*/}
                        {/*                        icon={null}*/}
                        {/*                        value={clickedQuery}>*/}
                        {/*                    </Dropdown>*/}

                        {/*                    <Card*/}
                        {/*                        href={MOVIE + data.id}*/}
                        {/*                    >*/}
                        {/*                        <Card.Content>*/}
                        {/*                            <Card.Header>{data.baslik}</Card.Header>*/}
                        {/*                            <Card.Meta>{data.cikis}</Card.Meta>*/}
                        {/*                        </Card.Content>*/}
                        {/*                    </Card>*/}
                        {/*                </Segment>*/}
                        {/*            ))*/}
                        {/*        }*/}
                        {/*    </Carousel>*/}
                        {/*</LazyLoadComponent>*/}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
