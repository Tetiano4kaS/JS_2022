//------------------- user-details.html---------------------------------

fetch('https://jsonplaceholder.typicode.com/users/{id}')
    .then((response) => response.json())
    .then(users => {
            for (const userDetails of users) {
                let mainDiv = document.createElement('div');
                document.body.appendChild(mainDiv);

                let userInfo = document.createElement('div');
                userInfo.innerText = `${userDetails}`;
                mainDiv.appendChild(userInfo);

            }
            console.log(users)
        }
    )

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.