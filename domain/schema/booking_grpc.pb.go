// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: schema/booking.proto

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

// BookingServiceClient is the client API for BookingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BookingServiceClient interface {
	CalendarSlots(ctx context.Context, in *CalendarSlotsRequest, opts ...grpc.CallOption) (*CalendarSlotsResponse, error)
	PreviewSlots(ctx context.Context, in *PreviewSlotsRequest, opts ...grpc.CallOption) (*PreviewSlotsResponse, error)
	Book(ctx context.Context, in *BookRequest, opts ...grpc.CallOption) (*BookResponse, error)
	GetBooking(ctx context.Context, in *GetBookingRequest, opts ...grpc.CallOption) (*GetBookingResponse, error)
	GetBookings(ctx context.Context, in *GetBookingsRequest, opts ...grpc.CallOption) (*GetBookingsResponse, error)
	Confirm(ctx context.Context, in *ConfirmRequest, opts ...grpc.CallOption) (*ConfirmResponse, error)
	CheckIn(ctx context.Context, in *CheckInRequest, opts ...grpc.CallOption) (*CheckInResponse, error)
	Cancel(ctx context.Context, in *CancelRequest, opts ...grpc.CallOption) (*CancelResponse, error)
	Shift(ctx context.Context, in *ShiftRequest, opts ...grpc.CallOption) (*ShiftResponse, error)
	GetTicket(ctx context.Context, in *GetTicketRequest, opts ...grpc.CallOption) (*GetTicketResponse, error)
	CheckTicket(ctx context.Context, in *CheckTicketRequest, opts ...grpc.CallOption) (*CheckTicketResponse, error)
}

type bookingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBookingServiceClient(cc grpc.ClientConnInterface) BookingServiceClient {
	return &bookingServiceClient{cc}
}

