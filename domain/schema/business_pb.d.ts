// package: business
// file: schema/business.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as schema_user_pb from "../schema/user_pb";
import * as schema_common_pb from "../schema/common_pb";

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

  getRepeat(): number;
  setRepeat(value: number): void;

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
    repeat: number,
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

  getKind(): Service.KindMap[keyof Service.KindMap];
  setKind(value: Service.KindMap[keyof Service.KindMap]): void;

  getType(): Service.TypeMap[keyof Service.TypeMap];
  setType(value: Service.TypeMap[keyof Service.TypeMap]): void;

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
    kind: Service.KindMap[keyof Service.KindMap],
    type: Service.TypeMap[keyof Service.TypeMap],
    business?: Business.AsObject,
    availabilitiesList: Array<Availability.AsObject>,
  }

  export interface KindMap {
    BUSINESS_KIND_1: 0;
  }

  export const Kind: KindMap;

  export interface TypeMap {
    BUSINESS_TYPE_1: 0;
  }

  export const Type: TypeMap;
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

export class Role extends jspb.Message {
  getType(): Role.TypeMap[keyof Role.TypeMap];
  setType(value: Role.TypeMap[keyof Role.TypeMap]): void;

  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

  getElementCase(): Role.ElementCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    type: Role.TypeMap[keyof Role.TypeMap],
    business?: Business.AsObject,
    service?: Service.AsObject,
    user?: schema_user_pb.User.AsObject,
  }

  export interface TypeMap {
    ADMIN: 0;
    EDITOR: 1;
  }

  export const Type: TypeMap;

  export enum ElementCase {
    ELEMENT_NOT_SET = 0,
    BUSINESS = 2,
    SERVICE = 3,
  }
}

export class AvailabilityFilter extends jspb.Message {
  getId(): string;
  setId(value: string): void;

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
    id: string,
  }
}

export class AvailabilitiesFilter extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    service?: Service.AsObject,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ServiceFilter extends jspb.Message {
  getId(): string;
  setId(value: string): void;

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
    id: string,
  }
}

export class ServicesFilter extends jspb.Message {
  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

  hasKind(): boolean;
  clearKind(): void;
  getKind(): Service.KindMap[keyof Service.KindMap];
  setKind(value: Service.KindMap[keyof Service.KindMap]): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Service.TypeMap[keyof Service.TypeMap];
  setType(value: Service.TypeMap[keyof Service.TypeMap]): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): schema_common_pb.QueryParams | undefined;
  setParams(value?: schema_common_pb.QueryParams): void;

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
    business?: Business.AsObject,
    kind: Service.KindMap[keyof Service.KindMap],
    type: Service.TypeMap[keyof Service.TypeMap],
    params?: schema_common_pb.QueryParams.AsObject,
  }
}

export class BusinessFilter extends jspb.Message {
  getId(): string;
  setId(value: string): void;

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
    id: string,
  }
}

export class BusinessesFilter extends jspb.Message {
  hasKind(): boolean;
  clearKind(): void;
  getKind(): Service.KindMap[keyof Service.KindMap];
  setKind(value: Service.KindMap[keyof Service.KindMap]): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Service.TypeMap[keyof Service.TypeMap];
  setType(value: Service.TypeMap[keyof Service.TypeMap]): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): schema_common_pb.QueryParams | undefined;
  setParams(value?: schema_common_pb.QueryParams): void;

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
    kind: Service.KindMap[keyof Service.KindMap],
    type: Service.TypeMap[keyof Service.TypeMap],
    params?: schema_common_pb.QueryParams.AsObject,
  }
}

export class RoleFilter extends jspb.Message {
  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleFilter.AsObject;
  static toObject(includeInstance: boolean, msg: RoleFilter): RoleFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoleFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleFilter;
  static deserializeBinaryFromReader(message: RoleFilter, reader: jspb.BinaryReader): RoleFilter;
}

