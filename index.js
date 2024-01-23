/* Your Code Here */

function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Example usage:
  const employeeData = ["John", "Doe", "Manager", 20];
  const employeeRecord = createEmployeeRecord(employeeData);
  console.log(employeeRecord);

  // Assuming createEmployeeRecord function from the previous example

function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(createEmployeeRecord);
  }
  
  // Example usage:
  const employeeDataArray = [
    ["John", "Doe", "Manager", 20],
    ["Jane", "Smith", "Developer", 25]
  ];
  
  const employeeRecords = createEmployeeRecords(employeeDataArray);
  console.log(employeeRecords);


  // Assuming createEmployeeRecord function from the previous example

function createTimeInEvent(employeeRecord, dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    const [hour, minute] = time.split(":");
    
    const timeInEvent = {
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
      minute: parseInt(minute, 10)
    };
  
    employeeRecord.timeInEvents.push(timeInEvent);
    return employeeRecord;
  }
  
  // Example usage:
//   const employeeData = ["John", "Doe", "Manager", 20];
//   const employeeRecord = createEmployeeRecord(employeeData);
  
  const dateTimeString = "2024-01-18 09:00";
  const updatedEmployeeRecord = createTimeInEvent(employeeRecord, dateTimeString);
  
  console.log(updatedEmployeeRecord);
  
  // Assuming createEmployeeRecord and createTimeInEvent functions from previous examples

function createTimeOutEvent(employeeRecord, dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    const [hour, minute] = time.split(":");
    
    const timeOutEvent = {
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
      minute: parseInt(minute, 10)
    };
  
    employeeRecord.timeOutEvents.push(timeOutEvent);
    return employeeRecord;
  }
  
  // Example usage:
//   const employeeData = ["John", "Doe", "Manager", 20];
//   const employeeRecord = createEmployeeRecord(employeeData);
  
//   const dateTimeString = "2024-01-18 17:00";
//   const updatedEmployeeRecord = createTimeOutEvent(employeeRecord, dateTimeString);
  
  console.log(updatedEmployeeRecord);
  
  

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

