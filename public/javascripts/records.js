window.addEventListener("load", (e) => {

    const newComment = document.querySelector(`#newComment-btn`);
    // newComment.addEventListener('click', async (e) =>{
    //     e.preventDefault();
    //     const data = document.getElementById('description').value

    //     const res = await fetch("/comments", {
    //         method: 'POST',
    //         body: JSON.stringify({content: data}),
    //         headers: {"Content-Type": "application/json"}
    //     })

    //     const returned = await res.json()

    //     if(returned.message === 'success!'){
    //         const commentHouse = document.getElementById('temp')
    //         let newEle = document.createElement('p')
    //         newEle.innerHTML = returned.comment.description
    //         commentHouse.appendChild(newEle);
    //     }
    // })


    newComment.addEventListener('click', (e) =>{
        e.preventDefault()
        const res = await fetch('/comments')
        const { description }  = await res.json();
        const commentDiv = document.querySelector('#comments-container');

        const commentHTML = description.map(({description}) =>{
            return `
            <p> ${description} </p>
            `
        });

        commentDiv.innerHTML = commentHTML.join('');
    })
})