export namespace RoleFilter {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class RolesFilter extends jspb.Message {
  clearTypesList(): void;
  getTypesList(): Array<Role.TypeMap[keyof Role.TypeMap]>;
  setTypesList(value: Array<Role.TypeMap[keyof Role.TypeMap]>): void;
  addTypes(value: Role.TypeMap[keyof Role.TypeMap], index?: number): Role.TypeMap[keyof Role.TypeMap];

  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): schema_common_pb.QueryParams | undefined;
  setParams(value?: schema_common_pb.QueryParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RolesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: RolesFilter): RolesFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RolesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RolesFilter;
  static deserializeBinaryFromReader(message: RolesFilter, reader: jspb.BinaryReader): RolesFilter;
}

export namespace RolesFilter {
  export type AsObject = {
    typesList: Array<Role.TypeMap[keyof Role.TypeMap]>,
    business?: Business.AsObject,
    service?: Service.AsObject,
    user?: schema_user_pb.User.AsObject,
    params?: schema_common_pb.QueryParams.AsObject,
  }
}

export class RegisterBusinessRequest extends jspb.Message {
  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

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
    business?: Business.AsObject,
  }
}

export class RegisterBusinessResponse extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): void;

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
    businessId: string,
  }
}

export class GetBusinessRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): BusinessFilter | undefined;
  setFilter(value?: BusinessFilter): void;

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
    filter?: BusinessFilter.AsObject,
  }
}

export class GetBusinessResponse extends jspb.Message {
  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

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
    business?: Business.AsObject,
  }
}

export class GetBusinessesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): BusinessesFilter | undefined;
  setFilter(value?: BusinessesFilter): void;

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
    filter?: BusinessesFilter.AsObject,
  }
}

export class GetBusinessesResponse extends jspb.Message {
  clearBusinessesList(): void;
  getBusinessesList(): Array<Business>;
  setBusinessesList(value: Array<Business>): void;
  addBusinesses(value?: Business, index?: number): Business;

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
    businessesList: Array<Business.AsObject>,
  }
}

export class RegisterServiceRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

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
    service?: Service.AsObject,
  }
}

export class RegisterServiceResponse extends jspb.Message {
  getServiceId(): string;
  setServiceId(value: string): void;

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
    serviceId: string,
  }
}

export class GetServiceRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ServiceFilter | undefined;
  setFilter(value?: ServiceFilter): void;

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
    filter?: ServiceFilter.AsObject,
  }
}

export class GetServiceResponse extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

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
    service?: Service.AsObject,
  }
}

export class GetServicesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ServicesFilter | undefined;
  setFilter(value?: ServicesFilter): void;

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
    filter?: ServicesFilter.AsObject,
  }
}

export class GetServicesResponse extends jspb.Message {
  clearServicesList(): void;
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): void;
  addServices(value?: Service, index?: number): Service;

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
    servicesList: Array<Service.AsObject>,
  }
}

export class AddAvailabilitiesRequest extends jspb.Message {
  clearAvailabilitiesList(): void;
  getAvailabilitiesList(): Array<Availability>;
  setAvailabilitiesList(value: Array<Availability>): void;
  addAvailabilities(value?: Availability, index?: number): Availability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAvailabilitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddAvailabilitiesRequest): AddAvailabilitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddAvailabilitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAvailabilitiesRequest;
  static deserializeBinaryFromReader(message: AddAvailabilitiesRequest, reader: jspb.BinaryReader): AddAvailabilitiesRequest;
}

export namespace AddAvailabilitiesRequest {
  export type AsObject = {
    availabilitiesList: Array<Availability.AsObject>,
  }
}

export class AddAvailabilitiesResponse extends jspb.Message {
  clearAvailabilityIdsList(): void;
  getAvailabilityIdsList(): Array<string>;
  setAvailabilityIdsList(value: Array<string>): void;
  addAvailabilityIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAvailabilitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddAvailabilitiesResponse): AddAvailabilitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddAvailabilitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAvailabilitiesResponse;
  static deserializeBinaryFromReader(message: AddAvailabilitiesResponse, reader: jspb.BinaryReader): AddAvailabilitiesResponse;
}

export namespace AddAvailabilitiesResponse {
  export type AsObject = {
    availabilityIdsList: Array<string>,
  }
}

