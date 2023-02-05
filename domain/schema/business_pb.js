// source: schema/business.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var schema_user_pb = require('../schema/user_pb.js');
goog.object.extend(proto, schema_user_pb);
var schema_common_pb = require('../schema/common_pb.js');
goog.object.extend(proto, schema_common_pb);
goog.exportSymbol('proto.business.AddAvailabilitiesRequest', null, global);
goog.exportSymbol('proto.business.AddAvailabilitiesResponse', null, global);
goog.exportSymbol('proto.business.AvailabilitiesFilter', null, global);
goog.exportSymbol('proto.business.Availability', null, global);
goog.exportSymbol('proto.business.Availability.Type', null, global);
goog.exportSymbol('proto.business.AvailabilityFilter', null, global);
goog.exportSymbol('proto.business.Business', null, global);
goog.exportSymbol('proto.business.BusinessFilter', null, global);
goog.exportSymbol('proto.business.BusinessesFilter', null, global);
goog.exportSymbol('proto.business.CreateAvailabilityRequest', null, global);
goog.exportSymbol('proto.business.CreateAvailabilityResponse', null, global);
goog.exportSymbol('proto.business.CreateBusinessRequest', null, global);
goog.exportSymbol('proto.business.CreateBusinessResponse', null, global);
goog.exportSymbol('proto.business.CreateRoleRequest', null, global);
goog.exportSymbol('proto.business.CreateRoleResponse', null, global);
goog.exportSymbol('proto.business.CreateServiceRequest', null, global);
goog.exportSymbol('proto.business.CreateServiceResponse', null, global);
goog.exportSymbol('proto.business.DeleteAvailabilityRequest', null, global);
goog.exportSymbol('proto.business.DeleteAvailabilityResponse', null, global);
goog.exportSymbol('proto.business.DeleteBusinessRequest', null, global);
goog.exportSymbol('proto.business.DeleteBusinessResponse', null, global);
goog.exportSymbol('proto.business.DeleteRoleRequest', null, global);
goog.exportSymbol('proto.business.DeleteRoleResponse', null, global);
goog.exportSymbol('proto.business.DeleteServiceRequest', null, global);
goog.exportSymbol('proto.business.DeleteServiceResponse', null, global);
goog.exportSymbol('proto.business.FindAvailabilitiesRequest', null, global);
goog.exportSymbol('proto.business.FindAvailabilitiesResponse', null, global);
goog.exportSymbol('proto.business.FindAvailabilityRequest', null, global);
goog.exportSymbol('proto.business.FindAvailabilityResponse', null, global);
goog.exportSymbol('proto.business.FindBusinessRequest', null, global);
goog.exportSymbol('proto.business.FindBusinessResponse', null, global);
goog.exportSymbol('proto.business.FindBusinessesRequest', null, global);
goog.exportSymbol('proto.business.FindBusinessesResponse', null, global);
goog.exportSymbol('proto.business.FindRoleRequest', null, global);
goog.exportSymbol('proto.business.FindRoleResponse', null, global);
goog.exportSymbol('proto.business.FindRolesRequest', null, global);
goog.exportSymbol('proto.business.FindRolesResponse', null, global);
goog.exportSymbol('proto.business.FindServiceRequest', null, global);
goog.exportSymbol('proto.business.FindServiceResponse', null, global);
goog.exportSymbol('proto.business.FindServicesRequest', null, global);
goog.exportSymbol('proto.business.FindServicesResponse', null, global);
goog.exportSymbol('proto.business.GetAvailabilitiesRequest', null, global);
goog.exportSymbol('proto.business.GetAvailabilitiesResponse', null, global);
goog.exportSymbol('proto.business.GetBusinessRequest', null, global);
goog.exportSymbol('proto.business.GetBusinessResponse', null, global);
goog.exportSymbol('proto.business.GetBusinessesRequest', null, global);
goog.exportSymbol('proto.business.GetBusinessesResponse', null, global);
goog.exportSymbol('proto.business.GetRolesRequest', null, global);
goog.exportSymbol('proto.business.GetRolesResponse', null, global);
goog.exportSymbol('proto.business.GetServiceRequest', null, global);
goog.exportSymbol('proto.business.GetServiceResponse', null, global);
goog.exportSymbol('proto.business.GetServicesRequest', null, global);
goog.exportSymbol('proto.business.GetServicesResponse', null, global);
goog.exportSymbol('proto.business.GrantRolesRequest', null, global);
goog.exportSymbol('proto.business.GrantRolesResponse', null, global);
goog.exportSymbol('proto.business.RegisterBusinessRequest', null, global);
goog.exportSymbol('proto.business.RegisterBusinessResponse', null, global);
goog.exportSymbol('proto.business.RegisterServiceRequest', null, global);
goog.exportSymbol('proto.business.RegisterServiceResponse', null, global);
goog.exportSymbol('proto.business.RevokeRolesRequest', null, global);
goog.exportSymbol('proto.business.RevokeRolesResponse', null, global);
goog.exportSymbol('proto.business.Role', null, global);
goog.exportSymbol('proto.business.Role.ElementCase', null, global);
goog.exportSymbol('proto.business.Role.Type', null, global);
goog.exportSymbol('proto.business.RoleFilter', null, global);
goog.exportSymbol('proto.business.RolesFilter', null, global);
goog.exportSymbol('proto.business.Service', null, global);
goog.exportSymbol('proto.business.Service.Kind', null, global);
goog.exportSymbol('proto.business.Service.Type', null, global);
goog.exportSymbol('proto.business.ServiceFilter', null, global);
goog.exportSymbol('proto.business.ServicesFilter', null, global);
goog.exportSymbol('proto.business.UpdateAvailabilityRequest', null, global);
goog.exportSymbol('proto.business.UpdateAvailabilityResponse', null, global);
goog.exportSymbol('proto.business.UpdateBusinessRequest', null, global);
goog.exportSymbol('proto.business.UpdateBusinessResponse', null, global);
goog.exportSymbol('proto.business.UpdateServiceRequest', null, global);
goog.exportSymbol('proto.business.UpdateServiceResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.Availability = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.Availability, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.Availability.displayName = 'proto.business.Availability';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.Service.repeatedFields_, null);
};
goog.inherits(proto.business.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.Service.displayName = 'proto.business.Service';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.Business = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.Business.repeatedFields_, null);
};
goog.inherits(proto.business.Business, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.Business.displayName = 'proto.business.Business';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.Role = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.business.Role.oneofGroups_);
};
goog.inherits(proto.business.Role, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.Role.displayName = 'proto.business.Role';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.AvailabilityFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.AvailabilityFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.AvailabilityFilter.displayName = 'proto.business.AvailabilityFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.AvailabilitiesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.AvailabilitiesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.AvailabilitiesFilter.displayName = 'proto.business.AvailabilitiesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.ServiceFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.ServiceFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.ServiceFilter.displayName = 'proto.business.ServiceFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.ServicesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.ServicesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.ServicesFilter.displayName = 'proto.business.ServicesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.BusinessFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.BusinessFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.BusinessFilter.displayName = 'proto.business.BusinessFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.BusinessesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.BusinessesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.BusinessesFilter.displayName = 'proto.business.BusinessesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RoleFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.RoleFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RoleFilter.displayName = 'proto.business.RoleFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RolesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.RolesFilter.repeatedFields_, null);
};
goog.inherits(proto.business.RolesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RolesFilter.displayName = 'proto.business.RolesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RegisterBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.RegisterBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RegisterBusinessRequest.displayName = 'proto.business.RegisterBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RegisterBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.RegisterBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RegisterBusinessResponse.displayName = 'proto.business.RegisterBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetBusinessRequest.displayName = 'proto.business.GetBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetBusinessResponse.displayName = 'proto.business.GetBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetBusinessesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetBusinessesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetBusinessesRequest.displayName = 'proto.business.GetBusinessesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetBusinessesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.GetBusinessesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.GetBusinessesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetBusinessesResponse.displayName = 'proto.business.GetBusinessesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RegisterServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.RegisterServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RegisterServiceRequest.displayName = 'proto.business.RegisterServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RegisterServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.RegisterServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RegisterServiceResponse.displayName = 'proto.business.RegisterServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetServiceRequest.displayName = 'proto.business.GetServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetServiceResponse.displayName = 'proto.business.GetServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetServicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetServicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetServicesRequest.displayName = 'proto.business.GetServicesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.GetServicesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.GetServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetServicesResponse.displayName = 'proto.business.GetServicesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.AddAvailabilitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.AddAvailabilitiesRequest.repeatedFields_, null);
};
goog.inherits(proto.business.AddAvailabilitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.AddAvailabilitiesRequest.displayName = 'proto.business.AddAvailabilitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.AddAvailabilitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.AddAvailabilitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.AddAvailabilitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.AddAvailabilitiesResponse.displayName = 'proto.business.AddAvailabilitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetAvailabilitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetAvailabilitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetAvailabilitiesRequest.displayName = 'proto.business.GetAvailabilitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetAvailabilitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.GetAvailabilitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.GetAvailabilitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetAvailabilitiesResponse.displayName = 'proto.business.GetAvailabilitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GrantRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.GrantRolesRequest.repeatedFields_, null);
};
goog.inherits(proto.business.GrantRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GrantRolesRequest.displayName = 'proto.business.GrantRolesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GrantRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GrantRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GrantRolesResponse.displayName = 'proto.business.GrantRolesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RevokeRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.RevokeRolesRequest.repeatedFields_, null);
};
goog.inherits(proto.business.RevokeRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RevokeRolesRequest.displayName = 'proto.business.RevokeRolesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.RevokeRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.RevokeRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.RevokeRolesResponse.displayName = 'proto.business.RevokeRolesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.GetRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetRolesRequest.displayName = 'proto.business.GetRolesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.GetRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.GetRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.GetRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.GetRolesResponse.displayName = 'proto.business.GetRolesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateBusinessRequest.displayName = 'proto.business.CreateBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateBusinessResponse.displayName = 'proto.business.CreateBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.UpdateBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.UpdateBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.UpdateBusinessRequest.displayName = 'proto.business.UpdateBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.UpdateBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.UpdateBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.UpdateBusinessResponse.displayName = 'proto.business.UpdateBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteBusinessRequest.displayName = 'proto.business.DeleteBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteBusinessResponse.displayName = 'proto.business.DeleteBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindBusinessRequest.displayName = 'proto.business.FindBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindBusinessResponse.displayName = 'proto.business.FindBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindBusinessesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindBusinessesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindBusinessesRequest.displayName = 'proto.business.FindBusinessesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindBusinessesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.FindBusinessesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.FindBusinessesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindBusinessesResponse.displayName = 'proto.business.FindBusinessesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateServiceRequest.displayName = 'proto.business.CreateServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateServiceResponse.displayName = 'proto.business.CreateServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.UpdateServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.UpdateServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.UpdateServiceRequest.displayName = 'proto.business.UpdateServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.UpdateServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.UpdateServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.UpdateServiceResponse.displayName = 'proto.business.UpdateServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteServiceRequest.displayName = 'proto.business.DeleteServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteServiceResponse.displayName = 'proto.business.DeleteServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindServiceRequest.displayName = 'proto.business.FindServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindServiceResponse.displayName = 'proto.business.FindServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindServicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindServicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindServicesRequest.displayName = 'proto.business.FindServicesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.FindServicesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.FindServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindServicesResponse.displayName = 'proto.business.FindServicesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateAvailabilityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateAvailabilityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateAvailabilityRequest.displayName = 'proto.business.CreateAvailabilityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateAvailabilityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateAvailabilityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateAvailabilityResponse.displayName = 'proto.business.CreateAvailabilityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.UpdateAvailabilityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.UpdateAvailabilityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.UpdateAvailabilityRequest.displayName = 'proto.business.UpdateAvailabilityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.UpdateAvailabilityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.UpdateAvailabilityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.UpdateAvailabilityResponse.displayName = 'proto.business.UpdateAvailabilityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteAvailabilityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteAvailabilityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteAvailabilityRequest.displayName = 'proto.business.DeleteAvailabilityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteAvailabilityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteAvailabilityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteAvailabilityResponse.displayName = 'proto.business.DeleteAvailabilityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindAvailabilityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindAvailabilityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindAvailabilityRequest.displayName = 'proto.business.FindAvailabilityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindAvailabilityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindAvailabilityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindAvailabilityResponse.displayName = 'proto.business.FindAvailabilityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindAvailabilitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindAvailabilitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindAvailabilitiesRequest.displayName = 'proto.business.FindAvailabilitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindAvailabilitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.FindAvailabilitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.FindAvailabilitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindAvailabilitiesResponse.displayName = 'proto.business.FindAvailabilitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateRoleRequest.displayName = 'proto.business.CreateRoleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.CreateRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.CreateRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.CreateRoleResponse.displayName = 'proto.business.CreateRoleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteRoleRequest.displayName = 'proto.business.DeleteRoleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.DeleteRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.DeleteRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.DeleteRoleResponse.displayName = 'proto.business.DeleteRoleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindRoleRequest.displayName = 'proto.business.FindRoleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindRoleResponse.displayName = 'proto.business.FindRoleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.FindRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindRolesRequest.displayName = 'proto.business.FindRolesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.FindRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.FindRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.FindRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.FindRolesResponse.displayName = 'proto.business.FindRolesResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.Availability.prototype.toObject = function(opt_includeInstance) {
  return proto.business.Availability.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.Availability} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Availability.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    step: (f = msg.getStep()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    frequency: jspb.Message.getFieldWithDefault(msg, 9, 0),
    repeat: jspb.Message.getFieldWithDefault(msg, 10, 0),
    slots: jspb.Message.getFieldWithDefault(msg, 11, 0),
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.Availability}
 */
proto.business.Availability.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.Availability;
  return proto.business.Availability.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.Availability} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.Availability}
 */
