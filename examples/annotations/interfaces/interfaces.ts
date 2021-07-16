interface Vehicle {
  name: string; 
  year: number; 
  broken: boolean;
  time: Date;
  summary(): string;
}
const oldCivic = {
  name: "Civid",
  year: 2000,
  broken: false,
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




printVehicle(oldCivic);