export class GetAvailabilitiesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): AvailabilitiesFilter | undefined;
  setFilter(value?: AvailabilitiesFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailabilitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailabilitiesRequest): GetAvailabilitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailabilitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailabilitiesRequest;
  static deserializeBinaryFromReader(message: GetAvailabilitiesRequest, reader: jspb.BinaryReader): GetAvailabilitiesRequest;
}

export namespace GetAvailabilitiesRequest {
  export type AsObject = {
    filter?: AvailabilitiesFilter.AsObject,
  }
}

export class GetAvailabilitiesResponse extends jspb.Message {
  clearAvailabilitiesList(): void;
  getAvailabilitiesList(): Array<Availability>;
  setAvailabilitiesList(value: Array<Availability>): void;
  addAvailabilities(value?: Availability, index?: number): Availability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailabilitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailabilitiesResponse): GetAvailabilitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailabilitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailabilitiesResponse;
  static deserializeBinaryFromReader(message: GetAvailabilitiesResponse, reader: jspb.BinaryReader): GetAvailabilitiesResponse;
}

export namespace GetAvailabilitiesResponse {
  export type AsObject = {
    availabilitiesList: Array<Availability.AsObject>,
  }
}

export class GrantRolesRequest extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

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
    rolesList: Array<Role.AsObject>,
  }
}

export class GrantRolesResponse extends jspb.Message {
  getGranted(): boolean;
  setGranted(value: boolean): void;

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
    granted: boolean,
  }
}

export class RevokeRolesRequest extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

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
    rolesList: Array<Role.AsObject>,
  }
}

export class RevokeRolesResponse extends jspb.Message {
  getRevoked(): boolean;
  setRevoked(value: boolean): void;

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
    revoked: boolean,
  }
}

export class GetRolesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): RolesFilter | undefined;
  setFilter(value?: RolesFilter): void;

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
    filter?: RolesFilter.AsObject,
  }
}

export class GetRolesResponse extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

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
    rolesList: Array<Role.AsObject>,
  }
}

export class CreateBusinessRequest extends jspb.Message {
  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessRequest): CreateBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessRequest;
  static deserializeBinaryFromReader(message: CreateBusinessRequest, reader: jspb.BinaryReader): CreateBusinessRequest;
}

export namespace CreateBusinessRequest {
  export type AsObject = {
    business?: Business.AsObject,
  }
}

export class CreateBusinessResponse extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessResponse): CreateBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessResponse;
  static deserializeBinaryFromReader(message: CreateBusinessResponse, reader: jspb.BinaryReader): CreateBusinessResponse;
}

export namespace CreateBusinessResponse {
  export type AsObject = {
    businessId: string,
  }
}

export class UpdateBusinessRequest extends jspb.Message {
  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessRequest): UpdateBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessRequest, reader: jspb.BinaryReader): UpdateBusinessRequest;
}

export namespace UpdateBusinessRequest {
  export type AsObject = {
    business?: Business.AsObject,
  }
}

export class UpdateBusinessResponse extends jspb.Message {
  getUpdated(): boolean;
  setUpdated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessResponse): UpdateBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessResponse, reader: jspb.BinaryReader): UpdateBusinessResponse;
}

export namespace UpdateBusinessResponse {
  export type AsObject = {
    updated: boolean,
  }
}

export class DeleteBusinessRequest extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessRequest): DeleteBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessRequest, reader: jspb.BinaryReader): DeleteBusinessRequest;
}

export namespace DeleteBusinessRequest {
  export type AsObject = {
    businessId: string,
  }
}

export class DeleteBusinessResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessResponse): DeleteBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessResponse;
  static deserializeBinaryFromReader(message: DeleteBusinessResponse, reader: jspb.BinaryReader): DeleteBusinessResponse;
}

export namespace DeleteBusinessResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export class FindBusinessRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): BusinessFilter | undefined;
  setFilter(value?: BusinessFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindBusinessRequest): FindBusinessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindBusinessRequest;
  static deserializeBinaryFromReader(message: FindBusinessRequest, reader: jspb.BinaryReader): FindBusinessRequest;
}

export namespace FindBusinessRequest {
  export type AsObject = {
    filter?: BusinessFilter.AsObject,
  }
}

