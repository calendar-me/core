// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: external/v1/external.proto

package externalv1

import (
	v1 "github.com/calendar-me/core/domain/booking/v1"
	v11 "github.com/calendar-me/core/domain/user/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type RegisterSlotsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Slots []*v1.Slot `protobuf:"bytes,1,rep,name=slots,proto3" json:"slots,omitempty"`
	User  *v11.User  `protobuf:"bytes,2,opt,name=user,proto3" json:"user,omitempty"`
}

func (x *RegisterSlotsRequest) Reset() {
	*x = RegisterSlotsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_external_v1_external_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RegisterSlotsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterSlotsRequest) ProtoMessage() {}

func (x *RegisterSlotsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_external_v1_external_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterSlotsRequest.ProtoReflect.Descriptor instead.
func (*RegisterSlotsRequest) Descriptor() ([]byte, []int) {
	return file_external_v1_external_proto_rawDescGZIP(), []int{0}
}

func (x *RegisterSlotsRequest) GetSlots() []*v1.Slot {
	if x != nil {
		return x.Slots
	}
	return nil
}

func (x *RegisterSlotsRequest) GetUser() *v11.User {
	if x != nil {
		return x.User
	}
	return nil
}

type RegisterSlotsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Registered bool `protobuf:"varint,1,opt,name=registered,proto3" json:"registered,omitempty"`
}

func (x *RegisterSlotsResponse) Reset() {
	*x = RegisterSlotsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_external_v1_external_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RegisterSlotsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterSlotsResponse) ProtoMessage() {}

func (x *RegisterSlotsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_external_v1_external_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterSlotsResponse.ProtoReflect.Descriptor instead.
func (*RegisterSlotsResponse) Descriptor() ([]byte, []int) {
	return file_external_v1_external_proto_rawDescGZIP(), []int{1}
}

func (x *RegisterSlotsResponse) GetRegistered() bool {
	if x != nil {
		return x.Registered
	}
	return false
}

var File_external_v1_external_proto protoreflect.FileDescriptor

var file_external_v1_external_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x76, 0x31, 0x2f, 0x65, 0x78,
	0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x65, 0x78,
	0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2e, 0x76, 0x31, 0x1a, 0x18, 0x62, 0x6f, 0x6f, 0x6b, 0x69,
	0x6e, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x75, 0x73, 0x65, 0x72, 0x2f, 0x76, 0x31, 0x2f, 0x75, 0x73, 0x65,
	0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x61, 0x0a, 0x14, 0x52, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x65, 0x72, 0x53, 0x6c, 0x6f, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x26, 0x0a, 0x05, 0x73, 0x6c, 0x6f, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10,
	0x2e, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x6c, 0x6f, 0x74,
	0x52, 0x05, 0x73, 0x6c, 0x6f, 0x74, 0x73, 0x12, 0x21, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e,
	0x55, 0x73, 0x65, 0x72, 0x52, 0x04, 0x75, 0x73, 0x65, 0x72, 0x22, 0x37, 0x0a, 0x15, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x53, 0x6c, 0x6f, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x65,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0a, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65,
	0x72, 0x65, 0x64, 0x32, 0x69, 0x0a, 0x0f, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x56, 0x0a, 0x0d, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x65, 0x72, 0x53, 0x6c, 0x6f, 0x74, 0x73, 0x12, 0x21, 0x2e, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e,
	0x61, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x53, 0x6c,
	0x6f, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x65, 0x78, 0x74,
	0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65,
	0x72, 0x53, 0x6c, 0x6f, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0xa8,
	0x01, 0x0a, 0x0f, 0x63, 0x6f, 0x6d, 0x2e, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2e,
	0x76, 0x31, 0x42, 0x0d, 0x45, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x50, 0x01, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x63, 0x61, 0x6c, 0x65, 0x6e, 0x64, 0x61, 0x72, 0x2d, 0x6d, 0x65, 0x2f, 0x63, 0x6f, 0x72, 0x65,
	0x2f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x2f, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c,
	0x2f, 0x76, 0x31, 0x3b, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x76, 0x31, 0xa2, 0x02,
	0x03, 0x45, 0x58, 0x58, 0xaa, 0x02, 0x0b, 0x45, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2e,
	0x56, 0x31, 0xca, 0x02, 0x0b, 0x45, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x5c, 0x56, 0x31,
	0xe2, 0x02, 0x17, 0x45, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x5c, 0x56, 0x31, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0c, 0x45, 0x78, 0x74,
	0x65, 0x72, 0x6e, 0x61, 0x6c, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_external_v1_external_proto_rawDescOnce sync.Once
	file_external_v1_external_proto_rawDescData = file_external_v1_external_proto_rawDesc
)

func file_external_v1_external_proto_rawDescGZIP() []byte {
	file_external_v1_external_proto_rawDescOnce.Do(func() {
		file_external_v1_external_proto_rawDescData = protoimpl.X.CompressGZIP(file_external_v1_external_proto_rawDescData)
	})
	return file_external_v1_external_proto_rawDescData
}

var file_external_v1_external_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_external_v1_external_proto_goTypes = []interface{}{
	(*RegisterSlotsRequest)(nil),  // 0: external.v1.RegisterSlotsRequest
	(*RegisterSlotsResponse)(nil), // 1: external.v1.RegisterSlotsResponse
	(*v1.Slot)(nil),               // 2: booking.v1.Slot
	(*v11.User)(nil),              // 3: user.v1.User
}
var file_external_v1_external_proto_depIdxs = []int32{
	2, // 0: external.v1.RegisterSlotsRequest.slots:type_name -> booking.v1.Slot
	3, // 1: external.v1.RegisterSlotsRequest.user:type_name -> user.v1.User
	0, // 2: external.v1.ProviderService.RegisterSlots:input_type -> external.v1.RegisterSlotsRequest
	1, // 3: external.v1.ProviderService.RegisterSlots:output_type -> external.v1.RegisterSlotsResponse
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_external_v1_external_proto_init() }
func file_external_v1_external_proto_init() {
	if File_external_v1_external_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_external_v1_external_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RegisterSlotsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_external_v1_external_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RegisterSlotsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_external_v1_external_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_external_v1_external_proto_goTypes,
		DependencyIndexes: file_external_v1_external_proto_depIdxs,
		MessageInfos:      file_external_v1_external_proto_msgTypes,
	}.Build()
	File_external_v1_external_proto = out.File
	file_external_v1_external_proto_rawDesc = nil
	file_external_v1_external_proto_goTypes = nil
	file_external_v1_external_proto_depIdxs = nil
}
