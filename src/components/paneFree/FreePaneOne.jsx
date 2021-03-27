import React from 'react'
import {Grid} from "semantic-ui-react";
import "../../styles/style.scss"

const MOVIE = 'https://www.themoviedb.org/movie/'
const IMAGE_URL = 'http://image.tmdb.org/t/p/w185/'

class FreePaneOne extends React.Component{
    state = {
        filmFree: [],
    }

    render() {

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
