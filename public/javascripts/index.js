window.addEventListener("load", (event) => {
  // console.log("hello from javascript!")



  //HEADER
  const header = document.getElementsByTagName('header')[0];
  const signInToggle = document.getElementById("sign-in-open");
  const signUpToggle = document.getElementById("sign-up-open");
  const signInContainer = document.querySelector(".sign-in-container");
  const signUpContainer = document.querySelector(".sign-up-container");
  const signInButton = document.getElementById('sign-in-close');
  const demo = document.getElementById('.demo');
  const disableselect = e => false;

  header.onselectstart = disableselect
  header.onmousedown = disableselect

  signInToggle.addEventListener('click', (e) => {
    // e.preventDefault()
    // console.log('ClassList: ', signInContainer.classList.value)
    if (!signInContainer.classList.value.includes('show')) {
      if (signUpContainer.classList.value.includes('show')) {
        signUpContainer.classList.remove('show');
      }

      signInContainer.classList.add('show');
    } else {
      signInContainer.classList.remove('show');
    }
  })
  // signInButton.addEventListener('click', (e) =>{
  //   e.preventDefault();
  // })

  signUpToggle.addEventListener('click', () => {
    if (!signUpContainer.classList.value.includes('show')) {
      if (signInContainer.classList.value.includes('show')) {
        signInContainer.classList.remove('show');
      }

      signUpContainer.classList.add('show');
    } else {
      signUpContainer.classList.remove('show');
    }
  })

  signInContainer.addEventListener('click', (e) => {
    e.stopPropagation();
  })


})
