window.addEventListener("load", async (e) => {
  const deleteButtons = document.querySelectorAll('.delete-button');
  const deleteButtonToggle = document.querySelectorAll('.delete-button-toggle');
  const deleteWindow = document.querySelector('.delete-window');
  const deleteWindowContainer = document.querySelector('.delete-window-container');
  const records = document.querySelectorAll('.records');


  const getRecordId = (() => {
    for (let i = 0; i < records.length; i++) {
      let record = records[i];
      let children = [...record.children];
      let buttonId = children[children.length - 2].id.split('-')[2];
      return buttonId;
    }
  })();


  for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i];
    button.addEventListener('click', async e => {
      const postId = getRecordId;
      // console.log(getRecordId);
      const res = await fetch(`/records/${postId}/delete`, {
        method: 'DELETE'
      });
      const data = await res.json();
      console.log(data.message);
    })
  }
  for (let i = 0; i < deleteButtonToggle.length; i++) {
    const button = deleteButtonToggle[i];
    button.addEventListener('click', async e => {
      if (!deleteWindow.classList.value.includes('show')) {
        deleteWindow.classList.add('show');
        deleteWindowContainer.classList.add('show');
      } else {
        deleteWindow.classList.remove('show');
        deleteWindowContainer.classList.remove('show');
      }
    })
  }
})
