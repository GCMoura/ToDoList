var input = document.querySelector(".input-group input")
var right = document.querySelector('#right ul')
var button = document.querySelector('.input-group-append button')
var activities = []

var activities = JSON.parse(localStorage.getItem('list_activities')) || []

button.onclick = addActivity;

buttonEmail.onclick = sendEmail;

function render() {

    right.innerHTML = ""

    for (activity of activities) {
        var listElement = document.createElement('li')
        var textActivity = document.createTextNode(activity)

        listElement.appendChild(textActivity)

        var buttonDelete = document.createElement('button')
        buttonDelete.className = 'btn btn-danger btnDelete'

        var pos = activities.indexOf(activity)
        buttonDelete.setAttribute('onclick', 'deleteActivity(' + pos + ')')

        var textButton = document.createTextNode('Excluir')
        buttonDelete.appendChild(textButton)

        listElement.appendChild(buttonDelete)

        right.appendChild(listElement)
    }
}

render()

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
}

function saveStorage() {
    localStorage.setItem('list_activities', JSON.stringify(activities));

    //console.log(window.localStorage.getItem('list_activities'))
}