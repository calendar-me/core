// package: booking
// file: schema/booking.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as schema_user_pb from "../schema/user_pb";
import * as schema_business_pb from "../schema/business_pb";
import * as schema_common_pb from "../schema/common_pb";

export class Slot extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap];
  setType(value: schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap]): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

  hasAvailability(): boolean;
  clearAvailability(): void;
  getAvailability(): schema_business_pb.Availability | undefined;
  setAvailability(value?: schema_business_pb.Availability): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Slot.AsObject;
  static toObject(includeInstance: boolean, msg: Slot): Slot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Slot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Slot;
  static deserializeBinaryFromReader(message: Slot, reader: jspb.BinaryReader): Slot;
}

export namespace Slot {
  export type AsObject = {
    id: string,
    type: schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap],
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    user?: schema_user_pb.User.AsObject,
    availability?: schema_business_pb.Availability.AsObject,
  }
}

export class Ticket extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  getType(): Ticket.TypeMap[keyof Ticket.TypeMap];
  setType(value: Ticket.TypeMap[keyof Ticket.TypeMap]): void;

  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ticket.AsObject;
  static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ticket;
  static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
  export type AsObject = {
    id: string,
    number: number,
    type: Ticket.TypeMap[keyof Ticket.TypeMap],
    slot?: Slot.AsObject,
  }

  export interface TypeMap {
    IN_LINE: 0;
    CHECKED: 1;
    CANCELED: 2;
  }

  export const Type: TypeMap;
}

export class SlotFilter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): SlotFilter.Index | undefined;
  setIndex(value?: SlotFilter.Index): void;

  hasType(): boolean;
  clearType(): void;
  getType(): schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap];
  setType(value: schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlotFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SlotFilter): SlotFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlotFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlotFilter;
  static deserializeBinaryFromReader(message: SlotFilter, reader: jspb.BinaryReader): SlotFilter;
}

export namespace SlotFilter {
  export type AsObject = {
    id: string,
    index?: SlotFilter.Index.AsObject,
    type: schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap],
  }

  export class Index extends jspb.Message {
    hasUser(): boolean;
    clearUser(): void;
    getUser(): schema_user_pb.User | undefined;
    setUser(value?: schema_user_pb.User): void;

    hasAvailability(): boolean;
    clearAvailability(): void;
    getAvailability(): schema_business_pb.Availability | undefined;
    setAvailability(value?: schema_business_pb.Availability): void;

    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Index.AsObject;
    static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Index;
    static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
  }

  export namespace Index {
    export type AsObject = {
      user?: schema_user_pb.User.AsObject,
      availability?: schema_business_pb.Availability.AsObject,
      start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class SlotsFilter extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

  hasAvailability(): boolean;
  clearAvailability(): void;
  getAvailability(): schema_business_pb.Availability | undefined;
  setAvailability(value?: schema_business_pb.Availability): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasType(): boolean;
  clearType(): void;
  getType(): schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap];
  setType(value: schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap]): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): schema_common_pb.QueryParams | undefined;
  setParams(value?: schema_common_pb.QueryParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlotsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SlotsFilter): SlotsFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlotsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlotsFilter;
  static deserializeBinaryFromReader(message: SlotsFilter, reader: jspb.BinaryReader): SlotsFilter;
}

export namespace SlotsFilter {
  export type AsObject = {
    idsList: Array<string>,
    user?: schema_user_pb.User.AsObject,
    availability?: schema_business_pb.Availability.AsObject,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: schema_business_pb.Availability.TypeMap[keyof schema_business_pb.Availability.TypeMap],
    params?: schema_common_pb.QueryParams.AsObject,
  }
}

export class TicketFilter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TicketFilter): TicketFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketFilter;
  static deserializeBinaryFromReader(message: TicketFilter, reader: jspb.BinaryReader): TicketFilter;
}

export namespace TicketFilter {
  export type AsObject = {
    id: string,
  }

