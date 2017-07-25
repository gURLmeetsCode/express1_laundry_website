import React from 'react';

  const schedule = [
        {
          day: "Monday",
          time: "6:30AM - 11:00PM"
        },
        {
          day: "Tuesday",
          time: "6:30AM - 11:00PM"
        },
        {
          day: "Wednesday",
          time: "6:30AM - 11:00PM"
        },
        {
           day: "Thursday",
           time: "6:30AM - 11:00PM"
        },
        {
           day: "Friday",
           time: "6:30AM - 11:00PM"
        },
        {
           day: "Saturday",
           time: "6:30AM - 11:00PM"
        },
        {
           day: "Sunday",
           time: "6:30AM - 11:00PM"
        }
      ]

  function renderSchedule (scheduleList){
        return schedule.map(function(item){
          return <p className="features--schedule" key={item.day}><strong className="features--day">{item.day}</strong><br/>{item.time}</p>
        });
      };


export default class Features extends React.Component{
  render(){
    return(
      <div className="features">
        <div>
          <h4 className="features-title">Hours of Operation</h4>
          {renderSchedule(schedule)}
          <br/>
          <div>
            <p>Drop off service is available. Drop off orders are charged by weight.</p>
          </div>
        </div>
      </div>
    )
  }
}
