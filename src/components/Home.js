import React,{useState,useEffect} from 'react'
import './css/Home.css'
import { Paper,Grid,TableRow,TableHead,TableContainer,TableCell,TableBody,Table } from '@material-ui/core';
import Cards from './Cards';
import Charts from './Charts';
import axios from "axios";
import Loading from './Loading'
const baseUrl='https://api.covid19india.org/data.json';

function Home() {

    const [statedata,setStatedata]=useState([]);

    const getstatedata=()=>{
        axios.get(baseUrl)
            .then((result)=>{
                
                if(result.status === 200 && result != null){
                    let data=result.data.statewise;
                    setStatedata(data);
                    
                }
                else{
                    return [];
                }
            })
            .catch((error)=>{
                console.error(error.massage);
            })
    }
    
    useEffect(() => {
        getstatedata();
        console.log(statedata);
    }, [])

    return (
        <div className="Home">
            <h4 className="home-title text-center">Covid-19 overview</h4>
            {
                statedata.length===0?(
                    <div className="container">
                        <Loading/>
                    </div>
                    
                ):(
                    <div className="container">
                    <Grid container spacing={2} direction="row " justify="center" align-items="center" >
                        <Grid item xs={12} md={6} className="home_card" >
                        
                            <Cards 
                                active={statedata[0].active} 
                                recovered={statedata[0].recovered} 
                                deaths={statedata[0].deaths} 
                                confirm={statedata[0].confirmed}
                            /> 

                        </Grid>
                        <Grid item xs={12} md={6} className="home_countryChart" style={{padding:50}} >
                            <Charts 
                                active={statedata[0].active} 
                                recovered={statedata[0].recovered} 
                                deaths={statedata[0].deaths} 
                                confirm={statedata[0].confirmed}
                            />
                        </Grid>

                        <Grid container spacing={3} direction="row" justify="center"
                            alignItems="center" className="home_section2 mt-2 mb-2" >

                                    <Grid item xs={12} md={12} sm={12} className="home_statedata ">
                                    <TableContainer component={Paper} className="table" >
                                        <Table stickyHeader className="" aria-label="simple table">
                                            <TableHead >
                                                <TableRow className="table-top-row" >
                                                    <TableCell className="row-text" style={{backgroundColor:'#e8f5e9'}}>State</TableCell>
                                                    <TableCell className="row-text " style={{backgroundColor:'#b0bec5'}} align="right">Death</TableCell>
                                                    <TableCell className="row-text" style={{backgroundColor:'#b2ebf2'}} align="right">Confirmed</TableCell>
                                                    <TableCell className="row-text" style={{backgroundColor:'#c8e6c9'}} align="right">Recoverd</TableCell>
                                                    <TableCell className="row-text " style={{backgroundColor:'#ffcdd2'}} align="right">Active</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            
                                                <TableBody className="table-body">

                                                    {statedata.map((object,index) => (
                                                        <TableRow key={index} >
                                                            <TableCell component="th" scope="object" style={{color:''}}>{object.state}</TableCell>
                                                            <TableCell style={{color:'#263238'}} align="right">{object.deaths}</TableCell>
                                                            <TableCell style={{color:'#01579b'}} align="right">{object.confirmed}</TableCell>
                                                            <TableCell style={{color:'#1b5e20'}} align="right">{object.recovered}</TableCell>
                                                            <TableCell style={{color:'#b71c1c'}} align="right">{object.active}</TableCell>
                                                        </TableRow>
                                                ))}
                                                </TableBody>  
                                        </Table>      
                                </TableContainer>
                                    </Grid>
                            </Grid>
                    </Grid>
                    </div>
                        )
                    }
            </div>
    )
}

export default Home
