window.addEventListener("load", async (e) => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    const cancelButtons = document.querySelectorAll('.cancel-button');
    const deleteButtonToggle = document.querySelectorAll('.delete-button-toggle');
    const deleteWindow = document.querySelector('.delete-window');
    const deleteWindowContainer = document.querySelector('.delete-window-container');
    let recordId;

    // POST api comment
    const newComment = document.querySelector(`#newComment-btn`);
    if (newComment) {
        newComment.addEventListener('click', async (e) => {
            e.preventDefault()
            const userId = document.querySelector('.userId').value;
            const recordId = document.URL.split('/')[4]
            const description = document.querySelector('#description').value;
            const res = await fetch('/comments', {
                method: 'POST',
                body: JSON.stringify({ description, userId, recordId }),
                headers: { "Content-Type": "application/json" }
            })

            const waiting = await res.json();
            if (waiting.message === 'success!') {
                const commentDiv = document.querySelector('#comments-container');
                commentDiv.innerHTML = `
                <div class="individual-comment">
                    <a href="/users/${userId}">
                        <h4>${waiting.userName}</h4>
                    </a>
                    <p>${description}</p>
                </div>
                    <button class="delete-comment">delete</button>
                ` + commentDiv.innerHTML;
            }
            // setting comment input field to empty
            const textInputField = document.getElementById('description');
            textInputField.value = '';
        })
    }



    //  delete button for modal
    if(deleteButtons){

    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];
        button.addEventListener('click', async e => {
            const res = await fetch(`/records/${recordId}/delete`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.message === 'Success') {
                let container = document.getElementById(`record-container-${recordId}`)
                container.remove();
                deleteWindow.classList.remove('show');
                deleteWindowContainer.classList.remove('show');
            }
        })
    }

    //  delete button on each Record
    if(deleteButtonToggle){


    for (let i = 0; i < deleteButtonToggle.length; i++) {
        const button = deleteButtonToggle[i];
        button.addEventListener('click', async e => {
            e.stopPropagation();
            if (!deleteWindow.classList.value.includes('show')) {
                deleteWindowContainer.classList.add('show');
                deleteWindow.classList.add('show');
                recordId = e.target.parentElement.id.split('-')[2];
            } else {
                deleteWindow.classList.remove('show');
                deleteWindowContainer.classList.remove('show');
            }
        })
    }


    for (let i = 0; i < cancelButtons.length; i++) {
        const cancelButton = cancelButtons[i];
        cancelButton.addEventListener('click', e => {
            deleteWindow.classList.remove('show');
            deleteWindowContainer.classList.remove('show');
        })
    }
    }
}
    const likeButton = document.querySelector('.applaud')
    const likeUpDiv = document.querySelector('.applaud-up-div')
    const likeDownDiv = document.querySelector('.applaud-down-div')
    const counter = document.querySelector('.likes')

    if(likeButton){
        likeButton.addEventListener('click', async(e) => {
            const recordId = document.URL.split('/')[4];
            const userId= document.querySelector('.applaud').id;
            const count = counter.id
            const res = await fetch('/records/applauds/new', {
                method: 'POST',
                body: JSON.stringify(
                  { userId: userId,
                    recordId: recordId
                  }),
                headers: { 'Content-Type': 'application/json' }
              });
            const returnData = await res.json();
            if(returnData.msg === "User liked"){
                likeButton.style.color = '#b39856'
                likeButton.innerHTML = `
                    <i class="fas fa-music fa-2x"></i>
                `
                counter.innerText++
            }else{
                likeButton.style.color = 'lightgrey'
                likeButton.innerHTML = `
                    <i class="fas fa-music fa-2x"></i>
                `
                counter.innerText--
            }
        })
    }

});
