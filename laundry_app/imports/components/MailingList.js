import React from 'react';



handleSubmit = (e) => {
    let participantsName = e.target.participantsName.value;
    let participantsEmail = e.target.participantsEmail.value;
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    e.preventDefault();

    if(participantsName && participantsEmail.match(pattern)){
      e.target.participantsName.value = "";
      e.target.participantsEmail.value = "";
        Participants.insert({
            name: participantsName,
            email: participantsEmail
        });
    } else {
      e.target.participantsName.value = "";
      e.target.participantsEmail.value = "";
      alert("Please enter a valid email address")
    }
}

export default class Email extends React.Component{
  render(){
    return(
      <div className="site-footer__text">
      <h4>Join Our Mailing List!</h4>
        <p> Stay updated on services hours, monthly raffle prizes and more.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="participantsName" placeholder="Name"/>
            <input type="text" name="participantsEmail" placeholder="Email"/>
            <button>Submit</button>
          </form>
      </div>
    )
  }
}