proto.business.Availability.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = /** @type {!proto.business.Availability.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStep(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrequency(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRepeat(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSlots(value);
      break;
    case 12:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.Availability.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.Availability.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.Availability} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Availability.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStep();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFrequency();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getRepeat();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getSlots();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.business.Availability.Type = {
  AVAILABLE: 0,
  UNAVAILABLE: 1
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.Availability.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.business.Availability.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.business.Availability.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Type type = 4;
 * @return {!proto.business.Availability.Type}
 */
proto.business.Availability.prototype.getType = function() {
  return /** @type {!proto.business.Availability.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.business.Availability.Type} value
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp start = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.Availability.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.Availability} returns this
*/
proto.business.Availability.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Availability.prototype.hasStart = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp end = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.Availability.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.Availability} returns this
*/
proto.business.Availability.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Availability.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Duration duration = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.business.Availability.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.business.Availability} returns this
*/
proto.business.Availability.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Availability.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration step = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.business.Availability.prototype.getStep = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.business.Availability} returns this
*/
proto.business.Availability.prototype.setStep = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.clearStep = function() {
  return this.setStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Availability.prototype.hasStep = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 frequency = 9;
 * @return {number}
 */
proto.business.Availability.prototype.getFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.setFrequency = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 repeat = 10;
 * @return {number}
 */
proto.business.Availability.prototype.getRepeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.setRepeat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 slots = 11;
 * @return {number}
 */
proto.business.Availability.prototype.getSlots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.setSlots = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional Service service = 12;
 * @return {?proto.business.Service}
 */
proto.business.Availability.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 12));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.Availability} returns this
*/
proto.business.Availability.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Availability} returns this
 */
proto.business.Availability.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Availability.prototype.hasService = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.Service.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.business.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f),
    availabilitiesList: jspb.Message.toObjectList(msg.getAvailabilitiesList(),
    proto.business.Availability.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.Service}
 */
proto.business.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.Service;
  return proto.business.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.Service}
 */
proto.business.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = /** @type {!proto.business.Service.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 5:
      var value = /** @type {!proto.business.Service.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    case 7:
      var value = new proto.business.Availability;
      reader.readMessage(value,proto.business.Availability.deserializeBinaryFromReader);
      msg.addAvailabilities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
  f = message.getAvailabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.business.Availability.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.business.Service.Kind = {
  BUSINESS_KIND_1: 0
};

/**
 * @enum {number}
 */
proto.business.Service.Type = {
  BUSINESS_TYPE_1: 0
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.Service.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.Service} returns this
 */
proto.business.Service.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.business.Service.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.Service} returns this
 */
proto.business.Service.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.business.Service.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.Service} returns this
 */
proto.business.Service.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Kind kind = 4;
 * @return {!proto.business.Service.Kind}
 */
proto.business.Service.prototype.getKind = function() {
  return /** @type {!proto.business.Service.Kind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.business.Service.Kind} value
 * @return {!proto.business.Service} returns this
 */
proto.business.Service.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Type type = 5;
 * @return {!proto.business.Service.Type}
 */
proto.business.Service.prototype.getType = function() {
  return /** @type {!proto.business.Service.Type} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.business.Service.Type} value
 * @return {!proto.business.Service} returns this
 */
proto.business.Service.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Business business = 6;
 * @return {?proto.business.Business}
 */
proto.business.Service.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 6));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.Service} returns this
*/
proto.business.Service.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Service} returns this
 */
proto.business.Service.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Service.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Availability availabilities = 7;
 * @return {!Array<!proto.business.Availability>}
 */
proto.business.Service.prototype.getAvailabilitiesList = function() {
  return /** @type{!Array<!proto.business.Availability>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Availability, 7));
};


/**
 * @param {!Array<!proto.business.Availability>} value
 * @return {!proto.business.Service} returns this
*/
proto.business.Service.prototype.setAvailabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.business.Availability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Availability}
 */
proto.business.Service.prototype.addAvailabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.business.Availability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.Service} returns this
 */
proto.business.Service.prototype.clearAvailabilitiesList = function() {
  return this.setAvailabilitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.Business.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.Business.prototype.toObject = function(opt_includeInstance) {
  return proto.business.Business.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.Business} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Business.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    servicesList: jspb.Message.toObjectList(msg.getServicesList(),
    proto.business.Service.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.Business}
 */
proto.business.Business.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.Business;
  return proto.business.Business.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.Business} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.Business}
 */
proto.business.Business.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.addServices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.Business.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.Business.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.Business} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Business.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.Business.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.Business} returns this
 */
proto.business.Business.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.business.Business.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.Business} returns this
 */
proto.business.Business.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.business.Business.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.Business} returns this
 */
proto.business.Business.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated Service services = 4;
 * @return {!Array<!proto.business.Service>}
 */
proto.business.Business.prototype.getServicesList = function() {
  return /** @type{!Array<!proto.business.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Service, 4));
};


/**
 * @param {!Array<!proto.business.Service>} value
 * @return {!proto.business.Business} returns this
*/
proto.business.Business.prototype.setServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.business.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Service}
 */
proto.business.Business.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.business.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.Business} returns this
 */
proto.business.Business.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.business.Role.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.business.Role.ElementCase = {
  ELEMENT_NOT_SET: 0,
  BUSINESS: 2,
  SERVICE: 3
};

