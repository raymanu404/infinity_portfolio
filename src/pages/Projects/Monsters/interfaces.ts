export interface MonsterI {
  id: string;
  name: string;
  email?: string;
  address?: AddressI;
  company?: CompanyI;
  phone?: string;
  username?: string;
}

export interface CompanyI {
  bs: string;
  catchPhrase: string;
  name: string;
}
export interface AddressI {
  city: string;
  geo: GeoI;
  street: string;
}

export interface GeoI {
  lat: string;
  lng: string;
}
