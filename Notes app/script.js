    const addbtn = document.getElementById('add');

    
    addbtn.addEventListener('click',() =>addnewnote()); 

    function addnewnote(text) {
        text= text ?? '';
        const note = document.createElement('div')
        note.classList.add('note');
        note.innerHTML = `

         <div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
        </div>

         
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}">${text}</textarea>
    
    `
            const editbtn =  note.querySelector('.edit');
          const deletebtn = note.querySelector('.delete');
          const textareabtn = note.querySelector('textarea');


          deletebtn.addEventListener('click', () =>{
              note.remove();
          });

          editbtn.addEventListener('click', () =>{
            textareabtn.focus();
            
          })


        
        document.body.appendChild(note);
    }

 