/**
 * @return {proto.business.Role.ElementCase}
 */
proto.business.Role.prototype.getElementCase = function() {
  return /** @type {proto.business.Role.ElementCase} */(jspb.Message.computeOneofCase(this, proto.business.Role.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.Role.prototype.toObject = function(opt_includeInstance) {
  return proto.business.Role.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.Role} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Role.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f),
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f),
    user: (f = msg.getUser()) && schema_user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.Role}
 */
proto.business.Role.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.Role;
  return proto.business.Role.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.Role} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.Role}
 */
proto.business.Role.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.business.Role.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    case 3:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 4:
      var value = new schema_user_pb.User;
      reader.readMessage(value,schema_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.Role.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.Role.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.Role} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.Role.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      schema_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.business.Role.Type = {
  ADMIN: 0,
  EDITOR: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.business.Role.Type}
 */
proto.business.Role.prototype.getType = function() {
  return /** @type {!proto.business.Role.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.business.Role.Type} value
 * @return {!proto.business.Role} returns this
 */
proto.business.Role.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Business business = 2;
 * @return {?proto.business.Business}
 */
proto.business.Role.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 2));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.Role} returns this
*/
proto.business.Role.prototype.setBusiness = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.business.Role.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Role} returns this
 */
proto.business.Role.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Role.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Service service = 3;
 * @return {?proto.business.Service}
 */
proto.business.Role.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 3));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.Role} returns this
*/
proto.business.Role.prototype.setService = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.business.Role.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Role} returns this
 */
proto.business.Role.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Role.prototype.hasService = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional users.User user = 4;
 * @return {?proto.users.User}
 */
proto.business.Role.prototype.getUser = function() {
  return /** @type{?proto.users.User} */ (
    jspb.Message.getWrapperField(this, schema_user_pb.User, 4));
};


/**
 * @param {?proto.users.User|undefined} value
 * @return {!proto.business.Role} returns this
*/
proto.business.Role.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.Role} returns this
 */
proto.business.Role.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.Role.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.AvailabilityFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.AvailabilityFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.AvailabilityFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AvailabilityFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.AvailabilityFilter}
 */
proto.business.AvailabilityFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.AvailabilityFilter;
  return proto.business.AvailabilityFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.AvailabilityFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.AvailabilityFilter}
 */
proto.business.AvailabilityFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.AvailabilityFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.AvailabilityFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.AvailabilityFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AvailabilityFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.AvailabilityFilter.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.AvailabilityFilter} returns this
 */
proto.business.AvailabilityFilter.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.AvailabilitiesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.AvailabilitiesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.AvailabilitiesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AvailabilitiesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f),
    from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.AvailabilitiesFilter}
 */
proto.business.AvailabilitiesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.AvailabilitiesFilter;
  return proto.business.AvailabilitiesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.AvailabilitiesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.AvailabilitiesFilter}
 */
proto.business.AvailabilitiesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.AvailabilitiesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.AvailabilitiesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.AvailabilitiesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AvailabilitiesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Service service = 1;
 * @return {?proto.business.Service}
 */
proto.business.AvailabilitiesFilter.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.AvailabilitiesFilter} returns this
*/
proto.business.AvailabilitiesFilter.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.AvailabilitiesFilter} returns this
 */
proto.business.AvailabilitiesFilter.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.AvailabilitiesFilter.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.AvailabilitiesFilter.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.AvailabilitiesFilter} returns this
*/
proto.business.AvailabilitiesFilter.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.AvailabilitiesFilter} returns this
 */
proto.business.AvailabilitiesFilter.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.AvailabilitiesFilter.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.ServiceFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.ServiceFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.ServiceFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.ServiceFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.ServiceFilter}
 */
proto.business.ServiceFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.ServiceFilter;
  return proto.business.ServiceFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.ServiceFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.ServiceFilter}
 */
proto.business.ServiceFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.ServiceFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.ServiceFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.ServiceFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.ServiceFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.ServiceFilter.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.ServiceFilter} returns this
 */
proto.business.ServiceFilter.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.ServicesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.ServicesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.ServicesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.ServicesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f),
    kind: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    params: (f = msg.getParams()) && schema_common_pb.QueryParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.ServicesFilter}
 */
proto.business.ServicesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.ServicesFilter;
  return proto.business.ServicesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.ServicesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.ServicesFilter}
 */
proto.business.ServicesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    case 2:
      var value = /** @type {!proto.business.Service.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {!proto.business.Service.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new schema_common_pb.QueryParams;
      reader.readMessage(value,schema_common_pb.QueryParams.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.ServicesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.ServicesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.ServicesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.ServicesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.business.Service.Kind} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.business.Service.Type} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      schema_common_pb.QueryParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.Business}
 */
proto.business.ServicesFilter.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.ServicesFilter} returns this
*/
proto.business.ServicesFilter.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.ServicesFilter} returns this
 */
proto.business.ServicesFilter.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.ServicesFilter.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Service.Kind kind = 2;
 * @return {!proto.business.Service.Kind}
 */
proto.business.ServicesFilter.prototype.getKind = function() {
  return /** @type {!proto.business.Service.Kind} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.business.Service.Kind} value
 * @return {!proto.business.ServicesFilter} returns this
 */
proto.business.ServicesFilter.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.business.ServicesFilter} returns this
 */
proto.business.ServicesFilter.prototype.clearKind = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.ServicesFilter.prototype.hasKind = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Service.Type type = 3;
 * @return {!proto.business.Service.Type}
 */
proto.business.ServicesFilter.prototype.getType = function() {
  return /** @type {!proto.business.Service.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.business.Service.Type} value
 * @return {!proto.business.ServicesFilter} returns this
 */
proto.business.ServicesFilter.prototype.setType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.business.ServicesFilter} returns this
 */
proto.business.ServicesFilter.prototype.clearType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.ServicesFilter.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional common.QueryParams params = 4;
 * @return {?proto.common.QueryParams}
 */
proto.business.ServicesFilter.prototype.getParams = function() {
  return /** @type{?proto.common.QueryParams} */ (
    jspb.Message.getWrapperField(this, schema_common_pb.QueryParams, 4));
};


/**
 * @param {?proto.common.QueryParams|undefined} value
 * @return {!proto.business.ServicesFilter} returns this
*/
proto.business.ServicesFilter.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.ServicesFilter} returns this
 */
proto.business.ServicesFilter.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.ServicesFilter.prototype.hasParams = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.BusinessFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.BusinessFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.BusinessFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.BusinessFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.BusinessFilter}
 */
proto.business.BusinessFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.BusinessFilter;
  return proto.business.BusinessFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.BusinessFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.BusinessFilter}
 */
proto.business.BusinessFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.BusinessFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.BusinessFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.BusinessFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.BusinessFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.BusinessFilter.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.BusinessFilter} returns this
 */
proto.business.BusinessFilter.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.BusinessesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.BusinessesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.BusinessesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.BusinessesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    params: (f = msg.getParams()) && schema_common_pb.QueryParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.BusinessesFilter}
 */
proto.business.BusinessesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.BusinessesFilter;
  return proto.business.BusinessesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.BusinessesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.BusinessesFilter}
 */
proto.business.BusinessesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.business.Service.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {!proto.business.Service.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new schema_common_pb.QueryParams;
      reader.readMessage(value,schema_common_pb.QueryParams.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.BusinessesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.BusinessesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.BusinessesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.BusinessesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.business.Service.Kind} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.business.Service.Type} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      schema_common_pb.QueryParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional Service.Kind kind = 1;
 * @return {!proto.business.Service.Kind}
 */
proto.business.BusinessesFilter.prototype.getKind = function() {
  return /** @type {!proto.business.Service.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.business.Service.Kind} value
 * @return {!proto.business.BusinessesFilter} returns this
 */
proto.business.BusinessesFilter.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.business.BusinessesFilter} returns this
 */
proto.business.BusinessesFilter.prototype.clearKind = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.BusinessesFilter.prototype.hasKind = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Service.Type type = 2;
 * @return {!proto.business.Service.Type}
 */
proto.business.BusinessesFilter.prototype.getType = function() {
  return /** @type {!proto.business.Service.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.business.Service.Type} value
 * @return {!proto.business.BusinessesFilter} returns this
 */
proto.business.BusinessesFilter.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.business.BusinessesFilter} returns this
 */
proto.business.BusinessesFilter.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.BusinessesFilter.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional common.QueryParams params = 3;
 * @return {?proto.common.QueryParams}
 */
proto.business.BusinessesFilter.prototype.getParams = function() {
  return /** @type{?proto.common.QueryParams} */ (
    jspb.Message.getWrapperField(this, schema_common_pb.QueryParams, 3));
};


/**
 * @param {?proto.common.QueryParams|undefined} value
 * @return {!proto.business.BusinessesFilter} returns this
*/
proto.business.BusinessesFilter.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.BusinessesFilter} returns this
 */
proto.business.BusinessesFilter.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.BusinessesFilter.prototype.hasParams = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RoleFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RoleFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RoleFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RoleFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: (f = msg.getRole()) && proto.business.Role.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RoleFilter}
 */
proto.business.RoleFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RoleFilter;
  return proto.business.RoleFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RoleFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RoleFilter}
 */
proto.business.RoleFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RoleFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RoleFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RoleFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RoleFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * optional Role role = 1;
 * @return {?proto.business.Role}
 */
