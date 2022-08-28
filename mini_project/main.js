//----------------- index---------------------

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let mainDiv = document.createElement('div')
            mainDiv.classList = 'mainDiv';
            wrapper.appendChild(mainDiv);

            let userWrapper = document.createElement('div')
            userWrapper.innerText = ` ${user.id} -- ${user.name}`
            userWrapper.classList = `userWrapper`

            mainDiv.appendChild(userWrapper);

            let button = document.createElement('button')
            button.innerText = 'Click for details';

            button.onclick = function () {
                localStorage.setItem('user', JSON.stringify(user));
                location.href = "user-details.html"
            };
            userWrapper.appendChild(button);
        }
    });
let wrapper = document.createElement('div');
wrapper.classList = 'wrapper'
document.body.appendChild(wrapper);
