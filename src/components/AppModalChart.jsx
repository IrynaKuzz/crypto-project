import React from 'react';
import { Chart, registerables } from "chart.js";
import { Line, Bar, Pie } from 'react-chartjs-2';

Chart.register(...registerables, );

export default function AppModalChart({getRow}){   
    const record = getRow;
    
    const priceChange1hAbs = record.price - (record.price * record.priceChange1h) / 100;
    const priceChange1dAbs = record.price - (record.price * record.priceChange1d) / 100;
    const priceChange1wAbs = record.price - (record.price * record.priceChange1w) / 100;
    
    const priceData = {
        labels: ['Price', 'Change 1h', 'Change 1d', 'Change 1w'],
        datasets: [
            {
                label: 'Price Change (in $)',
                data: [record.price, priceChange1hAbs, priceChange1dAbs, priceChange1wAbs],               
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },

        ],        
        options: {
            scales: {
                y: {
                    type: 'linear', 
                    ticks: {                      
                        callback: function(value, index, values) {
                            return Number(value.toString());
                        }
                    }
                }
            },            
        }
        
    };
       
    const marketCapData = {
        labels: ['Market Cap'],
        datasets: [
            {
                label: 'Market Cap',
                data: [record.marketCap],
                backgroundColor: 'rgba(153,102,255,0.6)',
            },
        ],
    };
    return(
        <>
            <h2>{record.name} Charts</h2>
            <Line data={priceData} />
        </>
    )
}