proto.business.RoleFilter.prototype.getRole = function() {
  return /** @type{?proto.business.Role} */ (
    jspb.Message.getWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {?proto.business.Role|undefined} value
 * @return {!proto.business.RoleFilter} returns this
*/
proto.business.RoleFilter.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.RoleFilter} returns this
 */
proto.business.RoleFilter.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.RoleFilter.prototype.hasRole = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.RolesFilter.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RolesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RolesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RolesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RolesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    typesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f),
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f),
    user: (f = msg.getUser()) && schema_user_pb.User.toObject(includeInstance, f),
    params: (f = msg.getParams()) && schema_common_pb.QueryParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RolesFilter}
 */
proto.business.RolesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RolesFilter;
  return proto.business.RolesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RolesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RolesFilter}
 */
proto.business.RolesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.business.Role.Type>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTypes(values[i]);
      }
      break;
    case 2:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    case 3:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 4:
      var value = new schema_user_pb.User;
      reader.readMessage(value,schema_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 5:
      var value = new schema_common_pb.QueryParams;
      reader.readMessage(value,schema_common_pb.QueryParams.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RolesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RolesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RolesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RolesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      schema_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      schema_common_pb.QueryParams.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Role.Type types = 1;
 * @return {!Array<!proto.business.Role.Type>}
 */
proto.business.RolesFilter.prototype.getTypesList = function() {
  return /** @type {!Array<!proto.business.Role.Type>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.business.Role.Type>} value
 * @return {!proto.business.RolesFilter} returns this
 */
proto.business.RolesFilter.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.business.Role.Type} value
 * @param {number=} opt_index
 * @return {!proto.business.RolesFilter} returns this
 */
proto.business.RolesFilter.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.RolesFilter} returns this
 */
proto.business.RolesFilter.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * optional Business business = 2;
 * @return {?proto.business.Business}
 */
proto.business.RolesFilter.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 2));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.RolesFilter} returns this
*/
proto.business.RolesFilter.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.RolesFilter} returns this
 */
proto.business.RolesFilter.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.RolesFilter.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Service service = 3;
 * @return {?proto.business.Service}
 */
proto.business.RolesFilter.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 3));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.RolesFilter} returns this
*/
proto.business.RolesFilter.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.RolesFilter} returns this
 */
proto.business.RolesFilter.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.RolesFilter.prototype.hasService = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional users.User user = 4;
 * @return {?proto.users.User}
 */
proto.business.RolesFilter.prototype.getUser = function() {
  return /** @type{?proto.users.User} */ (
    jspb.Message.getWrapperField(this, schema_user_pb.User, 4));
};


/**
 * @param {?proto.users.User|undefined} value
 * @return {!proto.business.RolesFilter} returns this
*/
proto.business.RolesFilter.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.RolesFilter} returns this
 */
proto.business.RolesFilter.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.RolesFilter.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional common.QueryParams params = 5;
 * @return {?proto.common.QueryParams}
 */
proto.business.RolesFilter.prototype.getParams = function() {
  return /** @type{?proto.common.QueryParams} */ (
    jspb.Message.getWrapperField(this, schema_common_pb.QueryParams, 5));
};


/**
 * @param {?proto.common.QueryParams|undefined} value
 * @return {!proto.business.RolesFilter} returns this
*/
proto.business.RolesFilter.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.RolesFilter} returns this
 */
proto.business.RolesFilter.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.RolesFilter.prototype.hasParams = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RegisterBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RegisterBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RegisterBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RegisterBusinessRequest}
 */
proto.business.RegisterBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RegisterBusinessRequest;
  return proto.business.RegisterBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RegisterBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RegisterBusinessRequest}
 */
proto.business.RegisterBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RegisterBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RegisterBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RegisterBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.Business}
 */
proto.business.RegisterBusinessRequest.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.RegisterBusinessRequest} returns this
*/
proto.business.RegisterBusinessRequest.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.RegisterBusinessRequest} returns this
 */
proto.business.RegisterBusinessRequest.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.RegisterBusinessRequest.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RegisterBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RegisterBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RegisterBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RegisterBusinessResponse}
 */
proto.business.RegisterBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RegisterBusinessResponse;
  return proto.business.RegisterBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RegisterBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RegisterBusinessResponse}
 */
proto.business.RegisterBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RegisterBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RegisterBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RegisterBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.RegisterBusinessResponse.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.RegisterBusinessResponse} returns this
 */
proto.business.RegisterBusinessResponse.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.BusinessFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetBusinessRequest}
 */
proto.business.GetBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetBusinessRequest;
  return proto.business.GetBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetBusinessRequest}
 */
proto.business.GetBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.BusinessFilter;
      reader.readMessage(value,proto.business.BusinessFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.BusinessFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessFilter filter = 1;
 * @return {?proto.business.BusinessFilter}
 */
proto.business.GetBusinessRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.BusinessFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.BusinessFilter, 1));
};


/**
 * @param {?proto.business.BusinessFilter|undefined} value
 * @return {!proto.business.GetBusinessRequest} returns this
*/
proto.business.GetBusinessRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetBusinessRequest} returns this
 */
proto.business.GetBusinessRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetBusinessRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetBusinessResponse}
 */
proto.business.GetBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetBusinessResponse;
  return proto.business.GetBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetBusinessResponse}
 */
proto.business.GetBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.Business}
 */
proto.business.GetBusinessResponse.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.GetBusinessResponse} returns this
*/
proto.business.GetBusinessResponse.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetBusinessResponse} returns this
 */
proto.business.GetBusinessResponse.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetBusinessResponse.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetBusinessesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetBusinessesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetBusinessesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.BusinessesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetBusinessesRequest}
 */
proto.business.GetBusinessesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetBusinessesRequest;
  return proto.business.GetBusinessesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetBusinessesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetBusinessesRequest}
 */
proto.business.GetBusinessesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.BusinessesFilter;
      reader.readMessage(value,proto.business.BusinessesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetBusinessesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetBusinessesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetBusinessesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.BusinessesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessesFilter filter = 1;
 * @return {?proto.business.BusinessesFilter}
 */
proto.business.GetBusinessesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.BusinessesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.BusinessesFilter, 1));
};


/**
 * @param {?proto.business.BusinessesFilter|undefined} value
 * @return {!proto.business.GetBusinessesRequest} returns this
*/
proto.business.GetBusinessesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetBusinessesRequest} returns this
 */
proto.business.GetBusinessesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetBusinessesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.GetBusinessesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetBusinessesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetBusinessesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetBusinessesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessesList: jspb.Message.toObjectList(msg.getBusinessesList(),
    proto.business.Business.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetBusinessesResponse}
 */
proto.business.GetBusinessesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetBusinessesResponse;
  return proto.business.GetBusinessesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetBusinessesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetBusinessesResponse}
 */
proto.business.GetBusinessesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.addBusinesses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetBusinessesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetBusinessesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetBusinessesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetBusinessesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Business businesses = 1;
 * @return {!Array<!proto.business.Business>}
 */
proto.business.GetBusinessesResponse.prototype.getBusinessesList = function() {
  return /** @type{!Array<!proto.business.Business>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {!Array<!proto.business.Business>} value
 * @return {!proto.business.GetBusinessesResponse} returns this
*/
proto.business.GetBusinessesResponse.prototype.setBusinessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Business=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Business}
 */
proto.business.GetBusinessesResponse.prototype.addBusinesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Business, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.GetBusinessesResponse} returns this
 */
proto.business.GetBusinessesResponse.prototype.clearBusinessesList = function() {
  return this.setBusinessesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RegisterServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RegisterServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RegisterServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RegisterServiceRequest}
 */
proto.business.RegisterServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RegisterServiceRequest;
  return proto.business.RegisterServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RegisterServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RegisterServiceRequest}
 */
proto.business.RegisterServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RegisterServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RegisterServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RegisterServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * optional Service service = 1;
 * @return {?proto.business.Service}
 */
proto.business.RegisterServiceRequest.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.RegisterServiceRequest} returns this
*/
proto.business.RegisterServiceRequest.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.RegisterServiceRequest} returns this
 */
proto.business.RegisterServiceRequest.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.RegisterServiceRequest.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RegisterServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RegisterServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RegisterServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RegisterServiceResponse}
 */
proto.business.RegisterServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RegisterServiceResponse;
  return proto.business.RegisterServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RegisterServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RegisterServiceResponse}
 */
proto.business.RegisterServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RegisterServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RegisterServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RegisterServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RegisterServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.business.RegisterServiceResponse.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.RegisterServiceResponse} returns this
 */
proto.business.RegisterServiceResponse.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.ServiceFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetServiceRequest}
 */
proto.business.GetServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetServiceRequest;
  return proto.business.GetServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetServiceRequest}
 */
proto.business.GetServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.ServiceFilter;
      reader.readMessage(value,proto.business.ServiceFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.ServiceFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServiceFilter filter = 1;
 * @return {?proto.business.ServiceFilter}
 */
proto.business.GetServiceRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.ServiceFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.ServiceFilter, 1));
};


/**
 * @param {?proto.business.ServiceFilter|undefined} value
 * @return {!proto.business.GetServiceRequest} returns this
*/
proto.business.GetServiceRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetServiceRequest} returns this
 */
proto.business.GetServiceRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetServiceRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetServiceResponse}
 */
proto.business.GetServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetServiceResponse;
  return proto.business.GetServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetServiceResponse}
 */
proto.business.GetServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * optional Service service = 1;
 * @return {?proto.business.Service}
 */
proto.business.GetServiceResponse.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.GetServiceResponse} returns this
*/
proto.business.GetServiceResponse.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetServiceResponse} returns this
 */
