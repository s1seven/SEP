# S1Seven Schemas

::: warning
This specification is still on Draft state
:::

[[toc]]

## Preambule

To create certificates which constitutes digital representations following the needs and standards of different industries, S1Seven has created several JSON schemas.

Those schemas may be revised and improved, meaning that many certificates with different versions will need to be proceeded by S1Seven applications / services.

### EN10168

The EN10168 schema is an implementation of the European Union steel standards of the same name.

[Repository](https://github.com/s1seven/EN10168-schemas)

::: tip
This example is based on `v0.0.2`
:::

::: details Example EN10168 Certificate

```json
{
  "RefSchemaUrl": "https://schemas.en10204.io/en10168-schemas/v0.0.2/schema.json",
  "DocumentMetadata": {
    "id": "f73f139c-66f3-4746-a23f-e22e726393e2",
    "version": 1,
    "state": "draft"
  },
  "Certificate": {
    "CertificateLanguages": ["EN", "FR"],
    "CommercialTransaction": {
      "A01": {
        "CompanyName": "voestalpine Krems GmbH",
        "Street": "Schmidhüttenstraße 5",
        "ZipCode": "3500",
        "City": "Krems an der Donau",
        "Country": "AT",
        "Email": "sbs.steelfactory@gmail.com",
        "VAT_Id": "AT123456789"
      },
      "A02": "APZ EN 10204 3.1",
      "A03": "69523/000",
      "A04": "data:image/png;base64,iv....",
      "A05": "Fabrikproduktionskontrolle",
      "A06": {
        "CompanyName": "KÖNIG STAHL SP. Z O.O.",
        "Street": "UL. CYBERNETYKI 10",
        "ZipCode": "02-677",
        "City": "WARSZAWA",
        "Country": "PL",
        "Email": "sbs.steeltrader@gmail.com",
        "VAT_Id": "PL123456789"
      },
      "A07": "0334/2019/ZZS",
      "A08": "958722",
      "A97": 1,
      "A98": "1583836"
    },
    "ProductDescription": {
      "B01": "Hohlprofil",
      "B02": {
        "SteelDesignation": ["S275J2H"],
        "ProductNorm": ["EN10219-1:2006"]
      },
      "B03": "Ausführung lt. EN 10219 Teil 1+2 /--/",
      "B04": "ungebeizt",
      "B06": "VHP200/150X 6.00",
      "B07": "7282841",
      "B08": 16.0,
      "B09": {
        "Form": "RectangularTube",
        "Width": 200.0,
        "Height": 150.0,
        "WallThickness": 6.0,
        "Unit": "mm"
      },
      "B10": {
        "Property": "Length",
        "Value": 12000.0,
        "Unit": "mm"
      },
      "B13": {
        "Property": "Actual mass",
        "Value": 5739.0,
        "Unit": "kg"
      }
    },
    "Inspection": {
      "C00": "175508",
      "C02": "0001 längs",
      "C03": "-20 Celsius",
      "SupplementaryInformation": {
        "C04": {
          "Key": "B07",
          "Value": "1607219/0001_20181023_1529",
          "Type": "string"
        }
      },
      "ChemicalComposition": {
        "C71": {
          "Actual": 0.0015,
          "Symbol": "C"
        },
        "C72": {
          "Actual": 0.00005,
          "Symbol": "Si"
        },
        "C73": {
          "Actual": 0.01,
          "Symbol": "Mn"
        },
        "C74": {
          "Actual": 0.00014,
          "Symbol": "P"
        },
        "C75": {
          "Actual": 0.00007,
          "Symbol": "S"
        },
        "C76": {
          "Actual": 0.00041,
          "Symbol": "Al"
        },
        "C77": {
          "Actual": 0.0002,
          "Symbol": "Cr"
        },
        "C78": {
          "Actual": 0.00009,
          "Symbol": "Ni"
        },
        "C79": {
          "Actual": 0.00002,
          "Symbol": "Mo"
        },
        "C80": {
          "Actual": 0.0001,
          "Symbol": "Cu"
        },
        "C81": {
          "Actual": 0.00002,
          "Symbol": "V"
        },
        "C82": {
          "Actual": 0.00001,
          "Symbol": "Ti"
        },
        "C85": {
          "Actual": 0.000047,
          "Symbol": "N"
        },
        "C86": {
          "Actual": 0.0000001,
          "Symbol": "B"
        },
        "C92": {
          "Actual": 0.003227,
          "Symbol": "CEV"
        }
      },
      "TensileTest": {
        "C11": {
          "Property": "Streckgrenze ReH/RP0,2",
          "Value": 377.0,
          "Unit": "MPa"
        },
        "C12": {
          "Property": "Zugfestigkeit Rm",
          "Value": 456.0,
          "Unit": "MPa"
        },
        "C13": {
          "Property": "Bruchdehnung A5/A80",
          "Value": 29.7,
          "Unit": "%"
        },
        "SupplementaryInformation": {
          "C14": {
            "Key": "Re/Rm",
            "Value": "0,83"
          },
          "C15": {
            "Key": "B07",
            "Value": "1607219/0001_20181023_1529",
            "Interpretation": "Coilcharge/Probenummer"
          }
        }
      },
      "NotchedBarImpactTest": {
        "C40": "0001 längs",
        "C41": {
          "Property": "Width",
          "Value": 5.0,
          "Unit": "mm"
        },
        "C42": [
          {
            "Value": 71,
            "Unit": "J"
          },
          {
            "Value": 84,
            "Unit": "J"
          },
          {
            "Value": 85,
            "Unit": "J"
          }
        ],
        "C43": {
          "Value": 80,
          "Unit": "J"
        },
        "SupplementaryInformation": {
          "C44": {
            "Key": "B07",
            "Value": "1607219/0001_20181023_1529",
            "Interpretation": "Coilcharge/Probenummer"
          }
        }
      }
    },
    "OtherTests": {
      "OtherProductTests": {
        "D51": {
          "Key": "Querfaltversuch",
          "Value": "entspricht"
        },
        "D52": {
          "Key": "Schweissnahtprüfung",
          "Value": "100 % Wirbelstrom geprüft"
        },
        "D99": {
          "Key": "B07",
          "Value": "0001660342",
          "Interpretation": "Fertigungscharge"
        }
      }
    },
    "Validation": {
      "Z01": "Es wird bestätigt, dass die Prüfungen den vereinbarten Lieferbindungen entsprechen und die Leistungserklärung erfüllen. Diese Werkzeug wurde von einer DV-Anlage erstellt und ist ohne Unterschrift gültig.",
      "Z02": "2018-10-23T09:30:10-01:00",
      "Z03": "HINDINGER +43/50304/14-504",
      "Z04": {
        "NotifiedBodyNumber": "0780",
        "DoCYear": "18",
        "DoCNumber": "0780-CPD-72012",
        "CE_Image": "data:image/png;base64,iV..."
      }
    }
  }
}
```

:::

### E-CoC

The e-CoC.schema.json is a reimplementation of [e-coc.org schema](https://e-coc.org/schema/v1.0.0/e-coc.json).

[Repository](https://github.com/s1seven/E-CoC-schemas)

::: tip
This example is based on `v0.0.2-2`
:::

::: details Example E-CoC Certificate

```json
{
  "Id": "89172671",
  "Uuid": "c42cf70d-042e-44e6-a918-02e57aa69982",
  "URL": "",
  "RefSchemaUrl": "https://schemas.en10204.io/e-coc-schemas/v0.0.2-2/schema.json",
  "EcocData": {
    "DataLevel": "C",
    "Data": {
      "EcocType": "MaterialCertificate3.1",
      "Parties": [
        {
          "PartyNo": 1,
          "PartyName": "Westdeutscher Metall-Handel GmbH",
          "PartyIdentifier": [
            {
              "NameOfIdentifier": "CageCode",
              "ValueOfIdentifier": "CA433"
            }
          ],
          "PartyAddress": {
            "StreetAddress": "Manderscheidtstr. 76-78",
            "City": "Essen",
            "PostalCode": "45141",
            "CountryCode": "DE",
            "State": "",
            "AddAddressLine": ""
          },
          "PartyRole": "Recipient",
          "AdditionalPartyProperties": []
        },
        {
          "PartyNo": 2,
          "PartyName": "AMAG Rolling GmbH",
          "PartyIdentifier": [
            {
              "NameOfIdentifier": "CageCode",
              "ValueOfIdentifier": "1906N"
            },
            {
              "NameOfIdentifier": "VATID",
              "ValueOfIdentifier": "ATU37043203"
            }
          ],
          "PartyAddress": {
            "StreetAddress": "Lamprechtshausener Str. 61",
            "City": "Ranshofen",
            "PostalCode": "5282",
            "CountryCode": "AT",
            "State": "",
            "AddAddressLine": ""
          },
          "PartyRole": "Manufacturer"
        }
      ],
      "BusinessRef": {
        "StandardReferences": [
          {
            "Name": "OrderNo",
            "Value": "686901"
          },
          {
            "Name": "OrderDate",
            "Value": "2020-01-27"
          },
          {
            "Name": "DeliveryNote",
            "Value": "89172671"
          },
          {
            "Name": "DeliveryDate",
            "Value": "2020-01-28"
          }
        ],
        "AdditionalReferences": [
          {
            "Name": "OrderConfirmation",
            "Value": ["179981"]
          },
          {
            "Name": "OrderConfirmationDate",
            "Value": ["2020-01-27"]
          }
        ]
      },
      "NormativeRef": [
        "ISO 9001",
        "IATF 16949",
        "EN/AS 9100",
        "ISO 14001",
        "ISO 50001",
        "NADCAP"
      ],
      "ObjectOfDeclaration": [
        {
          "ObjectId": "1",
          "ObjectName": "AMAG TopPlate Gussplatte gefräst",
          "ObjectType": "Material",
          "Quantities": [
            {
              "Amount": 1096,
              "Unit": "Kg"
            },
            {
              "Amount": 6,
              "Unit": "Pcs"
            }
          ],
          "Dimensions": [
            {
              "Direction": "Length",
              "DimValue": 3020,
              "DimUnit": "mm"
            },
            {
              "Direction": "Width",
              "DimValue": 1520,
              "DimUnit": "mm"
            },
            {
              "Direction": "Height",
              "DimValue": 15,
              "DimUnit": "mm"
            }
          ],
          "NormativeRef": [],
          "ObjectProperties": [
            {
              "Name": "BatchNo",
              "Value": ["46423/02"]
            },
            {
              "Name": "CastNo",
              "Value": ["01/0004999/9"]
            },
            {
              "Name": "PackageNo",
              "Value": ["1799810001"]
            },
            {
              "Name": "Material",
              "Value": ["5083"]
            },
            {
              "Name": "Temper",
              "Value": ["GH"]
            },
            {
              "Name": "PackageNo",
              "Value": ["1799810001"]
            },
            {
              "Name": "Form",
              "Value": ["Platten (gesägt/gefräst)"]
            }
          ],
          "AdditionalObjectProperties": []
        },
        {
          "ObjectId": "2",
          "ObjectName": "AMAG TopPlate Gussplatte gefräst",
          "ObjectType": "Material",
          "Quantities": [
            {
              "Amount": 1093,
              "Unit": "Kg"
            },
            {
              "Amount": 6,
              "Unit": "Pcs"
            }
          ],
          "Dimensions": [
            {
              "Direction": "Length",
              "DimValue": 3020,
              "DimUnit": "mm"
            },
            {
              "Direction": "Width",
              "DimValue": 1520,
              "DimUnit": "mm"
            },
            {
              "Direction": "Height",
              "DimValue": 15,
              "DimUnit": "mm"
            }
          ],
          "NormativeRef": [],
          "ObjectProperties": [
            {
              "Name": "BatchNo",
              "Value": ["46423/01"]
            },
            {
              "Name": "CastNo",
              "Value": ["01/0005004/9"]
            },
            {
              "Name": "PackageNo",
              "Value": ["1799810002"]
            },
            {
              "Name": "Material",
              "Value": ["5083"]
            },
            {
              "Name": "Temper",
              "Value": ["GH"]
            },
            {
              "Name": "PackageNo",
              "Value": ["1799810002"]
            },
            {
              "Name": "Form",
              "Value": ["Platten (gesägt/gefräst)"]
            }
          ],
          "AdditionalObjectProperties": []
        }
      ]
    },
    "Results": {
      "MaterialCertification": [
        {
          "NameOfTest": "ChemicalComposition",
          "TestStandardOrMethod": "",
          "NumberOfTests": 1,
          "RefObjectIDs": ["1"],
          "SampleNumber": "",
          "SamplePositionAcrossWidth": "",
          "SamplePositionAlongLength": "",
          "SamplePositionThroughThickness": "",
          "TestOK": true,
          "TestValues": [
            {
              "ValueName": "Si",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.27",
              "ActualTo": "0.27"
            },
            {
              "ValueName": "Fe",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.36",
              "ActualTo": "0.36"
            },
            {
              "ValueName": "Cu",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.07",
              "ActualTo": "0.07"
            },
            {
              "ValueName": "Mn",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.48",
              "ActualTo": "0.48"
            },
            {
              "ValueName": "Mg",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "4.68",
              "ActualTo": "4.68"
            },
            {
              "ValueName": "Cr",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.07",
              "ActualTo": "0.07"
            },
            {
              "ValueName": "Zn",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.10",
              "ActualTo": "0.10"
            },
            {
              "ValueName": "Ti",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.03",
              "ActualTo": "0.03"
            },
            {
              "ValueName": "OtherSingle",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.02",
              "ActualTo": "0.02"
            },
            {
              "ValueName": "OtherSum",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "0.04",
              "ActualTo": "0.04"
            }
          ]
        },
        {
          "NameOfTest": "ChemicalComposition weight proportion (OES)",
          "TestStandardOrMethod": "",
          "NumberOfTests": 1,
          "RefObjectIDs": ["2"],
          "SampleNumber": "",
          "SamplePositionAcrossWidth": "",
          "SamplePositionAlongLength": "",
          "SamplePositionThroughThickness": "",
          "TestOK": true,
          "TestValues": [
            {
              "ValueName": "Si",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "0.40",
              "ActualFrom": "0.24",
              "ActualTo": "0.24"
            },
            {
              "ValueName": "Fe",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "0.40",
              "ActualFrom": "0.37",
              "ActualTo": "0.37"
            },
            {
              "ValueName": "Cu",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "0.1",
              "ActualFrom": "0.06",
              "ActualTo": "0.06"
            },
            {
              "ValueName": "Mn",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "0.4",
              "SpecMax": "1.0",
              "ActualFrom": "0.50",
              "ActualTo": "0.50"
            },
            {
              "ValueName": "Mg",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "4.0",
              "SpecMax": "4.9",
              "ActualFrom": "4.8",
              "ActualTo": "4.8"
            },
            {
              "ValueName": "Cr",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "0.05",
              "SpecMax": "0.25",
              "ActualFrom": "0.07",
              "ActualTo": "0.07"
            },
            {
              "ValueName": "Zn",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "0.25",
              "ActualFrom": "0.09",
              "ActualTo": "0.09"
            },
            {
              "ValueName": "Ti",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "ß.15",
              "ActualFrom": "0.03",
              "ActualTo": "0.03"
            },
            {
              "ValueName": "OtherSingle",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "0.05",
              "ActualFrom": "0.01",
              "ActualTo": "0.01"
            },
            {
              "ValueName": "OtherSum",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "0.15",
              "ActualFrom": "0.04",
              "ActualTo": "0.04"
            }
          ]
        },
        {
          "NameOfTest": "TensileTest",
          "TestStandardOrMethod": "",
          "NumberOfTests": 144,
          "RefObjectIDs": ["1"],
          "SampleNumber": "2",
          "SamplePositionAcrossWidth": "",
          "SamplePositionAlongLength": "true",
          "SamplePositionThroughThickness": "",
          "TestOK": true,
          "TestValues": [
            {
              "ValueName": "Rm",
              "Unit": "MPa",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "237",
              "ActualTo": "253"
            },
            {
              "ValueName": "Rp0.2",
              "Unit": "MPa",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "123",
              "ActualTo": "126"
            },
            {
              "ValueName": "A5",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "8",
              "ActualTo": "12"
            }
          ]
        },
        {
          "NameOfTest": "TensileTest",
          "TestStandardOrMethod": "",
          "NumberOfTests": 144,
          "RefObjectIDs": ["2"],
          "SampleNumber": "2",
          "SamplePositionAcrossWidth": "",
          "SamplePositionAlongLength": "true",
          "SamplePositionThroughThickness": "",
          "TestOK": true,
          "TestValues": [
            {
              "ValueName": "Rm",
              "Unit": "MPa",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "239",
              "ActualTo": "254"
            },
            {
              "ValueName": "Rp0.2",
              "Unit": "MPa",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "118",
              "ActualTo": "126"
            },
            {
              "ValueName": "A5",
              "Unit": "percent",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "9",
              "ActualTo": "12"
            }
          ]
        },
        {
          "NameOfTest": "GrainSize",
          "TestStandardOrMethod": "ASTM",
          "NumberOfTests": 1,
          "RefObjectIDs": ["1"],
          "SampleNumber": "1",
          "SamplePositionAcrossWidth": "",
          "SamplePositionAlongLength": "",
          "SamplePositionThroughThickness": "",
          "TestOK": true,
          "TestValues": [
            {
              "ValueName": "GM_K",
              "Unit": "mum",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "127",
              "ActualTo": "127"
            }
          ]
        },
        {
          "NameOfTest": "GrainSize",
          "TestStandardOrMethod": "ASTM",
          "NumberOfTests": 1,
          "RefObjectIDs": ["2"],
          "SampleNumber": "1",
          "SamplePositionAcrossWidth": "",
          "SamplePositionAlongLength": "",
          "SamplePositionThroughThickness": "",
          "TestOK": true,
          "TestValues": [
            {
              "ValueName": "GM_K",
              "Unit": "mum",
              "TypeOfValue": "number",
              "SpecMin": "",
              "SpecMax": "",
              "ActualFrom": "107",
              "ActualTo": "107"
            }
          ]
        }
      ]
    }
  },
  "Declaration": {
    "DateOfIssue": "2020-01-28",
    "Concessions": ["", ""],
    "remarks": [
      "Herstellerland Österreich",
      "The Goods are of Austrian origin",
      "Technical Spec.:",
      "AMAG TopPlate Gussplatte gefräst, Rev.07, September 2015"
    ],
    "ConformityStatus": "True",
    "Signature": {
      "SignerName": "Josef Klampfer",
      "SignerPosition": "Factory specialist",
      "SignatureStamp": "ABCDEFGHIJKLMNOPQRSTUVWXYZA",
      "SignatureDate": "2020-01-28"
    },
    "CocConfirmationText": [
      "Es wird bestätigt, dass die Lieferung geprüft wurde und den Vereinbarungen bei der Bestellung entspricht.",
      "We hereby certify that the material described above has been tested and complies with the terms of the order contract."
    ]
  },
  "Attachment": {
    "FileName": "AMAG EN 10204 3.1.pdf",
    "FileType": "application/pdf",
    "Encoding": "base64",
    "Data": "JVBERi0xLjQNCiWio4****",
    "HashAlgorithm": "MD5",
    "HashValue": "7D931C43B44AF59CBF0B68C882452BB7"
  }
}
```

:::

## Problem

Applications and services in S1Seven ecosystem requires to access those schemas for reasons like :

- certificate creation
- certificate validation
- rendering in HTML or PDF of a certificate

If thoses schemas and functionalities are directly embedded inside a project, it creates a tight coupling and once a version changes it becomes complicated to update every impacted modules and tests. Plus it does not solve the problem of handling several versions with backward compatibility.

## Proposed Enhancement

### Independent

Each schema is contained in its own repository, along with its static dependencies such as translations, templates, scripts ...

### Reference

All schemas share a `RefSchemaUrl` property, aiming to keep the reference of which schema was used to generate a certificate.

It will be used after the creation of the certificate to :

- validate the certificate object
- generate an HTML / PDF file

### Versioning

They are versioned by following the semantic versioning system.

After a release is created/updated/deleted, the Git repository triggers a webhook on an external service - [schemas-deploy] - that stores the schema and its dependencies.

Those files are available on an url formatted like `<base-url>/<schema-repo-to-lowercase>/v<version>/<filename>`.

::: tip
Currently the schemas are served at https://schemas.en10204.io/
:::

### Tools

A specific library - [schema-tools] - handles common use case of certificates manipulation and is responsible for fetching / caching the right schemas and its dependencies.

This library will also handle tests of multiple schemas / certificates versions to ensure consistency in time.

### Workflow

```
        +------------------------------------------------+
        |    Fetch releases                              |
        |                                                |
        |                                      +---------^--------+
  +-----^--------+   +-----------+  Github     |                  |  
  | X-schemas    |   |           |  webhooks   | [schemas-deploy] | 
  | Y-schemas    +---> released  |------------->    Server        | 
  | Z-schemas    |   |           |             |                  | 
  +--------------+   +-----------+             |                  |   
                                               +----------+-------+ 
                                                          | Fetch
                                                          | Schemas &
  +-------------+               +------------------+      | Dependencies
  | X-Service   | Certificate   |                  |      |
  | Y-Service   <--------------->  [schema-tools]  <------+
  | Z-Service   | Validation,   |                  |
  +-------------+ Rendering ... +------------------+
      
```

## Benefits

- Each application can focus on their main purpose and rely on [schema-tools] to handle certificates

- One single point of maintenance for certificate related operations

- Clear versioning of the schemas

[schemas-deploy]: https://github.com/s1seven/schemas-deploy
[schema-tools]: https://github.com/s1seven/schema-tools
