const profile = {
  name: 'Justin',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// You can't just use number as a type. You have to use the object structure { age: number }
const {age}: {age: number} = profile;

const { coords: {lat, lng} } : {coords: {lat: number; lng: number}}= profile;