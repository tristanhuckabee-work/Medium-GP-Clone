window.addEventListener("load", e => {

  const records = document.querySelectorAll('.records');
  const noTaste = document.querySelector('#noTastes');
  if (records.length <= 0) {
    noTaste.style.display = 'flex'
  }

  // disallow Select
  const userInfo = document.querySelector('aside');
  const disableselect = e => false;

  userInfo.onselectstart = disableselect;
  userInfo.onmousedown = disableselect;

  // FOLLOW / UNFOLLOW USER
  const followBtn = document.getElementsByClassName('relate')[0];

  followBtn.addEventListener('click', async (e) => {
    const pageUserId = document.URL.split('/')[4]
    const currUserId = document.querySelector('.user-logout-buttons').getElementsByTagName('a')[0].href.split('/')[4];

    const res = await fetch('/users/follows/new', {
      method: 'POST',
      body: JSON.stringify(
        { userId: pageUserId,
          followerId: currUserId
        }),
      headers: { 'Content-Type': 'application/json' }
    });
    const returnData = await res.json();

    const followBtn = document.querySelector('.relate');
    let followerCount = document.querySelector('.followers');




    if (returnData.msg === "User Followed") {
      followBtn.style.backgroundColor = "#661b1c";
      followBtn.innerHTML = `
      <i class="fas fa-circle-minus fa-3x" style="color: #dddddd;"></i>
      `;
      followerCount.innerText++
    } else {
      followBtn.style.backgroundColor = "#dddddd";
      followBtn.innerHTML = `
      <i class="fas fa-circle-plus fa-3x" style="color: #191d26"></i>
      `;
      followerCount.innerText--
    }
  });

  // DELETE RECORDS
  const deleteButtons = document.querySelectorAll('.delete-button');
  const cancelButtons = document.querySelectorAll('.cancel-button');
  const deleteButtonToggle = document.querySelectorAll('.delete-button-toggle');
  const deleteWindow = document.querySelector('.delete-window');
  const deleteWindowContainer = document.querySelector('.delete-window-container');
  let recordId;

  //  delete button for modal
  for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i];
    button.addEventListener('click', async e => {
        const res = await fetch(`/records/${recordId}/delete`, { method: 'DELETE' });
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
