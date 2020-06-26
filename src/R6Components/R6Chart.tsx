import React from "react";
import Chart, {ChartConfiguration} from 'chart.js';

interface R6ChartSize {
    height?: number;
    width?: number;
}

interface R6ChartColor {
    backgroundColor?:string;
}

interface R6ChartData { 
    label: string
    data: Array<any>
}

interface R6ChartProperty extends ChartConfiguration { 

    chartElementSizeOption? : R6ChartSize;
    chartBackgroundColor? : R6ChartColor;
    chartData?: R6ChartData[];

}
//https://stackoverflow.com/questions/38493564/chart-area-background-color-chartjs

export default class R6Chart extends React.Component< R6ChartProperty, {}> {

    private R6element?: HTMLCanvasElement;
    private R6context?: CanvasRenderingContext2D;
    private chartInstance?: Chart;

    constructor(props: R6ChartProperty) {
        super(props)        
    }

    componentDidMount(){
        
        if (this.R6element) {
            this.R6context = this.R6element?.getContext('2d') as CanvasRenderingContext2D;
            if (this.R6context) {
                // chart initialization
                this.chartInstance = new Chart(this.R6element, {
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                })
            } else {
                throw new Error("Canvas Context not found.")
            }
        } else {
            throw new Error("Element not found")
        }

        this.drawing();
    }

    drawing(){

    }

    render() {
        return ( 
            <canvas ref={(ref)=>{ this.R6element = ref! }}></canvas>
       )
    }

}
// /            <cavnas refs={ (c) => this.ref = e;}> </cavnas>
