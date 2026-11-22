// Q2 - Multi-Type Data Summary
// checking types of different variables and printing a report

let userName = "Vedansh";
let userAge = 20;
let isActive = true;
let hobbies = ["coding", "reading", "gaming"];
let userProfile = { city: "Mumbai", country: "India" };
let deletedRecord = null;
let pendingData = undefined;

// building the table data
let report = {
    userName:      { value: userName,      type: typeof userName },
    userAge:       { value: userAge,       type: typeof userAge },
    isActive:      { value: isActive,      type: typeof isActive },
    hobbies:       { value: hobbies,       type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    userProfile:   { value: JSON.stringify(userProfile), type: typeof userProfile },
    deletedRecord: { value: deletedRecord, type: typeof deletedRecord },
    pendingData:   { value: pendingData,   type: typeof pendingData },
};

console.table(report);
