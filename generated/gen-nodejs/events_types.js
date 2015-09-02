//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var contentatom_ttypes = require('./contentatom_types')


var ttypes = module.exports = {};
ttypes.EventType = {
  'PUBLISH' : 0,
  'UPDATE' : 1,
  'TAKEDOWN' : 2
};
ttypes.AtomType = {
  'TENFOUR_QUIZ_BUILDER' : 0
};
ContentAtomEvent = module.exports.ContentAtomEvent = function(args) {
  this.id = null;
  this.atomType = null;
  this.eventType = null;
  this.data = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
    if (args.atomType !== undefined) {
      this.atomType = args.atomType;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field atomType is unset!');
    }
    if (args.eventType !== undefined) {
      this.eventType = args.eventType;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field eventType is unset!');
    }
    if (args.data !== undefined) {
      this.data = args.data;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field data is unset!');
    }
  }
};
ContentAtomEvent.prototype = {};
ContentAtomEvent.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.atomType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.eventType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.data = new contentatom_ttypes.ContentAtom();
        this.data.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ContentAtomEvent.prototype.write = function(output) {
  output.writeStructBegin('ContentAtomEvent');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.atomType !== null && this.atomType !== undefined) {
    output.writeFieldBegin('atomType', Thrift.Type.I32, 2);
    output.writeI32(this.atomType);
    output.writeFieldEnd();
  }
  if (this.eventType !== null && this.eventType !== undefined) {
    output.writeFieldBegin('eventType', Thrift.Type.I32, 3);
    output.writeI32(this.eventType);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRUCT, 4);
    this.data.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

