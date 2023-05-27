// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: external/v1/external.proto

package externalv1

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on RegisterSlotsRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *RegisterSlotsRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on RegisterSlotsRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// RegisterSlotsRequestMultiError, or nil if none found.
func (m *RegisterSlotsRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *RegisterSlotsRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetSlots() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, RegisterSlotsRequestValidationError{
						field:  fmt.Sprintf("Slots[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, RegisterSlotsRequestValidationError{
						field:  fmt.Sprintf("Slots[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return RegisterSlotsRequestValidationError{
					field:  fmt.Sprintf("Slots[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if all {
		switch v := interface{}(m.GetUser()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, RegisterSlotsRequestValidationError{
					field:  "User",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, RegisterSlotsRequestValidationError{
					field:  "User",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetUser()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return RegisterSlotsRequestValidationError{
				field:  "User",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return RegisterSlotsRequestMultiError(errors)
	}

	return nil
}

// RegisterSlotsRequestMultiError is an error wrapping multiple validation
// errors returned by RegisterSlotsRequest.ValidateAll() if the designated
// constraints aren't met.
type RegisterSlotsRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m RegisterSlotsRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m RegisterSlotsRequestMultiError) AllErrors() []error { return m }

// RegisterSlotsRequestValidationError is the validation error returned by
// RegisterSlotsRequest.Validate if the designated constraints aren't met.
type RegisterSlotsRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e RegisterSlotsRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e RegisterSlotsRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e RegisterSlotsRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e RegisterSlotsRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e RegisterSlotsRequestValidationError) ErrorName() string {
	return "RegisterSlotsRequestValidationError"
}

// Error satisfies the builtin error interface
func (e RegisterSlotsRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sRegisterSlotsRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = RegisterSlotsRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = RegisterSlotsRequestValidationError{}

// Validate checks the field values on RegisterSlotsResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *RegisterSlotsResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on RegisterSlotsResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// RegisterSlotsResponseMultiError, or nil if none found.
func (m *RegisterSlotsResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *RegisterSlotsResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Registered

	if len(errors) > 0 {
		return RegisterSlotsResponseMultiError(errors)
	}

	return nil
}

// RegisterSlotsResponseMultiError is an error wrapping multiple validation
// errors returned by RegisterSlotsResponse.ValidateAll() if the designated
// constraints aren't met.
type RegisterSlotsResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m RegisterSlotsResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m RegisterSlotsResponseMultiError) AllErrors() []error { return m }

// RegisterSlotsResponseValidationError is the validation error returned by
// RegisterSlotsResponse.Validate if the designated constraints aren't met.
type RegisterSlotsResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e RegisterSlotsResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e RegisterSlotsResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e RegisterSlotsResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e RegisterSlotsResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e RegisterSlotsResponseValidationError) ErrorName() string {
	return "RegisterSlotsResponseValidationError"
}

// Error satisfies the builtin error interface
func (e RegisterSlotsResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sRegisterSlotsResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = RegisterSlotsResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = RegisterSlotsResponseValidationError{}