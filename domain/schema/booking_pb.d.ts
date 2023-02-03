// package: booking
// file: schema/booking.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as schema_users_pb from "../schema/users_pb";
import * as schema_business_pb from "../schema/business_pb";

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
  getUser(): schema_users_pb.User | undefined;
  setUser(value?: schema_users_pb.User): void;

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
    user?: schema_users_pb.User.AsObject,
    availability?: schema_business_pb.Availability.AsObject,
  }
}

