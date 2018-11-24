class Worker {
  
  constructor(firstName,lastName,age){
    this.firstName = name;
    this.lastName = lastName;  
    this.age = age;
    this.position = position;
    this.sex = sex;
    this.experience = experience;
  }
  getName = () =>
    this.name;
  
  getLastName = () => 
    this.lastName;
  
  setAge = (age) => {
    if (age <= 0 || age >= 100)
    throw "Значение должно быть больше 0 и меньше 100";
    this.age = age;
  }
  setPosition = (position) =>
    this.position = position;
}

class IndastrialWorker extends Worker{
  constructor(firstName,lastName,age){
    this.rank = rank;
    this.personalNumber = personalNumber;
    super(firstName,lastName,age);

  }
  getRank = () =>
    this.rank;
  
  getPersonalNumber = () => 
    this.personalNumber;
  
  setRank = (rank) => {
    if (rank >0 || rank <=7)
    throw "Значение должно быть больше 0 и меньше 7";
    this.rank = rank;
  }
}
class TransportWorker extends Worker{
  constructor(firstName,lastName,age){
    this.transport = transport;
    this.numberOfTransport = numberOfTransport;
    super(firstName,lastName,age);
  }

  getTransport = () =>
    this.transport;
  
  getNumberOfTransport = () =>
    this.numberOfTransport;
  
  setTransport = (transport) => {
    if(transport=='автомобиль' || transport=='автобус' || transport=='тралейбус' || transport=='трамвай' || transport=='грузовик')
    throw "Неверный транспорт";
    this.transport = transport;
  }
}

function Selected(a) {
  var label = a.value;
  if (label==1) {
      document.getElementById("blockForHidden1").style.display='none';
      document.getElementById("blockForHidden2").style.display='none';  
      document.getElementById("blockForHidden3").style.display='none';
      document.getElementById("blockForHidden4").style.display='none';            
  }
  else if(label==2){
      document.getElementById("blockForHidden1").style.display='block';
      document.getElementById("blockForHidden2").style.display='block';  
      document.getElementById("blockForHidden3").style.display='none';
      document.getElementById("blockForHidden4").style.display='none';  
}
  else{
      document.getElementById("blockForHidden1").style.display='none';
      document.getElementById("blockForHidden2").style.display='none';  
      document.getElementById("blockForHidden3").style.display='block';
      document.getElementById("blockForHidden4").style.display='block';  
  }
   
}

// form.onsubmit = function(){
//   var formData = readFormData();
//   insertNewRecord(formData);
// }
// function readFormData(){
//   var formData = {};
//   formData["workType"] = document.getElementById("workType").value;
//   formData["firstName"] = document.getElementById("firstName").value;
//   formData["lastName"] = document.getElementById("lastName").value;
//   formData["age"] = document.getElementById("age").value;
//   formData["position"] = document.getElementById("position").value;
//   formData["sex"] = document.getElementById("sex").value;
//   formData["experience"] = document.getElementById("experience").value;
//   return formData;
// }

// function insertNewRecord(data){
//   var table = document.getElementById("mainTable").getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.length);
//   cell1 = newRow.insertCell(0);
//   cell1.innerHTML = data.typyWork;
//   cell2 = newRow.insertCell(1);
//   cell2.innerHTML = data.firstName;
//   cell3 = newRow.insertCell(2);
//   cell3.innerHTML = data.lastName;
//   cell4 = newRow.insertCell(3);
//   cell4.innerHTML = data.age;
//   cell5 = newRow.insertCell(4);
//   cell5.innerHTML = data.position;
//   cell6 = newRow.insertCell(5);
//   cell6.innerHTML = data.sex;
//   cell7 = newRow.insertCell(6);
//   cell7.innerHTML = data.experience;
//   cell8 = newRow.insertCell(7);
//   cell8.innerHTML = '<a>Edit</a><a>Delete</a>'
// }