document.getElementById('submit-post').addEventListener('click', function() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        const postList = document.getElementById('post-list');

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postList.appendChild(postDiv);

        // Clear the input fields
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});
