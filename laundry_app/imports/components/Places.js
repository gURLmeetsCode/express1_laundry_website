import React from 'react';


export default class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      places: []
    }
  }


  componentDidMount(){


    let map = new google.maps.Map(document.getElementById("map"), {
        center: {lat:40.7575285, lng: -73.9884469}
      });

    let service = new google.maps.places.PlacesService(map);

    service.getDetails({
        placeId: 'ChIJAUKRDWz2wokRxngAavG2TD8'
      }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
           console.log(place.reviews)
          this.setState({places:place.reviews});
        }
      })
    }
  render(){
    const { places } = this.state;
    return(
      <div className="wrapper wrapper--colored">
      <div id="map"></div>
        <p className="wrapper--reviews">
        <h2 className="section-title section-title--colored">Here is what our customers are saying:</h2>
          {
            places.map((place) => {
              if(place.rating >= 4){
                return <p key={place.author_name}><img src={place.profile_photo_url}/><br/>{place.author_name} <br/>"{place.text}"</p>
              }
            })
          }
        </p>
      </div>
    )
  }
}
