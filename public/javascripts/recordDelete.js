window.addEventListener("load", async (e) => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    const deleteButtonToggle = document.querySelectorAll('.delete-button-toggle');
    const deleteWindow = document.querySelector('.delete-window');
    const deleteWindowContainer = document.querySelector('.delete-window-container');
    const records = document.querySelectorAll('.records');
    let recordId;
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


});
