//----------------- index---------------------

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let mainDiv = document.createElement('div')
            document.body.appendChild(mainDiv);

            let userWrapper = document.createElement('div')
            userWrapper.innerText = `${user.id} -- ${user.name}`
            mainDiv.appendChild(userWrapper);


            let button = document.createElement('button')
            button.innerText = 'Click for details';
            button.onclick = function () {
                location.href = "user-details.html"

                let userInfo = document.createElement('div')
                userInfo.innerText = `${user}`
                document.body.appendChild(userInfo);

            }
            userWrapper.appendChild(button);


        }

    });




