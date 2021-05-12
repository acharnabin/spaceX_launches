/* eslint-disable array-callback-return */
import React, { useEffect,  } from 'react'
import  '../css/home.css'
import Card from './Card'
import {first_time_page_load_url} from './Api/Api'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {first_load_data} from '../redux/action/Action'


const Home = () => {
    const rocket_data = useSelector((state)=>state.all.SpaceX_program_data);
    const dispatch=useDispatch();

    const first_time_page_load=async()=>{
        const response=await axios.get(first_time_page_load_url)
            .catch((err)=>console.log(err));
        dispatch(first_load_data(response.data));
        
    }
    const render_data=rocket_data.map((data,index)=>{
        return(
            <div key={index}>
            <Card 
                data={data}
                mission_name={data.mission_name} 
                flight_number={data.flight_number}
                launch_success={data.launch_success}
                mission_id={data.mission_id}
                launch_year={data.launch_year}
                landing_success={data.rocket}
                image={data.links.mission_patch_small}
                /></div>
        )
    })
    useEffect(()=>{
        first_time_page_load();
        
    },[])

    return (
        <div className="home">
            <div className="home_row">
            {
                render_data
            }
                
            </div>
        </div>
    )
}

export default React.memo(Home);
