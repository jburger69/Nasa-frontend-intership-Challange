import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getPhotos } from './actions/NasaPhotos';

import PhotoCard from './components/PhotoCard';
import Header from './components/Header';

class App extends React.Component {

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Hello, Welcome to Nasa's Photo album</h1>
        {this.props.photos.map(photo => photo.photos.map(data => <PhotoCard  photos={data}/>))}
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
