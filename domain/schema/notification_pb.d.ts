// package: notifications
// file: schema/notification.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as schema_common_pb from "../schema/common_pb";
import * as schema_user_pb from "../schema/user_pb";

export class Notification extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): Notification.TypeMap[keyof Notification.TypeMap];
  setType(value: Notification.TypeMap[keyof Notification.TypeMap]): void;

  getState(): Notification.StateMap[keyof Notification.StateMap];
  setState(value: Notification.StateMap[keyof Notification.StateMap]): void;

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
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

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
    id: string,
    type: Notification.TypeMap[keyof Notification.TypeMap],
    state: Notification.StateMap[keyof Notification.StateMap],
    action?: Notification.Action.AsObject,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    user?: schema_user_pb.User.AsObject,
  }

  export class Action extends jspb.Message {
    hasRegisterUser(): boolean;
    clearRegisterUser(): void;
    getRegisterUser(): Notification.Action.RegisterUser | undefined;
    setRegisterUser(value?: Notification.Action.RegisterUser): void;

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
      registerUser?: Notification.Action.RegisterUser.AsObject,
    }

    export class RegisterUser extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RegisterUser.AsObject;
      static toObject(includeInstance: boolean, msg: RegisterUser): RegisterUser.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RegisterUser, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RegisterUser;
      static deserializeBinaryFromReader(message: RegisterUser, reader: jspb.BinaryReader): RegisterUser;
    }

    export namespace RegisterUser {
      export type AsObject = {
      }
    }

    export enum ActionCase {
      ACTION_NOT_SET = 0,
      REGISTER_USER = 1,
    }
  }

  export interface TypeMap {
    SUCCESS: 0;
    INFORMATION: 1;
    WARNING: 2;
    ERROR: 3;
  }

  export const Type: TypeMap;

  export interface StateMap {
    SEEN: 0;
    UNSEEN: 1;
  }

  export const State: StateMap;
}

export class NotificationFilter extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationFilter): NotificationFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationFilter;
  static deserializeBinaryFromReader(message: NotificationFilter, reader: jspb.BinaryReader): NotificationFilter;
}

export namespace NotificationFilter {
  export type AsObject = {
    id: string,
  }
}

export class NotificationsFilter extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): schema_user_pb.User | undefined;
  setUser(value?: schema_user_pb.User): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): schema_common_pb.QueryParams | undefined;
  setParams(value?: schema_common_pb.QueryParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationsFilter): NotificationsFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationsFilter;
  static deserializeBinaryFromReader(message: NotificationsFilter, reader: jspb.BinaryReader): NotificationsFilter;
}

export namespace NotificationsFilter {
  export type AsObject = {
    idsList: Array<string>,
    user?: schema_user_pb.User.AsObject,
    params?: schema_common_pb.QueryParams.AsObject,
  }
}

export class AddNotificationRequest extends jspb.Message {
  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddNotificationRequest): AddNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNotificationRequest;
  static deserializeBinaryFromReader(message: AddNotificationRequest, reader: jspb.BinaryReader): AddNotificationRequest;
}

export namespace AddNotificationRequest {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class AddNotificationResponse extends jspb.Message {
  getAdded(): boolean;
  setAdded(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddNotificationResponse): AddNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNotificationResponse;
  static deserializeBinaryFromReader(message: AddNotificationResponse, reader: jspb.BinaryReader): AddNotificationResponse;
}

export namespace AddNotificationResponse {
  export type AsObject = {
    added: boolean,
  }
}

export class EditNotificationRequest extends jspb.Message {
  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditNotificationRequest): EditNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditNotificationRequest;
  static deserializeBinaryFromReader(message: EditNotificationRequest, reader: jspb.BinaryReader): EditNotificationRequest;
}

export namespace EditNotificationRequest {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class EditNotificationResponse extends jspb.Message {
  getEdited(): boolean;
  setEdited(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditNotificationResponse): EditNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditNotificationResponse;
  static deserializeBinaryFromReader(message: EditNotificationResponse, reader: jspb.BinaryReader): EditNotificationResponse;
}

export namespace EditNotificationResponse {
  export type AsObject = {
    edited: boolean,
  }
}

export class GetNotificationRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): NotificationFilter | undefined;
  setFilter(value?: NotificationFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationRequest): GetNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationRequest;
  static deserializeBinaryFromReader(message: GetNotificationRequest, reader: jspb.BinaryReader): GetNotificationRequest;
}

export namespace GetNotificationRequest {
  export type AsObject = {
    filter?: NotificationFilter.AsObject,
  }
}

