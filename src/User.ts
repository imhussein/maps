import faker from "faker";

export default class User {
  constructor(
    public name: string,
    public location: {
      lng: number;
      lat: number;
    } = (location = {
      lng: +faker.address.longitude(),
      lat: +faker.address.latitude()
    })
  ) {}
}
