import React,{Component} from 'react';
import {Link} from "react-router-dom"; 
import '../CSS/DashBoard.css';

//This section contains the MenuBar of the DashBoard
export class MenuBar extends Component{
    render(){
        return (
            <div className='MenuBar' >
            <section className='container' >
            <div className="image">
                <img height="140px"  src="https://i.ibb.co/jyFd1hg/websi.png"></img>
                </div>
                <ul >
                    <li>
                        <a href='/ '><strong className='white'>Home</strong></a>
                    </li>
                    <li>
                        <a href='/PatientDetails' ><strong className='white'>Doctors</strong></a>
                    </li>
                    <li>
                        <a href='/AmbulanceDetails'><strong className='white'>Ambulances</strong></a>
                    </li>
                    <li>
                        <a href='/MedicineDetails'><strong className='white'>Medicines</strong></a>
                    </li>
                </ul>   
            </section>
            </div>
        )
    }
}