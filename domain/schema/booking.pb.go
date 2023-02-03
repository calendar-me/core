// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: schema/booking.proto

package schema

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Slot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type         Availability_Type      `protobuf:"varint,2,opt,name=type,proto3,enum=business.Availability_Type" json:"type,omitempty"`
	Start        *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=start,proto3" json:"start,omitempty"`
	User         *User                  `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	Availability *Availability          `protobuf:"bytes,5,opt,name=availability,proto3" json:"availability,omitempty"`
}

func (x *Slot) Reset() {
	*x = Slot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_booking_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Slot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Slot) ProtoMessage() {}

func (x *Slot) ProtoReflect() protoreflect.Message {
	mi := &file_schema_booking_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Slot.ProtoReflect.Descriptor instead.
func (*Slot) Descriptor() ([]byte, []int) {
	return file_schema_booking_proto_rawDescGZIP(), []int{0}
}

func (x *Slot) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Slot) GetType() Availability_Type {
	if x != nil {
		return x.Type
	}
	return Availability_AVAILABLE
}

func (x *Slot) GetStart() *timestamppb.Timestamp {
	if x != nil {
		return x.Start
	}
	return nil
}

func (x *Slot) GetUser() *User {
	if x != nil {
		return x.User
	}
	return nil
}

func (x *Slot) GetAvailability() *Availability {
	if x != nil {
		return x.Availability
	}
	return nil
}

var File_schema_booking_proto protoreflect.FileDescriptor

var file_schema_booking_proto_rawDesc = []byte{
	0x0a, 0x14, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x1a,
	0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x12, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x62, 0x75, 0x73,
	0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xd6, 0x01, 0x0a, 0x04,
	0x53, 0x6c, 0x6f, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x2f, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x41, 0x76,
	0x61, 0x69, 0x6c, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x30, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x12, 0x1f, 0x0a, 0x04, 0x75, 0x73, 0x65, 0x72, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x04, 0x75, 0x73, 0x65, 0x72, 0x12, 0x3a, 0x0a, 0x0c, 0x61, 0x76, 0x61, 0x69,
	0x6c, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16,
	0x2e, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x41, 0x76, 0x61, 0x69, 0x6c, 0x61,
	0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x52, 0x0c, 0x61, 0x76, 0x61, 0x69, 0x6c, 0x61, 0x62, 0x69,
	0x6c, 0x69, 0x74, 0x79, 0x42, 0x2b, 0x5a, 0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x63, 0x61, 0x6c, 0x65, 0x6e, 0x64, 0x61, 0x72, 0x2d, 0x6d, 0x65, 0x2f, 0x63,
	0x6f, 0x72, 0x65, 0x2f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x2f, 0x73, 0x63, 0x68, 0x65, 0x6d,
	0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_schema_booking_proto_rawDescOnce sync.Once
	file_schema_booking_proto_rawDescData = file_schema_booking_proto_rawDesc
)

func file_schema_booking_proto_rawDescGZIP() []byte {
	file_schema_booking_proto_rawDescOnce.Do(func() {
		file_schema_booking_proto_rawDescData = protoimpl.X.CompressGZIP(file_schema_booking_proto_rawDescData)
	})
	return file_schema_booking_proto_rawDescData
}

var file_schema_booking_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_schema_booking_proto_goTypes = []interface{}{
	(*Slot)(nil),                  // 0: booking.Slot
	(Availability_Type)(0),        // 1: business.Availability.Type
	(*timestamppb.Timestamp)(nil), // 2: google.protobuf.Timestamp
	(*User)(nil),                  // 3: users.User
	(*Availability)(nil),          // 4: business.Availability
}
var file_schema_booking_proto_depIdxs = []int32{
	1, // 0: booking.Slot.type:type_name -> business.Availability.Type
	2, // 1: booking.Slot.start:type_name -> google.protobuf.Timestamp
	3, // 2: booking.Slot.user:type_name -> users.User
	4, // 3: booking.Slot.availability:type_name -> business.Availability
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_schema_booking_proto_init() }
func file_schema_booking_proto_init() {
	if File_schema_booking_proto != nil {
		return
	}
	file_schema_users_proto_init()
	file_schema_business_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_schema_booking_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Slot); i {
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
			RawDescriptor: file_schema_booking_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_schema_booking_proto_goTypes,
		DependencyIndexes: file_schema_booking_proto_depIdxs,
		MessageInfos:      file_schema_booking_proto_msgTypes,
	}.Build()
	File_schema_booking_proto = out.File
	file_schema_booking_proto_rawDesc = nil
	file_schema_booking_proto_goTypes = nil
	file_schema_booking_proto_depIdxs = nil
}
