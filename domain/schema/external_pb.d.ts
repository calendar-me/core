// package: external
// file: schema/external.proto

import * as jspb from "google-protobuf";

export class Provider extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Provider.AsObject;
  static toObject(includeInstance: boolean, msg: Provider): Provider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Provider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Provider;
  static deserializeBinaryFromReader(message: Provider, reader: jspb.BinaryReader): Provider;
}

export namespace Provider {
  export type AsObject = {
  }
}

