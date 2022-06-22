// calling shownotes to show the notes (if any) from local storage
showNote();



// ========= EVENT LISTENER FOR ADD A NOTE ========
let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function (e) {

  // acessing notes textarea and title inputs
  let addNote = document.getElementById("note-content");
  let addTitle = document.getElementById("note-title");
  
  // avoiding empty notes to be added
  if(addNote.value==""){
    alert('Please write something to be added as notes!!!');
    return;
  }

  // accessing Local Storage for checking if any added notes
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  // object containing title and note values 
  let myObj = {
    title: addTitle.value,
    text: addNote.value
  }
  // push notes textarea and title values to notes object
  notesObj.push(myObj);
  // set the localStorage with notes array in "notes"
  localStorage.setItem("notes", JSON.stringify(notesObj));

  // empty the note textarea & title after adding notes to local Storage
  addNote.value = "";
  addTitle.value = "";

  // displaying all added notes to screen
  showNote();
});



// ======= FUNCTION TO SHOW ELEMENTS FROM LOCAL STORAGE ========
function showNote() {
 
  // accessing notes from localStorage
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  // wrting html & css code using template literals
  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="note-box added-notes">
                <h4 class="note-title">${element.title}</h4>
                <p class="note-content">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn">Delete Note</button>
             </div>`;
  });

  // displaying all notes by manipulating HTML code with id "notes"
  let notesElem = document.getElementById('notes');
  if(notesObj.length != 0){
      notesElem.innerHTML = html;
  }
  else{ // if no notes are added yet
      notesElem.innerHTML = `<p style="margin: 20px auto; font-size: 1.25rem;">Nothing to show!! Use "Add Note" to add your notes</p>`;
  }
}



// ======== FUNCTION TO DELETE A NOTE ========
function deleteNote(index) {

    // accessing notes from localStorage
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    // removing "index" note from notes array
    notesObj.splice(index, 1);

    // updating local storage after deletion
    localStorage.setItem("notes", JSON.stringify(notesObj));

    // calling show Notes after deleting note
    showNote();
}



// ======== EVENT LISTENER FOR SEARCH A NOTE ========
let search = document.getElementById('search-txt');

search.addEventListener('input', function() {

  let inputVal = search.value.toLowerCase();

  // accessing all added notes elements
  let allNotes = document.getElementsByClassName('added-notes');

  Array.from(allNotes).forEach( element => {
    
    // accessing the note content of each added note boxes
    let noteContent = element.getElementsByTagName('p')[0].innerText.toLowerCase();
    
    // if notecontent matches display otherwise not
    if(noteContent.includes(inputVal)){
      element.style.display = "block";
    }else{
      element.style.display = "none";
    }
  }); 
})



/* FURTHER FEATURES CAN BE ADDED:
1. Add Title
2. Mark a note as Impt
3. Separate notes by User (Custom Folder)
4. Sync and host to web server
*/