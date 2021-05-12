import { Paper } from '@material-ui/core'
import React from 'react'
import '../css/card.css'
const Card = (props) => {
    const {data}=props;
    const mission_name=data.mission_name; 
    const flight_number=data.flight_number;
    const mission_id=data.mission_id;
    const launch_year=data.launch_year;
    const image=data.links.mission_patch_small;
    const launch_success=data.launch_success?"True":"False";
    const landing_success=data.rocket.first_stage.cores[0].land_success?"True":"False";


    return (
        <Paper className="rocket_card" elevation={2}>
        <div className="rocket_card_image">
        <img src={image} alt={mission_name} />
        </div>
        <h5 style={{color:'#607d8b'}} className="rocket_card_fonts rocket_card_title">{mission_name}#{flight_number}</h5>
        <h5 style={{color:'#546e7a'}} className="rocket_card_fonts">Mission Ids: <span className="mx-1">{mission_id}</span></h5>
        <h5 style={{color:'#546e7a'}} className="rocket_card_fonts"> launch year:<span className="mx-1">{launch_year}</span></h5>
        <h5 style={{color:'#546e7a'}} className="rocket_card_fonts">sucessful launch:<span className="mx-1 ">{launch_success}</span></h5>
        <h5 style={{color:'#546e7a'}} className="rocket_card_fonts">sucessful landing:<span className="mx-1 ">{landing_success}</span></h5>
        </Paper>
    )
}

export default Card
