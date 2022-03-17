window.addEventListener("load", async (e) => {
  const deleteButtons = document.querySelectorAll('.delete-button');

  for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i];
    button.addEventListener('click', async e => {
      const postId = e.target.id.split('-')[2];
      const res = await fetch(`/records/${postId}/delete`, {
        method: 'DELETE'
      });
      const data = await res.json();
      console.log(data.message);
    })
  }
})
