import React, {
    Component
} from 'react';
import {
    Header
} from '../Components/Header'
import {
    Content
} from '../Components/Content';
import Footer from '../Components/Footer.js'


export class Main extends Component {
    constructor(props) {
        super(props);
        this.title = 'NITT Hospital';
        this.patientObject = {PatientId:25};
    }
    //Function responsible for Handling the input when new Patient Details about to enter
    handlerInput(event) {
        event.persist();
        const name = event.target.name;
        this.patientObject = { ...this.patientObject,
            [name]: event.target.value
        };
        console.log('patientObject ', this.patientObject);
    }
    //Function to handle the logic of adding the new patient
    newPatientDetails() {
        this.patientObject.PatientId+=1;
        fetch('http://localhost:3000/patients',{
             method:'POST',
             headers :{
                 'Content-Type': 'application/json' 
                 },
                   body : JSON.stringify(this.patientObject)
             }).then((response)=>{
                 alert('Patient Added Successfully');
                 })
        }
   
    render() {
        return ( <div  >
            
            <Content className = 'row' handlerInput = {this.handlerInput.bind(this)} addPatient = {this.newPatientDetails.bind(this)}/>
            
            </div>
        )
    }
}

