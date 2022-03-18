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


    newComment.addEventListener('click', async(e) =>{
        e.preventDefault()
        const userId = document.querySelector('.userId').value;
        const recordId = document.URL.split('/')[4]
        // console.log(recordId);
        const description = document.querySelector('#description').value;
        // console.log(JSON.stringify({description, userId, recordId}));
        const res = await fetch('/comments', {
            method: 'POST',
            body: JSON.stringify({description, userId, recordId}),
            headers: {"Content-Type":"application/json"}
        })

        const waiting = await res.json();
        if(waiting.message === 'success!'){
            console.log(waiting, 'consoleloged');
            const commentDiv = document.querySelector('#comments-container');
            commentDiv.innerHTML = `
            <p>${description}</p>
            ` + commentDiv.innerHTML;
        }
    })
})
