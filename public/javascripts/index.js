window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    const openSignIn = document.getElementById("sign-in-open");
    const signInContainer = document.querySelector(".sign-in-container");
    // const closeSignIn = document.getElementById("sign-in-close")

    openSignIn.addEventListener('click',() =>{
        if ( !signInContainer.classList.includes('show') ) {
          signInContainer.classList.add('show');
        } else {
          signInContainer.classList.remove('show');
        }
    })
    // signInContainer.addEventListener('click', (e) =>{  
      
    //   if ()
    //     signInContainer.classList.remove('show');
    // })
})