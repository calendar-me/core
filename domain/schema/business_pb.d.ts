// package: business
// file: schema/business.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class Availability extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getType(): Availability.TypeMap[keyof Availability.TypeMap];
  setType(value: Availability.TypeMap[keyof Availability.TypeMap]): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasStep(): boolean;
  clearStep(): void;
  getStep(): google_protobuf_duration_pb.Duration | undefined;
  setStep(value?: google_protobuf_duration_pb.Duration): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getSlots(): number;
  setSlots(value: number): void;

  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Availability.AsObject;
  static toObject(includeInstance: boolean, msg: Availability): Availability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Availability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Availability;
  static deserializeBinaryFromReader(message: Availability, reader: jspb.BinaryReader): Availability;
}

export namespace Availability {
  export type AsObject = {
    id: string,
    name: string,
    active: boolean,
    type: Availability.TypeMap[keyof Availability.TypeMap],
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    step?: google_protobuf_duration_pb.Duration.AsObject,
    frequency: number,
    times: number,
    slots: number,
    service?: Service.AsObject,
  }

  export interface TypeMap {
    AVAILABLE: 0;
    UNAVAILABLE: 1;
  }

  export const Type: TypeMap;
}

export class Service extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

  clearAvailabilitiesList(): void;
  getAvailabilitiesList(): Array<Availability>;
  setAvailabilitiesList(value: Array<Availability>): void;
  addAvailabilities(value?: Availability, index?: number): Availability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    id: string,
    name: string,
    active: boolean,
    business?: Business.AsObject,
    availabilitiesList: Array<Availability.AsObject>,
  }
}

export class Business extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  clearServicesList(): void;
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): void;
  addServices(value?: Service, index?: number): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Business.AsObject;
  static toObject(includeInstance: boolean, msg: Business): Business.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Business, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Business;
  static deserializeBinaryFromReader(message: Business, reader: jspb.BinaryReader): Business;
}

export namespace Business {
  export type AsObject = {
    id: string,
    name: string,
    active: boolean,
    servicesList: Array<Service.AsObject>,
  }
}

export class AvailabilityFilter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilityFilter): AvailabilityFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailabilityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilityFilter;
  static deserializeBinaryFromReader(message: AvailabilityFilter, reader: jspb.BinaryReader): AvailabilityFilter;
}

export namespace AvailabilityFilter {
  export type AsObject = {
  }
}

export class AvailabilitiesFilter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilitiesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilitiesFilter): AvailabilitiesFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailabilitiesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilitiesFilter;
  static deserializeBinaryFromReader(message: AvailabilitiesFilter, reader: jspb.BinaryReader): AvailabilitiesFilter;
}

export namespace AvailabilitiesFilter {
  export type AsObject = {
  }
}

export class ServiceFilter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceFilter): ServiceFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceFilter;
  static deserializeBinaryFromReader(message: ServiceFilter, reader: jspb.BinaryReader): ServiceFilter;
}

export namespace ServiceFilter {
  export type AsObject = {
  }
}

export class ServicesFilter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ServicesFilter): ServicesFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServicesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicesFilter;
  static deserializeBinaryFromReader(message: ServicesFilter, reader: jspb.BinaryReader): ServicesFilter;
}

export namespace ServicesFilter {
  export type AsObject = {
  }
}

export class BusinessFilter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessFilter.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessFilter): BusinessFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusinessFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessFilter;
  static deserializeBinaryFromReader(message: BusinessFilter, reader: jspb.BinaryReader): BusinessFilter;
}

export namespace BusinessFilter {
  export type AsObject = {
  }
}

export class BusinessesFilter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessesFilter): BusinessesFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusinessesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessesFilter;
  static deserializeBinaryFromReader(message: BusinessesFilter, reader: jspb.BinaryReader): BusinessesFilter;
}

export namespace BusinessesFilter {
  export type AsObject = {
  }
}

export class RegisterBusinessRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterBusinessRequest): RegisterBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterBusinessRequest;
  static deserializeBinaryFromReader(message: RegisterBusinessRequest, reader: jspb.BinaryReader): RegisterBusinessRequest;
}

export namespace RegisterBusinessRequest {
  export type AsObject = {
  }
}

