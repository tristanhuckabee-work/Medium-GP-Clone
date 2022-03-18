window.addEventListener("load", e => {
  document
    .querySelector('.relate')
    .addEventListener('click', async (e) => {
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

    let followBtn = document.querySelector('.relate');


    if (returnData.msg === "User Followed") {
      followBtn.style.backgroundColor = "#661b1c";
    } else {
      followBtn.style.backgroundColor = "#191d26";
    }
    
    // console.log(`Page User: ${pageUserId}\nCurrent User: ${currUserId}`);
    // console.log('ReturnData: ', returnData);
  });
});