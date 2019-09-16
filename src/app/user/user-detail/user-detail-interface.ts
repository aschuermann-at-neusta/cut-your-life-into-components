export interface UserDetailInterface {
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    street: string;
    housenumber: number;
    city: string;
  };
  age: {
    age: number;
  };
}