export class RegisterBusinessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterBusinessResponse): RegisterBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterBusinessResponse;
  static deserializeBinaryFromReader(message: RegisterBusinessResponse, reader: jspb.BinaryReader): RegisterBusinessResponse;
}

export namespace RegisterBusinessResponse {
  export type AsObject = {
  }
}

export class GetBusinessRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessRequest): GetBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessRequest;
  static deserializeBinaryFromReader(message: GetBusinessRequest, reader: jspb.BinaryReader): GetBusinessRequest;
}

export namespace GetBusinessRequest {
  export type AsObject = {
  }
}

export class GetBusinessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessResponse): GetBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessResponse;
  static deserializeBinaryFromReader(message: GetBusinessResponse, reader: jspb.BinaryReader): GetBusinessResponse;
}

export namespace GetBusinessResponse {
  export type AsObject = {
  }
}

export class GetBusinessesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessesRequest): GetBusinessesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessesRequest;
  static deserializeBinaryFromReader(message: GetBusinessesRequest, reader: jspb.BinaryReader): GetBusinessesRequest;
}

export namespace GetBusinessesRequest {
  export type AsObject = {
  }
}

export class GetBusinessesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessesResponse): GetBusinessesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessesResponse;
  static deserializeBinaryFromReader(message: GetBusinessesResponse, reader: jspb.BinaryReader): GetBusinessesResponse;
}

export namespace GetBusinessesResponse {
  export type AsObject = {
  }
}

export class RegisterServiceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterServiceRequest): RegisterServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterServiceRequest;
  static deserializeBinaryFromReader(message: RegisterServiceRequest, reader: jspb.BinaryReader): RegisterServiceRequest;
}

export namespace RegisterServiceRequest {
  export type AsObject = {
  }
}

export class RegisterServiceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterServiceResponse): RegisterServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterServiceResponse;
  static deserializeBinaryFromReader(message: RegisterServiceResponse, reader: jspb.BinaryReader): RegisterServiceResponse;
}

export namespace RegisterServiceResponse {
  export type AsObject = {
  }
}

export class GetServiceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
  static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
  export type AsObject = {
  }
}

export class GetServiceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceResponse): GetServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceResponse;
  static deserializeBinaryFromReader(message: GetServiceResponse, reader: jspb.BinaryReader): GetServiceResponse;
}

export namespace GetServiceResponse {
  export type AsObject = {
  }
}

export class GetServicesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServicesRequest): GetServicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServicesRequest;
  static deserializeBinaryFromReader(message: GetServicesRequest, reader: jspb.BinaryReader): GetServicesRequest;
}

export namespace GetServicesRequest {
  export type AsObject = {
  }
}

export class GetServicesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServicesResponse): GetServicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServicesResponse;
  static deserializeBinaryFromReader(message: GetServicesResponse, reader: jspb.BinaryReader): GetServicesResponse;
}

export namespace GetServicesResponse {
  export type AsObject = {
  }
}

export class AddAvailabilityRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddAvailabilityRequest): AddAvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAvailabilityRequest;
  static deserializeBinaryFromReader(message: AddAvailabilityRequest, reader: jspb.BinaryReader): AddAvailabilityRequest;
}

export namespace AddAvailabilityRequest {
  export type AsObject = {
  }
}

export class AddAvailabilityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddAvailabilityResponse): AddAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAvailabilityResponse;
  static deserializeBinaryFromReader(message: AddAvailabilityResponse, reader: jspb.BinaryReader): AddAvailabilityResponse;
}

export namespace AddAvailabilityResponse {
  export type AsObject = {
  }
}

export class GetAvailabilityRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailabilityRequest): GetAvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailabilityRequest;
  static deserializeBinaryFromReader(message: GetAvailabilityRequest, reader: jspb.BinaryReader): GetAvailabilityRequest;
}

export namespace GetAvailabilityRequest {
  export type AsObject = {
  }
}

export class GetAvailabilityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailabilityResponse): GetAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailabilityResponse;
  static deserializeBinaryFromReader(message: GetAvailabilityResponse, reader: jspb.BinaryReader): GetAvailabilityResponse;
}

export namespace GetAvailabilityResponse {
  export type AsObject = {
  }
}