proto.business.GetServiceResponse.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetServiceResponse.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetServicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetServicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetServicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.ServicesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetServicesRequest}
 */
proto.business.GetServicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetServicesRequest;
  return proto.business.GetServicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetServicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetServicesRequest}
 */
proto.business.GetServicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.ServicesFilter;
      reader.readMessage(value,proto.business.ServicesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetServicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetServicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetServicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.ServicesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServicesFilter filter = 1;
 * @return {?proto.business.ServicesFilter}
 */
proto.business.GetServicesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.ServicesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.ServicesFilter, 1));
};


/**
 * @param {?proto.business.ServicesFilter|undefined} value
 * @return {!proto.business.GetServicesRequest} returns this
*/
proto.business.GetServicesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetServicesRequest} returns this
 */
proto.business.GetServicesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetServicesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.GetServicesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    servicesList: jspb.Message.toObjectList(msg.getServicesList(),
    proto.business.Service.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetServicesResponse}
 */
proto.business.GetServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetServicesResponse;
  return proto.business.GetServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetServicesResponse}
 */
proto.business.GetServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.addServices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Service services = 1;
 * @return {!Array<!proto.business.Service>}
 */
proto.business.GetServicesResponse.prototype.getServicesList = function() {
  return /** @type{!Array<!proto.business.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {!Array<!proto.business.Service>} value
 * @return {!proto.business.GetServicesResponse} returns this
*/
proto.business.GetServicesResponse.prototype.setServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Service}
 */
proto.business.GetServicesResponse.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.GetServicesResponse} returns this
 */
proto.business.GetServicesResponse.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.AddAvailabilitiesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.AddAvailabilitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.AddAvailabilitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.AddAvailabilitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AddAvailabilitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilitiesList: jspb.Message.toObjectList(msg.getAvailabilitiesList(),
    proto.business.Availability.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.AddAvailabilitiesRequest}
 */
proto.business.AddAvailabilitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.AddAvailabilitiesRequest;
  return proto.business.AddAvailabilitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.AddAvailabilitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.AddAvailabilitiesRequest}
 */
proto.business.AddAvailabilitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Availability;
      reader.readMessage(value,proto.business.Availability.deserializeBinaryFromReader);
      msg.addAvailabilities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.AddAvailabilitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.AddAvailabilitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.AddAvailabilitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AddAvailabilitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Availability.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Availability availabilities = 1;
 * @return {!Array<!proto.business.Availability>}
 */
proto.business.AddAvailabilitiesRequest.prototype.getAvailabilitiesList = function() {
  return /** @type{!Array<!proto.business.Availability>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Availability, 1));
};


/**
 * @param {!Array<!proto.business.Availability>} value
 * @return {!proto.business.AddAvailabilitiesRequest} returns this
*/
proto.business.AddAvailabilitiesRequest.prototype.setAvailabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Availability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Availability}
 */
proto.business.AddAvailabilitiesRequest.prototype.addAvailabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Availability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.AddAvailabilitiesRequest} returns this
 */
proto.business.AddAvailabilitiesRequest.prototype.clearAvailabilitiesList = function() {
  return this.setAvailabilitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.AddAvailabilitiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.AddAvailabilitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.AddAvailabilitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.AddAvailabilitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AddAvailabilitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilityIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.AddAvailabilitiesResponse}
 */
proto.business.AddAvailabilitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.AddAvailabilitiesResponse;
  return proto.business.AddAvailabilitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.AddAvailabilitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.AddAvailabilitiesResponse}
 */
proto.business.AddAvailabilitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAvailabilityIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.AddAvailabilitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.AddAvailabilitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.AddAvailabilitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.AddAvailabilitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilityIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string availability_ids = 1;
 * @return {!Array<string>}
 */
proto.business.AddAvailabilitiesResponse.prototype.getAvailabilityIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.business.AddAvailabilitiesResponse} returns this
 */
proto.business.AddAvailabilitiesResponse.prototype.setAvailabilityIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.business.AddAvailabilitiesResponse} returns this
 */
proto.business.AddAvailabilitiesResponse.prototype.addAvailabilityIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.AddAvailabilitiesResponse} returns this
 */
proto.business.AddAvailabilitiesResponse.prototype.clearAvailabilityIdsList = function() {
  return this.setAvailabilityIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetAvailabilitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetAvailabilitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetAvailabilitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetAvailabilitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.AvailabilitiesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetAvailabilitiesRequest}
 */
proto.business.GetAvailabilitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetAvailabilitiesRequest;
  return proto.business.GetAvailabilitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetAvailabilitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetAvailabilitiesRequest}
 */
proto.business.GetAvailabilitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.AvailabilitiesFilter;
      reader.readMessage(value,proto.business.AvailabilitiesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetAvailabilitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetAvailabilitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetAvailabilitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetAvailabilitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.AvailabilitiesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional AvailabilitiesFilter filter = 1;
 * @return {?proto.business.AvailabilitiesFilter}
 */
proto.business.GetAvailabilitiesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.AvailabilitiesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.AvailabilitiesFilter, 1));
};


/**
 * @param {?proto.business.AvailabilitiesFilter|undefined} value
 * @return {!proto.business.GetAvailabilitiesRequest} returns this
*/
proto.business.GetAvailabilitiesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetAvailabilitiesRequest} returns this
 */
proto.business.GetAvailabilitiesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetAvailabilitiesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.GetAvailabilitiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetAvailabilitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetAvailabilitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetAvailabilitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetAvailabilitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilitiesList: jspb.Message.toObjectList(msg.getAvailabilitiesList(),
    proto.business.Availability.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetAvailabilitiesResponse}
 */
proto.business.GetAvailabilitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetAvailabilitiesResponse;
  return proto.business.GetAvailabilitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetAvailabilitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetAvailabilitiesResponse}
 */
proto.business.GetAvailabilitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Availability;
      reader.readMessage(value,proto.business.Availability.deserializeBinaryFromReader);
      msg.addAvailabilities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetAvailabilitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetAvailabilitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetAvailabilitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetAvailabilitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Availability.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Availability availabilities = 1;
 * @return {!Array<!proto.business.Availability>}
 */
proto.business.GetAvailabilitiesResponse.prototype.getAvailabilitiesList = function() {
  return /** @type{!Array<!proto.business.Availability>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Availability, 1));
};


/**
 * @param {!Array<!proto.business.Availability>} value
 * @return {!proto.business.GetAvailabilitiesResponse} returns this
*/
proto.business.GetAvailabilitiesResponse.prototype.setAvailabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Availability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Availability}
 */
proto.business.GetAvailabilitiesResponse.prototype.addAvailabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Availability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.GetAvailabilitiesResponse} returns this
 */
proto.business.GetAvailabilitiesResponse.prototype.clearAvailabilitiesList = function() {
  return this.setAvailabilitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.GrantRolesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GrantRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GrantRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GrantRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GrantRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.business.Role.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GrantRolesRequest}
 */
proto.business.GrantRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GrantRolesRequest;
  return proto.business.GrantRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GrantRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GrantRolesRequest}
 */
proto.business.GrantRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GrantRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GrantRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GrantRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GrantRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Role roles = 1;
 * @return {!Array<!proto.business.Role>}
 */
proto.business.GrantRolesRequest.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.business.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {!Array<!proto.business.Role>} value
 * @return {!proto.business.GrantRolesRequest} returns this
*/
proto.business.GrantRolesRequest.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Role}
 */
proto.business.GrantRolesRequest.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.GrantRolesRequest} returns this
 */
proto.business.GrantRolesRequest.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GrantRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GrantRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GrantRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GrantRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    granted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GrantRolesResponse}
 */
proto.business.GrantRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GrantRolesResponse;
  return proto.business.GrantRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GrantRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GrantRolesResponse}
 */
proto.business.GrantRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGranted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GrantRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GrantRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GrantRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GrantRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGranted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool granted = 1;
 * @return {boolean}
 */
proto.business.GrantRolesResponse.prototype.getGranted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.GrantRolesResponse} returns this
 */
proto.business.GrantRolesResponse.prototype.setGranted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.RevokeRolesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RevokeRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RevokeRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RevokeRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RevokeRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.business.Role.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RevokeRolesRequest}
 */
proto.business.RevokeRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RevokeRolesRequest;
  return proto.business.RevokeRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RevokeRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RevokeRolesRequest}
 */
proto.business.RevokeRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RevokeRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RevokeRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RevokeRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RevokeRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Role roles = 1;
 * @return {!Array<!proto.business.Role>}
 */
proto.business.RevokeRolesRequest.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.business.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {!Array<!proto.business.Role>} value
 * @return {!proto.business.RevokeRolesRequest} returns this
*/
proto.business.RevokeRolesRequest.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Role}
 */
proto.business.RevokeRolesRequest.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.RevokeRolesRequest} returns this
 */
proto.business.RevokeRolesRequest.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.RevokeRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.RevokeRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.RevokeRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RevokeRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    revoked: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.RevokeRolesResponse}
 */
proto.business.RevokeRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.RevokeRolesResponse;
  return proto.business.RevokeRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.RevokeRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.RevokeRolesResponse}
 */
proto.business.RevokeRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRevoked(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.RevokeRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.RevokeRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.RevokeRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.RevokeRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRevoked();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool revoked = 1;
 * @return {boolean}
 */
proto.business.RevokeRolesResponse.prototype.getRevoked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.RevokeRolesResponse} returns this
 */
proto.business.RevokeRolesResponse.prototype.setRevoked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.RolesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetRolesRequest}
 */
proto.business.GetRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetRolesRequest;
  return proto.business.GetRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetRolesRequest}
 */
