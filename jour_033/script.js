const noteContainer = document.querySelector('.note');
const addNoteButton = document.querySelector('.addNote');
let notes = [];

addNoteButton.addEventListener('click', () => {
  const zoneNote = document.createElement('div');
  zoneNote.classList.add('zonenote');

  zoneNote.innerHTML = `
    <div class="symbole">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-trash delete"></i>
    </div>
    <textarea rows="4" cols="50"></textarea>
  `;

  noteContainer.appendChild(zoneNote);

  const deleteButton = zoneNote.querySelector('.delete');
  const editButton = zoneNote.querySelector('.edit');
  const textarea = zoneNote.querySelector('textarea');

  notes.push({
    element: zoneNote,
    deleteButton,
    editButton,
    textarea,
  });

  deleteButton.addEventListener('click', () => {
    const index = notes.findIndex(note => note.element === zoneNote);
    if (index !== -1) {
      notes.splice(index, 1);
      zoneNote.remove();
    }
  });

  editButton.addEventListener('click', () => {
    const index = notes.findIndex(note => note.element === zoneNote);
    if (index !== -1) {
      notes[index].textarea.disabled = !notes[index].textarea.disabled;
    }
  })})