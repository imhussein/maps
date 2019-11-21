import User from "./User";
import Company from "./Company";
import Mapable from "./Mapable";

export default class CustomMap {
  constructor(
    public div: string,
    private googleMap: google.maps.Map = new google.maps.Map(
      document.querySelector(`.${div}`),
      {
        zoom: 3,
        center: {
          lat: 0,
          lng: 23
        }
      }
    )
  ) {}

  addMarker(mapable: Mapable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      }
    });
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lan
  //     }
  //   });
  // }
}
