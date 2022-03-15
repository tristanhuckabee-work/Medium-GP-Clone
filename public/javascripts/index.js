window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    const openSignIn = document.getElementById("sign-in-open");
    const signInContainer = document.querySelector(".sign-in-container");
    // const closeSignIn = document.getElementById("sign-in-close")

    openSignIn.addEventListener('click',() =>{
        signInContainer.classList.add('show');
    })
    signInContainer.addEventListener('click', (e) =>{
        const inputChildren = Array.from(signInContainer.children)
        // console.log(inputChildren);
        signInContainer.classList.remove('show');
    })
})
