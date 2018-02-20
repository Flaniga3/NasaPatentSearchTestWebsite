import { JsonProperty } from 'json-typescript-mapper';

export class NasaPatentModel {
  @JsonProperty('category')
  Category: string;
  @JsonProperty('client_record')
  ClientRecord: string;
  @JsonProperty('center')
  Center: string;
  @JsonProperty('reference_number')
  ReferenceNumber: string;
  @JsonProperty('abstract')
  Abstract: string;
  @JsonProperty('title')
  Title: string;
  @JsonProperty('expiration_date')
  ExpirationDate: string;

  constructor() {
    this.Category = undefined;
    this.ClientRecord = undefined;
    this.Center = undefined;
    this.ReferenceNumber = undefined;
    this.Abstract = undefined;
    this.Title = undefined;
    this.ExpirationDate = undefined;
  }
}
