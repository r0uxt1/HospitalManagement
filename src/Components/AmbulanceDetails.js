import React,{Component}  from 'react';
import Modal from 'react-modal';
import '../CSS/PatientDetails.css';

export class AmbulanceDetails extends Component{
    constructor(props){
        super(props);
        this.state={PatientData:[],CurrentPage:1,PatientPerPage:10,PageNumbers:[],IsModalOpen:false,patientSelected:{}};
        this.handlePage=this.handlePage.bind(this);
        this.openModal=this.openModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.patientDetailsUpdate={};
        this.handlePatient=this.handlePatient.bind(this);
        this.check=this.check.bind(this);
    }

    check(val){
        if(val==0){
            return("Available");
        }
        return("Busy");
    }

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

    closeModal(){
        this.setState({IsModalOpen:false});
    }

    componentWillMount(){
        const RenderPageNumbers=[];
        fetch('http://localhost:3000/ambulances',{
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

    handlePage(event){
        var page=event.target.id;
        this.setState({CurrentPage: page});
    }

    handlePatient(event){
        event.persist();
        const name=event.target.name;
        this.patientDetailsUpdate={...this.patientDetailsUpdate,    
            [name] : event.target.value
        }
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
                <th>AmbulanceID</th>
                <th>Availability</th>
                </tr>
                </thead>
                <tbody>
                {currentPagePatient.map((patient)=>{return (
                    <tr>
                        <td>{patient.id}</td>
                        <td>{(this.check(patient.availability))}</td>
                    </tr>
                    
                );})}
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