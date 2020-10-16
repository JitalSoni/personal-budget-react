import React,{Component} from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';


class HomePage extends Component {
    state = {
    dataSource: {
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#92a8d1',
                    '#12a8d1',
                    '#d5f4e6'
                ]
            }
        ],
        labels: []
    }
}

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/budget');
        let tempData = this.state.dataSource;
        for(var i=0; i < res.data.myBudget.length; i++){
                 tempData.datasets[0].data[i] = res.data.myBudget[i].budget;
                 tempData.labels[i] = res.data.myBudget[i].title;
        }
             
        this.setState({
            dataSource: Object.assign({}, this.state.dataSource, {
                dataSource: tempData
            })
        });
    }

      
    render(){
    return(
    <div className="container center">
    
        <div className="page-area">

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Chart</h1>
                <div>
                    <Pie data={this.state.dataSource} />
                </div>
            </div>
    
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>
            
        </div>

    </div>
   
        
    )
    
    }
    }
export default HomePage;