proto.business.GetRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.RolesFilter;
      reader.readMessage(value,proto.business.RolesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.RolesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional RolesFilter filter = 1;
 * @return {?proto.business.RolesFilter}
 */
proto.business.GetRolesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.RolesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.RolesFilter, 1));
};


/**
 * @param {?proto.business.RolesFilter|undefined} value
 * @return {!proto.business.GetRolesRequest} returns this
*/
proto.business.GetRolesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.GetRolesRequest} returns this
 */
proto.business.GetRolesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.GetRolesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.GetRolesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.GetRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.GetRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.GetRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.business.Role.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.GetRolesResponse}
 */
proto.business.GetRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.GetRolesResponse;
  return proto.business.GetRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.GetRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.GetRolesResponse}
 */
proto.business.GetRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.GetRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.GetRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.GetRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.GetRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Role roles = 1;
 * @return {!Array<!proto.business.Role>}
 */
proto.business.GetRolesResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.business.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {!Array<!proto.business.Role>} value
 * @return {!proto.business.GetRolesResponse} returns this
*/
proto.business.GetRolesResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Role}
 */
proto.business.GetRolesResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.GetRolesResponse} returns this
 */
proto.business.GetRolesResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateBusinessRequest}
 */
proto.business.CreateBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateBusinessRequest;
  return proto.business.CreateBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateBusinessRequest}
 */
proto.business.CreateBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.Business}
 */
proto.business.CreateBusinessRequest.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.CreateBusinessRequest} returns this
*/
proto.business.CreateBusinessRequest.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.CreateBusinessRequest} returns this
 */
proto.business.CreateBusinessRequest.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.CreateBusinessRequest.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateBusinessResponse}
 */
proto.business.CreateBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateBusinessResponse;
  return proto.business.CreateBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateBusinessResponse}
 */
proto.business.CreateBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.CreateBusinessResponse.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.CreateBusinessResponse} returns this
 */
proto.business.CreateBusinessResponse.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.UpdateBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.UpdateBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.UpdateBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.UpdateBusinessRequest}
 */
proto.business.UpdateBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.UpdateBusinessRequest;
  return proto.business.UpdateBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.UpdateBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.UpdateBusinessRequest}
 */
proto.business.UpdateBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.UpdateBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.UpdateBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.UpdateBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.Business}
 */
proto.business.UpdateBusinessRequest.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.UpdateBusinessRequest} returns this
*/
proto.business.UpdateBusinessRequest.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.UpdateBusinessRequest} returns this
 */
proto.business.UpdateBusinessRequest.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.UpdateBusinessRequest.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.UpdateBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.UpdateBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.UpdateBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    updated: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.UpdateBusinessResponse}
 */
proto.business.UpdateBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.UpdateBusinessResponse;
  return proto.business.UpdateBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.UpdateBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.UpdateBusinessResponse}
 */
proto.business.UpdateBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.UpdateBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.UpdateBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.UpdateBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool updated = 1;
 * @return {boolean}
 */
proto.business.UpdateBusinessResponse.prototype.getUpdated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.UpdateBusinessResponse} returns this
 */
proto.business.UpdateBusinessResponse.prototype.setUpdated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteBusinessRequest}
 */
proto.business.DeleteBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteBusinessRequest;
  return proto.business.DeleteBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteBusinessRequest}
 */
proto.business.DeleteBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.DeleteBusinessRequest.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.DeleteBusinessRequest} returns this
 */
proto.business.DeleteBusinessRequest.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteBusinessResponse}
 */
proto.business.DeleteBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteBusinessResponse;
  return proto.business.DeleteBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteBusinessResponse}
 */
proto.business.DeleteBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool deleted = 1;
 * @return {boolean}
 */
proto.business.DeleteBusinessResponse.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.DeleteBusinessResponse} returns this
 */
proto.business.DeleteBusinessResponse.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.BusinessFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindBusinessRequest}
 */
proto.business.FindBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindBusinessRequest;
  return proto.business.FindBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindBusinessRequest}
 */
proto.business.FindBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.BusinessFilter;
      reader.readMessage(value,proto.business.BusinessFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.BusinessFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessFilter filter = 1;
 * @return {?proto.business.BusinessFilter}
 */
proto.business.FindBusinessRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.BusinessFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.BusinessFilter, 1));
};


/**
 * @param {?proto.business.BusinessFilter|undefined} value
 * @return {!proto.business.FindBusinessRequest} returns this
*/
proto.business.FindBusinessRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindBusinessRequest} returns this
 */
proto.business.FindBusinessRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindBusinessRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    business: (f = msg.getBusiness()) && proto.business.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindBusinessResponse}
 */
proto.business.FindBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindBusinessResponse;
  return proto.business.FindBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindBusinessResponse}
 */
proto.business.FindBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.Business}
 */
proto.business.FindBusinessResponse.prototype.getBusiness = function() {
  return /** @type{?proto.business.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {?proto.business.Business|undefined} value
 * @return {!proto.business.FindBusinessResponse} returns this
*/
proto.business.FindBusinessResponse.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindBusinessResponse} returns this
 */
proto.business.FindBusinessResponse.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindBusinessResponse.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindBusinessesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindBusinessesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindBusinessesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.BusinessesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindBusinessesRequest}
 */
proto.business.FindBusinessesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindBusinessesRequest;
  return proto.business.FindBusinessesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindBusinessesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindBusinessesRequest}
 */
proto.business.FindBusinessesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.BusinessesFilter;
      reader.readMessage(value,proto.business.BusinessesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindBusinessesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindBusinessesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindBusinessesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.BusinessesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessesFilter filter = 1;
 * @return {?proto.business.BusinessesFilter}
 */
proto.business.FindBusinessesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.BusinessesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.BusinessesFilter, 1));
};


/**
 * @param {?proto.business.BusinessesFilter|undefined} value
 * @return {!proto.business.FindBusinessesRequest} returns this
*/
proto.business.FindBusinessesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindBusinessesRequest} returns this
 */
proto.business.FindBusinessesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindBusinessesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.FindBusinessesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindBusinessesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindBusinessesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindBusinessesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessesList: jspb.Message.toObjectList(msg.getBusinessesList(),
    proto.business.Business.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindBusinessesResponse}
 */
proto.business.FindBusinessesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindBusinessesResponse;
  return proto.business.FindBusinessesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindBusinessesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindBusinessesResponse}
 */
proto.business.FindBusinessesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Business;
      reader.readMessage(value,proto.business.Business.deserializeBinaryFromReader);
      msg.addBusinesses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindBusinessesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindBusinessesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindBusinessesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindBusinessesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Business.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Business businesses = 1;
 * @return {!Array<!proto.business.Business>}
 */
proto.business.FindBusinessesResponse.prototype.getBusinessesList = function() {
  return /** @type{!Array<!proto.business.Business>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Business, 1));
};


/**
 * @param {!Array<!proto.business.Business>} value
 * @return {!proto.business.FindBusinessesResponse} returns this
*/
proto.business.FindBusinessesResponse.prototype.setBusinessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Business=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Business}
 */
proto.business.FindBusinessesResponse.prototype.addBusinesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Business, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.FindBusinessesResponse} returns this
 */
proto.business.FindBusinessesResponse.prototype.clearBusinessesList = function() {
  return this.setBusinessesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateServiceRequest}
 */
proto.business.CreateServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateServiceRequest;
  return proto.business.CreateServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateServiceRequest}
 */
proto.business.CreateServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * optional Service service = 1;
 * @return {?proto.business.Service}
 */
proto.business.CreateServiceRequest.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.CreateServiceRequest} returns this
*/
proto.business.CreateServiceRequest.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.CreateServiceRequest} returns this
 */
proto.business.CreateServiceRequest.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.CreateServiceRequest.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateServiceResponse}
 */
proto.business.CreateServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateServiceResponse;
  return proto.business.CreateServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateServiceResponse}
 */
proto.business.CreateServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.business.CreateServiceResponse.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.CreateServiceResponse} returns this
 */
proto.business.CreateServiceResponse.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.UpdateServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.UpdateServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.UpdateServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.UpdateServiceRequest}
 */
proto.business.UpdateServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.UpdateServiceRequest;
  return proto.business.UpdateServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.UpdateServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.UpdateServiceRequest}
 */
proto.business.UpdateServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.UpdateServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.UpdateServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.UpdateServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * optional Service service = 1;
 * @return {?proto.business.Service}
 */
proto.business.UpdateServiceRequest.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.UpdateServiceRequest} returns this
*/
proto.business.UpdateServiceRequest.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.UpdateServiceRequest} returns this
 */
proto.business.UpdateServiceRequest.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.UpdateServiceRequest.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.UpdateServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.UpdateServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.UpdateServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    updated: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.UpdateServiceResponse}
 */
proto.business.UpdateServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.UpdateServiceResponse;
  return proto.business.UpdateServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.UpdateServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.UpdateServiceResponse}
 */
proto.business.UpdateServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.UpdateServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.UpdateServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.UpdateServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool updated = 1;
 * @return {boolean}
 */
proto.business.UpdateServiceResponse.prototype.getUpdated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.UpdateServiceResponse} returns this
 */
proto.business.UpdateServiceResponse.prototype.setUpdated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteServiceRequest}
 */
proto.business.DeleteServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteServiceRequest;
  return proto.business.DeleteServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteServiceRequest}
 */
