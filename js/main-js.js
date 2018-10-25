class Worker {
    constructor(name) {
      this.name = name;
    }
  
    walk() {
      alert("I walk: " + this.name);
    }
  }

class IndastrialWorker extends Worker{

}
class TransportWorker extends Worker{

}