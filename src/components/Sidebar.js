import React,{memo} from 'react'
import  '../css/sidebar.css'
import axios from 'axios'
import {Chip, Divider, Paper} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {year_filter_load_data,landing_filter_load_data,launch_filter_load_data} from '../redux/action/Action'

const Sidebar = () => {
    const year=['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
    const dispatch=useDispatch();

    function handle_Year_filter(data,index){
        
        const year_filter_page_load=async()=>{
            const response=await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${data}`)
                .catch((err)=>console.log(err));
            dispatch(year_filter_load_data(response.data));
            
        }
        year_filter_page_load();
        
    }

    function handle_landing_filter(e){
        const landing_filter_page_load=async()=>{
            const response=await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${e}`)
                .catch((err)=>console.log(err));
            dispatch(landing_filter_load_data(response.data));
            
        }
        landing_filter_page_load();
    }

    function handle_launch_filter(e){
        const launch_filter_page_load=async()=>{
            const response=await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${e}`)
                .catch((err)=>console.log(err));
            dispatch(launch_filter_load_data(response.data));
            
        }
        launch_filter_page_load();
    }

    return (
        <Paper className="sidebar">
            <h4  className="mb-2 text-center text-black-50">Filters</h4>
            <Divider className="mb-2"/>
            <div className="sidebar_section1 mb-2">
                <h4 className="text-center text-black-50 mb-2">Launch Year</h4>
                <Divider className="mb-2"/>
                <div className="sidebar_launch_year_items mb-2">
                    {
                        year.map((data,index)=>
                            <div key={index} className="sidebar_chip">
                            <Chip  value={data} onClick={()=>handle_Year_filter(data)} label={data} key={index} color="primary" />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="sidebar_section2 mb-2">
                <h4 className="text-center text-black-50">suceesful launch</h4>
                <Divider className="mb-2"/>
                <div className="suceesful_launch mb-2">
                    <Chip className="m-1" color="secondary" variant="outlined" label="True" onClick={()=>handle_launch_filter(true)}/>
                    <Chip className="m-1" color="secondary" variant="outlined" label="False" onClick={()=>handle_launch_filter(false)}/>
                </div>    
            </div>
            <div className="sidebar_section3">
                <h4 className="text-center text-black-50">suceesful lading</h4>
                <Divider className="mb-2"/>
                <div className="suceesful_landing mb-2">
                    <Chip className=" m-1" color="secondary" variant="outlined" label="True" onClick={()=>handle_landing_filter(true)}/>
                    <Chip className=" m-1" color="secondary" variant="outlined" label="False" onClick={()=>handle_landing_filter(false)}/>
                </div>    
            </div>
            <Divider className="mb-2"/>
            <p className="text-center text-primary">DEVELOPED BY : <span className="text-danger">NABIN ACHAR</span></p>
        </Paper>
    )
}

export default memo(Sidebar)
