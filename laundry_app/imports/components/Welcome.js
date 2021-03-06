import React from 'react';



export default class Welcome extends React.Component{
  render(){
    return(
      <div className="tagline">
        <p> <strong className="section-title section-title--large section-title--blue">Welcome to Express 1 Laundromat in Harlem NYC!</strong></p>
        <br />
        <p className="section-title--summary"> Our facility is equipped washers and dryers of all sizes. Customers can enjoy television while you wait for your clothes, grab snacks from our vending machines and purchase various detergents. Our machines are operated by card readers so please be sure to check out our card machine before usage.</p>
      </div>
    )
  }
}
