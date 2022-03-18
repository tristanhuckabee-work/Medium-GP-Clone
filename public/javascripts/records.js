window.addEventListener("load", async (e) => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    const cancelButtons = document.querySelectorAll('.cancel-button');
    const deleteButtonToggle = document.querySelectorAll('.delete-button-toggle');
    const deleteWindow = document.querySelector('.delete-window');
    const deleteWindowContainer = document.querySelector('.delete-window-container');
    let recordId;


    //  POST for new comment
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
            ` + commentDiv.innerHTML;
            }
            // setting comment input field to empty
            const textInputField = document.getElementById('description');
            textInputField.value = '';
        })
    }

    //  delete button for modal
    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];
        button.addEventListener('click', async e => {
            const res = await fetch(`/records/${recordId}/delete`, {
                method: 'DELETE'
            });
            console.log('recordID', recordId);
            console.log('button', button)
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
                deleteWindow.style.transition = 'all 2s';
                deleteWindow.classList.add('show');
                deleteWindowContainer.classList.add('show');
                console.log(e.target.parentElement);
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

});
