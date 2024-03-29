// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: event/v1/event.proto

package eventv1

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

type Topic int32

const (
	Topic_TOPIC_UNSPECIFIED Topic = 0
)

// Enum value maps for Topic.
var (
	Topic_name = map[int32]string{
		0: "TOPIC_UNSPECIFIED",
	}
	Topic_value = map[string]int32{
		"TOPIC_UNSPECIFIED": 0,
	}
)

func (x Topic) Enum() *Topic {
	p := new(Topic)
	*p = x
	return p
}

func (x Topic) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Topic) Descriptor() protoreflect.EnumDescriptor {
	return file_event_v1_event_proto_enumTypes[0].Descriptor()
}

func (Topic) Type() protoreflect.EnumType {
	return &file_event_v1_event_proto_enumTypes[0]
}

func (x Topic) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Topic.Descriptor instead.
func (Topic) EnumDescriptor() ([]byte, []int) {
	return file_event_v1_event_proto_rawDescGZIP(), []int{0}
}

var File_event_v1_event_proto protoreflect.FileDescriptor

var file_event_v1_event_proto_rawDesc = []byte{
	0x0a, 0x14, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2f, 0x76, 0x31, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31,
	0x2a, 0x1e, 0x0a, 0x05, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x12, 0x15, 0x0a, 0x11, 0x54, 0x4f, 0x50,
	0x49, 0x43, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00,
	0x42, 0x90, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x76,
	0x31, 0x42, 0x0a, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x33, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x61, 0x6c, 0x65,
	0x6e, 0x64, 0x61, 0x72, 0x2d, 0x6d, 0x65, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x64, 0x6f, 0x6d,
	0x61, 0x69, 0x6e, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2f, 0x76, 0x31, 0x3b, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x45, 0x58, 0x58, 0xaa, 0x02, 0x08, 0x45, 0x76, 0x65,
	0x6e, 0x74, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x08, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x5c, 0x56, 0x31,
	0xe2, 0x02, 0x14, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x3a,
	0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_event_v1_event_proto_rawDescOnce sync.Once
	file_event_v1_event_proto_rawDescData = file_event_v1_event_proto_rawDesc
)

func file_event_v1_event_proto_rawDescGZIP() []byte {
	file_event_v1_event_proto_rawDescOnce.Do(func() {
		file_event_v1_event_proto_rawDescData = protoimpl.X.CompressGZIP(file_event_v1_event_proto_rawDescData)
	})
	return file_event_v1_event_proto_rawDescData
}

var file_event_v1_event_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_event_v1_event_proto_goTypes = []interface{}{
	(Topic)(0), // 0: event.v1.Topic
}
var file_event_v1_event_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_event_v1_event_proto_init() }
func file_event_v1_event_proto_init() {
	if File_event_v1_event_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_event_v1_event_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_event_v1_event_proto_goTypes,
		DependencyIndexes: file_event_v1_event_proto_depIdxs,
		EnumInfos:         file_event_v1_event_proto_enumTypes,
	}.Build()
	File_event_v1_event_proto = out.File
	file_event_v1_event_proto_rawDesc = nil
	file_event_v1_event_proto_goTypes = nil
	file_event_v1_event_proto_depIdxs = nil
}
