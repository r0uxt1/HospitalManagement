import React from 'react';
import { Route, Switch } from "react-router-dom";
import {HomePage} from './Home.js';
import {AddPatient} from './AddPatients.js';
import {PatientDetails} from './PatientDetails.js';
import {MedicineDetails} from './MedicineDetails.js';
import {AmbulanceDetails} from './AmbulanceDetails.js';
import UserProfile from './docterProfile.js'


//This Component is responsible for Handling the routes of the application
export const MainContent =(props)=>{
    
        return (
            <div className='col-md-8'>
               <Switch>
                   <Route path='/' exact component={HomePage}/>
                   <Route path='/PatientDetails' exact component={PatientDetails} />
                   <Route path='/MedicineDetails' exact component={MedicineDetails} />
                   <Route path='/AddPatient' exact render={()=> <AddPatient formName='Add Patient' handlerInput={props.handlerInput}  addDetails={props.addPatient}/>} />   
                   <Route path='/AmbulanceDetails' exact component={AmbulanceDetails} />
                   <Route path='/doctorProfile' exact component= {UserProfile} />
               </Switch>
            </div>
        )
    }

    // ageHandler={props.ageHandler} problemHandler={props.problemHandler} prescHandler={props.prescHandler}