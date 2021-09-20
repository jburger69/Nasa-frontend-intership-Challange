import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getPhotos } from './actions/NasaPhotos';

import PhotoCard from './components/PhotoCard';

class App extends React.Component {

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    return(
      <div>
        <PhotoCard  photos={this.props.photos}/>
      </div>
    )
  }


}


const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPhotos })(App);
