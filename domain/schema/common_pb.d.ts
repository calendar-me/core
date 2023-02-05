// package: common
// file: schema/common.proto

import * as jspb from "google-protobuf";

export class QueryParams extends jspb.Message {
  hasPage(): boolean;
  clearPage(): void;
  getPage(): number;
  setPage(value: number): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): string;
  setOrder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParams.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParams): QueryParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParams;
  static deserializeBinaryFromReader(message: QueryParams, reader: jspb.BinaryReader): QueryParams;
}

export namespace QueryParams {
  export type AsObject = {
    page: number,
    offset: number,
    order: string,
  }
}