export class FindBusinessResponse extends jspb.Message {
  hasBusiness(): boolean;
  clearBusiness(): void;
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindBusinessResponse): FindBusinessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindBusinessResponse;
  static deserializeBinaryFromReader(message: FindBusinessResponse, reader: jspb.BinaryReader): FindBusinessResponse;
}

export namespace FindBusinessResponse {
  export type AsObject = {
    business?: Business.AsObject,
  }
}

export class FindBusinessesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): BusinessesFilter | undefined;
  setFilter(value?: BusinessesFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindBusinessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindBusinessesRequest): FindBusinessesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindBusinessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindBusinessesRequest;
  static deserializeBinaryFromReader(message: FindBusinessesRequest, reader: jspb.BinaryReader): FindBusinessesRequest;
}

export namespace FindBusinessesRequest {
  export type AsObject = {
    filter?: BusinessesFilter.AsObject,
  }
}

export class FindBusinessesResponse extends jspb.Message {
  clearBusinessesList(): void;
  getBusinessesList(): Array<Business>;
  setBusinessesList(value: Array<Business>): void;
  addBusinesses(value?: Business, index?: number): Business;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindBusinessesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindBusinessesResponse): FindBusinessesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindBusinessesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindBusinessesResponse;
  static deserializeBinaryFromReader(message: FindBusinessesResponse, reader: jspb.BinaryReader): FindBusinessesResponse;
}

export namespace FindBusinessesResponse {
  export type AsObject = {
    businessesList: Array<Business.AsObject>,
  }
}

export class CreateServiceRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceRequest): CreateServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceRequest;
  static deserializeBinaryFromReader(message: CreateServiceRequest, reader: jspb.BinaryReader): CreateServiceRequest;
}

export namespace CreateServiceRequest {
  export type AsObject = {
    service?: Service.AsObject,
  }
}

export class CreateServiceResponse extends jspb.Message {
  getServiceId(): string;
  setServiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceResponse): CreateServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceResponse;
  static deserializeBinaryFromReader(message: CreateServiceResponse, reader: jspb.BinaryReader): CreateServiceResponse;
}

export namespace CreateServiceResponse {
  export type AsObject = {
    serviceId: string,
  }
}

export class UpdateServiceRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceRequest): UpdateServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceRequest;
  static deserializeBinaryFromReader(message: UpdateServiceRequest, reader: jspb.BinaryReader): UpdateServiceRequest;
}

export namespace UpdateServiceRequest {
  export type AsObject = {
    service?: Service.AsObject,
  }
}

export class UpdateServiceResponse extends jspb.Message {
  getUpdated(): boolean;
  setUpdated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceResponse): UpdateServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceResponse;
  static deserializeBinaryFromReader(message: UpdateServiceResponse, reader: jspb.BinaryReader): UpdateServiceResponse;
}

export namespace UpdateServiceResponse {
  export type AsObject = {
    updated: boolean,
  }
}

export class DeleteServiceRequest extends jspb.Message {
  getServiceId(): string;
  setServiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceRequest): DeleteServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceRequest;
  static deserializeBinaryFromReader(message: DeleteServiceRequest, reader: jspb.BinaryReader): DeleteServiceRequest;
}

export namespace DeleteServiceRequest {
  export type AsObject = {
    serviceId: string,
  }
}

export class DeleteServiceResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceResponse): DeleteServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceResponse;
  static deserializeBinaryFromReader(message: DeleteServiceResponse, reader: jspb.BinaryReader): DeleteServiceResponse;
}

export namespace DeleteServiceResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export class FindServiceRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ServiceFilter | undefined;
  setFilter(value?: ServiceFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindServiceRequest): FindServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindServiceRequest;
  static deserializeBinaryFromReader(message: FindServiceRequest, reader: jspb.BinaryReader): FindServiceRequest;
}

export namespace FindServiceRequest {
  export type AsObject = {
    filter?: ServiceFilter.AsObject,
  }
}

export class FindServiceResponse extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindServiceResponse): FindServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindServiceResponse;
  static deserializeBinaryFromReader(message: FindServiceResponse, reader: jspb.BinaryReader): FindServiceResponse;
}

export namespace FindServiceResponse {
  export type AsObject = {
    service?: Service.AsObject,
  }
}

