import React,{Component} from 'react';
import {Link} from "react-router-dom"; 
import '../CSS/DashBoard.css';

//This section contains the MenuBar of the DashBoard
export class MenuBar extends Component{
    render(){
        return (
            <div className='MenuBar' >
            <section className='container' >
                <h3>Dashboard</h3>
                <ul >
                    <li>
                        <Link to='/ '><strong className='white'>Home Page</strong></Link>
                    </li>
                    <li>
                        <Link to='/PatientDetails'><strong className='white'>Doctor Details</strong></Link>
                    </li>
                    <li>
                        <Link to='/AmbulanceDetails'><strong className='white'>Ambulance Details</strong></Link>
                    </li>
                    <li>
                        <Link to='/MedicineDetails'><strong className='white'>Medicine Details</strong></Link>
                    </li>
                </ul>   
            </section>
            </div>
        )
    }
} 