  export class Index extends jspb.Message {
    hasUser(): boolean;
    clearUser(): void;
    getUser(): schema_user_pb.User | undefined;
    setUser(value?: schema_user_pb.User): void;

    hasSlot(): boolean;
    clearSlot(): void;
    getSlot(): Slot | undefined;
    setSlot(value?: Slot): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Index.AsObject;
    static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Index;
    static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
  }

  export namespace Index {
    export type AsObject = {
      user?: schema_user_pb.User.AsObject,
      slot?: Slot.AsObject,
    }
  }
}

export class TicketsFilter extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

  hasAvailability(): boolean;
  clearAvailability(): void;
  getAvailability(): schema_business_pb.Availability | undefined;
  setAvailability(value?: schema_business_pb.Availability): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Ticket.TypeMap[keyof Ticket.TypeMap];
  setType(value: Ticket.TypeMap[keyof Ticket.TypeMap]): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): schema_common_pb.QueryParams | undefined;
  setParams(value?: schema_common_pb.QueryParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TicketsFilter): TicketsFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketsFilter;
  static deserializeBinaryFromReader(message: TicketsFilter, reader: jspb.BinaryReader): TicketsFilter;
}

export namespace TicketsFilter {
  export type AsObject = {
    idsList: Array<string>,
    user?: schema_user_pb.User.AsObject,
    availability?: schema_business_pb.Availability.AsObject,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: Ticket.TypeMap[keyof Ticket.TypeMap],
    params?: schema_common_pb.QueryParams.AsObject,
  }
}

export class CalendarSlotsRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): schema_business_pb.Service | undefined;
  setService(value?: schema_business_pb.Service): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalendarSlotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalendarSlotsRequest): CalendarSlotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalendarSlotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalendarSlotsRequest;
  static deserializeBinaryFromReader(message: CalendarSlotsRequest, reader: jspb.BinaryReader): CalendarSlotsRequest;
}

export namespace CalendarSlotsRequest {
  export type AsObject = {
    service?: schema_business_pb.Service.AsObject,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CalendarSlotsResponse extends jspb.Message {
  clearSlotsList(): void;
  getSlotsList(): Array<Slot>;
  setSlotsList(value: Array<Slot>): void;
  addSlots(value?: Slot, index?: number): Slot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalendarSlotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CalendarSlotsResponse): CalendarSlotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalendarSlotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalendarSlotsResponse;
  static deserializeBinaryFromReader(message: CalendarSlotsResponse, reader: jspb.BinaryReader): CalendarSlotsResponse;
}

export namespace CalendarSlotsResponse {
  export type AsObject = {
    slotsList: Array<Slot.AsObject>,
  }
}

export class PreviewSlotsRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): schema_business_pb.Service | undefined;
  setService(value?: schema_business_pb.Service): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearAvailabilitiesList(): void;
  getAvailabilitiesList(): Array<schema_business_pb.Availability>;
  setAvailabilitiesList(value: Array<schema_business_pb.Availability>): void;
  addAvailabilities(value?: schema_business_pb.Availability, index?: number): schema_business_pb.Availability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewSlotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewSlotsRequest): PreviewSlotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreviewSlotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewSlotsRequest;
  static deserializeBinaryFromReader(message: PreviewSlotsRequest, reader: jspb.BinaryReader): PreviewSlotsRequest;
}

export namespace PreviewSlotsRequest {
  export type AsObject = {
    service?: schema_business_pb.Service.AsObject,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    availabilitiesList: Array<schema_business_pb.Availability.AsObject>,
  }
}

export class PreviewSlotsResponse extends jspb.Message {
  clearSlotsList(): void;
  getSlotsList(): Array<Slot>;
  setSlotsList(value: Array<Slot>): void;
  addSlots(value?: Slot, index?: number): Slot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewSlotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewSlotsResponse): PreviewSlotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreviewSlotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewSlotsResponse;
  static deserializeBinaryFromReader(message: PreviewSlotsResponse, reader: jspb.BinaryReader): PreviewSlotsResponse;
}

