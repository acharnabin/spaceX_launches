import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Charts = (props) => {
    return (
        <div className="countrychart ">
        
                <Doughnut
                data={{
                    labels: ['Active', 'confirmed', 'death', 'recovered'],
                    datasets:[{
                        label:'Active',
                        data:[props.active,props.confirm,props.deaths,props.recovered],
                        backgroundColor:['#ff5722','#1e88e5','#9c27b0','#00c853'],
                        borderColor:['#ff5722','#1e88e5','#9c27b0','#00c853'],
                        
                    },
                    
                    ]
                }}
            />
            
        
            
        </div>
    )
}

export default Charts
