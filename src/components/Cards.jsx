import React from 'react'
import './css/Cards.css'
import { Grid, Paper } from '@material-ui/core'

const Cards = (props) => {
    return (
        <Grid container spacing={1} direction="row" justify="center" alignItems="center">

            <Grid  item xs spacing={3} className="grid-item" >
                <Paper className="cards card-confirm p-3" elevation={3} >
                    <p className="text-black-50" >Confirmed</p>
                    <h2 style={{color:'#03a9f4'}}>{props.confirm}</h2>
                </Paper>
            </Grid>

            <Grid  item xs spacing={3}>
                <Paper className="cards card-active p-3" elevation={3}>
                    <p className="text-black-50">Active</p>
                    <h2 style={{color:'#f44336'}}>{props.active}</h2>
                </Paper>
            </Grid>

            <Grid  item xs spacing={3}>
                <Paper className="cards card-recovered p-3" elevation={3}>
                <p className="text-black-50">Recovered</p>
                <h2 style={{color:'#4caf50'}}>{props.recovered}</h2>              
                </Paper>
            </Grid>

            <Grid  item xs spacing={3} >
                <Paper className="cards card-death p-3" elevation={3}>
                <p className="text-black-50">Deaths</p>
                <h2 style={{color:'#607d8b'}}>{props.deaths}</h2>
                </Paper>
            </Grid>

        </Grid>
    )
}

export default Cards
