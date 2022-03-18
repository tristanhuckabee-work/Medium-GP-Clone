window.addEventListener('load', async(e) =>{
    // DELETE API for comment
    const deleteWindowContainer = document.querySelector('.delete-window-container');
    const deleteWindow = document.querySelector('.delete-window');
    // const deletePostText = document.querySelector('.delete-comment-text');
    const deleteCancelButtons = document.querySelector('.delete-cancel-buttons');
    const deleteCommentButton = document.querySelectorAll('.delete-comment');

    // pull up modal for each delete button
    deleteCommentButton.forEach((btn) =>{
        btn.addEventListener('click', (e) =>{
            deleteWindowContainer.classList.add('.show');
        })
    })


})
