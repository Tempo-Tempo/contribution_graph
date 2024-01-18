export const getLevelGraph = (number) => {
   let result = '';
   if(number < 1) {
      return result = 'level_zero';
   } else if(number >= 1 && number <= 9) {
      return result = 'level_one';
   } else if(number >= 9 && number <= 19) {
      return result = 'level_two';
   } else if(number >= 19 && number <= 30) {
      return result = 'level_three';
   } else {
      return result = 'level_four';
   }
}
