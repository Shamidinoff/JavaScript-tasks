// TASK 1

/* function ucFirst(str) {
let newStr = str[0].toUpperCase() + str.slice(1);
return newStr;
};

console.log(ucFirst("free"));  //Rezultat budet - Free */

// TASK 2


/* function checkSpam(str) {
    str = str.toLowerCase();
  
    if (str.includes('badword') || str.includes('xxx')) {
      return true;
    } else {
      return false;
    }
  };

  console.log(checkSpam("xxx")); */

  // TASK 3

  /* function reverseString(str) {
    let reversedStr = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
  
    return reversedStr;
  };

  console.log(reverseString('привет Женя')); */

  // TASK 4

  /* let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
  ];

  function extractStationInfo(stations) {
    let stationInfo = [];
  
      for (let i = 0; i < stations.length; i++) {
      let station = stations[i];
      
      let code = station.slice(0, 3);
  
      let semicolonIndex = station.indexOf(';');
      
      let name = station.slice(semicolonIndex + 1).trim();
      
      stationInfo.push(code + ': ' + name);
    }
  
    return stationInfo;
  };

  let stationInfo = extractStationInfo(stations);

  console.log(stationInfo); */

  
// TASK 5

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  };
  
  
  console.log(unique(strings)); 