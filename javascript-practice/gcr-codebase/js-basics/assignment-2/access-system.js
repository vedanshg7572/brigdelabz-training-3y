// Q5 - Boolean Logic Access System
// checking multiple security conditions for smart home access

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// all conditions must be true for the system to be secure
let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("===== Smart Home Security Check =====");
console.log(`Door Locked:     ${isDoorLocked}`);
console.log(`Window Closed:   ${isWindowClosed}`);
console.log(`Alarm On:        ${isAlarmOn}`);
console.log(`Owner Inside:    ${isOwnerInside}`);
console.log(`Status: ${isSecure ? "Secure ✅" : "Unsafe ❌"}`);

// testing with alarm off
console.log("\n--- Testing: Alarm turned off ---");
isAlarmOn = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(`Alarm On:        ${isAlarmOn}`);
console.log(`Status: ${isSecure ? "Secure ✅" : "Unsafe ❌"}`);

// testing with owner outside
console.log("\n--- Testing: Owner went outside ---");
isAlarmOn = true;
isOwnerInside = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(`Owner Inside:    ${isOwnerInside}`);
console.log(`Status: ${isSecure ? "Secure ✅" : "Unsafe ❌"}`);
