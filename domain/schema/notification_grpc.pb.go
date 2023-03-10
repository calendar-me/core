// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: schema/notification.proto

package schema

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// NotificationServiceClient is the client API for NotificationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NotificationServiceClient interface {
	AddNotification(ctx context.Context, in *AddNotificationRequest, opts ...grpc.CallOption) (*AddNotificationResponse, error)
	EditNotification(ctx context.Context, in *EditNotificationRequest, opts ...grpc.CallOption) (*EditNotificationResponse, error)
	GetNotification(ctx context.Context, in *GetNotificationRequest, opts ...grpc.CallOption) (*GetNotificationResponse, error)
	GetNotifications(ctx context.Context, in *GetNotificationsRequest, opts ...grpc.CallOption) (*GetNotificationsResponse, error)
}

type notificationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewNotificationServiceClient(cc grpc.ClientConnInterface) NotificationServiceClient {
	return &notificationServiceClient{cc}
}

func (c *notificationServiceClient) AddNotification(ctx context.Context, in *AddNotificationRequest, opts ...grpc.CallOption) (*AddNotificationResponse, error) {
	out := new(AddNotificationResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationService/AddNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationServiceClient) EditNotification(ctx context.Context, in *EditNotificationRequest, opts ...grpc.CallOption) (*EditNotificationResponse, error) {
	out := new(EditNotificationResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationService/EditNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationServiceClient) GetNotification(ctx context.Context, in *GetNotificationRequest, opts ...grpc.CallOption) (*GetNotificationResponse, error) {
	out := new(GetNotificationResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationService/GetNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationServiceClient) GetNotifications(ctx context.Context, in *GetNotificationsRequest, opts ...grpc.CallOption) (*GetNotificationsResponse, error) {
	out := new(GetNotificationsResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationService/GetNotifications", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NotificationServiceServer is the server API for NotificationService service.
// All implementations must embed UnimplementedNotificationServiceServer
// for forward compatibility
type NotificationServiceServer interface {
	AddNotification(context.Context, *AddNotificationRequest) (*AddNotificationResponse, error)
	EditNotification(context.Context, *EditNotificationRequest) (*EditNotificationResponse, error)
	GetNotification(context.Context, *GetNotificationRequest) (*GetNotificationResponse, error)
	GetNotifications(context.Context, *GetNotificationsRequest) (*GetNotificationsResponse, error)
	mustEmbedUnimplementedNotificationServiceServer()
}

// UnimplementedNotificationServiceServer must be embedded to have forward compatible implementations.
type UnimplementedNotificationServiceServer struct {
}

func (UnimplementedNotificationServiceServer) AddNotification(context.Context, *AddNotificationRequest) (*AddNotificationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddNotification not implemented")
}
func (UnimplementedNotificationServiceServer) EditNotification(context.Context, *EditNotificationRequest) (*EditNotificationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method EditNotification not implemented")
}
func (UnimplementedNotificationServiceServer) GetNotification(context.Context, *GetNotificationRequest) (*GetNotificationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNotification not implemented")
}
func (UnimplementedNotificationServiceServer) GetNotifications(context.Context, *GetNotificationsRequest) (*GetNotificationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNotifications not implemented")
}
func (UnimplementedNotificationServiceServer) mustEmbedUnimplementedNotificationServiceServer() {}

// UnsafeNotificationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NotificationServiceServer will
// result in compilation errors.
type UnsafeNotificationServiceServer interface {
	mustEmbedUnimplementedNotificationServiceServer()
}

func RegisterNotificationServiceServer(s grpc.ServiceRegistrar, srv NotificationServiceServer) {
	s.RegisterService(&NotificationService_ServiceDesc, srv)
}

func _NotificationService_AddNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationServiceServer).AddNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationService/AddNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationServiceServer).AddNotification(ctx, req.(*AddNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationService_EditNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EditNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationServiceServer).EditNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationService/EditNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationServiceServer).EditNotification(ctx, req.(*EditNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationService_GetNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationServiceServer).GetNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationService/GetNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationServiceServer).GetNotification(ctx, req.(*GetNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationService_GetNotifications_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNotificationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationServiceServer).GetNotifications(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationService/GetNotifications",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationServiceServer).GetNotifications(ctx, req.(*GetNotificationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// NotificationService_ServiceDesc is the grpc.ServiceDesc for NotificationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NotificationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "notifications.NotificationService",
	HandlerType: (*NotificationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddNotification",
			Handler:    _NotificationService_AddNotification_Handler,
		},
		{
			MethodName: "EditNotification",
			Handler:    _NotificationService_EditNotification_Handler,
		},
		{
			MethodName: "GetNotification",
			Handler:    _NotificationService_GetNotification_Handler,
		},
		{
			MethodName: "GetNotifications",
			Handler:    _NotificationService_GetNotifications_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "schema/notification.proto",
}

// NotificationStorageClient is the client API for NotificationStorage service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NotificationStorageClient interface {
	CreateNotification(ctx context.Context, in *CreateNotificationRequest, opts ...grpc.CallOption) (*CreateNotificationResponse, error)
	UpdateNotification(ctx context.Context, in *UpdateNotificationRequest, opts ...grpc.CallOption) (*UpdateNotificationResponse, error)
	DeleteNotification(ctx context.Context, in *DeleteNotificationRequest, opts ...grpc.CallOption) (*DeleteNotificationResponse, error)
	FindNotification(ctx context.Context, in *FindNotificationRequest, opts ...grpc.CallOption) (*FindNotificationResponse, error)
	FindNotifications(ctx context.Context, in *FindNotificationsRequest, opts ...grpc.CallOption) (*FindNotificationsResponse, error)
}

type notificationStorageClient struct {
	cc grpc.ClientConnInterface
}

func NewNotificationStorageClient(cc grpc.ClientConnInterface) NotificationStorageClient {
	return &notificationStorageClient{cc}
}

func (c *notificationStorageClient) CreateNotification(ctx context.Context, in *CreateNotificationRequest, opts ...grpc.CallOption) (*CreateNotificationResponse, error) {
	out := new(CreateNotificationResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationStorage/CreateNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationStorageClient) UpdateNotification(ctx context.Context, in *UpdateNotificationRequest, opts ...grpc.CallOption) (*UpdateNotificationResponse, error) {
	out := new(UpdateNotificationResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationStorage/UpdateNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationStorageClient) DeleteNotification(ctx context.Context, in *DeleteNotificationRequest, opts ...grpc.CallOption) (*DeleteNotificationResponse, error) {
	out := new(DeleteNotificationResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationStorage/DeleteNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationStorageClient) FindNotification(ctx context.Context, in *FindNotificationRequest, opts ...grpc.CallOption) (*FindNotificationResponse, error) {
	out := new(FindNotificationResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationStorage/FindNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationStorageClient) FindNotifications(ctx context.Context, in *FindNotificationsRequest, opts ...grpc.CallOption) (*FindNotificationsResponse, error) {
	out := new(FindNotificationsResponse)
	err := c.cc.Invoke(ctx, "/notifications.NotificationStorage/FindNotifications", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NotificationStorageServer is the server API for NotificationStorage service.
// All implementations must embed UnimplementedNotificationStorageServer
// for forward compatibility
type NotificationStorageServer interface {
	CreateNotification(context.Context, *CreateNotificationRequest) (*CreateNotificationResponse, error)
	UpdateNotification(context.Context, *UpdateNotificationRequest) (*UpdateNotificationResponse, error)
	DeleteNotification(context.Context, *DeleteNotificationRequest) (*DeleteNotificationResponse, error)
	FindNotification(context.Context, *FindNotificationRequest) (*FindNotificationResponse, error)
	FindNotifications(context.Context, *FindNotificationsRequest) (*FindNotificationsResponse, error)
	mustEmbedUnimplementedNotificationStorageServer()
}

// UnimplementedNotificationStorageServer must be embedded to have forward compatible implementations.
type UnimplementedNotificationStorageServer struct {
}

func (UnimplementedNotificationStorageServer) CreateNotification(context.Context, *CreateNotificationRequest) (*CreateNotificationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateNotification not implemented")
}
func (UnimplementedNotificationStorageServer) UpdateNotification(context.Context, *UpdateNotificationRequest) (*UpdateNotificationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateNotification not implemented")
}
func (UnimplementedNotificationStorageServer) DeleteNotification(context.Context, *DeleteNotificationRequest) (*DeleteNotificationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteNotification not implemented")
}
func (UnimplementedNotificationStorageServer) FindNotification(context.Context, *FindNotificationRequest) (*FindNotificationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindNotification not implemented")
}
func (UnimplementedNotificationStorageServer) FindNotifications(context.Context, *FindNotificationsRequest) (*FindNotificationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindNotifications not implemented")
}
func (UnimplementedNotificationStorageServer) mustEmbedUnimplementedNotificationStorageServer() {}

// UnsafeNotificationStorageServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NotificationStorageServer will
// result in compilation errors.
type UnsafeNotificationStorageServer interface {
	mustEmbedUnimplementedNotificationStorageServer()
}

func RegisterNotificationStorageServer(s grpc.ServiceRegistrar, srv NotificationStorageServer) {
	s.RegisterService(&NotificationStorage_ServiceDesc, srv)
}

func _NotificationStorage_CreateNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationStorageServer).CreateNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationStorage/CreateNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationStorageServer).CreateNotification(ctx, req.(*CreateNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationStorage_UpdateNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationStorageServer).UpdateNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationStorage/UpdateNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationStorageServer).UpdateNotification(ctx, req.(*UpdateNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationStorage_DeleteNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationStorageServer).DeleteNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationStorage/DeleteNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationStorageServer).DeleteNotification(ctx, req.(*DeleteNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationStorage_FindNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindNotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationStorageServer).FindNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationStorage/FindNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationStorageServer).FindNotification(ctx, req.(*FindNotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationStorage_FindNotifications_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindNotificationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationStorageServer).FindNotifications(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notifications.NotificationStorage/FindNotifications",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationStorageServer).FindNotifications(ctx, req.(*FindNotificationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// NotificationStorage_ServiceDesc is the grpc.ServiceDesc for NotificationStorage service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NotificationStorage_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "notifications.NotificationStorage",
	HandlerType: (*NotificationStorageServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateNotification",
			Handler:    _NotificationStorage_CreateNotification_Handler,
		},
		{
			MethodName: "UpdateNotification",
			Handler:    _NotificationStorage_UpdateNotification_Handler,
		},
		{
			MethodName: "DeleteNotification",
			Handler:    _NotificationStorage_DeleteNotification_Handler,
		},
		{
			MethodName: "FindNotification",
			Handler:    _NotificationStorage_FindNotification_Handler,
		},
		{
			MethodName: "FindNotifications",
			Handler:    _NotificationStorage_FindNotifications_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "schema/notification.proto",
}
