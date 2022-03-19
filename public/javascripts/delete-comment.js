window.addEventListener('load', async e => {
  let deleteButtonsToggle = document.querySelectorAll('.delete-comment');
  let deleteCommentButtons = document.querySelectorAll('.delete-comment-button');
  let cancelCommentButtons = document.querySelectorAll('.cancel-comment-button');
  let deleteWindowCommentContainer = document.querySelector('.delete-window-comment-container');
  let deleteWindowComment = document.querySelector('.delete-window-comment');
  let commentId;

  //delete button displayed on comments
  for (let i = 0; i < deleteButtonsToggle.length; i++) {
    const button = deleteButtonsToggle[i];
    button.addEventListener('click', e => {
      if (!deleteWindowComment.classList.value.includes('show')) {
        deleteWindowComment.classList.add('show');
        deleteWindowCommentContainer.classList.add('show');
        commentId = e.target.id;
      } else {
        deleteWindowComment.classListl.remove('show');
        deleteWindowCommentContainer.classList.remove('show');
      }
    })
  }

  //cancel button on modal for deleting comment
  for (let i = 0; i < cancelCommentButtons.length; i++) {
    let cancelButton = cancelCommentButtons[i];
    cancelButton.addEventListener('click', e => {
      deleteWindowComment.classList.remove('show');
      deleteWindowCommentContainer.classList.remove('show');
    })
  }

  //delete button on modal for deleting comment
  for (let i = 0; i < deleteCommentButtons.length; i++) {
    const button = deleteCommentButtons[i];
    button.addEventListener('click', async e => {
      const res = await fetch(`/comments/${commentId}/delete`, { method: 'DELETE' })
      let data = await res.json();
      if (data.message === 'Success') {
        let container = document.getElementById(`comment-container-${commentId}`);
        container.remove();
        deleteWindowComment.classList.remove('show');
        deleteWindowCommentContainer.classList.remove('show');
      }
    })
  }
})
