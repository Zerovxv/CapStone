import { RequestLine } from "../RequestLine/requestline.class";

export class Request{
    id: number = 0;
    description: string = "";
    justification : string = "";
    rejectionReason: string = "";
    deliveryMode: string = "PickUp";
    status: string = "NEW";
    total: number = 0;
    userId: number = 0;

    requestLines!: RequestLine[];

  }
