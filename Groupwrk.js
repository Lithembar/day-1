function CreatePerson(name,surname,hairType){
    this.name = name;
      this.surname = surname;
      this.hairType = hairType;
  }
   let person = new CreatePerson('Yandile','Matyityilili','Bold')
   let person2 = new CreatePerson('Ethan','Brown','Straight')
   let people = [person,person2]
   console.log(people);
  for (let object of people){
    if (object.hairType == 'Straight'){
        console.log(object.name)
    }
  }
