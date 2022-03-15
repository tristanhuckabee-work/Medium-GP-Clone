window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    //Sign In Things
    const signInToggle = document.getElementById("sign-in-open");
    const signInContainer = document.querySelector(".sign-in-container");

    signInToggle.addEventListener('click',() =>{
        console.log('ClassList: ', signInContainer.classList.value)
        if ( !signInContainer.classList.value.includes('show') ) {
          signInContainer.classList.add('show');
        } else {
          signInContainer.classList.remove('show');
        }
    })
})