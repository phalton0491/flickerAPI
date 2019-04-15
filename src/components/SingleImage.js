import React , { Component } from 'react'
import { connect } from 'react-redux'

import '../static/css/main.css'

class SingleImage extends Component{
    render(){
        return(
            <div className="outer-img-container">
                {this.props.image &&
                    <img
                        src={`https://farm${this.props.image.farm}.staticflickr.com/${this.props.image.server}/${this.props.image.id}_${this.props.image.secret}.jpg`}
                        alt={`flickr image ${this.props.image.id}`}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        image: state.singleImage
    }
};

export default connect(mapStateToProps)(SingleImage)
