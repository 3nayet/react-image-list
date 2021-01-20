import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class App extends Component {
  constructor(props){
 super(props);
   this.state = {
     photos: []
   };
 }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/photos/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ photos: data })
    })
    .catch(console.log)
  }
  render() {

      return (
         <div className="container">
          <div className="col-xs-12">
          <h1>List Of photos</h1>
          {this.state.photos.map((photo) => (
            <div>
                <LazyLoadImage
              //    alt={image.alt}
                //  height={image.height}
                  src={photo.url} // use normal <img> attributes as props
                  //width={image.width}
                  />
              //  <span>{photo.title}</span>
          </div>
          ))}
          </div>
         </div>
      );
    }
}
export default App;
