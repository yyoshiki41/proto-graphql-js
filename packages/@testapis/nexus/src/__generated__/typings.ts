/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { $$testapis$node$lib$enums$enums_pb$MessageWithEnums } from "./../schema/types/enums/enums_pb_nexus"
import { $$testapis$node$lib$hello$hello_pb$Hello, $$testapis$node$lib$hello$hello_pb$Primitives } from "./../schema/types/hello/hello_pb_nexus"
import { $$testapis$node$lib$nested$nested_pb$ParentMessage, $$testapis$node$lib$nested$nested_pb$ParentMessageNestedMessage } from "./../schema/types/nested/nested_pb_nexus"
import { $$testapis$node$lib$wktypes$well_known_types_pb$Message } from "./../schema/types/wktypes/well_known_types_pb_nexus"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  MyEnum1: 2 | 3 | 1 | 0
  ParentMessageNestedEnum: 2 | 1 | 0
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Hello: $$testapis$node$lib$hello$hello_pb$Hello;
  Message: $$testapis$node$lib$wktypes$well_known_types_pb$Message;
  MessageWithEnums: $$testapis$node$lib$enums$enums_pb$MessageWithEnums;
  ParentMessage: $$testapis$node$lib$nested$nested_pb$ParentMessage;
  ParentMessageNestedMessage: $$testapis$node$lib$nested$nested_pb$ParentMessageNestedMessage;
  Primitives: $$testapis$node$lib$hello$hello_pb$Primitives;
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Hello: { // field return type
    optionalPrimitives: NexusGenRootTypes['Primitives'] | null; // Primitives
    optionalPrimitivesList: NexusGenRootTypes['Primitives'] | null; // Primitives
    requiredPrimitives: NexusGenRootTypes['Primitives']; // Primitives!
    requiredPrimitivesList: Array<NexusGenRootTypes['Primitives'] | null>; // [Primitives]!
  }
  Message: { // field return type
    boolValue: boolean | null; // Boolean
    doubleValue: number | null; // Float
    floatValue: number | null; // Float
    int32Value: number | null; // Int
    int64Value: number | null; // Int
    stringValue: string | null; // String
    timestamp: NexusGenScalars['DateTime'] | null; // DateTime
    uint32Value: number | null; // Int
    uint64Value: number | null; // Int
  }
  MessageWithEnums: { // field return type
    myEnum1: NexusGenEnums['MyEnum1'] | null; // MyEnum1
  }
  ParentMessage: { // field return type
    body: string; // String!
    nested: NexusGenRootTypes['ParentMessageNestedMessage'] | null; // ParentMessageNestedMessage
    nestedEnum: NexusGenEnums['ParentMessageNestedEnum'] | null; // ParentMessageNestedEnum
  }
  ParentMessageNestedMessage: { // field return type
    nestedBody: string; // String!
  }
  Primitives: { // field return type
    requiredBoolValue: boolean; // Boolean!
    requiredDoubleValue: number; // Float!
    requiredFixed32Value: number; // Int!
    requiredFixed64Value: number; // Int!
    requiredFloatValue: number; // Float!
    requiredInt32Value: number; // Int!
    requiredInt64Value: number; // Int!
    requiredSfixed32Value: number; // Int!
    requiredSfixed64Value: number; // Int!
    requiredSint32Value: number; // Int!
    requiredSint64Value: number; // Int!
    requiredStringValue: string; // String!
    requiredUint32Value: number; // Int!
    requiredUint64Value: number; // Int!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
}

export interface NexusGenFieldTypeNames {
  Hello: { // field return type name
    optionalPrimitives: 'Primitives'
    optionalPrimitivesList: 'Primitives'
    requiredPrimitives: 'Primitives'
    requiredPrimitivesList: 'Primitives'
  }
  Message: { // field return type name
    boolValue: 'Boolean'
    doubleValue: 'Float'
    floatValue: 'Float'
    int32Value: 'Int'
    int64Value: 'Int'
    stringValue: 'String'
    timestamp: 'DateTime'
    uint32Value: 'Int'
    uint64Value: 'Int'
  }
  MessageWithEnums: { // field return type name
    myEnum1: 'MyEnum1'
  }
  ParentMessage: { // field return type name
    body: 'String'
    nested: 'ParentMessageNestedMessage'
    nestedEnum: 'ParentMessageNestedEnum'
  }
  ParentMessageNestedMessage: { // field return type name
    nestedBody: 'String'
  }
  Primitives: { // field return type name
    requiredBoolValue: 'Boolean'
    requiredDoubleValue: 'Float'
    requiredFixed32Value: 'Int'
    requiredFixed64Value: 'Int'
    requiredFloatValue: 'Float'
    requiredInt32Value: 'Int'
    requiredInt64Value: 'Int'
    requiredSfixed32Value: 'Int'
    requiredSfixed64Value: 'Int'
    requiredSint32Value: 'Int'
    requiredSint64Value: 'Int'
    requiredStringValue: 'String'
    requiredUint32Value: 'Int'
    requiredUint64Value: 'Int'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}