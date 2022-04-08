let textbox = document.getElementById('textbox');

//==== FUNCTION TO COUNT 
textbox.addEventListener('input', function() {
   let text = this.value;

   // fetching and displaying word length
   let words = text.trim().split(" ");
   let filterList = words.filter(function(elem) {
       return elem != "";
   })
   document.getElementById('word').innerHTML = filterList.length;

   // fetching and displaying character length 
   document.getElementById('char').innerHTML = text.length;   
});