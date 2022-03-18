window.addEventListener("load", async (e) => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    const cancelButtons = document.querySelectorAll('.cancel-button');
    const deleteButtonToggle = document.querySelectorAll('.delete-button-toggle');
    const deleteWindow = document.querySelector('.delete-window');
    const deleteWindowContainer = document.querySelector('.delete-window-container');
    const records = document.querySelectorAll('.records');
    let recordId;


    //  POST for new comment
    const newComment = document.querySelector(`#newComment-btn`);
    if (newComment) {
        newComment.addEventListener('click', async (e) => {
            e.preventDefault()
            const userId = document.querySelector('.userId').value;
            const recordId = document.URL.split('/')[4]
            // console.log(recordId);
            const description = document.querySelector('#description').value;
            // console.log(JSON.stringify({description, userId, recordId}));
            const res = await fetch('/comments', {
                method: 'POST',
                body: JSON.stringify({ description, userId, recordId }),
                headers: { "Content-Type": "application/json" }
            })

            const waiting = await res.json();
            if (waiting.message === 'success!') {
                console.log(waiting, 'consoleloged');
                const commentDiv = document.querySelector('#comments-container');
                commentDiv.innerHTML = `
            <p>${description}</p>
            ` + commentDiv.innerHTML;
            }
        })
    }

    //  delete button for modal
    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];
        button.addEventListener('click', async e => {
            // console.log(recordId);
            // console.log(getRecordId);
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
    for (let i = 0; i < deleteButtonToggle.length; i++) {
        const button = deleteButtonToggle[i];
        button.addEventListener('click', async e => {
            e.stopPropagation();
            if (!deleteWindow.classList.value.includes('show')) {
                deleteWindow.classList.add('show');
                deleteWindowContainer.classList.add('show');
                recordId = e.target.id.split('-')[2];
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

});
