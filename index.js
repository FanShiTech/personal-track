//chrome://extensions/


let people = []
const inputEl = document.getElementById("input-el");
const inputBth = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("people"))



if (leadsFromLocalStorage){
    people = leadsFromLocalStorage
    renderPeople(people)
}

function renderPeople(pp){
    let listItem = ""
    for( let i=0; i<pp.length; i++){
        listItem += `
            <li>
                <a target='_black' href="${pp[i]} "> ${pp[i]} </a>
            </li>
        `
        }
    ulEl.innerHTML = listItem
    }

//const tabs = []
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        people.push(tabs[0].url)
        localStorage.setItem("people", JSON.stringify(people))
        renderPeople(people)
        
    })
})


deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    people = []
    renderPeople(people)
    
})


inputBth.addEventListener("click", function() {
    //console.log("clicked")
    people.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("people", JSON.stringify(people))
    renderPeople(people)

    //console.log(localStorage.getItem("people"))
})


