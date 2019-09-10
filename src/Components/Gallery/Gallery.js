import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './Gallery.scss';
import Image1 from '../../Assets/us-1.jpg';
import Image2 from '../../Assets/us-2.jpg';
import Image3 from '../../Assets/us-3.jpg';
import Image4 from '../../Assets/us-4.jpg';
import Image5 from '../../Assets/us-5.jpg';
import Image6 from '../../Assets/us-6.jpg';
import Image7 from '../../Assets/us-7.jpg';
import Image8 from '../../Assets/us-8.jpg';
import Image9 from '../../Assets/us-9.jpg';
import Image10 from '../../Assets/us-10.jpg';
import Image11 from '../../Assets/us-11.jpg';
import Image12 from '../../Assets/us-12.jpeg';


const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12
]

class Gallery extends React.Component {

    render() {
        return (
            <div className="gallery section">
                <div className="section-header-text">
                    Us <span className="love">❤</span>
                </div>
                <Grid container columns={window.innerWidth > 600 ? 3: 1}>
                        {images.map(image => {
                            return <Grid.Column key={image}>
                                <Image src={image}/>
                            </Grid.Column>
                        })}
                </Grid>
            </div>
        )
    }
}

export default Gallery;