export namespace PreviewSlotsResponse {
  export type AsObject = {
    slotsList: Array<Slot.AsObject>,
  }
}

export class BookRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): schema_business_pb.Service | undefined;
  setService(value?: schema_business_pb.Service): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

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
    service?: schema_business_pb.Service.AsObject,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class BookResponse extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

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
    slot?: Slot.AsObject,
  }
}

export class GetBookingRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): SlotFilter | undefined;
  setFilter(value?: SlotFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookingRequest): GetBookingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookingRequest;
  static deserializeBinaryFromReader(message: GetBookingRequest, reader: jspb.BinaryReader): GetBookingRequest;
}

export namespace GetBookingRequest {
  export type AsObject = {
    filter?: SlotFilter.AsObject,
  }
}

export class GetBookingResponse extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookingResponse): GetBookingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookingResponse;
  static deserializeBinaryFromReader(message: GetBookingResponse, reader: jspb.BinaryReader): GetBookingResponse;
}

export namespace GetBookingResponse {
  export type AsObject = {
    slot?: Slot.AsObject,
  }
}

export class GetBookingsRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): SlotsFilter | undefined;
  setFilter(value?: SlotsFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookingsRequest): GetBookingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookingsRequest;
  static deserializeBinaryFromReader(message: GetBookingsRequest, reader: jspb.BinaryReader): GetBookingsRequest;
}

export namespace GetBookingsRequest {
  export type AsObject = {
    filter?: SlotsFilter.AsObject,
  }
}

export class GetBookingsResponse extends jspb.Message {
  clearSlotsList(): void;
  getSlotsList(): Array<Slot>;
  setSlotsList(value: Array<Slot>): void;
  addSlots(value?: Slot, index?: number): Slot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookingsResponse): GetBookingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookingsResponse;
  static deserializeBinaryFromReader(message: GetBookingsResponse, reader: jspb.BinaryReader): GetBookingsResponse;
}

export namespace GetBookingsResponse {
  export type AsObject = {
    slotsList: Array<Slot.AsObject>,
  }
}

export class ConfirmRequest extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

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
    slot?: Slot.AsObject,
  }
}

export class ConfirmResponse extends jspb.Message {
  getConfirmed(): boolean;
  setConfirmed(value: boolean): void;

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
    confirmed: boolean,
  }
}

export class CheckInRequest extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

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
    slot?: Slot.AsObject,
  }
}

export class CheckInResponse extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

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
    ticket?: Ticket.AsObject,
  }
}

export class CancelRequest extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

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
    slot?: Slot.AsObject,
  }
}

export class CancelResponse extends jspb.Message {
  getCanceled(): boolean;
  setCanceled(value: boolean): void;

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
    canceled: boolean,
  }
}

export class ShiftRequest extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    slot?: Slot.AsObject,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ShiftResponse extends jspb.Message {
  getShifted(): boolean;
  setShifted(value: boolean): void;

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
    shifted: boolean,
  }
}

export class GetTicketRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): TicketFilter | undefined;
  setFilter(value?: TicketFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketRequest): GetTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketRequest;
  static deserializeBinaryFromReader(message: GetTicketRequest, reader: jspb.BinaryReader): GetTicketRequest;
}

export namespace GetTicketRequest {
  export type AsObject = {
    filter?: TicketFilter.AsObject,
  }
}

export class GetTicketResponse extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketResponse): GetTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketResponse;
  static deserializeBinaryFromReader(message: GetTicketResponse, reader: jspb.BinaryReader): GetTicketResponse;
}

export namespace GetTicketResponse {
  export type AsObject = {
    ticket?: Ticket.AsObject,
  }
}