func (c *bookingServiceClient) CalendarSlots(ctx context.Context, in *CalendarSlotsRequest, opts ...grpc.CallOption) (*CalendarSlotsResponse, error) {
	out := new(CalendarSlotsResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/CalendarSlots", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) PreviewSlots(ctx context.Context, in *PreviewSlotsRequest, opts ...grpc.CallOption) (*PreviewSlotsResponse, error) {
	out := new(PreviewSlotsResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/PreviewSlots", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) Book(ctx context.Context, in *BookRequest, opts ...grpc.CallOption) (*BookResponse, error) {
	out := new(BookResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/Book", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) GetBooking(ctx context.Context, in *GetBookingRequest, opts ...grpc.CallOption) (*GetBookingResponse, error) {
	out := new(GetBookingResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/GetBooking", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) GetBookings(ctx context.Context, in *GetBookingsRequest, opts ...grpc.CallOption) (*GetBookingsResponse, error) {
	out := new(GetBookingsResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/GetBookings", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) Confirm(ctx context.Context, in *ConfirmRequest, opts ...grpc.CallOption) (*ConfirmResponse, error) {
	out := new(ConfirmResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/Confirm", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) CheckIn(ctx context.Context, in *CheckInRequest, opts ...grpc.CallOption) (*CheckInResponse, error) {
	out := new(CheckInResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/CheckIn", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) Cancel(ctx context.Context, in *CancelRequest, opts ...grpc.CallOption) (*CancelResponse, error) {
	out := new(CancelResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/Cancel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) Shift(ctx context.Context, in *ShiftRequest, opts ...grpc.CallOption) (*ShiftResponse, error) {
	out := new(ShiftResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/Shift", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) GetTicket(ctx context.Context, in *GetTicketRequest, opts ...grpc.CallOption) (*GetTicketResponse, error) {
	out := new(GetTicketResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/GetTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingServiceClient) CheckTicket(ctx context.Context, in *CheckTicketRequest, opts ...grpc.CallOption) (*CheckTicketResponse, error) {
	out := new(CheckTicketResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingService/CheckTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BookingServiceServer is the server API for BookingService service.
// All implementations must embed UnimplementedBookingServiceServer
// for forward compatibility
type BookingServiceServer interface {
	CalendarSlots(context.Context, *CalendarSlotsRequest) (*CalendarSlotsResponse, error)
	PreviewSlots(context.Context, *PreviewSlotsRequest) (*PreviewSlotsResponse, error)
	Book(context.Context, *BookRequest) (*BookResponse, error)
	GetBooking(context.Context, *GetBookingRequest) (*GetBookingResponse, error)
	GetBookings(context.Context, *GetBookingsRequest) (*GetBookingsResponse, error)
	Confirm(context.Context, *ConfirmRequest) (*ConfirmResponse, error)
	CheckIn(context.Context, *CheckInRequest) (*CheckInResponse, error)
	Cancel(context.Context, *CancelRequest) (*CancelResponse, error)
	Shift(context.Context, *ShiftRequest) (*ShiftResponse, error)
	GetTicket(context.Context, *GetTicketRequest) (*GetTicketResponse, error)
	CheckTicket(context.Context, *CheckTicketRequest) (*CheckTicketResponse, error)
	mustEmbedUnimplementedBookingServiceServer()
}

// UnimplementedBookingServiceServer must be embedded to have forward compatible implementations.
type UnimplementedBookingServiceServer struct {
}

func (UnimplementedBookingServiceServer) CalendarSlots(context.Context, *CalendarSlotsRequest) (*CalendarSlotsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CalendarSlots not implemented")
}
func (UnimplementedBookingServiceServer) PreviewSlots(context.Context, *PreviewSlotsRequest) (*PreviewSlotsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PreviewSlots not implemented")
}
func (UnimplementedBookingServiceServer) Book(context.Context, *BookRequest) (*BookResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Book not implemented")
}
func (UnimplementedBookingServiceServer) GetBooking(context.Context, *GetBookingRequest) (*GetBookingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBooking not implemented")
}
func (UnimplementedBookingServiceServer) GetBookings(context.Context, *GetBookingsRequest) (*GetBookingsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBookings not implemented")
}
func (UnimplementedBookingServiceServer) Confirm(context.Context, *ConfirmRequest) (*ConfirmResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Confirm not implemented")
}
func (UnimplementedBookingServiceServer) CheckIn(context.Context, *CheckInRequest) (*CheckInResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckIn not implemented")
}
func (UnimplementedBookingServiceServer) Cancel(context.Context, *CancelRequest) (*CancelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Cancel not implemented")
}
func (UnimplementedBookingServiceServer) Shift(context.Context, *ShiftRequest) (*ShiftResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Shift not implemented")
}
func (UnimplementedBookingServiceServer) GetTicket(context.Context, *GetTicketRequest) (*GetTicketResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTicket not implemented")
}
func (UnimplementedBookingServiceServer) CheckTicket(context.Context, *CheckTicketRequest) (*CheckTicketResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckTicket not implemented")
}
func (UnimplementedBookingServiceServer) mustEmbedUnimplementedBookingServiceServer() {}

// UnsafeBookingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BookingServiceServer will
// result in compilation errors.
type UnsafeBookingServiceServer interface {
	mustEmbedUnimplementedBookingServiceServer()
}

func RegisterBookingServiceServer(s grpc.ServiceRegistrar, srv BookingServiceServer) {
	s.RegisterService(&BookingService_ServiceDesc, srv)
}

func _BookingService_CalendarSlots_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CalendarSlotsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).CalendarSlots(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/CalendarSlots",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).CalendarSlots(ctx, req.(*CalendarSlotsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_PreviewSlots_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PreviewSlotsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).PreviewSlots(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/PreviewSlots",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).PreviewSlots(ctx, req.(*PreviewSlotsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_Book_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BookRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).Book(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/Book",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).Book(ctx, req.(*BookRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_GetBooking_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBookingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).GetBooking(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/GetBooking",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).GetBooking(ctx, req.(*GetBookingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_GetBookings_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBookingsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).GetBookings(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/GetBookings",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).GetBookings(ctx, req.(*GetBookingsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_Confirm_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ConfirmRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).Confirm(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/Confirm",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).Confirm(ctx, req.(*ConfirmRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_CheckIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckInRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).CheckIn(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/CheckIn",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).CheckIn(ctx, req.(*CheckInRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_Cancel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CancelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).Cancel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/Cancel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).Cancel(ctx, req.(*CancelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_Shift_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShiftRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).Shift(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/Shift",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).Shift(ctx, req.(*ShiftRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_GetTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTicketRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).GetTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/GetTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).GetTicket(ctx, req.(*GetTicketRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingService_CheckTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckTicketRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingServiceServer).CheckTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingService/CheckTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingServiceServer).CheckTicket(ctx, req.(*CheckTicketRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BookingService_ServiceDesc is the grpc.ServiceDesc for BookingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BookingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "booking.BookingService",
	HandlerType: (*BookingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CalendarSlots",
			Handler:    _BookingService_CalendarSlots_Handler,
		},
		{
			MethodName: "PreviewSlots",
			Handler:    _BookingService_PreviewSlots_Handler,
		},
		{
			MethodName: "Book",
			Handler:    _BookingService_Book_Handler,
		},
		{
			MethodName: "GetBooking",
			Handler:    _BookingService_GetBooking_Handler,
		},
		{
			MethodName: "GetBookings",
			Handler:    _BookingService_GetBookings_Handler,
		},
		{
			MethodName: "Confirm",
			Handler:    _BookingService_Confirm_Handler,
		},
		{
			MethodName: "CheckIn",
			Handler:    _BookingService_CheckIn_Handler,
		},
		{
			MethodName: "Cancel",
			Handler:    _BookingService_Cancel_Handler,
		},
		{
			MethodName: "Shift",
			Handler:    _BookingService_Shift_Handler,
		},
		{
			MethodName: "GetTicket",
			Handler:    _BookingService_GetTicket_Handler,
		},
		{
			MethodName: "CheckTicket",
			Handler:    _BookingService_CheckTicket_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "schema/booking.proto",
}

// BookingStorageClient is the client API for BookingStorage service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BookingStorageClient interface {
	CreateSlot(ctx context.Context, in *CreateSlotRequest, opts ...grpc.CallOption) (*CreateSlotResponse, error)
	UpdateSlot(ctx context.Context, in *UpdateSlotRequest, opts ...grpc.CallOption) (*UpdateSlotResponse, error)
	DeleteSlot(ctx context.Context, in *DeleteSlotRequest, opts ...grpc.CallOption) (*DeleteSlotResponse, error)
	FindSlot(ctx context.Context, in *FindSlotRequest, opts ...grpc.CallOption) (*FindSlotResponse, error)
	FindSlots(ctx context.Context, in *FindSlotsRequest, opts ...grpc.CallOption) (*FindSlotsResponse, error)
	CreateTicket(ctx context.Context, in *CreateTicketRequest, opts ...grpc.CallOption) (*CreateTicketResponse, error)
	UpdateTicket(ctx context.Context, in *UpdateTicketRequest, opts ...grpc.CallOption) (*UpdateTicketResponse, error)
	FindTicket(ctx context.Context, in *FindTicketRequest, opts ...grpc.CallOption) (*FindTicketResponse, error)
	FindTickets(ctx context.Context, in *FindTicketsRequest, opts ...grpc.CallOption) (*FindTicketsResponse, error)
}

type bookingStorageClient struct {
	cc grpc.ClientConnInterface
}

func NewBookingStorageClient(cc grpc.ClientConnInterface) BookingStorageClient {
	return &bookingStorageClient{cc}
}

func (c *bookingStorageClient) CreateSlot(ctx context.Context, in *CreateSlotRequest, opts ...grpc.CallOption) (*CreateSlotResponse, error) {
	out := new(CreateSlotResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/CreateSlot", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) UpdateSlot(ctx context.Context, in *UpdateSlotRequest, opts ...grpc.CallOption) (*UpdateSlotResponse, error) {
	out := new(UpdateSlotResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/UpdateSlot", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) DeleteSlot(ctx context.Context, in *DeleteSlotRequest, opts ...grpc.CallOption) (*DeleteSlotResponse, error) {
	out := new(DeleteSlotResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/DeleteSlot", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) FindSlot(ctx context.Context, in *FindSlotRequest, opts ...grpc.CallOption) (*FindSlotResponse, error) {
	out := new(FindSlotResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/FindSlot", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) FindSlots(ctx context.Context, in *FindSlotsRequest, opts ...grpc.CallOption) (*FindSlotsResponse, error) {
	out := new(FindSlotsResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/FindSlots", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) CreateTicket(ctx context.Context, in *CreateTicketRequest, opts ...grpc.CallOption) (*CreateTicketResponse, error) {
	out := new(CreateTicketResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/CreateTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) UpdateTicket(ctx context.Context, in *UpdateTicketRequest, opts ...grpc.CallOption) (*UpdateTicketResponse, error) {
	out := new(UpdateTicketResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/UpdateTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) FindTicket(ctx context.Context, in *FindTicketRequest, opts ...grpc.CallOption) (*FindTicketResponse, error) {
	out := new(FindTicketResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/FindTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bookingStorageClient) FindTickets(ctx context.Context, in *FindTicketsRequest, opts ...grpc.CallOption) (*FindTicketsResponse, error) {
	out := new(FindTicketsResponse)
	err := c.cc.Invoke(ctx, "/booking.BookingStorage/FindTickets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BookingStorageServer is the server API for BookingStorage service.
// All implementations must embed UnimplementedBookingStorageServer
// for forward compatibility
type BookingStorageServer interface {
	CreateSlot(context.Context, *CreateSlotRequest) (*CreateSlotResponse, error)
	UpdateSlot(context.Context, *UpdateSlotRequest) (*UpdateSlotResponse, error)
	DeleteSlot(context.Context, *DeleteSlotRequest) (*DeleteSlotResponse, error)
	FindSlot(context.Context, *FindSlotRequest) (*FindSlotResponse, error)
	FindSlots(context.Context, *FindSlotsRequest) (*FindSlotsResponse, error)
	CreateTicket(context.Context, *CreateTicketRequest) (*CreateTicketResponse, error)
	UpdateTicket(context.Context, *UpdateTicketRequest) (*UpdateTicketResponse, error)
	FindTicket(context.Context, *FindTicketRequest) (*FindTicketResponse, error)
	FindTickets(context.Context, *FindTicketsRequest) (*FindTicketsResponse, error)
	mustEmbedUnimplementedBookingStorageServer()
}

// UnimplementedBookingStorageServer must be embedded to have forward compatible implementations.
type UnimplementedBookingStorageServer struct {
}

func (UnimplementedBookingStorageServer) CreateSlot(context.Context, *CreateSlotRequest) (*CreateSlotResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSlot not implemented")
}
func (UnimplementedBookingStorageServer) UpdateSlot(context.Context, *UpdateSlotRequest) (*UpdateSlotResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateSlot not implemented")
}
func (UnimplementedBookingStorageServer) DeleteSlot(context.Context, *DeleteSlotRequest) (*DeleteSlotResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteSlot not implemented")
}
func (UnimplementedBookingStorageServer) FindSlot(context.Context, *FindSlotRequest) (*FindSlotResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindSlot not implemented")
}
func (UnimplementedBookingStorageServer) FindSlots(context.Context, *FindSlotsRequest) (*FindSlotsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindSlots not implemented")
}
func (UnimplementedBookingStorageServer) CreateTicket(context.Context, *CreateTicketRequest) (*CreateTicketResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateTicket not implemented")
}
func (UnimplementedBookingStorageServer) UpdateTicket(context.Context, *UpdateTicketRequest) (*UpdateTicketResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateTicket not implemented")
}
func (UnimplementedBookingStorageServer) FindTicket(context.Context, *FindTicketRequest) (*FindTicketResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindTicket not implemented")
}
func (UnimplementedBookingStorageServer) FindTickets(context.Context, *FindTicketsRequest) (*FindTicketsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindTickets not implemented")
}
func (UnimplementedBookingStorageServer) mustEmbedUnimplementedBookingStorageServer() {}

// UnsafeBookingStorageServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BookingStorageServer will
// result in compilation errors.
type UnsafeBookingStorageServer interface {
	mustEmbedUnimplementedBookingStorageServer()
}

func RegisterBookingStorageServer(s grpc.ServiceRegistrar, srv BookingStorageServer) {
	s.RegisterService(&BookingStorage_ServiceDesc, srv)
}

func _BookingStorage_CreateSlot_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateSlotRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).CreateSlot(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/CreateSlot",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).CreateSlot(ctx, req.(*CreateSlotRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_UpdateSlot_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateSlotRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).UpdateSlot(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/UpdateSlot",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).UpdateSlot(ctx, req.(*UpdateSlotRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_DeleteSlot_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteSlotRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).DeleteSlot(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/DeleteSlot",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).DeleteSlot(ctx, req.(*DeleteSlotRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_FindSlot_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindSlotRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).FindSlot(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/FindSlot",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).FindSlot(ctx, req.(*FindSlotRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_FindSlots_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindSlotsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).FindSlots(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/FindSlots",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).FindSlots(ctx, req.(*FindSlotsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_CreateTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateTicketRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).CreateTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/CreateTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).CreateTicket(ctx, req.(*CreateTicketRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_UpdateTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateTicketRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).UpdateTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/UpdateTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).UpdateTicket(ctx, req.(*UpdateTicketRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_FindTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindTicketRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).FindTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/FindTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).FindTicket(ctx, req.(*FindTicketRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BookingStorage_FindTickets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindTicketsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookingStorageServer).FindTickets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/booking.BookingStorage/FindTickets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookingStorageServer).FindTickets(ctx, req.(*FindTicketsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BookingStorage_ServiceDesc is the grpc.ServiceDesc for BookingStorage service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BookingStorage_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "booking.BookingStorage",
	HandlerType: (*BookingStorageServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateSlot",
			Handler:    _BookingStorage_CreateSlot_Handler,
		},
		{
			MethodName: "UpdateSlot",
			Handler:    _BookingStorage_UpdateSlot_Handler,
		},
		{
			MethodName: "DeleteSlot",
			Handler:    _BookingStorage_DeleteSlot_Handler,
		},
		{
			MethodName: "FindSlot",
			Handler:    _BookingStorage_FindSlot_Handler,
		},
		{
			MethodName: "FindSlots",
			Handler:    _BookingStorage_FindSlots_Handler,
		},
		{
			MethodName: "CreateTicket",
			Handler:    _BookingStorage_CreateTicket_Handler,
		},
		{
			MethodName: "UpdateTicket",
			Handler:    _BookingStorage_UpdateTicket_Handler,
		},
		{
			MethodName: "FindTicket",
			Handler:    _BookingStorage_FindTicket_Handler,
		},
		{
			MethodName: "FindTickets",
			Handler:    _BookingStorage_FindTickets_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "schema/booking.proto",
}
