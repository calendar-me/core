// package: notifications
// file: schema/notifications.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as schema_users_pb from "../schema/users_pb";

export class Notification extends jspb.Message {
  getType(): Notification.TypeMap[keyof Notification.TypeMap];
  setType(value: Notification.TypeMap[keyof Notification.TypeMap]): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): Notification.Action | undefined;
  setAction(value?: Notification.Action): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_users_pb.User | undefined;
  setUser(value?: schema_users_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    type: Notification.TypeMap[keyof Notification.TypeMap],
    action?: Notification.Action.AsObject,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    user?: schema_users_pb.User.AsObject,
  }

  export class Action extends jspb.Message {
    hasValidateUser(): boolean;
    clearValidateUser(): void;
    getValidateUser(): Notification.Action.ValidateUser | undefined;
    setValidateUser(value?: Notification.Action.ValidateUser): void;

    getActionCase(): Action.ActionCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
  }

  export namespace Action {
    export type AsObject = {
      validateUser?: Notification.Action.ValidateUser.AsObject,
    }

    export class ValidateUser extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ValidateUser.AsObject;
      static toObject(includeInstance: boolean, msg: ValidateUser): ValidateUser.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ValidateUser, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ValidateUser;
      static deserializeBinaryFromReader(message: ValidateUser, reader: jspb.BinaryReader): ValidateUser;
    }

    export namespace ValidateUser {
      export type AsObject = {
      }
    }

    export enum ActionCase {
      ACTION_NOT_SET = 0,
      VALIDATE_USER = 1,
    }
  }

  export interface TypeMap {
    SUCCESS: 0;
    INFORMATION: 1;
    WARNING: 2;
    ERROR: 3;
  }

  export const Type: TypeMap;
}

