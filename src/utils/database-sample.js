
/*
     this file acts as a temporary database while firebase is not going to be used
 */
export const documents = {
    1: {
        LastEdited: "13/09/2018, 5:43:48 PM",   // Changes
        StudentGroup: "Council of Student Organizations (CSO)",
        TieUpOrgs: ["CSG", "SPRINT", "PTS"],
        Term: "Term 1",
        SubmissionTypeHistory:["Initial Submission"],
        ActivityTyle: "CCS Teachers' Week 2018",
        ActivityDate: "Multiple Dates",
        Dates: "09/24/2018 - 09/28/2018",
        NatureOfActivity: "Lasallian Formation/Spiritual Growth",
        TypeOfActivity: "Tie-Up Activity (Internal/External)",
        ActivityTime: "0900-1700",
        ActivityVenu: "Gokongwei Lobby; facebook.com/dlsuccstm2018; tinyurl.com/LSCS1819-Letters-For-Your-Professors; facebook.com (#PROFessYourLove)",
        // SubmittedBy: "Sean Paragas",
        // Contact: "9179013836",
        // Email: "sean_paragas@dlsu.edu.ph",
        // ReceivedDate: "",
        // Stage: "Completed",
        // DateChecked: "",
        // FiledDate: "",
        // Status: "",
        // Remarks: "",
        versions: {
            APS:{

            },
            APSapproved:{

            },

        },
        preacts_details: {
            Status: "Late Approved",
            FileDate: "2018/09/22",
            SubmittedBy: "Ivan Dichaves",
            Contact: "9275958817",
            Email: "ivan_dichaves@dlsu.edu.ph",
            DateChecked: "2018/09/23",
            Remarks: "Mama mo"
        },
         postacts_details: {
            Status: "Early Incomplete",
            FileDate: "2018/09/25",
            Enp: 45,
            Anp: 40,
            Enmp: 20,
            Anmp: 12,
            SubmittedBy: "Gregory Petrola",
            Contact: "9178458499",
            Email: "gregory_petrola@dlsu.edu.ph",
            DateChecked: "2018/09/26",
            Remarks: "Mama mo"
        },        
         orgres_details : [
            { // initial state
                UpdateDateTime: "2000/01/01", 
                Q1: [0, 0, 0, 0, 0], // score 1, 2, 3, 4, 5
                Q2: [0, 0, 0, 0, 0],
                Q3: [0, 0, 0, 0, 0],
                Q4: [0, 0, 0, 0, 0],
                Q5: [0, 0, 0, 0, 0]
            },
            { // updated state
                UpdateDateTime: "2018/11/02",
                Q1: [2, 5, 8, 14, 9], // score 1, 2, 3, 4, 5
                Q2: [2, 5, 8, 14, 9],
                Q3: [2, 5, 8, 14, 9],
                Q4: [2, 5, 8, 14, 9],
                Q5: [2, 5, 8, 14, 9]
            }
        ]    
    }
}

 export const NumberOfRows = 5;