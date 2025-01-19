let posts = [];
let postId = 0;

document.getElementById('submit-post').addEventListener('click', function() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        const post = {
            id: postId++,
            title: title,
            content: content,
            agree: 0,
            disagree: 0,
            date: new Date(),
            comments: []
        };
        posts.push(post);
        renderPosts();
        clearForm();
    } else {
        alert('Please fill in both fields.');
    }
});

function renderPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h3');
