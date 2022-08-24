# Schema definitions

## Current situation

We currently have several supported schemas, including the `CoA`, `EN10168` and soon the `TKR` schema. As each of these schemas is currently separate from the others, a lot of code is duplicated as certain definitions are duplicated between schemas both in the schema definition and in the rendering process.

Take as an example the company definition in CoA and EN10168 schemas:

**CoA**

```json
"Company": {
      "title": "Company",
      "description": "A company involved in business transaction.",
      "type": "object",
      "properties": {
        "Name": {
          "type": "string"
        },
        "AddressLine1": {
          "type": "string"
        },
        "AddressLine2": {
          "type": "string"
        },
        "ZipCode": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "Country": {
          "description": "The two-letter ISO country code according https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.",
          "type": "string",
          "minLength": 2,
          "maxLength": 2,
          "pattern": "^[A-Z]{2}$",
          "examples": [
            "AT",
            "DE",
            "FR",
            "ES",
            "PL",
            "CN"
          ]
        },
        "Email": {
          "type": "string",
          "format": "email"
        },
        "Identifier": {
          "description": "One or more unique company identifiers.",
          "$ref": "#/definitions/Identifier"
        },
        "AdditionalInformation": {
          "description": "An array of additional free text information on the company.",
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true,
          "minItems": 1
        }
      },
      "required": [
        "Name",
        "AddressLine1",
        "ZipCode",
        "City",
        "Country",
        "Email",
        "Identifier"
      ],
      "additionalProperties": true
    }
```

**EN10168**

```json
"CompanyBase": {
      "type": "object",
      "properties": {
        "CompanyName": {
          "description": "Name of the company",
          "type": "string"
        },
        "Street": {
          "description": "Address of the company",
          "type": "string"
        },
        "City": {
          "description": "City of the company",
          "type": "string"
        },
        "ZipCode": {
          "description": "Postal code of the company",
          "type": "string"
        },
        "Country": {
          "description": "Country of the company",
          "type": "string"
        },
        "Email": {
          "description": "Email address of the company",
          "type": "string",
          "format": "email"
        },
        "AdditionalInformation": {
          "description": "Each entry of the array is rendered as a new line in HTML and PDF",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "CompanyName",
        "Street",
        "City",
        "ZipCode",
        "Country"
      ]
    }
```

The `company` definition in the `CoA` schema is almost identical to the implementation in the `EN10168` schema. Despite their similarities, they have some differences. For example, the `EN10168` schema uses a `Street` property while the `CoA` schema uses an `AddressLine1` and `AddressLine2` property.

The `CoA` schema uses `VAT_Id` and the `EN10168` schema uses `VAT`. The `CoA` schema nests `VAT_Id` and `DUNS` under an `Identifier` property, while the `EN10168` schema uses them as a root property.

## Issues with current situation

Due to these differences and others that are not mentioned here, the validation, testing, and rendering for each of these schemas has its own custom implementation which shares a lot of duplicate code.

Also, as each schema has its own test fixtures that test the entire schema, individual definitions are not tested as rigorously as they could be, meaning that sometimes an issue can go unnoticed until it pops up in production.

## New approach

We create a new repo, `schema-definitions`, where we put any schema definitions that can be shared between schemas. We attempt to unify and consolidate the schema definitions, for example, by using `Street` for all schemas that use the `company` definition, and by standardizing `VAT` and `VAT_Id` as `VAT` across schemas.

This allows us to test each individual definition much more thoroughly, meaning that we catch schema issues much quicker.

It also allows us to create custom handlebars partials for each definition which can be imported into the `template.hbs` for each schema, resulting in a lot less duplicated code.

It also means that when designing a new schema, such as with the `TKR` schema, instead of writing custom definitions for each new schema, we can import and extend existing definition from the `schema-definitions`, making the process of designing a new schema much easier.

## Proposed changes

`company` definition:
We propose that:

- `Street` and `AddressLine1`/`AddressLine2` be standardized to `Street`. Street can be a string or an array, allowing multiple lines if necessary.
- `VAT_Id` and `VAT` be standardized to `VAT`.
- `Email` no longer be a required property.
- `Name` or `CompanyName` be required, and possibly standardized to `CompanyName`.
- The `Identifier` property from the `CoA` schema be renamed `Identifiers` as there can be more than one, and it also become a required property in `EN10168`, removing `CompanyIdentifiers`.

Rendering of the `company` handlebars definition:

- Currently, `CoA` highlights the company name in an `h3` tag, while the EN10168 doesn't. All schemas should highlight the company name in an `h3` tag when rendered by the `company` partial.
