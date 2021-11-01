"use strict";

var actionBtn = document.getElementById("action-button");
// new item
var makeNote = document.getElementById("make-new");
// clear all items
var clear = document.getElementById("clear-all");
// delete an item
var results = document.getElementById("results");

var status = document.getElementById("status");

// E6 Fat Arrow Functions
var getResults = function getResults() {
    clearTodos();
    fetch("/all").then(function (response) {
        if (response.status !== 200) {
            console.log("Looks like there was a problem. Status Code: " + response.status);
            return;
        }
        response.json().then(function (data) {
            newTodoSnippet(data);
        });
    }).catch(function (err) {
        console.log("Fetch Error :-S", err);
    });
};
var newTodoSnippet = function newTodoSnippet(res) {
    for (var i = 0; i < res.length; i++) {
        var data_id = res[i]["_id"];
        var title = res[i]["title"];
        var todoList = document.getElementById("results");
        var snippet = "\n      <p class=\"data-entry\">\n      <span class=\"dataTitle\" data-id=" + data_id + ">" + title + "</span>\n      <span onClick=\"delete\" class=\"delete\" data-id=" + data_id + ">x</span>;\n      </p>";
        todoList.insertAdjacentHTML("beforeend", snippet);
    }
};
var clearTodos = function clearTodos() {
    var todoList = document.getElementById("results");
    todoList.innerHTML = "";
};
var resetTitleAndNote = function resetTitleAndNote() {
    var note = document.getElementById("note");
    note.value = "";
    var title = document.getElementById("title");
    title.value = "";
};
var updateTitleAndNote = function updateTitleAndNote(data) {
    var note = document.getElementById("note");
    note.value = data.note;
    var title = document.getElementById("title");
    title.value = data.title;
};

getResults();

clear.addEventListener("click", function (e) {
    if (e.target.matches("#clear-all")) {
        var _element = e.target;
        var data_id = _element.getAttribute("data-id");
        fetch("/clearall", {
            method: "delete"
        }).then(function (response) {
            if (response.status !== 200) {
                console.log("Looks like there was a problem. Status Code: " + response.status);
                return;
            }
            clearTodos();
        }).catch(function (err) {
            console.log("Fetch Error :-S", err);
        });
    }
});

results.addEventListener("click", function (e) {
    if (e.target.matches(".delete")) {
        var _element2 = e.target;
        var data_id = _element2.getAttribute("data-id");
        fetch("/delete/" + data_id, {
            method: "delete"
        }).then(function (response) {
            if (response.status !== 200) {
                console.log("Looks like there was a problem. Status Code: " + response.status);
                return;
            }
            _element2.parentNode.remove();
            resetTitleAndNote();
            var newButton = "\n      <button id='make-new'>Submit</button>";
            actionBtn.innerHTML = newButton;
        }).catch(function (err) {
            console.log("Fetch Error :-S", err);
        });
    } else if (e.target.matches(".dataTitle")) {
        var _element3 = e.target;
        var _data_id = _element3.getAttribute("data-id");
        status.innerText = "Editing";
        fetch("/find/" + _data_id, { method: "get" }).then(function (response) {
            return response.json();
        }).then(function (data) {
            updateTitleAndNote(data);
            var newButton = "<button id='updater' data-id=" + _data_id + ">Update</button>";
            actionBtn.innerHTML = newButton;
        }).catch(function (err) {
            console.log("Fetch Error :-S", err);
        });
    }
});

actionBtn.addEventListener("click", function (e) {
    if (e.target.matches("#updater")) {
        var updateBtnEl = e.target;
        var data_id = updateBtnEl.getAttribute("data-id");
        var title = document.getElementById("title").value;
        var note = document.getElementById("note").value;
        fetch("/update/" + data_id, {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                note: note
            })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            element.innerText = title;
            resetTitleAndNote();
            var newButton = "<button id='make-new'>Submit</button>";
            actionBtn.innerHTML = newButton;
            status.innerText = "Creating";
        }).catch(function (err) {
            console.log("Fetch Error :-S", err);
        });
    } else if (e.target.matches("#make-new")) {
        var _element4 = e.target;
        var _data_id2 = _element4.getAttribute("data-id");
        fetch("/submit", {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: document.getElementById("title").value,
                note: document.getElementById("note").value,
                created: Date.now()
            })
        }).then(function (res) {
            return res.json();
        }).then(function (res) {
            return newTodoSnippet([res]);
        });
        resetTitleAndNote();
    }
});