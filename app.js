var input = document.querySelector(".input-group input")
var right = document.querySelector('#right ul')
var button = document.querySelector('.input-group-append button')
var activities = []

input.focus()

var activities = JSON.parse(localStorage.getItem('list_activities')) || []

function render() {

    right.innerHTML = ""

    for (activity of activities) {
        var listElement = document.createElement('li')
        var textActivity = document.createTextNode(activity)

        listElement.appendChild(textActivity)

        var pos = activities.indexOf(activity)

        var buttonDelete = document.createElement('button')
        buttonDelete.className = 'btn btn-danger btnDelete'

        var textButtonDelete = document.createTextNode('Excluir')
        buttonDelete.appendChild(textButtonDelete)

        buttonDelete.addEventListener('click', function(){deleteActivity(pos)})

        listElement.appendChild(buttonDelete)

        right.appendChild(listElement)
    }
}

render()

button.onclick = addActivity;

function addActivity() {
    var activity = input.value

    activities.push(activity)

    render()
    saveStorage()

    input.value = "";
    input.focus()
}

function deleteActivity(pos) {
    activities.splice(pos, 1)

    render()
    saveStorage()

    input.focus()
}

function saveStorage() {
    localStorage.setItem('list_activities', JSON.stringify(activities));

    //console.log(window.localStorage.getItem('list_activities'))
}