export class BookRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BookRequest): BookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookRequest;
  static deserializeBinaryFromReader(message: BookRequest, reader: jspb.BinaryReader): BookRequest;
}

export namespace BookRequest {
  export type AsObject = {
  }
}

export class BookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BookResponse): BookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookResponse;
  static deserializeBinaryFromReader(message: BookResponse, reader: jspb.BinaryReader): BookResponse;
}

export namespace BookResponse {
  export type AsObject = {
  }
}

export class ConfirmRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmRequest): ConfirmRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmRequest;
  static deserializeBinaryFromReader(message: ConfirmRequest, reader: jspb.BinaryReader): ConfirmRequest;
}

export namespace ConfirmRequest {
  export type AsObject = {
  }
}

export class ConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmResponse): ConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmResponse;
  static deserializeBinaryFromReader(message: ConfirmResponse, reader: jspb.BinaryReader): ConfirmResponse;
}

export namespace ConfirmResponse {
  export type AsObject = {
  }
}

export class CheckInRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckInRequest): CheckInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckInRequest;
  static deserializeBinaryFromReader(message: CheckInRequest, reader: jspb.BinaryReader): CheckInRequest;
}

export namespace CheckInRequest {
  export type AsObject = {
  }
}

export class CheckInResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckInResponse): CheckInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckInResponse;
  static deserializeBinaryFromReader(message: CheckInResponse, reader: jspb.BinaryReader): CheckInResponse;
}

export namespace CheckInResponse {
  export type AsObject = {
  }
}

export class CancelRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequest): CancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequest;
  static deserializeBinaryFromReader(message: CancelRequest, reader: jspb.BinaryReader): CancelRequest;
}

export namespace CancelRequest {
  export type AsObject = {
  }
}

export class CancelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelResponse): CancelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelResponse;
  static deserializeBinaryFromReader(message: CancelResponse, reader: jspb.BinaryReader): CancelResponse;
}

export namespace CancelResponse {
  export type AsObject = {
  }
}

export class ShiftRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShiftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShiftRequest): ShiftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShiftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShiftRequest;
  static deserializeBinaryFromReader(message: ShiftRequest, reader: jspb.BinaryReader): ShiftRequest;
}

export namespace ShiftRequest {
  export type AsObject = {
  }
}

export class ShiftResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShiftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShiftResponse): ShiftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShiftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShiftResponse;
  static deserializeBinaryFromReader(message: ShiftResponse, reader: jspb.BinaryReader): ShiftResponse;
}

export namespace ShiftResponse {
  export type AsObject = {
  }
}

export class GrantRolesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GrantRolesRequest): GrantRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantRolesRequest;
  static deserializeBinaryFromReader(message: GrantRolesRequest, reader: jspb.BinaryReader): GrantRolesRequest;
}

export namespace GrantRolesRequest {
  export type AsObject = {
  }
}

export class GrantRolesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GrantRolesResponse): GrantRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantRolesResponse;
  static deserializeBinaryFromReader(message: GrantRolesResponse, reader: jspb.BinaryReader): GrantRolesResponse;
}

export namespace GrantRolesResponse {
  export type AsObject = {
  }
}

export class RevokeRolesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeRolesRequest): RevokeRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeRolesRequest;
  static deserializeBinaryFromReader(message: RevokeRolesRequest, reader: jspb.BinaryReader): RevokeRolesRequest;
}

export namespace RevokeRolesRequest {
  export type AsObject = {
  }
}

export class RevokeRolesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeRolesResponse): RevokeRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeRolesResponse;
  static deserializeBinaryFromReader(message: RevokeRolesResponse, reader: jspb.BinaryReader): RevokeRolesResponse;
}

export namespace RevokeRolesResponse {
  export type AsObject = {
  }
}

export class GetRolesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRolesRequest): GetRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRolesRequest;
  static deserializeBinaryFromReader(message: GetRolesRequest, reader: jspb.BinaryReader): GetRolesRequest;
}

export namespace GetRolesRequest {
  export type AsObject = {
  }
}

export class GetRolesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRolesResponse): GetRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRolesResponse;
  static deserializeBinaryFromReader(message: GetRolesResponse, reader: jspb.BinaryReader): GetRolesResponse;
}

export namespace GetRolesResponse {
  export type AsObject = {
  }
}

