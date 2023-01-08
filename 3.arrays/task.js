// Task 1

function compareArrays(arr1, arr2) {
    if (arr1.length > arr2.length || arr2.length > arr1.length) return false;
    return arr1.every((el, idx) => el === arr2[idx]);
  }
  
  // Task 2
  
  function getUsersNamesInAgeRange(users = [], gender = "мужской") {
    const mFlag = "мужской";
    const wFlag = "женский";
    if (!users.length || (gender !== mFlag && gender !== wFlag)) return 0;
    const filteredArr = users.filter((user) => {
      return user.gender === gender;
    });
    return (
      filteredArr.reduce((oldValue, nowValue) => oldValue + nowValue.age, 0) / filteredArr.length
    );
  }
  