window.addEventListener("load", (event) => {
    console.log("hello from javascript!")

    //Sign In Things
    const signInToggle = document.getElementById("sign-in-open");
    const signUpToggle = document.getElementById("sign-up-open");
    const signInContainer = document.querySelector(".sign-in-container");
    const signUpContainer = document.querySelector(".sign-up-container");

    signInToggle.addEventListener('click',() =>{
        console.log('ClassList: ', signInContainer.classList.value)
        if ( !signInContainer.classList.value.includes('show') ) {
          signInContainer.classList.add('show');
        } else {
          signInContainer.classList.remove('show');
        }
    })
    signUpToggle.addEventListener('click',() =>{
      console.log('ClassList: ', signUpContainer.classList.value)
      if ( !signUpContainer.classList.value.includes('show') ) {
        signUpContainer.classList.add('show');
      } else {
        signUpContainer.classList.remove('show');
      }
  })
})
