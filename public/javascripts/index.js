window.addEventListener("load", (event) => {



  //HEADER
  const header = document.getElementsByTagName('header')[0];
  const signInToggle = document.getElementById("sign-in-open");
  const signUpToggle = document.getElementById("sign-up-open");
  const signInContainer = document.querySelector(".sign-in-container");
  const signUpContainer = document.querySelector(".sign-up-container");
  const closeModalIN = document.getElementsByClassName("modal-close-X")[0]
  const closeModalUP = document.getElementsByClassName("modal-close-X")[1]
  const disableselect = e => false;

  header.onselectstart = disableselect
  header.onmousedown = disableselect

  signInToggle.addEventListener('click', (e) => {
    if (!signInContainer.classList.value.includes('show')) {
      if (signUpContainer.classList.value.includes('show')) {
        signUpContainer.classList.remove('show');
      }

      signInContainer.classList.add('show');
      closeModalIN.addEventListener('click', (e) => {
        signInContainer.classList.remove('show')
      })
    } else {
      signInContainer.classList.remove('show');
    }
  })

  signUpToggle.addEventListener('click', (e) => {
    if (!signUpContainer.classList.value.includes('show')) {
      if (signInContainer.classList.value.includes('show')) {
        signInContainer.classList.remove('show');
      }

      signUpContainer.classList.add('show');
      closeModalUP.addEventListener('click', (e) => {
        signUpContainer.classList.remove('show')
      })
    } else {
      signUpContainer.classList.remove('show');
    }

  })

  signInContainer.addEventListener('click', (e) => {
    e.stopPropagation();
  })

  signUpContainer.addEventListener('click', (e) => {
    e.stopPropagation();
  })



  // trend cards
  const trendCard = document.querySelectorAll('.trendCards');
  trendCard.forEach((entry) =>{
    entry.addEventListener('click', (e) =>{
      if (!signUpContainer.classList.value.includes('show')) {
        if (signInContainer.classList.value.includes('show')) {
          signInContainer.classList.remove('show');
        }

        signUpContainer.classList.add('show');
      } else {
        signUpContainer.classList.remove('show');
      }
    })
  })

})
