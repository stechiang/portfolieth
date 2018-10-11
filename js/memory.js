var passNix;
var removalTag;
var myAddresses = new Array();
var globObjectSize;
var globObject;
var myAddressesGlob = [];


//uncomment below to clear local storage (testing only)
/*

chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
});

*/

chrome.storage.local.get(addressObject, function(result) {

    var objectSize = Object.keys(result).length;
    globObjectSize = objectSize;
    globObject = addressObject;

    for (var i = 0; i < objectSize; i++) {
        myAddresses[i] = result[i];
        myAddressesGlob[i] = myAddresses[i];
    }
    populateAddressBook();
});

try {
    const choices = new Choices('[data-trigger]', {
        searchEnabled: false,
        itemSelectText: '',
    });
} catch {}

try {
    document.getElementById("hideZeroVal").addEventListener("change", function() {

        var checkBoxElem = document.getElementById("hideZeroVal");
        if (checkBoxElem.checked) {
            toHide = true;
        } else {
            toHide = false;
        }
        clearDom();
        createTable(fromSearch);
    });


    function decimalPlacer(num) {

        num = parseFloat(num).toFixed(2);
        return num;

    }
} catch {}

function commafy(num) {

    var str = num.toString().split('.');

    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

document.getElementById("saveButton").addEventListener("click", saveAddress, false);
document.getElementById("removeButton").addEventListener("click", removeAddress, false);



var addressObject = {};

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
    return rv;
}

function removeAddress() {
    for (var i = 0; i < myAddresses.length; i++) {
        if (myAddresses[i].address == addressInput) {
            removalTag = i;
        }
    }
    myAddresses.splice(removalTag, 1);
    populateAddressBook();

    chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });


    addressObject = toObject(myAddresses);
    chrome.storage.local.set(addressObject, function() {});

    var tempB = document.getElementById("saveButton");
    tempB.setAttribute("disabled", "false");
    tempB.removeAttribute("class");
    tempB.setAttribute("class", "addressButtons");
    tempB.innerHTML = "Save Address";
    tempB.setAttribute("hidden", "true");
    document.getElementById("removeButton").setAttribute("hidden", "true");
    clearDom();

}


function saveAddress() {

    var containBool = false;

    for (var i = 0; i < myAddresses.length; i++) {
        if (myAddresses[i].address == addressInput) {
            containBool = true;
            break;
        } else {
            containBool = false;
        }
    }
    if (containBool == true) {
        alert("This address is already saved in your address book as '" + myAddresses[i].name + "'");
    } else {

        if (addressInput !== null && addressInput !== undefined && addressInput !== "") {
            passNix = prompt("Please enter a name for this address");
            myAddresses.push({
                address: addressInput,
                name: passNix,
                totalValue: "$" + commafy(decimalPlacer(portfolioValue))
            });

            addressObject = toObject(myAddresses);
            chrome.storage.local.set(addressObject, function() {});

            populateAddressBook();
        } else {
            alert("Please get price data before you save!");
        }
    }
}

function populateAddressBook() {

    try {
        var x = document.getElementsByClassName("choices__list");
        x[2].innerHTML = "";
    } catch (err) {}
    for (var i = 2; i < ((myAddresses.length) + 2); i++) {
        var divx = document.createElement("div");
        var divParent = document.getElementsByClassName("choices__list");
        divx.setAttribute("class", "choices__item choices__item--choice choices__item--selectable");
        divx.setAttribute("data-select-text", "");
        divx.setAttribute("data-choice", "");
        divx.setAttribute("data-id", i);
        divx.setAttribute("data-value", myAddresses[(i - 2)].address);
        divx.setAttribute("data-choice-selectable", "");
        divx.id = ("choices-choicesDrop-item-choice-" + i);
        divx.setAttribute("role", "option");
        divx.setAttribute("aria-selected", "false");
        divx.innerText = myAddresses[(i - 2)].name + " (" + myAddresses[(i - 2)].totalValue + ")";

        divParent[2].appendChild(divx);
    }
}