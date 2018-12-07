#DATABASE STRUCTURE

```bash
projectDAN
├── ADM
│   └── key
│       ├── ANMP
│       ├── ANP
│       └── ...other cols
├── ADM_HISTORY
│   └── key
│       └── ...other cols
├── CSO_APS_LENGTH
├── CSO_ADM_LENGTH
├── APS
│   └── key
│       ├── Activity Date
│       └── ...other cols
├── GENERAL
│   └── key
│       └── ...other cols
├── HISTORY
│   └── key
│       └── ...other cols
└── REFERENCE_KEYS
```

The databse is structured after the document tracker [excel sheet](https://docs.google.com/spreadsheets/d/1rYtyOLQ-qMM5_uDNukcNoTh5izZPqM5REO1IMNIydNY/edit#gid=1462715434)

## APS Node
This node refers to the CSO APS sheet within the document tracker, the leaves are the exact key value pairs from the sheet. The **Keys** Refer to the **Column Name**.

## CSO_APS_LENGTH
The CSO_APS_LENGTH refers to the length of the CSO APS documents within the database, this is for syncing the sheets with the databse quicker so the app doesnt have to pull every data from the sheets over and over.

## REFERENCE_KEYS
Since the CSO_APS sheet is updated first before the other sheets of the document tracker, This is where we get the ID of the documents to avoid redundancy and the IDs would be used to reference other nodes in the databse later on.