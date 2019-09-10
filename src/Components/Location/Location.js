import React from 'react';
import './Location.scss';
import { Grid } from 'semantic-ui-react';

class Location extends React.Component {

    render() {
        return (
            <div className="location section">
                <div className="section-header-text">
                    Where ?
                </div>
                <Grid container columns={window.innerWidth > 600 ? 2: 1}>
                    <Grid.Column>
                        <div>
                            <div className="details">
                                Place : <span>St. Thomas Cathedral Church, Palai, Kerala</span>
                            </div>
                            <br></br>
                            <div className="description">It is a plantation town, which is deeply attached to the plantation of natural rubber. 
                                It also has trade in spices such as pepper, ginger etc. 
                                Indeed, before rubber became common around the middle of 20th century, Palai was noted for its spices. 
                                A particular brand of pepper called Palai Pepper was then quoted in the London market.
                                <br></br>
                                <br></br>
                                People of Palai are largely dependent on agriculture, particularly rubber. 
                                The good price of natural rubber for nearly half a century has made the people here prosperous. 
                                Historically the people are hard-working and attached to land.
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <iframe
                            title="location"
                            width="600"
                            height="450"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBqvuZmJGAr1aduHHNKnuqckooZmmpowdE
                                &q=St. Thomas Cathedral Palai, Pala, Kerala" allowFullScreen>
                        </iframe>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Location;