export class FindServicesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): ServicesFilter | undefined;
  setFilter(value?: ServicesFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindServicesRequest): FindServicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindServicesRequest;
  static deserializeBinaryFromReader(message: FindServicesRequest, reader: jspb.BinaryReader): FindServicesRequest;
}

export namespace FindServicesRequest {
  export type AsObject = {
    filter?: ServicesFilter.AsObject,
  }
}

export class FindServicesResponse extends jspb.Message {
  clearServicesList(): void;
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): void;
  addServices(value?: Service, index?: number): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindServicesResponse): FindServicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindServicesResponse;
  static deserializeBinaryFromReader(message: FindServicesResponse, reader: jspb.BinaryReader): FindServicesResponse;
}

export namespace FindServicesResponse {
  export type AsObject = {
    servicesList: Array<Service.AsObject>,
  }
}

export class CreateAvailabilityRequest extends jspb.Message {
  hasAvailability(): boolean;
  clearAvailability(): void;
  getAvailability(): Availability | undefined;
  setAvailability(value?: Availability): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAvailabilityRequest): CreateAvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAvailabilityRequest;
  static deserializeBinaryFromReader(message: CreateAvailabilityRequest, reader: jspb.BinaryReader): CreateAvailabilityRequest;
}

export namespace CreateAvailabilityRequest {
  export type AsObject = {
    availability?: Availability.AsObject,
  }
}

export class CreateAvailabilityResponse extends jspb.Message {
  getAvailabilityId(): string;
  setAvailabilityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAvailabilityResponse): CreateAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAvailabilityResponse;
  static deserializeBinaryFromReader(message: CreateAvailabilityResponse, reader: jspb.BinaryReader): CreateAvailabilityResponse;
}

export namespace CreateAvailabilityResponse {
  export type AsObject = {
    availabilityId: string,
  }
}

export class UpdateAvailabilityRequest extends jspb.Message {
  hasAvailability(): boolean;
  clearAvailability(): void;
  getAvailability(): Availability | undefined;
  setAvailability(value?: Availability): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAvailabilityRequest): UpdateAvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAvailabilityRequest;
  static deserializeBinaryFromReader(message: UpdateAvailabilityRequest, reader: jspb.BinaryReader): UpdateAvailabilityRequest;
}

export namespace UpdateAvailabilityRequest {
  export type AsObject = {
    availability?: Availability.AsObject,
  }
}

export class UpdateAvailabilityResponse extends jspb.Message {
  getUpdate(): boolean;
  setUpdate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAvailabilityResponse): UpdateAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAvailabilityResponse;
  static deserializeBinaryFromReader(message: UpdateAvailabilityResponse, reader: jspb.BinaryReader): UpdateAvailabilityResponse;
}

export namespace UpdateAvailabilityResponse {
  export type AsObject = {
    update: boolean,
  }
}

export class DeleteAvailabilityRequest extends jspb.Message {
  getAvailabilityId(): string;
  setAvailabilityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAvailabilityRequest): DeleteAvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAvailabilityRequest;
  static deserializeBinaryFromReader(message: DeleteAvailabilityRequest, reader: jspb.BinaryReader): DeleteAvailabilityRequest;
}

export namespace DeleteAvailabilityRequest {
  export type AsObject = {
    availabilityId: string,
  }
}

export class DeleteAvailabilityResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAvailabilityResponse): DeleteAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAvailabilityResponse;
  static deserializeBinaryFromReader(message: DeleteAvailabilityResponse, reader: jspb.BinaryReader): DeleteAvailabilityResponse;
}

export namespace DeleteAvailabilityResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export class FindAvailabilityRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): AvailabilityFilter | undefined;
  setFilter(value?: AvailabilityFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindAvailabilityRequest): FindAvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAvailabilityRequest;
  static deserializeBinaryFromReader(message: FindAvailabilityRequest, reader: jspb.BinaryReader): FindAvailabilityRequest;
}

export namespace FindAvailabilityRequest {
  export type AsObject = {
    filter?: AvailabilityFilter.AsObject,
  }
}

