
module.exports = function check(str, bracketsConfig) {
// const opBrack = ['(', '[', '{']
// const brackPair = {
//   [')']: '(',
//   [']']: '[',
//   ['}']: '{'
// }

// let  brack = {
//   circleBracket: 0,
//   squareBracket: 0,
//   squareState: true,
//   circleState: true,
// }



// const brackStates = [
//   "circle": {opened: ')', closed: '('},
//   "square": {...

// let brackState = {
//   opened: '',
//   closed: '',
//   state: true,
//   count: 0,
// }

// let arr = [{
//   opened: '(',
//   closed: ')',
//   state: true,
//   count: 0,
// }, {
//   opened: '[',
//   closed: ']',
//   state: true,
//   count: 0,
// }, {
//   opened: '{',
//   closed: '}',
//   state: true,
//   count: 0,
// }];



const arr = [];

for (let i = 0; i < bracketsConfig.length; i++) {
  arr[i] = {
    equals: bracketsConfig[i][0] === bracketsConfig[i][1],
    opened: bracketsConfig[i][0],
    closed: bracketsConfig[i][1],
    state: true,
    count: 0,
  }
}



 let equalConf = arr.filter( val => val.equals)
 console.log(equalConf);
 equalConf.forEach(el => {
  //  let strMod =  (' ' + str).slice(1);
  // console.log(el);
   let newStr = ''
   let int = 0
   for (let i = 0; i < str.length; i++) {
     newStr += str[i]
     if (el.opened === str[i]) {
       int++
       if (int === 2) {
        newStr +=  'z'
        int = 0
       }
     }
    //  console.log(newStr);
   }
   str = newStr.slice()
 })

for (let i = 0; i < str.length; i++) {
  if (str[i] === "z") {
    continue
  }
  const index = arr.findIndex(item => item.opened === str[i])
  let opened = false
  // console.log(index);
  if (index !== -1) {
    let config = arr[index]
    if (config.equals) {
      opened = str[i+1] !== 'z'
    } else {
      opened = true
    }
  }
  if (opened) {
    
    let brackets = arr[index]
    brackets.count += 1
    arr.forEach(el => el.state = true)
    brackets.state = false

  } else {
    
     const index = arr.findIndex(item => item.closed === str[i])
     console.log('els');
     if (arr.some((i, ind) =>  i.state === false && ind !== index)) {
       return false
     } else {
      console.log('23');
      arr[index].count -= 1
      arr[index].state = true
     }
  }
   if (arr.some(i => i.count < 0)) {
     return false
   }
   console.log(arr);
   console.log('-------------------');
}
  return arr.every(i => i.count === 0)
}

// console.log(check('([[()])]', [['(', ')'], ['[', ']']]));
// return brack.circleBracket === 0 &&  brack.squareBracket === 0

// if(openedCircle)
// myObj.circleBracket += 1

  // your solution




// if (brackets[item] === stack[stack.length - 1]) {
//   stack.pop();
// }



// for (let i = 0; i < str.length; i++) {
//   if (str[i] === '(') {
//     brack.circleBracket += 1;
//     brack.circleState = false;
//     brack.squareState = true; 
//   }
//   if (str[i] === ')') {
//     if (brack.squareState) {
//       brack.circleBracket -= 1;
//       brack.circleState = true;
//     } else {
//       return false;
//     }

//   }
//   if (str[i] === '[') {
//     brack.circleState = true;
//     brack.squareBracket += 1;
//     brack.squareState = false;
//   }
//   if (str[i] === ']') {
//     if (brack.circleState) {
//       brack.squareBracket -= 1;
//       brack.squareState = true;
//     } else {
//       return false;
//     }    
//   }
//   console.log(brack.circleBracket);
//   if (brack.circleBracket < 0) {
//     return false;
//   } 
//   if (brack.squareBracket < 0) {
//     return false;
//   } 