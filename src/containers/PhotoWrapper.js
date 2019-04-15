import React , { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImages, getSingleImageFromStore } from "../actions/flickrActions";
import SingleImage from '../components/SingleImage'

import '../static/css/main.css'

class PhotoWrapper extends Component{

    constructor(props){
        super(props);
        this.state = {
            reRenderChild: 0
        }
    }

    componentDidMount() {
         this.props.fetchImages();
         setInterval(() => this.setState({ reRenderChild: Date.now() }), 3000);
    }

    getRandomImage = (images) => {
        let randomImage = images[Math.floor(Math.random()*images.length)];
        this.props.getSingleImageFromStore(randomImage)
    };

    render(){
        return(
            <div className="container">
                {this.getRandomImage(this.props.images)}
                <h1>Flickr Random image component</h1>
                <SingleImage/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        images: state.fetchedImages
    }
};

const mapDispatchToProps = dispatch => {
  return {
      fetchImages: () => dispatch(fetchImages()),
      getSingleImageFromStore: (image) => dispatch(getSingleImageFromStore(image))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(PhotoWrapper)