export class FindAvailabilityResponse extends jspb.Message {
  hasAvailability(): boolean;
  clearAvailability(): void;
  getAvailability(): Availability | undefined;
  setAvailability(value?: Availability): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindAvailabilityResponse): FindAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAvailabilityResponse;
  static deserializeBinaryFromReader(message: FindAvailabilityResponse, reader: jspb.BinaryReader): FindAvailabilityResponse;
}

export namespace FindAvailabilityResponse {
  export type AsObject = {
    availability?: Availability.AsObject,
  }
}

export class FindAvailabilitiesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): AvailabilitiesFilter | undefined;
  setFilter(value?: AvailabilitiesFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAvailabilitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindAvailabilitiesRequest): FindAvailabilitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAvailabilitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAvailabilitiesRequest;
  static deserializeBinaryFromReader(message: FindAvailabilitiesRequest, reader: jspb.BinaryReader): FindAvailabilitiesRequest;
}

export namespace FindAvailabilitiesRequest {
  export type AsObject = {
    filter?: AvailabilitiesFilter.AsObject,
  }
}

export class FindAvailabilitiesResponse extends jspb.Message {
  clearAvailabilitiesList(): void;
  getAvailabilitiesList(): Array<Availability>;
  setAvailabilitiesList(value: Array<Availability>): void;
  addAvailabilities(value?: Availability, index?: number): Availability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAvailabilitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindAvailabilitiesResponse): FindAvailabilitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAvailabilitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAvailabilitiesResponse;
  static deserializeBinaryFromReader(message: FindAvailabilitiesResponse, reader: jspb.BinaryReader): FindAvailabilitiesResponse;
}

export namespace FindAvailabilitiesResponse {
  export type AsObject = {
    availabilitiesList: Array<Availability.AsObject>,
  }
}

export class CreateRoleRequest extends jspb.Message {
  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleRequest): CreateRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleRequest;
  static deserializeBinaryFromReader(message: CreateRoleRequest, reader: jspb.BinaryReader): CreateRoleRequest;
}

export namespace CreateRoleRequest {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class CreateRoleResponse extends jspb.Message {
  getCreated(): boolean;
  setCreated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleResponse): CreateRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleResponse;
  static deserializeBinaryFromReader(message: CreateRoleResponse, reader: jspb.BinaryReader): CreateRoleResponse;
}

export namespace CreateRoleResponse {
  export type AsObject = {
    created: boolean,
  }
}

export class DeleteRoleRequest extends jspb.Message {
  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleRequest): DeleteRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleRequest;
  static deserializeBinaryFromReader(message: DeleteRoleRequest, reader: jspb.BinaryReader): DeleteRoleRequest;
}

export namespace DeleteRoleRequest {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class DeleteRoleResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleResponse): DeleteRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleResponse;
  static deserializeBinaryFromReader(message: DeleteRoleResponse, reader: jspb.BinaryReader): DeleteRoleResponse;
}

export namespace DeleteRoleResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export class FindRoleRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): RoleFilter | undefined;
  setFilter(value?: RoleFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindRoleRequest): FindRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRoleRequest;
  static deserializeBinaryFromReader(message: FindRoleRequest, reader: jspb.BinaryReader): FindRoleRequest;
}

export namespace FindRoleRequest {
  export type AsObject = {
    filter?: RoleFilter.AsObject,
  }
}

export class FindRoleResponse extends jspb.Message {
  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindRoleResponse): FindRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRoleResponse;
  static deserializeBinaryFromReader(message: FindRoleResponse, reader: jspb.BinaryReader): FindRoleResponse;
}

export namespace FindRoleResponse {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class FindRolesRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): RolesFilter | undefined;
  setFilter(value?: RolesFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindRolesRequest): FindRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRolesRequest;
  static deserializeBinaryFromReader(message: FindRolesRequest, reader: jspb.BinaryReader): FindRolesRequest;
}

export namespace FindRolesRequest {
  export type AsObject = {
    filter?: RolesFilter.AsObject,
  }
}

export class FindRolesResponse extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindRolesResponse): FindRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRolesResponse;
  static deserializeBinaryFromReader(message: FindRolesResponse, reader: jspb.BinaryReader): FindRolesResponse;
}

export namespace FindRolesResponse {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
  }
}

