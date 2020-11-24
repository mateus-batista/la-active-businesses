import { Location } from "./Location";

export interface Business {
  name: string;

  address: string;

  city: string;

  zipCode: string;

  location?: Location;

  startDate?: Date;

  endDate?: Date;
}
