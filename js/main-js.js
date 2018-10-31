function Worker(firstName,lastName,age,) {
  this.firstName = name;
  this.lastName = lastName;  
  this.age = age;
  this.position = position;
  this.sex = sex;
  this.experience = experience;
  this.getName = function(){
    return this.name;
  }
  this.getLastName = function(){
    return this.lastName;
  }
  this.setAge = function (age) {
    if (age <= 0 || age >= 100)
    throw "Значение должно быть больше 0 и меньше 100";
    this.age = age;
  }
  this.setPosition = function(position){
    this.position = position;
  }
}

function IndastrialWorker(){
  Worker.call(this);
  this.rank = rank;
  this.personalNumber = personalNumber;
  this.getRank = function(){
    return this.rank;
  }
  this.getPersonalNumber = function(){
    return this.personalNumber;
  }
  this.setRank = function(rank){
    if (rank >0 || rank <=7)
    throw "Значение должно быть больше 0 и меньше 7";
    this.rank = rank;
  }
}
function TransportWorker(){
  Worker.call(this);
  this.transport = transport;
  this.numberOfTransport = numberOfTransport;
  this.getTransport = function(){
    return this.transport;
  }
  this.getNumberOfTransport = function(){
    return this.numberOfTransport;
  }
  this.setTransport = function(transport){
    if(transport=='автомобиль' || transport=='автобус' || transport=='тралейбус' || transport=='трамвай' || transport=='грузовик')
    throw "Неверный транспорт";
    this.transport = transport;
  }
  
}
workType.onChange = function(a) {
  alert("work");
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