export class GetNotificationResponse extends jspb.Message {
  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationResponse): GetNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationResponse;
  static deserializeBinaryFromReader(message: GetNotificationResponse, reader: jspb.BinaryReader): GetNotificationResponse;
}

export namespace GetNotificationResponse {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class GetNotificationsRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): NotificationsFilter | undefined;
  setFilter(value?: NotificationsFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsRequest): GetNotificationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationsRequest;
  static deserializeBinaryFromReader(message: GetNotificationsRequest, reader: jspb.BinaryReader): GetNotificationsRequest;
}

export namespace GetNotificationsRequest {
  export type AsObject = {
    filter?: NotificationsFilter.AsObject,
  }
}

export class GetNotificationsResponse extends jspb.Message {
  clearNotificationsList(): void;
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): void;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsResponse): GetNotificationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationsResponse;
  static deserializeBinaryFromReader(message: GetNotificationsResponse, reader: jspb.BinaryReader): GetNotificationsResponse;
}

export namespace GetNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class CreateNotificationRequest extends jspb.Message {
  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotificationRequest): CreateNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotificationRequest;
  static deserializeBinaryFromReader(message: CreateNotificationRequest, reader: jspb.BinaryReader): CreateNotificationRequest;
}

export namespace CreateNotificationRequest {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class CreateNotificationResponse extends jspb.Message {
  getCreated(): boolean;
  setCreated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotificationResponse): CreateNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotificationResponse;
  static deserializeBinaryFromReader(message: CreateNotificationResponse, reader: jspb.BinaryReader): CreateNotificationResponse;
}

export namespace CreateNotificationResponse {
  export type AsObject = {
    created: boolean,
  }
}

export class UpdateNotificationRequest extends jspb.Message {
  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationRequest): UpdateNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationRequest;
  static deserializeBinaryFromReader(message: UpdateNotificationRequest, reader: jspb.BinaryReader): UpdateNotificationRequest;
}

export namespace UpdateNotificationRequest {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class UpdateNotificationResponse extends jspb.Message {
  getUpdated(): boolean;
  setUpdated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationResponse): UpdateNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationResponse;
  static deserializeBinaryFromReader(message: UpdateNotificationResponse, reader: jspb.BinaryReader): UpdateNotificationResponse;
}

export namespace UpdateNotificationResponse {
  export type AsObject = {
    updated: boolean,
  }
}

export class DeleteNotificationRequest extends jspb.Message {
  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotificationRequest): DeleteNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotificationRequest;
  static deserializeBinaryFromReader(message: DeleteNotificationRequest, reader: jspb.BinaryReader): DeleteNotificationRequest;
}

export namespace DeleteNotificationRequest {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class DeleteNotificationResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotificationResponse): DeleteNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotificationResponse;
  static deserializeBinaryFromReader(message: DeleteNotificationResponse, reader: jspb.BinaryReader): DeleteNotificationResponse;
}

export namespace DeleteNotificationResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export class FindNotificationRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): NotificationFilter | undefined;
  setFilter(value?: NotificationFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindNotificationRequest): FindNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNotificationRequest;
  static deserializeBinaryFromReader(message: FindNotificationRequest, reader: jspb.BinaryReader): FindNotificationRequest;
}

export namespace FindNotificationRequest {
  export type AsObject = {
    filter?: NotificationFilter.AsObject,
  }
}

export class FindNotificationResponse extends jspb.Message {
  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): Notification | undefined;
  setNotification(value?: Notification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindNotificationResponse): FindNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNotificationResponse;
  static deserializeBinaryFromReader(message: FindNotificationResponse, reader: jspb.BinaryReader): FindNotificationResponse;
}

export namespace FindNotificationResponse {
  export type AsObject = {
    notification?: Notification.AsObject,
  }
}

export class FindNotificationsRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): NotificationsFilter | undefined;
  setFilter(value?: NotificationsFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindNotificationsRequest): FindNotificationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNotificationsRequest;
  static deserializeBinaryFromReader(message: FindNotificationsRequest, reader: jspb.BinaryReader): FindNotificationsRequest;
}

export namespace FindNotificationsRequest {
  export type AsObject = {
    filter?: NotificationsFilter.AsObject,
  }
}

export class FindNotificationsResponse extends jspb.Message {
  clearNotificationsList(): void;
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): void;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindNotificationsResponse): FindNotificationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNotificationsResponse;
  static deserializeBinaryFromReader(message: FindNotificationsResponse, reader: jspb.BinaryReader): FindNotificationsResponse;
}

export namespace FindNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

