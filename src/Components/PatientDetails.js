import React,{Component}  from 'react';
import Rater from 'react-rater';
import StarRatings from 'react-star-ratings';
import 'react-rater/lib/react-rater.css';
import '../CSS/PatientDetails.css';
import Modal from 'react-modal';
import { AddPatient } from './AddPatients';


//This Component Contains the PatientDtails 
export class PatientDetails extends Component{
    constructor(props){
        super(props);
        this.state={PatientData:[],CurrentPage:1,PatientPerPage:10,PageNumbers:[],IsModalOpen:false,patientSelected:{}};
        this.handlePage=this.handlePage.bind(this);
        this.openModal=this.openModal.bind(this);
        this.check=this.check.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.checkslot=this.checkslot.bind(this);
        this.UpdatePatientDetails=this.UpdatePatientDetails.bind(this);
        this.patientDetailsUpdate={};
        this.handlePatient=this.handlePatient.bind(this);

    }
    //openModal Function is used to handling the logic at the time admin want to update the patient Details
    openModal(event){
        var idUpdate=event.target.id;
        var pSelected;
        this.state.PatientData.forEach(patient=>{
            if(patient.id==idUpdate){
                pSelected=patient;
                return 0;
            }
        });
        this.patientDetailsUpdate=pSelected;
        this.setState({IsModalOpen:true,patientSelected:pSelected});
    }
    //closeModal is responsible for only closing the modal after updating the Details
    closeModal(){
        this.setState({IsModalOpen:false});
    }
    checkslot(val)
{
    
    // let v;
    if(val==0)
        return('Book Now!');
    return('No Booking');
}
check(start,end,val)
{
    
    // let v;
    if(val>=start && val<=end)
        return('Yes');
    return('No');
}
    //Before the component it is necessary to fetch the details of the PatientDetails 
    componentWillMount(){
        const RenderPageNumbers=[];
        fetch('http://localhost:3000/doctors',{
            method : 'GET'
        }).then((response)=>{
                response.json().then(data=>this.setState({PatientData:data},()=>{console.log(this.state);
                    for(let i=1;i<=Math.ceil(this.state.PatientData.length/this.state.PatientPerPage);i++){
                        RenderPageNumbers.push(i);
                    }
                    this.setState({PageNumbers:RenderPageNumbers},()=>{console.log('PageNumber ',this.state);});
                    }));
        });
    }
    //responsible for hanlding the pagination
    handlePage(event){
        var page=event.target.id;
        this.setState({CurrentPage: page});
    }

    //responsible for hanlding the userData **Improved the way of re-rendering the component by not directly updating the state at each Change just push all the details in an temporary object and when the user finally submits the details then only use setState copy the whole object in state **
    handlePatient(event){
        event.persist();
        const name=event.target.name;
        this.patientDetailsUpdate={...this.patientDetailsUpdate,    
            [name] : event.target.value
        }
        }
    
    //Logic to update the patientDetails 
    UpdatePatientDetails(event){
        this.closeModal();
        var id=this.patientDetailsUpdate.id;
        var object={"PatientName":this.patientDetailsUpdate.PatientName,"PatientAge":this.patientDetailsUpdate.PatientAge,"PatientProblem":this.patientDetailsUpdate.PatientProblem,"PatientPrescription":this.patientDetailsUpdate.PatientPrescription}
        fetch('http://localhost:3000/patients/'+id,{
            method: 'PUT',
            headers :{
                'Content-Type': 'application/json' 
                },
            body : JSON.stringify(object)
        }).then((response)=>{
            this.componentWillMount();
            

        })
    }

   
    render(){
        const indexOfLastData=this.state.CurrentPage*this.state.PatientPerPage;
        const indexOfFirstData=indexOfLastData-this.state.PatientPerPage;
        const currentPagePatient=this.state.PatientData.slice(indexOfFirstData,indexOfLastData);
        let currentTime =new Date();
        let hours=currentTime.getHours();
    return(
        <div>
            <table className="table">
                <thead>
                <tr>
                <th style={{color: 'white'}}>RatingCOMPAFS</th>
                <th>Sno</th>
                <th>DoctorName</th>
                <th>Speciality</th>
                <th>Availability</th>
                <th>Appointment</th>
                <th style={{color: 'white'}}>Appointment</th>
                <th>Current Rating</th>
                </tr>
                </thead>
                <tbody>
                {currentPagePatient.map((patient)=>{return (
                    <tr>
                    <td><StarRatings starSpacing='2px' starDimension='17px' changeRating={(value)=>{

                        
            // setValue(newValue);

            var s=(patient.rating*patient.persons+value);
            patient.persons+=1;
            patient.rating=(s/patient.persons).toFixed(2);
            fetch("http://localhost:3000/doctors/"+patient.id,{
            method: 'PUT',
            headers :{
                'Content-Type': 'application/json' 
                },
            body : JSON.stringify(patient)
        }).then((response)=>{
            console.log(response);
            this.componentWillMount();
        })
                     }} /> </td>
                        <td>{patient.id}</td>
                        <td><a href="/doctorProfile">{patient.DoctorName}</a> </td>
                       
                        <td>{patient.Speciality}</td>
                    
                        <td>{(this.check(patient.start,patient.end,hours))}</td>
                         <td><button className="button" id={patient.id} onClick={()=>{
                            if(patient.slot1==0)
                            {
                                patient.slot1=1;
                            
                fetch("http://localhost:3000/doctors/"+patient.id,{
            method: 'PUT',
            headers :{
                'Content-Type': 'application/json' 
                },
            body : JSON.stringify(patient)
        }).then((response)=>{
            console.log(response);
            this.componentWillMount();
            

        })}
        else
        {
            alert("Not Able to add");
        }
                         }}>{this.checkslot(patient.slot1)}</button></td>
                                      
                    


                    <td><button className="button" id={patient.id} onClick={()=>{
                            if(patient.slot2==0)
                            {
                                patient.slot2=1;
                            
                            
                            fetch("http://localhost:3000/doctors/"+patient.id,{
            method: 'PUT',
            headers :{
                'Content-Type': 'application/json' 
                },
            body : JSON.stringify(patient)
        }).then((response)=>{
            console.log(response);
            this.componentWillMount();
            

        })}
        else
        {
            alert("Not Able to add");
        }
                         }}>{this.checkslot(patient.slot2)}</button></td>
                        <td>{patient.rating}</td>
                         
                    </tr>
                    
                );})}
                <Modal isOpen={this.state.IsModalOpen} onRequestClose={this.closeModal}>
                <h2>Update Patient Details</h2>
                <button onClick={this.closeModal}>close</button>
                <AddPatient title='Update Details of Patients' pObject={this.state.patientSelected} handlerInput={this.handlePatient} addDetails={this.UpdatePatientDetails}  />
                </Modal>
                </tbody>
            </table>
            <ul className='PaginationList'>
                {this.state.PageNumbers.map(number=>{
                 return(
                    <li id={number} key={number} className="Pagination" onClick={this.handlePage}>{number}</li>
            )
            })}
            
            </ul>
        </div>
    )
    }
}