proto.business.DeleteServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.business.DeleteServiceRequest.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.DeleteServiceRequest} returns this
 */
proto.business.DeleteServiceRequest.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteServiceResponse}
 */
proto.business.DeleteServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteServiceResponse;
  return proto.business.DeleteServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteServiceResponse}
 */
proto.business.DeleteServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool deleted = 1;
 * @return {boolean}
 */
proto.business.DeleteServiceResponse.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.DeleteServiceResponse} returns this
 */
proto.business.DeleteServiceResponse.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.ServiceFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindServiceRequest}
 */
proto.business.FindServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindServiceRequest;
  return proto.business.FindServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindServiceRequest}
 */
proto.business.FindServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.ServiceFilter;
      reader.readMessage(value,proto.business.ServiceFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.ServiceFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServiceFilter filter = 1;
 * @return {?proto.business.ServiceFilter}
 */
proto.business.FindServiceRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.ServiceFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.ServiceFilter, 1));
};


/**
 * @param {?proto.business.ServiceFilter|undefined} value
 * @return {!proto.business.FindServiceRequest} returns this
*/
proto.business.FindServiceRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindServiceRequest} returns this
 */
proto.business.FindServiceRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindServiceRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: (f = msg.getService()) && proto.business.Service.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindServiceResponse}
 */
proto.business.FindServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindServiceResponse;
  return proto.business.FindServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindServiceResponse}
 */
proto.business.FindServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * optional Service service = 1;
 * @return {?proto.business.Service}
 */
proto.business.FindServiceResponse.prototype.getService = function() {
  return /** @type{?proto.business.Service} */ (
    jspb.Message.getWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {?proto.business.Service|undefined} value
 * @return {!proto.business.FindServiceResponse} returns this
*/
proto.business.FindServiceResponse.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindServiceResponse} returns this
 */
proto.business.FindServiceResponse.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindServiceResponse.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindServicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindServicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindServicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.ServicesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindServicesRequest}
 */
proto.business.FindServicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindServicesRequest;
  return proto.business.FindServicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindServicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindServicesRequest}
 */
proto.business.FindServicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.ServicesFilter;
      reader.readMessage(value,proto.business.ServicesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindServicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindServicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindServicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.ServicesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional ServicesFilter filter = 1;
 * @return {?proto.business.ServicesFilter}
 */
proto.business.FindServicesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.ServicesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.ServicesFilter, 1));
};


/**
 * @param {?proto.business.ServicesFilter|undefined} value
 * @return {!proto.business.FindServicesRequest} returns this
*/
proto.business.FindServicesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindServicesRequest} returns this
 */
proto.business.FindServicesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindServicesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.FindServicesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    servicesList: jspb.Message.toObjectList(msg.getServicesList(),
    proto.business.Service.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindServicesResponse}
 */
proto.business.FindServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindServicesResponse;
  return proto.business.FindServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindServicesResponse}
 */
proto.business.FindServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Service;
      reader.readMessage(value,proto.business.Service.deserializeBinaryFromReader);
      msg.addServices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Service.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Service services = 1;
 * @return {!Array<!proto.business.Service>}
 */
proto.business.FindServicesResponse.prototype.getServicesList = function() {
  return /** @type{!Array<!proto.business.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Service, 1));
};


/**
 * @param {!Array<!proto.business.Service>} value
 * @return {!proto.business.FindServicesResponse} returns this
*/
proto.business.FindServicesResponse.prototype.setServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Service}
 */
proto.business.FindServicesResponse.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.FindServicesResponse} returns this
 */
proto.business.FindServicesResponse.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateAvailabilityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateAvailabilityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateAvailabilityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateAvailabilityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    availability: (f = msg.getAvailability()) && proto.business.Availability.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateAvailabilityRequest}
 */
proto.business.CreateAvailabilityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateAvailabilityRequest;
  return proto.business.CreateAvailabilityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateAvailabilityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateAvailabilityRequest}
 */
proto.business.CreateAvailabilityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Availability;
      reader.readMessage(value,proto.business.Availability.deserializeBinaryFromReader);
      msg.setAvailability(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateAvailabilityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateAvailabilityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateAvailabilityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateAvailabilityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailability();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Availability.serializeBinaryToWriter
    );
  }
};


/**
 * optional Availability availability = 1;
 * @return {?proto.business.Availability}
 */
proto.business.CreateAvailabilityRequest.prototype.getAvailability = function() {
  return /** @type{?proto.business.Availability} */ (
    jspb.Message.getWrapperField(this, proto.business.Availability, 1));
};


/**
 * @param {?proto.business.Availability|undefined} value
 * @return {!proto.business.CreateAvailabilityRequest} returns this
*/
proto.business.CreateAvailabilityRequest.prototype.setAvailability = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.CreateAvailabilityRequest} returns this
 */
proto.business.CreateAvailabilityRequest.prototype.clearAvailability = function() {
  return this.setAvailability(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.CreateAvailabilityRequest.prototype.hasAvailability = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateAvailabilityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateAvailabilityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateAvailabilityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateAvailabilityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateAvailabilityResponse}
 */
proto.business.CreateAvailabilityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateAvailabilityResponse;
  return proto.business.CreateAvailabilityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateAvailabilityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateAvailabilityResponse}
 */
proto.business.CreateAvailabilityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvailabilityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateAvailabilityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateAvailabilityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateAvailabilityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateAvailabilityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string availability_id = 1;
 * @return {string}
 */
proto.business.CreateAvailabilityResponse.prototype.getAvailabilityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.CreateAvailabilityResponse} returns this
 */
proto.business.CreateAvailabilityResponse.prototype.setAvailabilityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.UpdateAvailabilityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.UpdateAvailabilityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.UpdateAvailabilityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateAvailabilityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    availability: (f = msg.getAvailability()) && proto.business.Availability.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.UpdateAvailabilityRequest}
 */
proto.business.UpdateAvailabilityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.UpdateAvailabilityRequest;
  return proto.business.UpdateAvailabilityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.UpdateAvailabilityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.UpdateAvailabilityRequest}
 */
proto.business.UpdateAvailabilityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Availability;
      reader.readMessage(value,proto.business.Availability.deserializeBinaryFromReader);
      msg.setAvailability(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.UpdateAvailabilityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.UpdateAvailabilityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.UpdateAvailabilityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateAvailabilityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailability();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Availability.serializeBinaryToWriter
    );
  }
};


/**
 * optional Availability availability = 1;
 * @return {?proto.business.Availability}
 */
proto.business.UpdateAvailabilityRequest.prototype.getAvailability = function() {
  return /** @type{?proto.business.Availability} */ (
    jspb.Message.getWrapperField(this, proto.business.Availability, 1));
};


/**
 * @param {?proto.business.Availability|undefined} value
 * @return {!proto.business.UpdateAvailabilityRequest} returns this
*/
proto.business.UpdateAvailabilityRequest.prototype.setAvailability = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.UpdateAvailabilityRequest} returns this
 */
proto.business.UpdateAvailabilityRequest.prototype.clearAvailability = function() {
  return this.setAvailability(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.UpdateAvailabilityRequest.prototype.hasAvailability = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.UpdateAvailabilityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.UpdateAvailabilityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.UpdateAvailabilityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateAvailabilityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    update: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.UpdateAvailabilityResponse}
 */
proto.business.UpdateAvailabilityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.UpdateAvailabilityResponse;
  return proto.business.UpdateAvailabilityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.UpdateAvailabilityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.UpdateAvailabilityResponse}
 */
proto.business.UpdateAvailabilityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.UpdateAvailabilityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.UpdateAvailabilityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.UpdateAvailabilityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.UpdateAvailabilityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdate();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool update = 1;
 * @return {boolean}
 */
proto.business.UpdateAvailabilityResponse.prototype.getUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.UpdateAvailabilityResponse} returns this
 */
proto.business.UpdateAvailabilityResponse.prototype.setUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteAvailabilityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteAvailabilityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteAvailabilityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteAvailabilityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteAvailabilityRequest}
 */
proto.business.DeleteAvailabilityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteAvailabilityRequest;
  return proto.business.DeleteAvailabilityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteAvailabilityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteAvailabilityRequest}
 */
proto.business.DeleteAvailabilityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvailabilityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteAvailabilityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteAvailabilityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteAvailabilityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteAvailabilityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string availability_id = 1;
 * @return {string}
 */
proto.business.DeleteAvailabilityRequest.prototype.getAvailabilityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.DeleteAvailabilityRequest} returns this
 */
proto.business.DeleteAvailabilityRequest.prototype.setAvailabilityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteAvailabilityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteAvailabilityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteAvailabilityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteAvailabilityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteAvailabilityResponse}
 */
proto.business.DeleteAvailabilityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteAvailabilityResponse;
  return proto.business.DeleteAvailabilityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteAvailabilityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteAvailabilityResponse}
 */
proto.business.DeleteAvailabilityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteAvailabilityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteAvailabilityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteAvailabilityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteAvailabilityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool deleted = 1;
 * @return {boolean}
 */
proto.business.DeleteAvailabilityResponse.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.DeleteAvailabilityResponse} returns this
 */
proto.business.DeleteAvailabilityResponse.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindAvailabilityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindAvailabilityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindAvailabilityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.AvailabilityFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindAvailabilityRequest}
 */
proto.business.FindAvailabilityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindAvailabilityRequest;
  return proto.business.FindAvailabilityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindAvailabilityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindAvailabilityRequest}
 */
proto.business.FindAvailabilityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.AvailabilityFilter;
      reader.readMessage(value,proto.business.AvailabilityFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindAvailabilityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindAvailabilityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindAvailabilityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.AvailabilityFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional AvailabilityFilter filter = 1;
 * @return {?proto.business.AvailabilityFilter}
 */
proto.business.FindAvailabilityRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.AvailabilityFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.AvailabilityFilter, 1));
};


