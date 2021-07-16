interface Vehicle {
  name: string; 
  year: number; 
  broken: boolean;
  //time: Date;
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: false,
  summary() : string {
    return 'Hello'
  },
  //TS doesnt care if you add additional properties. At a minimum you have to use the types defined in an interface.
  term: true
};


const printVehicle = (vehicle: {name: string; year: number; broken: boolean}) : void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
}


const printVehicleWithInterface = (vehicle: Vehicle) : void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
}




printVehicleWithInterface(oldCivic);

