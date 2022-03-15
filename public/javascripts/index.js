window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    const openSignIn = document.getElementById("sign-in-open");
    const signInContainer = document.querySelector(".sign-in-container");
    // const closeSignIn = document.getElementById("sign-in-close")

    openSignIn.addEventListener('click',() =>{
        signInContainer.classList.add('show');
    })
    signInContainer.addEventListener('click', (e) =>{
        const children = Array.from(signInContainer.children);
        children.addEventListener('click', e => {
          e.preventPropagation();
        })
        signInContainer.classList.remove('show');
    })
})