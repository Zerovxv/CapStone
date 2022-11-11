import { Vendor } from "../Vendor/Vendor.class";

export class Product{
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: string = "";
    unit: string = "";
    photopath: string = "";
    vendorId: string = "";
    vendors!: Vendor;


  }