/**
 * @param {?proto.business.AvailabilityFilter|undefined} value
 * @return {!proto.business.FindAvailabilityRequest} returns this
*/
proto.business.FindAvailabilityRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindAvailabilityRequest} returns this
 */
proto.business.FindAvailabilityRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindAvailabilityRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindAvailabilityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindAvailabilityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindAvailabilityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availability: (f = msg.getAvailability()) && proto.business.Availability.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindAvailabilityResponse}
 */
proto.business.FindAvailabilityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindAvailabilityResponse;
  return proto.business.FindAvailabilityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindAvailabilityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindAvailabilityResponse}
 */
proto.business.FindAvailabilityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Availability;
      reader.readMessage(value,proto.business.Availability.deserializeBinaryFromReader);
      msg.setAvailability(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindAvailabilityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindAvailabilityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindAvailabilityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailability();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Availability.serializeBinaryToWriter
    );
  }
};


/**
 * optional Availability availability = 1;
 * @return {?proto.business.Availability}
 */
proto.business.FindAvailabilityResponse.prototype.getAvailability = function() {
  return /** @type{?proto.business.Availability} */ (
    jspb.Message.getWrapperField(this, proto.business.Availability, 1));
};


/**
 * @param {?proto.business.Availability|undefined} value
 * @return {!proto.business.FindAvailabilityResponse} returns this
*/
proto.business.FindAvailabilityResponse.prototype.setAvailability = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindAvailabilityResponse} returns this
 */
proto.business.FindAvailabilityResponse.prototype.clearAvailability = function() {
  return this.setAvailability(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindAvailabilityResponse.prototype.hasAvailability = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindAvailabilitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindAvailabilitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindAvailabilitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.AvailabilitiesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindAvailabilitiesRequest}
 */
proto.business.FindAvailabilitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindAvailabilitiesRequest;
  return proto.business.FindAvailabilitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindAvailabilitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindAvailabilitiesRequest}
 */
proto.business.FindAvailabilitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.AvailabilitiesFilter;
      reader.readMessage(value,proto.business.AvailabilitiesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindAvailabilitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindAvailabilitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindAvailabilitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.AvailabilitiesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional AvailabilitiesFilter filter = 1;
 * @return {?proto.business.AvailabilitiesFilter}
 */
proto.business.FindAvailabilitiesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.AvailabilitiesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.AvailabilitiesFilter, 1));
};


/**
 * @param {?proto.business.AvailabilitiesFilter|undefined} value
 * @return {!proto.business.FindAvailabilitiesRequest} returns this
*/
proto.business.FindAvailabilitiesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindAvailabilitiesRequest} returns this
 */
proto.business.FindAvailabilitiesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindAvailabilitiesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.FindAvailabilitiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindAvailabilitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindAvailabilitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindAvailabilitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilitiesList: jspb.Message.toObjectList(msg.getAvailabilitiesList(),
    proto.business.Availability.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindAvailabilitiesResponse}
 */
proto.business.FindAvailabilitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindAvailabilitiesResponse;
  return proto.business.FindAvailabilitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindAvailabilitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindAvailabilitiesResponse}
 */
proto.business.FindAvailabilitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Availability;
      reader.readMessage(value,proto.business.Availability.deserializeBinaryFromReader);
      msg.addAvailabilities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindAvailabilitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindAvailabilitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindAvailabilitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindAvailabilitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Availability.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Availability availabilities = 1;
 * @return {!Array<!proto.business.Availability>}
 */
proto.business.FindAvailabilitiesResponse.prototype.getAvailabilitiesList = function() {
  return /** @type{!Array<!proto.business.Availability>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Availability, 1));
};


/**
 * @param {!Array<!proto.business.Availability>} value
 * @return {!proto.business.FindAvailabilitiesResponse} returns this
*/
proto.business.FindAvailabilitiesResponse.prototype.setAvailabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Availability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Availability}
 */
proto.business.FindAvailabilitiesResponse.prototype.addAvailabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Availability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.FindAvailabilitiesResponse} returns this
 */
proto.business.FindAvailabilitiesResponse.prototype.clearAvailabilitiesList = function() {
  return this.setAvailabilitiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: (f = msg.getRole()) && proto.business.Role.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateRoleRequest}
 */
proto.business.CreateRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateRoleRequest;
  return proto.business.CreateRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateRoleRequest}
 */
proto.business.CreateRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * optional Role role = 1;
 * @return {?proto.business.Role}
 */
proto.business.CreateRoleRequest.prototype.getRole = function() {
  return /** @type{?proto.business.Role} */ (
    jspb.Message.getWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {?proto.business.Role|undefined} value
 * @return {!proto.business.CreateRoleRequest} returns this
*/
proto.business.CreateRoleRequest.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.CreateRoleRequest} returns this
 */
proto.business.CreateRoleRequest.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.CreateRoleRequest.prototype.hasRole = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.CreateRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.CreateRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.CreateRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    created: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.CreateRoleResponse}
 */
proto.business.CreateRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.CreateRoleResponse;
  return proto.business.CreateRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.CreateRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.CreateRoleResponse}
 */
proto.business.CreateRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.CreateRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.CreateRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.CreateRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.CreateRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool created = 1;
 * @return {boolean}
 */
proto.business.CreateRoleResponse.prototype.getCreated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.CreateRoleResponse} returns this
 */
proto.business.CreateRoleResponse.prototype.setCreated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: (f = msg.getRole()) && proto.business.Role.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteRoleRequest}
 */
proto.business.DeleteRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteRoleRequest;
  return proto.business.DeleteRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteRoleRequest}
 */
proto.business.DeleteRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * optional Role role = 1;
 * @return {?proto.business.Role}
 */
proto.business.DeleteRoleRequest.prototype.getRole = function() {
  return /** @type{?proto.business.Role} */ (
    jspb.Message.getWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {?proto.business.Role|undefined} value
 * @return {!proto.business.DeleteRoleRequest} returns this
*/
proto.business.DeleteRoleRequest.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.DeleteRoleRequest} returns this
 */
proto.business.DeleteRoleRequest.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.DeleteRoleRequest.prototype.hasRole = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.DeleteRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.DeleteRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.DeleteRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.DeleteRoleResponse}
 */
proto.business.DeleteRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.DeleteRoleResponse;
  return proto.business.DeleteRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.DeleteRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.DeleteRoleResponse}
 */
proto.business.DeleteRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.DeleteRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.DeleteRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.DeleteRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.DeleteRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool deleted = 1;
 * @return {boolean}
 */
proto.business.DeleteRoleResponse.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.DeleteRoleResponse} returns this
 */
proto.business.DeleteRoleResponse.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.RoleFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindRoleRequest}
 */
proto.business.FindRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindRoleRequest;
  return proto.business.FindRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindRoleRequest}
 */
proto.business.FindRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.RoleFilter;
      reader.readMessage(value,proto.business.RoleFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.RoleFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional RoleFilter filter = 1;
 * @return {?proto.business.RoleFilter}
 */
proto.business.FindRoleRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.RoleFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.RoleFilter, 1));
};


/**
 * @param {?proto.business.RoleFilter|undefined} value
 * @return {!proto.business.FindRoleRequest} returns this
*/
proto.business.FindRoleRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindRoleRequest} returns this
 */
proto.business.FindRoleRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindRoleRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: (f = msg.getRole()) && proto.business.Role.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindRoleResponse}
 */
proto.business.FindRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindRoleResponse;
  return proto.business.FindRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindRoleResponse}
 */
proto.business.FindRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * optional Role role = 1;
 * @return {?proto.business.Role}
 */
proto.business.FindRoleResponse.prototype.getRole = function() {
  return /** @type{?proto.business.Role} */ (
    jspb.Message.getWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {?proto.business.Role|undefined} value
 * @return {!proto.business.FindRoleResponse} returns this
*/
proto.business.FindRoleResponse.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindRoleResponse} returns this
 */
proto.business.FindRoleResponse.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindRoleResponse.prototype.hasRole = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.business.RolesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindRolesRequest}
 */
proto.business.FindRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindRolesRequest;
  return proto.business.FindRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindRolesRequest}
 */
proto.business.FindRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.RolesFilter;
      reader.readMessage(value,proto.business.RolesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.RolesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional RolesFilter filter = 1;
 * @return {?proto.business.RolesFilter}
 */
proto.business.FindRolesRequest.prototype.getFilter = function() {
  return /** @type{?proto.business.RolesFilter} */ (
    jspb.Message.getWrapperField(this, proto.business.RolesFilter, 1));
};


/**
 * @param {?proto.business.RolesFilter|undefined} value
 * @return {!proto.business.FindRolesRequest} returns this
*/
proto.business.FindRolesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.FindRolesRequest} returns this
 */
proto.business.FindRolesRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.FindRolesRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.FindRolesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.FindRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.FindRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.FindRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.business.Role.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.FindRolesResponse}
 */
proto.business.FindRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.FindRolesResponse;
  return proto.business.FindRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.FindRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.FindRolesResponse}
 */
proto.business.FindRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.Role;
      reader.readMessage(value,proto.business.Role.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.FindRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.FindRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.FindRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.FindRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.Role.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Role roles = 1;
 * @return {!Array<!proto.business.Role>}
 */
proto.business.FindRolesResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.business.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.Role, 1));
};


/**
 * @param {!Array<!proto.business.Role>} value
 * @return {!proto.business.FindRolesResponse} returns this
*/
proto.business.FindRolesResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.Role}
 */
proto.business.FindRolesResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.FindRolesResponse} returns this
 */
proto.business.FindRolesResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


goog.object.extend(exports, proto.business);
