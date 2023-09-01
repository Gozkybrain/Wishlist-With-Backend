// * THIS IS THE MAIN JS USED IN THE FRONT END
// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }


// * THIS IS THE NEW JS MODIFIED TO SEND THE ENTERED FIELD TO THE BACKEND AS A JSON
// Create close buttons for each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Attach click event to close buttons
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        var removedTask = div.textContent.trim();
        handleTaskRemoval(removedTask);
    };
}

// Attach click event to list items for checking
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Function to add new task to the frontend and backend
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        handleNewTaskAddition(inputValue);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            var removedTask = div.textContent.trim();
            handleTaskRemoval(removedTask);
        };
    }
}

// Function to add a new task to the backend
function handleNewTaskAddition(task) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
    };

    fetch('/api/todo', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function handleTaskRemoval(task) {
    var taskElements = document.querySelectorAll('ul#myUL li');
    
    for (var i = 0; i < taskElements.length; i++) {
        var taskElement = taskElements[i];
        if (taskElement.textContent.trim() === task) {
            taskElement.remove();
            console.log('Removing task from frontend:', task);
            break;
        }
    }

    const encodedTask = encodeURIComponent(task);
    console.log('Encoded task:', encodedTask); // Log the encoded task value

    fetch('/api/todo/' + encodedTask, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
