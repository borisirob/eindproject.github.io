function getRandomNumber() {
  let number = Math.floor(Math.random()* 9 + 1);
  if (number >= 1 && number < 3) {
  	alert('geef buurt door');
 }
  if (number >= 3 && number < 5) {
    alert('neem een slok');
  }
  if (number >= 5 && number < 7){
  	alert('bom');
  }
   if (number >= 7 && number < 9){
  	alert('veilig');
  }
}
