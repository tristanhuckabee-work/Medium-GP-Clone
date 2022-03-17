window.addEventListener("load",(e) =>{

const newComment = document.querySelector('.comment-submit');
const commentArea = document.querySelector('.comment')
newComment.addEventListener('click', async(e) =>{
    // e.preventDefault()
    console.log(commentArea.value);
    const postId = e.target.value
    console.log(postId);
    // const res = await fetch()

})

})
