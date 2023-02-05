// package: external
// file: schema/external.proto

import * as jspb from "google-protobuf";
import * as schema_booking_pb from "../schema/booking_pb";
import * as schema_user_pb from "../schema/user_pb";

export class RegisterSlotsRequest extends jspb.Message {
  clearSlotsList(): void;
  getSlotsList(): Array<schema_booking_pb.Slot>;
  setSlotsList(value: Array<schema_booking_pb.Slot>): void;
  addSlots(value?: schema_booking_pb.Slot, index?: number): schema_booking_pb.Slot;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterSlotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterSlotsRequest): RegisterSlotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterSlotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterSlotsRequest;
  static deserializeBinaryFromReader(message: RegisterSlotsRequest, reader: jspb.BinaryReader): RegisterSlotsRequest;
}

export namespace RegisterSlotsRequest {
  export type AsObject = {
    slotsList: Array<schema_booking_pb.Slot.AsObject>,
    user?: schema_user_pb.User.AsObject,
  }
}

export class RegisterSlotsResponse extends jspb.Message {
  getRegistered(): boolean;
  setRegistered(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterSlotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterSlotsResponse): RegisterSlotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterSlotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterSlotsResponse;
  static deserializeBinaryFromReader(message: RegisterSlotsResponse, reader: jspb.BinaryReader): RegisterSlotsResponse;
}

export namespace RegisterSlotsResponse {
  export type AsObject = {
    registered: boolean,
  }
}

