import React from "react";
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Heart from "react-animated-heart";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  TelegramIcon
} from 'react-share';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  TelegramShareButton
} from 'react-share';

class PhotoCard extends React.Component {


    constructor(props){
      super(props);
      this.state = {
        likes: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
        isClicked: false,
        updated: false
      }
    }

    updateLikes = () => {
      if(!this.state.isClicked){
        this.setState((prevState) => {
          return {
            likes: prevState.likes + 1,
            isClicked: true
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            likes: prevState.likes - 1,
            isClicked: false
          };
        });
      }
    }

    

    render() {
        const image = this.props.photos.img_src
        const earth_date = this.props.photos.earth_date
        const roverName = this.props.photos.rover.name
        const cameraName = this.props.photos.camera.name


            return (
              <div>
                <Card sx={{ maxWidth: 450 }} >
                  <CardMedia
                    component="img"
                    height="170"
                    image={image}
                    alt="..."
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {roverName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Camera Name: {cameraName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Earth Date: {earth_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Likes: {this.state.likes}
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Heart size="small" isClick={this.state.isClicked} onClick={() => this.setState({isClicked: !this.state.isClicked}), this.updateLikes}>Like</Heart>
                  </CardActions>
                  <share>
                            <FacebookShareButton id="share" url={image}>
                                <FacebookIcon id="share" size={35} round={true}/>
                            </FacebookShareButton>

                            <LinkedinShareButton id="share" url={image}>
                                <LinkedinIcon id="share" size={35} round={true} />
                            </LinkedinShareButton>

                            <RedditShareButton id="share" url={image}>
                                <RedditIcon id="share" size={35} round={true} />
                            </RedditShareButton>

                            <TwitterShareButton id="share" url={image}>
                                <TwitterIcon id="share" size={35} round={true} />
                            </TwitterShareButton>

                            <TelegramShareButton id="share" url={image}>
                                <TelegramIcon id="share" size={35} round={true} />
                            </TelegramShareButton>
                  </share>
                </Card>
              </div>
            )
    }
        
    


}

export default connect()(PhotoCard);