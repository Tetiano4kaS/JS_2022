const post = JSON.parse(localStorage.getItem(`post`))

let titleOfPosts = document.createElement('div');
titleOfPosts.innerHTML = `<h2>Post details</h2>`;
titleOfPosts.classList = `title`;
document.body.appendChild(titleOfPosts);

let posts = document.createElement('div')
posts.classList = `infoOfUserDetails userDetails`;
document.body.appendChild(posts)

for (const postDetail in post) {
    let postDetails = document.createElement('div')
    postDetails.innerHTML = `${postDetail} - ${post[postDetail]}`
    posts.appendChild(postDetails);
}

let postComments = document.createElement('div')
postComments.classList = 'postComments'
document.body.appendChild(postComments)

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then(comments => {
        for (const comment of comments) {
            let postCommentDetails = document.createElement('div')
            postCommentDetails.classList = 'cardOfPost'
            postComments.appendChild(postCommentDetails);

            for (const item in comment) {
                let commentDetails = document.createElement('div')
                commentDetails.innerHTML = `${item} -- ${comment[item]}`;
                postCommentDetails.appendChild(commentDetails);
            }
        }
    })
