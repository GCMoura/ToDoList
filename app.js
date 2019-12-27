var input = document.querySelector(".input-group input")
var right = document.querySelector('#right ul')
var button = document.querySelector('.input-group-append button')
var activities = []

button.onclick = show;

function show() {
    var activity = input.value

    activities.push(activity)

    right.innerHTML = ""

    for (activity of activities) {
        var listElement = document.createElement('li')
        var textActivity = document.createTextNode(activity)
        listElement.appendChild(textActivity)

        var link = document.createElement('a')
        link.setAttribute('href', '#')
        var textLink = document.createTextNode('   Excluir')
        link.appendChild(textLink)
        listElement.appendChild(link)

        right.appendChild(listElement)

    }

    input.value = "";
}