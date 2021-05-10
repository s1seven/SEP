# EN10168 Mill certificates

::: tip
This specification is approved
:::

[[toc]]

## Current situation

Producers of steel products create mill certificates by

- printing a document, signing and scanning it
- creating a PDF document and sending it to buyers by email.

## Issues with current situation

The most important pain points in our understanding are:

- Scanned documents and PDFs are hard to process electronically so a lot of effort is spent on extracting only essential information manually in various steps of the value chain.
- Authenticity of documents cannot be verified easily so tampering with mill certificates happens all the time.

## New approach

Producers of steel products create mill certificates by

- creating an electronic document with the data used in the past
- rendering machine readable certificates as human readable format

## Background

The European Standard [EN 10168](https://www.en-standard.eu/bs-en-10168-2004-steel-products-inspection-documents-list-of-information-and-description/) defines five information groups to document the results of steel product inspection. For each information group 99 or 100 fields are defined with a very basic naming convention - letter for the section and 2 digit number.

| Information Group                            | Fields     |
| -------------------------------------------- | ---------- |
| Commercial transactions and parties involved | A01 to A99 |
| Description of products                      | B01 to B99 |
| Inspection                                   | C00 to C99 |
| Other tests                                  | D01 to D99 |
| Validation                                   | Z01 to Z99 |

In each group some fields are designated for specific information and in all groups are many fields for designation and many for free usage. It should be noted that the standard does not give any recommendations on formats so basically all fields have to be considered as strings from a software development perspective.

### Examples

To illustrate the designation of sections (or fields in our understanding) some examples are given.

| No         | Section designation           | Contents                                                                                                                     |
| ---------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| A01        | Manufacturer's works          | Name and address of the works where the products were manufactured.                                                          |
| B07        | Identification of the product | Indications for the traceability of the products, e.g. cast number, ingot number, rolling number, batch number, test number. |
| C11        | Yield or proof strength       | Yield or proof strength recorded in MPa.                                                                                     |
| C93 to C99 | Supplementary information     | Available for supplementary information on the chemical composition.                                                         |

## Research

We have been studying certificates created by many market participants viewing them from the view point of machines - how is data provided for easy and high quality processing.

## Results

In our humble opinion there are a lot of issues in practice. Here we are writing up the most important ones as starting point for machine readable format.

### Sections

There are no definitions nor any guidance provided how to structure information in any section so there is no easy processing of data. OCR and modern machine learning/artifical intelligence techniques might be able to process big parts of the information available but still with a lot of failures and errors.

Many companies provide metadata on the data by noting the section to the piece of information printed on. A simple example is

[Screenshot of a section]

### Companies

First prominent sections are A01, A05 and A06 which contain the manufacture, the laboratory and buyer information. Company name and address information is provided in country specific format but most important lacks a global valid identifier as e.g. the VAT ID in Europe or DUNS, which is popular in other parts of the world.

### Product Description

To describe the product there are basically four essential fields:

| No  | Section designation            | Contents                                                                                                                                                                                                   |
| --- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B01 | Product                        | Description of the product form (e.g. : heavy plate, section, wide flat, tube, hollow section, etc.) and, where appropriate, surface condition, with reference to the dimensional standard, if applicable. |
| B02 | Steel Designation              | ISteel name or number and additional symbols and the product specification for the steel.                                                                                                                  |
| B03 | Any supplementary requirements | This section is for indicating special requirements, agreed at the time of ordering, not appearing in sections B 01 and B 02.                                                                              |
| B04 | Product delivery condition     | Delivery condition of the products as specified in the applicable product specification.                                                                                                                   |

The real world is basically a mess illustrated by an overview of approaches we have seen:

- Product **EW Steel Pipes S355J2H EN 2019/1/2-2006** written to a combined section for B01 and B02
- Product in B02 split into
  - Product Norm
  - Material Norm
  - Mass Norm
  - Steel Grade
  - Product Code
- Product **TUBE NORMALIZED (+N), EN 10210-1 ATA** in B01, steel grade **S355J2H/NH** in B02 plus a combined section of B04 and B09-B11 with **SGM 100x100x12,5x12000 S355J2H 10210 HF**
- No section specified with **S355J2H N / E355+N / St 52.0 N** and **DIN 2448: 81 EN 10210-1; 2: 06/ EN 10297-1: 03; DIN 1629: 84** which points to the interesting case a product complies to multiple standards.
- One company put everything into a section described **B01-B04**
- Steel grade **C45+A/1.1730** in B02, the norm **EN 10083-2:2006** is provided in section B14 as supplementary information.
- One company splits B02 into B02.1 for steel grade and B02.2 for the norm.

### Identification of the product

To identify a product section B07 is designated by the norm, which describes it with

_Indications for the traceability of the products, e.g. cast number, ingot number, rolling number, batch number, test number._

In our simple understanding the section should contain the batch number of the product with which the mill certificate comes, e.g. the production batch number for some tubes. However, tracability must be ensured back to the inital cast number so in practice people developed some workarounds:

- Split of B07 into B07.1, into which goes **Heat Number** and B07.2, into which goes **Specimen number**.
- Many occurances of B07, put into context with processing step and its inspection, e.g. a batch number associated with the chemical analysis and a batch number associated with the product. We have seen up to **five** B07 on one mill certificate.

This is perfectly fine when looking at it from the production process and on paper. However, dealing with more than one B07 in an format to be consumed by software is getting tricky pretty fast.

### Chemical Analysis

Sections C71 to C99 are dedicated to the chemical analysis but leaving open which chemical element goes into which section. In practice there is a quasi industry standard on which chemical element goes into which field but still there are slight differencies between the producers.

### Processing of Mill Reports

As final observation we would like to add the fact that we talked to many people which would love an electronically processable certificate - they look basically at each certificate and enter some values manually into their system. And our rough estimate on certificates in Europe only is in magnitude of 100 million annually!

## Conclusions

Based on our observations we came to the following conclusions on EN 10168:

- It is a very open standard enabling users to add any kind of information which is produced in inspecting steel products.
- It defines a somehow precise definition for a very limited set of information.
- The industry established some common practices to provide certain information.
- The target platform for the standard is paper which is fine as paper (and nowadays PDF) are the only means to establish document character.
- There is a need for data in a machine readable format, confirmed by basic tools offered by some companies.

## Objectives

Based on our observations and conclusions we set ourselves the following objectives for the design of an electronic format:

- The target platform for the format are both machines and humans (in the forma of PDFs).
- The format must be developer friendly enabling easy implementation of both the creation of data in the format and reading it for further processing.
- The format should provide standards and guidelines for many data points.
- The format should flexible to integrate all kinds of information.
- The format should make it easy to render great looking PDF documents following established practices.

The data format in the next chapters tries to perform the balancing act to meet this to some extend contradictory objectives.

## JSON Definitions

### Product

::: details Product description

```json
"B02": {
  "description": "Steel name or number and additional symbols and the product specification for the steel.",
  "type": "object",
  "properties": {
    "ProductNorm": {
      "description": "The product norm designation",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "MaterialNorm": {
      "description": "The material norm(s)",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "MassNorm": {
      "description": "The mass norm(s)",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "SteelDesignation": {
      "description": "The steel designation(s)",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

:::

### Company

::: details Company definition

```json
"Company": {
  "type": "object",
  "properties": {
    "CompanyName": {
      "type": "string"
    },
    "Street": {
      "type": "string"
    },
    "ZipCode": {
      "type": "string"
    },
    "City": {
      "type": "string"
    },
    "Country": {
      "type": "string",
      "minLength": 2,
      "maxLength": 2
    },
    "VAT_Id": {
      "type": "string",
      "minLength": 9,
      "maxLength": 11
    },
    "Email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": [
    "CompanyName",
    "Street",
    "ZipCode",
    "City",
    "Country",
    "VAT_Id",
    "Email"
  ],
  "additionalProperties": false
}
```

:::

We require all defined elements: the element `Email` for obvious reasons, the element `VAT_Id` serves as global unique identifier of legal entities

#### Application of company definition in JSON Schema

```json
"A01": {
  "description": "The manufacturer's works which delivers the certificate along the product",
  "$ref": "#/definitions/Company"
}
```

#### Usage of company in JSON

```json
"A01": {
  "CompanyName": "Steel Factory",
  "Street": "Stahlstrasse 1",
  "ZipCode": "4010",
  "City": "Linz",
  "Country": "AT",
  "VAT_Id": "U12345678",
  "Email": "sbs.steelfactory@gmail.com"
}
```

### Chemical Analysis

#### Remarks

EN 10168 defines that in fields C71 to C92 the share of chemical elements has to be provided, but it does not map fields to chemical elements. In practice there is kind of quasi standard which element is put into which field. But a quasi standard doesn't work well for machines, so we suggest to provide the symbol for a chemical element for each field.

#### Definition of chemical elements in JSON Schema

::: details Chemical element definition

```json
"ChemicalElement": {
  "type": "object",
  "description": "The chemical elements of the product.",
  "properties": {
    "Symbol": {
      "description": "The symbol of the element",
      "type": "string"
    },
    "Actual": {
      "description": "The measured part of the element as absolute number.",
      "type": "number",
      "minimum": 0,
      "maximum": 1
    },
    "Minimum": {
      "description": "The minimum if defined by the product specification, otherwise the element must not provided.",
      "type": "number",
      "minimum": 0
    },
    "Maximum": {
      "description": "The maxium as defined by the product specification.",
      "type": "number",
      "maximum": 1
    }
  },
  "required": ["Symbol", "Actual"],
  "additionalProperties": false
}
```

:::

#### Application of chemical element definition in JSON Schema

EN 10168 assigns fields C71 to C92 to which we assign the definition for chemical elements above.

```json
"C71": {
  "description": "Share of element",
  "$ref": "#/definitions/ChemicalElement"
}
```

#### Usage of chemical element in JSON

```json
"C71": {
  "Symbol": "C",
  "Actual": 0.088,
  "Minimum": 0,
  "Maximum": 0.5
}
```

In case CEV is provided the solution is simply to use CEV as symbol as we do not restrict the length of the string for symbols to 2.

```json
"C72": {
  "Symbol": "CEV",
  "Actual": 0.088
}
```

Furthermore, only the elements `Symbol` and `Actual`are required as in many cases the minimum and maximum values for the product are not put on the certificate.

The advantages of this solution is that no party are

- no need to define an absolute standard on which element goes into which field - because, who defines it?
- no need to change the mapping of which element goes into which field - keep frictions low
- developers building integrations can simply lookup the values for each element they want to import into systems

### Measurements

#### Remarks

::: details Measurement definition

```json
"Measurement": {
  "type": "object",
  "description": "Measured values in a structured fashion for easy processing and rendering of data",
  "properties": {
    "Property": {
      "description": "The property measured",
      "type": "string"
    },
    "Value": {
      "description": "A measured or calculated value (e.g. mean of individual measurements).",
      "type": "number"
    },
    "Minimum": {
      "description": "The lower limit according product specification. If not provided it is 0.",
      "type": "number"
    },
    "Maximum": {
      "description": "The upper limit according product specification. If not provided it is ∞.",
      "type": "number"
    },
    "Unit": {
      "description": "The unit of value.",
      "type": "string"
    }
  },
  "required": ["Value"],
  "additionalProperties": false
}
```

:::

### Key Value Elements

EN 10168 implements flexibility by defining plenty of supplementary information fields to add any kind of information

::: details KeyValueObject definition

```json
"KeyValueObject": {
  "type": "object",
  "properties": {
    "Key": {
      "type": "string"
    },
    "Value": {
      "type": "string"
    },
    "Unit": {
      "type": "string"
    },
    "Interpretation": {
      "type": "string"
    }
  },
  "required": ["Key", "Value"],
  "additionalProperties": false
}
```

:::

#### Application of key value objects in JSON Schema

```json
"OtherMechanicalTests": {
  "type": "object",
  "propertyNames": {
    "pattern": "D[5-9][0-9]"
  },
  "patternProperties": {
    "": {
      "$ref": "#/definitions/KeyValueObject"
    }
  }
}
```

#### Usage of key value objects in other mechanical test

In this section typically a list of various tests is provided without any kind of result.

A use case is to provide information on hydrostatic tests including the test pressure.

```json
"NonDestructiveTest": {
  "D02": {
    "key": "Hydrostatic test - test pressure",
    "value": "7",
    "unit": "MPa/5s",
    "interpretation": "satisfactory"
  }
}
```

Another use case is to provide the result of transverse flat bend tests, which is basically boolean - it either complies or not according the product definition/standards.

```json
"OtherMechanicalTests": {
  "D51": {
    "key": "Transverse flat bend test",
    "value": "complies"
  }
}
```

#### Closing remark

Many steel mills use the field D51 to provide information on the Transverse flat bend test, but as stated earlier it is just a quasi standard, so do not rely on that.

### Supplementary Information

EN 10168 defines plenty of fields for any kind of information which could be possibly free text. Still we think that this information should be structured for easy reading and interpretation. There for we define supplementary information fiels as key value objects.

#### Application of key value objects to supplementary information fields

```json
"SupplementaryInformation": {
  "type": "object",
  "propertyNames": {
    "pattern": "A[1-9][0-9]"
  },
  "patternProperties": {
    "": {
      "$ref": "#/definitions/KeyValueObject"
    }
  }
}
```

#### Usage of supplementary information fields

```json
"SupplementaryInformation": {
  "A11": {
    "Key": "Delivery note number",
    "Value": "1583836"
  }
}
```
