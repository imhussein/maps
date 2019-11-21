import faker from "faker";

export default class Company {
  constructor(
    public name: string,
    public catchPhrase: string = faker.company.catchPhrase(),
    public location: { lng: number; lat: number } = {
      lng: +faker.address.longitude(),
      lat: +faker.address.latitude()
    }
  ) {}
}
