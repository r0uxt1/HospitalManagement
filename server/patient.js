var faker = require('faker');
function generatePatient(){
  var doctors =[], ambulances = [];
var slot1=(Math.floor(Math.random()*100))%2;
var slot2=(Math.floor(Math.random()*100))%2;
  doctors.push({
      "id": 1,
      "DoctorName": "Arvind",
      "Speciality":"Cardiologist",
      "start":0,
      "end":10,
      "slot1":slot1,
      "slot2":slot2
    })
   slot1=(Math.floor(Math.random()*100))%2;
slot2=(Math.floor(Math.random()*100))%2;
   doctors.push({
      "id": 2,
      "DoctorName": "Atharv",
      "Speciality":"Cardiologist",
      "start":10,
      "end":15,
      "slot1":slot1,
      "slot2":slot2
    })
      slot1=(Math.floor(Math.random()*100))%2;
      slot2=(Math.floor(Math.random()*100))%2;
    doctors.push({
      "id": 3,
      "DoctorName": "Aditya",
      "Speciality":"Cardiologist",
      "start":15,
      "end":20,
      "slot1":slot1,
      "slot2":slot2
    })
       slot1=(Math.floor(Math.random()*100))%2;
slot2=(Math.floor(Math.random()*100))%2;
     doctors.push({
      "id": 4,
      "DoctorName": "Onkar",
      "Speciality":"Cardiologist",
      "start":20,
      "end":23,
      "slot1":slot1,
      "slot2":slot2
    })

   var medicine = [];

   medicine.push({
    "id": 1,
    "name" : "ucetron",
    "quantity" : 38,
    "rate" : 30
   })

   medicine.push({
    "id": 2,
    "name" : "parace",
    "quantity" : 50,
    "rate" : 90
   })
   medicine.push({
    "id": 3,
    "name" : "zen",
    "quantity" : 56,
    "rate" : 77
   })

     slot1=(Math.floor(Math.random()*100))%2;
      slot2=(Math.floor(Math.random()*100))%2;

    ambulances.push(
    {
      "id": 1,
      "availability": slot1
    })
    ambulances.push({
      "id": 2,
      "availability": slot2
    })
  // faker.seed(100);
  // for (var id = 1; id < 26; id++) {
  //   var Name = faker.name.firstName()
  //   var Age = faker.random.number({'min':1,'max':99})
  //   var Problem= faker.lorem.word()
  //   var Prescription= faker.lorem.words()
  //   patients.push({
  //     "id": id,
  //     "PatientName": Name,
  //     "PatientAge": Age,
  //     "PatientProblem": Problem,
  //     "PatientPrescription" : Prescription
  //   })
  // }
  return {  "doctors": doctors, "medicine":medicine, "ambulances": ambulances   }
}
 module.exports = generatePatient