export class CheckTicketRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): TicketFilter | undefined;
  setFilter(value?: TicketFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTicketRequest): CheckTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTicketRequest;
  static deserializeBinaryFromReader(message: CheckTicketRequest, reader: jspb.BinaryReader): CheckTicketRequest;
}

export namespace CheckTicketRequest {
  export type AsObject = {
    filter?: TicketFilter.AsObject,
  }
}

export class CheckTicketResponse extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTicketResponse): CheckTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTicketResponse;
  static deserializeBinaryFromReader(message: CheckTicketResponse, reader: jspb.BinaryReader): CheckTicketResponse;
}

export namespace CheckTicketResponse {
  export type AsObject = {
    ticket?: Ticket.AsObject,
  }
}

export class CreateSlotRequest extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSlotRequest): CreateSlotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSlotRequest;
  static deserializeBinaryFromReader(message: CreateSlotRequest, reader: jspb.BinaryReader): CreateSlotRequest;
}

export namespace CreateSlotRequest {
  export type AsObject = {
    slot?: Slot.AsObject,
  }
}

export class CreateSlotResponse extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSlotResponse): CreateSlotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSlotResponse;
  static deserializeBinaryFromReader(message: CreateSlotResponse, reader: jspb.BinaryReader): CreateSlotResponse;
}

export namespace CreateSlotResponse {
  export type AsObject = {
    slot?: Slot.AsObject,
  }
}

export class UpdateSlotRequest extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSlotRequest): UpdateSlotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSlotRequest;
  static deserializeBinaryFromReader(message: UpdateSlotRequest, reader: jspb.BinaryReader): UpdateSlotRequest;
}

export namespace UpdateSlotRequest {
  export type AsObject = {
    slot?: Slot.AsObject,
  }
}

export class UpdateSlotResponse extends jspb.Message {
  getUpdated(): boolean;
  setUpdated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSlotResponse): UpdateSlotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSlotResponse;
  static deserializeBinaryFromReader(message: UpdateSlotResponse, reader: jspb.BinaryReader): UpdateSlotResponse;
}

export namespace UpdateSlotResponse {
  export type AsObject = {
    updated: boolean,
  }
}

export class DeleteSlotRequest extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSlotRequest): DeleteSlotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSlotRequest;
  static deserializeBinaryFromReader(message: DeleteSlotRequest, reader: jspb.BinaryReader): DeleteSlotRequest;
}

export namespace DeleteSlotRequest {
  export type AsObject = {
    slot?: Slot.AsObject,
  }
}

export class DeleteSlotResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSlotResponse): DeleteSlotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSlotResponse;
  static deserializeBinaryFromReader(message: DeleteSlotResponse, reader: jspb.BinaryReader): DeleteSlotResponse;
}

export namespace DeleteSlotResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export class FindSlotRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): SlotFilter | undefined;
  setFilter(value?: SlotFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindSlotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindSlotRequest): FindSlotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindSlotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindSlotRequest;
  static deserializeBinaryFromReader(message: FindSlotRequest, reader: jspb.BinaryReader): FindSlotRequest;
}

export namespace FindSlotRequest {
  export type AsObject = {
    filter?: SlotFilter.AsObject,
  }
}

export class FindSlotResponse extends jspb.Message {
  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): Slot | undefined;
  setSlot(value?: Slot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindSlotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindSlotResponse): FindSlotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindSlotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindSlotResponse;
  static deserializeBinaryFromReader(message: FindSlotResponse, reader: jspb.BinaryReader): FindSlotResponse;
}

export namespace FindSlotResponse {
  export type AsObject = {
    slot?: Slot.AsObject,
  }
}

export class FindSlotsRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): SlotsFilter | undefined;
  setFilter(value?: SlotsFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindSlotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindSlotsRequest): FindSlotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindSlotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindSlotsRequest;
  static deserializeBinaryFromReader(message: FindSlotsRequest, reader: jspb.BinaryReader): FindSlotsRequest;
}

