function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];

    function sortNumbers(numbers) {
      let bigEven = [];
      let smallOdd = [];
      let other = [];

      numbers.forEach(function(number) {
        if (number > 10 && number % 2 === 0) {
          bigEven.push(number);
        } else if (number < 10 && number % 2 !== 0) {
          smallOdd.push(number);
        } else {
          other.push(number);
        }
      });

      return {
        bigEven: bigEven,
        smallOdd: smallOdd,
        other: other
      };
    }

    const result = sortNumbers(numbers);
    console.log(result);
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
  
  }
  uppg10();
  
  module.exports = { uppg10 };
  