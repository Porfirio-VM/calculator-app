// Buttons of the calculator
export const numbers = [0,1,2,3,4,5,6,7,8,9];
export const functs = ['DEL', '+', '-', 'x','.','/','RESET','=']

//Calculator operations
export const operations = {
  'x': (a, b) => { return a * b },
  '-': (a, b) => { return a - b },
  '+': (a, b) => { return a + b },
  '/': (a, b) => {
      if (a === 0 & b === 0) {
          return 'Undefined result';
      }else if(b === 0){
        return 'Cannot divide into zero'
      } else {
          return a / b;
      }
  },
  '.': (a) => { return a.includes('.') ? a : a + '.' },
  'DEL': (a) => {
      const input = String(a);
      // Check if the input is empty (length is 0)
      if (input.length === 0) {
          return '0';
      } else {
          return input.length === 1 ? '0' : input.slice(0, -1);
      }
  }
}