export namespace FindSlotsRequest {
  export type AsObject = {
    filter?: SlotsFilter.AsObject,
  }
}

export class FindSlotsResponse extends jspb.Message {
  clearSlotsList(): void;
  getSlotsList(): Array<Slot>;
  setSlotsList(value: Array<Slot>): void;
  addSlots(value?: Slot, index?: number): Slot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindSlotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindSlotsResponse): FindSlotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindSlotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindSlotsResponse;
  static deserializeBinaryFromReader(message: FindSlotsResponse, reader: jspb.BinaryReader): FindSlotsResponse;
}

export namespace FindSlotsResponse {
  export type AsObject = {
    slotsList: Array<Slot.AsObject>,
  }
}

export class CreateTicketRequest extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketRequest): CreateTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketRequest;
  static deserializeBinaryFromReader(message: CreateTicketRequest, reader: jspb.BinaryReader): CreateTicketRequest;
}

export namespace CreateTicketRequest {
  export type AsObject = {
    ticket?: Ticket.AsObject,
  }
}

export class CreateTicketResponse extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketResponse): CreateTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketResponse;
  static deserializeBinaryFromReader(message: CreateTicketResponse, reader: jspb.BinaryReader): CreateTicketResponse;
}

export namespace CreateTicketResponse {
  export type AsObject = {
    ticketId: string,
  }
}

export class UpdateTicketRequest extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTicketRequest): UpdateTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTicketRequest;
  static deserializeBinaryFromReader(message: UpdateTicketRequest, reader: jspb.BinaryReader): UpdateTicketRequest;
}

export namespace UpdateTicketRequest {
  export type AsObject = {
    ticket?: Ticket.AsObject,
  }
}

export class UpdateTicketResponse extends jspb.Message {
  getUpdated(): boolean;
  setUpdated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTicketResponse): UpdateTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTicketResponse;
  static deserializeBinaryFromReader(message: UpdateTicketResponse, reader: jspb.BinaryReader): UpdateTicketResponse;
}

export namespace UpdateTicketResponse {
  export type AsObject = {
    updated: boolean,
  }
}

export class FindTicketRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): TicketFilter | undefined;
  setFilter(value?: TicketFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindTicketRequest): FindTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindTicketRequest;
  static deserializeBinaryFromReader(message: FindTicketRequest, reader: jspb.BinaryReader): FindTicketRequest;
}

export namespace FindTicketRequest {
  export type AsObject = {
    filter?: TicketFilter.AsObject,
  }
}

export class FindTicketResponse extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindTicketResponse): FindTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindTicketResponse;
  static deserializeBinaryFromReader(message: FindTicketResponse, reader: jspb.BinaryReader): FindTicketResponse;
}

export namespace FindTicketResponse {
  export type AsObject = {
    ticket?: Ticket.AsObject,
  }
}

export class FindTicketsRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): TicketsFilter | undefined;
  setFilter(value?: TicketsFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindTicketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindTicketsRequest): FindTicketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindTicketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindTicketsRequest;
  static deserializeBinaryFromReader(message: FindTicketsRequest, reader: jspb.BinaryReader): FindTicketsRequest;
}

export namespace FindTicketsRequest {
  export type AsObject = {
    filter?: TicketsFilter.AsObject,
  }
}

export class FindTicketsResponse extends jspb.Message {
  clearTicketsList(): void;
  getTicketsList(): Array<Ticket>;
  setTicketsList(value: Array<Ticket>): void;
  addTickets(value?: Ticket, index?: number): Ticket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindTicketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindTicketsResponse): FindTicketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindTicketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindTicketsResponse;
  static deserializeBinaryFromReader(message: FindTicketsResponse, reader: jspb.BinaryReader): FindTicketsResponse;
}

export namespace FindTicketsResponse {
  export type AsObject = {
    ticketsList: Array<Ticket.AsObject>,
  }
}

