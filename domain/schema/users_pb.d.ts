// package: users
// file: schema/users.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getGender(): User.GenderMap[keyof User.GenderMap];
  setGender(value: User.GenderMap[keyof User.GenderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    gender: User.GenderMap[keyof User.GenderMap],
  }

  export interface GenderMap {
    MALE: 0;
    FEMALE: 1;
  }

  export const Gender: GenderMap;
}

export class CreateUserPayload extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserPayload): CreateUserPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserPayload;
  static deserializeBinaryFromReader(message: CreateUserPayload, reader: jspb.BinaryReader): CreateUserPayload;
}

export namespace CreateUserPayload {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class DeleteUserPayload extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserPayload.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserPayload): DeleteUserPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserPayload;
  static deserializeBinaryFromReader(message: DeleteUserPayload, reader: jspb.BinaryReader): DeleteUserPayload;
}

export namespace DeleteUserPayload {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UserCreatedEvent extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCreatedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UserCreatedEvent): UserCreatedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserCreatedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCreatedEvent;
  static deserializeBinaryFromReader(message: UserCreatedEvent, reader: jspb.BinaryReader): UserCreatedEvent;
}

export namespace UserCreatedEvent {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UserDeletedEvent extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDeletedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UserDeletedEvent): UserDeletedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDeletedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDeletedEvent;
  static deserializeBinaryFromReader(message: UserDeletedEvent, reader: jspb.BinaryReader): UserDeletedEvent;
}

export namespace UserDeletedEvent {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UsersFilter extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UsersFilter): UsersFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersFilter;
  static deserializeBinaryFromReader(message: UsersFilter, reader: jspb.BinaryReader): UsersFilter;
}

export namespace UsersFilter {
  export type AsObject = {
    page: number,
    offset: number,
  }
}

export class UserFilter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string;
  setEmail(value: string): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): string;
  setPhone(value: string): void;

  getParametersCase(): UserFilter.ParametersCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserFilter): UserFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFilter;
  static deserializeBinaryFromReader(message: UserFilter, reader: jspb.BinaryReader): UserFilter;
}

export namespace UserFilter {
  export type AsObject = {
    id: string,
    email: string,
    phone: string,
  }

  export enum ParametersCase {
    PARAMETERS_NOT_SET = 0,
    ID = 1,
    EMAIL = 2,
    PHONE = 3,
  }
}

export class GetUsersRequest extends jspb.Message {
  hasFilters(): boolean;
  clearFilters(): void;
  getFilters(): UsersFilter | undefined;
  setFilters(value?: UsersFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
  static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
  export type AsObject = {
    filters?: UsersFilter.AsObject,
  }
}

export class GetUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersResponse): GetUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersResponse;
  static deserializeBinaryFromReader(message: GetUsersResponse, reader: jspb.BinaryReader): GetUsersResponse;
}

export namespace GetUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class GetUserRequest extends jspb.Message {
  hasFilters(): boolean;
  clearFilters(): void;
  getFilters(): UserFilter | undefined;
  setFilters(value?: UserFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    filters?: UserFilter.AsObject,
  }
}

export class GetUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class GetCurrentUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentUserRequest): GetCurrentUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentUserRequest;
  static deserializeBinaryFromReader(message: GetCurrentUserRequest, reader: jspb.BinaryReader): GetCurrentUserRequest;
}

export namespace GetCurrentUserRequest {
  export type AsObject = {
  }
}

export class GetCurrentUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentUserResponse): GetCurrentUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentUserResponse;
  static deserializeBinaryFromReader(message: GetCurrentUserResponse, reader: jspb.BinaryReader): GetCurrentUserResponse;
}

export namespace GetCurrentUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class RegisterUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class RegisterUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
  static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
  export type AsObject = {
    id: string,
  }
}

export class FindUsersRequest extends jspb.Message {
  hasFilters(): boolean;
  clearFilters(): void;
  getFilters(): UsersFilter | undefined;
  setFilters(value?: UsersFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsersRequest): FindUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsersRequest;
  static deserializeBinaryFromReader(message: FindUsersRequest, reader: jspb.BinaryReader): FindUsersRequest;
}

export namespace FindUsersRequest {
  export type AsObject = {
    filters?: UsersFilter.AsObject,
  }
}

export class FindUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindUsersResponse): FindUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUsersResponse;
  static deserializeBinaryFromReader(message: FindUsersResponse, reader: jspb.BinaryReader): FindUsersResponse;
}

export namespace FindUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class FindUserRequest extends jspb.Message {
  hasFilters(): boolean;
  clearFilters(): void;
  getFilters(): UserFilter | undefined;
  setFilters(value?: UserFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindUserRequest): FindUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUserRequest;
  static deserializeBinaryFromReader(message: FindUserRequest, reader: jspb.BinaryReader): FindUserRequest;
}

export namespace FindUserRequest {
  export type AsObject = {
    filters?: UserFilter.AsObject,
  }
}

export class FindUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindUserResponse): FindUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUserResponse;
  static deserializeBinaryFromReader(message: FindUserResponse, reader: jspb.BinaryReader): FindUserResponse;
}

export namespace FindUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string;
  setEmail(value: string): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): string;
  setPhone(value: string): void;

  getParametersCase(): DeleteUserRequest.ParametersCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    id: string,
    email: string,
    phone: string,
  }

  export enum ParametersCase {
    PARAMETERS_NOT_SET = 0,
    ID = 1,
    EMAIL = 2,
    PHONE = 3,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    id: string,
  }
}

export class PersistUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PersistUserRequest): PersistUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersistUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistUserRequest;
  static deserializeBinaryFromReader(message: PersistUserRequest, reader: jspb.BinaryReader): PersistUserRequest;
}

export namespace PersistUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class PersistUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PersistUserResponse): PersistUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersistUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistUserResponse;
  static deserializeBinaryFromReader(message: PersistUserResponse, reader: jspb.BinaryReader): PersistUserResponse;
}

export namespace PersistUserResponse {
  export type AsObject = {
    id: string,
  }
}

export interface UserSubscriptionsMap {
  CREATE_USER: 0;
  DELETE_USER: 1;
}

export const UserSubscriptions: UserSubscriptionsMap;

export interface UserEventsMap {
  USER_CREATED: 0;
  USER_DELETED: 1;
}

export const UserEvents: UserEventsMap;

