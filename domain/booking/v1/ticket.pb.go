// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: booking/v1/ticket.proto

package bookingv1

import (
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

type Ticket_State int32

const (
	Ticket_STATE_UNSPECIFIED Ticket_State = 0
	Ticket_STATE_IN_LINE     Ticket_State = 1
	Ticket_STATE_CHECKED     Ticket_State = 2
	Ticket_STATE_CANCELED    Ticket_State = 3
)

// Enum value maps for Ticket_State.
var (
	Ticket_State_name = map[int32]string{
		0: "STATE_UNSPECIFIED",
		1: "STATE_IN_LINE",
		2: "STATE_CHECKED",
		3: "STATE_CANCELED",
	}
	Ticket_State_value = map[string]int32{
		"STATE_UNSPECIFIED": 0,
		"STATE_IN_LINE":     1,
		"STATE_CHECKED":     2,
		"STATE_CANCELED":    3,
	}
)

func (x Ticket_State) Enum() *Ticket_State {
	p := new(Ticket_State)
	*p = x
	return p
}

func (x Ticket_State) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Ticket_State) Descriptor() protoreflect.EnumDescriptor {
	return file_booking_v1_ticket_proto_enumTypes[0].Descriptor()
}

func (Ticket_State) Type() protoreflect.EnumType {
	return &file_booking_v1_ticket_proto_enumTypes[0]
}

func (x Ticket_State) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Ticket_State.Descriptor instead.
func (Ticket_State) EnumDescriptor() ([]byte, []int) {
	return file_booking_v1_ticket_proto_rawDescGZIP(), []int{0, 0}
}

type Ticket struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string       `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	SlotId string       `protobuf:"bytes,2,opt,name=slot_id,proto3" json:"slot_id,omitempty"`
	Number int32        `protobuf:"varint,3,opt,name=number,proto3" json:"number,omitempty"`
	State  Ticket_State `protobuf:"varint,4,opt,name=state,proto3,enum=booking.v1.Ticket_State" json:"state,omitempty"`
}

func (x *Ticket) Reset() {
	*x = Ticket{}
	if protoimpl.UnsafeEnabled {
		mi := &file_booking_v1_ticket_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Ticket) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Ticket) ProtoMessage() {}

func (x *Ticket) ProtoReflect() protoreflect.Message {
	mi := &file_booking_v1_ticket_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Ticket.ProtoReflect.Descriptor instead.
func (*Ticket) Descriptor() ([]byte, []int) {
	return file_booking_v1_ticket_proto_rawDescGZIP(), []int{0}
}

func (x *Ticket) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Ticket) GetSlotId() string {
	if x != nil {
		return x.SlotId
	}
	return ""
}

func (x *Ticket) GetNumber() int32 {
	if x != nil {
		return x.Number
	}
	return 0
}

func (x *Ticket) GetState() Ticket_State {
	if x != nil {
		return x.State
	}
	return Ticket_STATE_UNSPECIFIED
}

var File_booking_v1_ticket_proto protoreflect.FileDescriptor

var file_booking_v1_ticket_proto_rawDesc = []byte{
	0x0a, 0x17, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x69, 0x63,
	0x6b, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x62, 0x6f, 0x6f, 0x6b, 0x69,
	0x6e, 0x67, 0x2e, 0x76, 0x31, 0x22, 0xd4, 0x01, 0x0a, 0x06, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x18, 0x0a, 0x07, 0x73, 0x6c, 0x6f, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x73, 0x6c, 0x6f, 0x74, 0x5f, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x6e, 0x75,
	0x6d, 0x62, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6e, 0x75, 0x6d, 0x62,
	0x65, 0x72, 0x12, 0x2e, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x18, 0x2e, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x54,
	0x69, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x05, 0x73, 0x74, 0x61,
	0x74, 0x65, 0x22, 0x58, 0x0a, 0x05, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x15, 0x0a, 0x11, 0x53,
	0x54, 0x41, 0x54, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44,
	0x10, 0x00, 0x12, 0x11, 0x0a, 0x0d, 0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x49, 0x4e, 0x5f, 0x4c,
	0x49, 0x4e, 0x45, 0x10, 0x01, 0x12, 0x11, 0x0a, 0x0d, 0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x43,
	0x48, 0x45, 0x43, 0x4b, 0x45, 0x44, 0x10, 0x02, 0x12, 0x12, 0x0a, 0x0e, 0x53, 0x54, 0x41, 0x54,
	0x45, 0x5f, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x45, 0x44, 0x10, 0x03, 0x42, 0x9f, 0x01, 0x0a,
	0x0e, 0x63, 0x6f, 0x6d, 0x2e, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x42,
	0x0b, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x37,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x61, 0x6c, 0x65, 0x6e,
	0x64, 0x61, 0x72, 0x2d, 0x6d, 0x65, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x64, 0x6f, 0x6d, 0x61,
	0x69, 0x6e, 0x2f, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x2f, 0x76, 0x31, 0x3b, 0x62, 0x6f,
	0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x42, 0x58, 0x58, 0xaa, 0x02, 0x0a,
	0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x0a, 0x42, 0x6f, 0x6f,
	0x6b, 0x69, 0x6e, 0x67, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x16, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e,
	0x67, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0xea, 0x02, 0x0b, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_booking_v1_ticket_proto_rawDescOnce sync.Once
	file_booking_v1_ticket_proto_rawDescData = file_booking_v1_ticket_proto_rawDesc
)

func file_booking_v1_ticket_proto_rawDescGZIP() []byte {
	file_booking_v1_ticket_proto_rawDescOnce.Do(func() {
		file_booking_v1_ticket_proto_rawDescData = protoimpl.X.CompressGZIP(file_booking_v1_ticket_proto_rawDescData)
	})
	return file_booking_v1_ticket_proto_rawDescData
}

var file_booking_v1_ticket_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_booking_v1_ticket_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_booking_v1_ticket_proto_goTypes = []interface{}{
	(Ticket_State)(0), // 0: booking.v1.Ticket.State
	(*Ticket)(nil),    // 1: booking.v1.Ticket
}
var file_booking_v1_ticket_proto_depIdxs = []int32{
	0, // 0: booking.v1.Ticket.state:type_name -> booking.v1.Ticket.State
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_booking_v1_ticket_proto_init() }
func file_booking_v1_ticket_proto_init() {
	if File_booking_v1_ticket_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_booking_v1_ticket_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Ticket); i {
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
			RawDescriptor: file_booking_v1_ticket_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_booking_v1_ticket_proto_goTypes,
		DependencyIndexes: file_booking_v1_ticket_proto_depIdxs,
		EnumInfos:         file_booking_v1_ticket_proto_enumTypes,
		MessageInfos:      file_booking_v1_ticket_proto_msgTypes,
	}.Build()
	File_booking_v1_ticket_proto = out.File
	file_booking_v1_ticket_proto_rawDesc = nil
	file_booking_v1_ticket_proto_goTypes = nil
	file_booking_v1_ticket_proto_depIdxs = nil
}