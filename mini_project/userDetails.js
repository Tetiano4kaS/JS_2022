const user = JSON.parse(localStorage.getItem('user'))

let userDetails = document.createElement('div')
userDetails.classList = `userDetails`
document.body.appendChild(userDetails);

for (let userDetailsOfFirstLevel in user) {
    let firstDetails = document.createElement('div')
    if (typeof (user[userDetailsOfFirstLevel]) !== 'object') {
        firstDetails.innerHTML = `${userDetailsOfFirstLevel} - ${user[userDetailsOfFirstLevel]}`
        userDetails.appendChild(firstDetails);
    } else {
        for (const userDetailsOfSecondLevel in user[userDetailsOfFirstLevel]) {
            let secondDetails = document.createElement('div')
            if (typeof (user[userDetailsOfFirstLevel][userDetailsOfSecondLevel]) !== 'object') {
                secondDetails.innerHTML = `${userDetailsOfFirstLevel}.${userDetailsOfSecondLevel} - ${user[userDetailsOfFirstLevel][userDetailsOfSecondLevel]}`
                userDetails.appendChild(secondDetails);

            } else {
                for (const userDetailsOfThirdLevel in user[userDetailsOfFirstLevel][userDetailsOfSecondLevel]) {
                    let thirdDetails = document.createElement('div')
                    thirdDetails.innerHTML = `${userDetailsOfFirstLevel}.${userDetailsOfSecondLevel}.${userDetailsOfThirdLevel} 
                        - ${user[userDetailsOfFirstLevel][userDetailsOfSecondLevel][userDetailsOfThirdLevel]}`
                    userDetails.appendChild(thirdDetails);
                }
            }
        }
    }
}

let button = document.createElement('button');
button.innerText = 'post of current user';
button.classList = 'postOfCurrentUser'
userDetails.appendChild(button);

let userPostTitleWrap = document.createElement('div')
userPostTitleWrap.classList = 'userPostTitleWrap'
document.body.appendChild(userPostTitleWrap)

button.onclick = function () {
    fetch(` https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((response) => response.json())
        .then(posts => {
            for (const post of posts) {
                let userPostTitle = document.createElement('div');
                userPostTitle.classList = 'w-20'
                userPostTitle.innerHTML = `${post.title}`;
                userPostTitleWrap.appendChild(userPostTitle)

                let button = document.createElement('button');
                button.innerText = 'post details';
                userPostTitle.appendChild(button);

                button.onclick = function () {
                    localStorage.setItem('post', JSON.stringify(post))
                    location.href = `post-details.html`;
                }
            }
        })
}
