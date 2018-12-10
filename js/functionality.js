var addressBook;
var eth24;
var ethJson;
var addrex;
var addressInput;
var addressData;
var addressChoices = [""];
var ethPrice;
var eth7;
var portfolioValue = 0.0;
var fromSearch;
var toHide;

function clearDom() {

    if (document.contains(document.getElementById("tableStyle"))) {
        document.getElementById("tableStyle").remove();
    }
    if (document.contains(document.getElementById("portfolioValueBoxNode"))) {
        document.getElementById("portfolioValueBoxNode").remove();
    }
}

function mainProcess(fromSearch) {
    clearDom();
    event.preventDefault();
    sendData(fromSearch);
    getEthPrice();
    console.log(fromSearch);

    if (fromSearch === false) {
        document.getElementById("removeButton").removeAttribute("hidden");
        document.getElementById("saveButton").removeAttribute("hidden");
    }
}

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

function decimalPlacer(num) {

    num = parseFloat(num).toFixed(2);
    return num;

}

function truncate(string, limit) {
    if (string.length > limit)
        return string.substring(0, limit) + '...';
    else
        return string;
};

function threeDecimalPlacer(num) {
    num = parseFloat(num).toFixed(3);
    return num;
}

function eightDecimalPlacer(num) {

    num = parseFloat(num).toFixed(8);
    return num;

}

function sendData(fromSearch) {
    var XHR = new XMLHttpRequest();
    XHR.addEventListener("load", function(event) {
        addressData = event.target.responseText;
        createTable(fromSearch);
    });

    XHR.addEventListener("error", function(event) {
        alert('Oops! API error retrieving token data.');
    });

    document.getElementById("loadingBox").removeAttribute("hidden");
    var urlConcat = "https:api.ethplorer.io/getAddressInfo/" + addressInput + "?apiKey=freekey";
    XHR.open("POST", urlConcat);

    XHR.send();
}



window.addEventListener("load", function() {
    getEthPrice();
    var form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {

        addressInput = document.getElementById("addressRequest").value;
        addressInput = addressInput.replace(/\s/g,'');

        if (!/^(0x)?[0-9a-f]{40}$/i.test(addressInput)) {
            // check if it has the basic requirements of an address
            alert("this is an invalid Ethereum address. Please enter a valid Ethereum address.");
        } 
        else {
            fromSearch = true;
            mainProcess(fromSearch);
        }
    });
});

function getEthPrice() {

    var XHR = new XMLHttpRequest();
    XHR.addEventListener("load", function(event) {
        ethJson = event.target.responseText;
        ethPrice = JSON.parse(ethJson).data.quotes.USD.price;
        eth24 = JSON.parse(ethJson).data.quotes.USD.percent_change_24h;
        eth7 = JSON.parse(ethJson).data.quotes.USD.percent_change_7d;

    });

    XHR.addEventListener("error", function(event) {
        alert('Oops! API error retrieving token data.');
    });
    XHR.open("GET", "https://api.coinmarketcap.com/v2/ticker/1027/");
    XHR.send();
    // find an API with 30d ETH price diffmal
}

// this can cause failure in http

function createTable(fromSearch) {
    portfolioValue = 0.0;

    var buttonsBox = document.getElementById("addressButtonsBox").removeAttribute("hidden");
    var tempB = document.getElementById("saveButton");
    if (fromSearch === false) {
        tempB.setAttribute("disabled", "true");
        tempB.removeAttribute("class");
        tempB.setAttribute("class", "buttonNix");

        for (var i = 0; i < myAddressesGlob.length; i++) {
            if (myAddressesGlob[i].address == addrex)
                var tempNix = myAddressesGlob[i].name;
        }
        if (tempNix !== undefined && tempNix !== null && tempNix !== "") {
            tempB.innerHTML = tempNix;
        } else {
            tempB.innerHTML = passNix;
        }
    } else {
        tempB.removeAttribute("hidden");
        tempB.removeAttribute("class");
        tempB.setAttribute("class", "addressButtons");
        tempB.innerHTML = "Save Address";
        tempB.removeAttribute("disabled");
    }

    document.getElementById("prefsDiv").removeAttribute("hidden");

    var jData = JSON.parse(addressData);

    var findLength = jData.tokens;

    var tableSize;

    function length(obj) {

        try {
            tableSize = Object.keys(obj).length;
        } catch {}
    }

    length(findLength);

    var mainContain = document.getElementById("tableData");

    var tbl = document.createElement("table");
    tbl.id = "tableStyle";

    tbl.style.width = ("100");

    tbl.setAttribute("border", "2");

    var tbdy = document.createElement("tbody");

    // table above

    var toprow = document.createElement('tr');

    var tdTokenTop = document.createElement('th');
    tdTokenTop.appendChild(document.createTextNode("Token"));

    var tdValueTop = document.createElement('th');
    tdValueTop.appendChild(document.createTextNode("Value"));

    var tdBalanceTop = document.createElement('th');
    tdBalanceTop.appendChild(document.createTextNode("Amount Owned"));

    var tdPriceTop = document.createElement('th');
    tdPriceTop.appendChild(document.createTextNode("Price"));

    var tdPrice24Top = document.createElement('th');
    tdPrice24Top.appendChild(document.createTextNode("24h Price"));

    var tdPrice7Top = document.createElement('th');
    tdPrice7Top.appendChild(document.createTextNode("7 Day Price"));

    var tdPrice30Top = document.createElement('th');
    tdPrice30Top.appendChild(document.createTextNode("30 Day Price"));


    tbdy.appendChild(toprow);
    toprow.appendChild(tdTokenTop);
    toprow.appendChild(tdValueTop);
    toprow.appendChild(tdBalanceTop);
    toprow.appendChild(tdPriceTop);
    toprow.appendChild(tdPrice24Top);
    toprow.appendChild(tdPrice7Top);
    toprow.appendChild(tdPrice30Top);




    function scientificToDecimal(num, decimals) {
        const sign = Math.sign(num);
        if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
            const zero = '0';
            const parts = String(num).toLowerCase().split('e');
            const e = parts.pop();
            let l = Math.abs(e);
            const direction = e / l;
            const coeff_array = parts[0].split('.');

            if (direction === -1) {
                coeff_array[0] = Math.abs(coeff_array[0]);
                num = zero + '.' + new Array(l).join(zero) + coeff_array.join('');
            } else {
                const dec = coeff_array[1];
                if (dec) l = l - dec.length;
                num = coeff_array.join('') + new Array(l + 1).join(zero);
            }
        }

        if (sign < 0) {
            num = -num;
        }

        num = num.toString();
        num = num.slice(0, (decimals * -1)) + '.' + num.slice(decimals * -1);
        num = parseFloat(num);
        num = Math.round(num * 100) / 100;

        return num;
    }

    var tempCol;

    function getColor(value) {
        //value from 0 to 1
        if (value >= 100) {
            value = 100;
        }
        value = value / 100;
        value = value * -1.0;
        var hue = ((1 - value) * 70).toString(10);
        tempCol = ["hsl(", hue, ",100%,50%)"].join("");
        return ["hsl(", hue, ",100%, 50%)"].join("");
    }


    for (var i = 0; i < (tableSize); i++) {

        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdValue = document.createElement('td');
        var tdBalance = document.createElement('td');
        var tdPrice = document.createElement('td');
        var tdPrice24 = document.createElement('td');
        var tdPrice7 = document.createElement('td');
        var tdPrice30 = document.createElement('td');

        var truBalance = scientificToDecimal(jData.tokens[i].balance, jData.tokens[i].tokenInfo.decimals);

        if (jData.tokens[i].tokenInfo.price.rate > 0) {

            tdValue.setAttribute("class", "symbolAppend");
            tdPrice.setAttribute("class", "symbolAppend");

            tdName.appendChild(document.createTextNode(truncate(jData.tokens[i].tokenInfo.name, 30) + " (" + truncate(jData.tokens[i].tokenInfo.symbol, 15) + ")"));
            tdValue.appendChild(document.createTextNode(commafy(decimalPlacer(jData.tokens[i].tokenInfo.price.rate * truBalance))));
            tdValue.id = "currencyAppender";
            tdBalance.appendChild(document.createTextNode(commafy(truBalance)));
            tdPrice.appendChild(document.createTextNode(jData.tokens[i].tokenInfo.price.rate));
            tdPrice.id = "currencyAppender";
            tdPrice24.appendChild(document.createTextNode(jData.tokens[i].tokenInfo.price.diff + "%"));
            tdPrice24.style.backgroundColor = getColor(jData.tokens[i].tokenInfo.price.diff);
            if (jData.tokens[i].tokenInfo.price.diff > 0) {
                tdPrice24.setAttribute("class", "positivePercent");
            }
            tdPrice7.appendChild(document.createTextNode(jData.tokens[i].tokenInfo.price.diff7d + "%"));
            tdPrice7.style.backgroundColor = getColor(jData.tokens[i].tokenInfo.price.diff7d);
            if (jData.tokens[i].tokenInfo.price.diff7d > 0) {
                tdPrice7.setAttribute("class", "positivePercent");
            }
            tdPrice30.appendChild(document.createTextNode(decimalPlacer(jData.tokens[i].tokenInfo.price.diff30d) + "%"));
            tdPrice30.style.backgroundColor = getColor(decimalPlacer(jData.tokens[i].tokenInfo.price.diff30d));
            if (jData.tokens[i].tokenInfo.price.diff30d > 0) {
                tdPrice30.setAttribute("class", "positivePercent");
            }


            tbdy.appendChild(tr);
            tr.appendChild(tdName);
            tr.appendChild(tdValue);
            tr.appendChild(tdBalance);
            tr.appendChild(tdPrice);
            tr.appendChild(tdPrice24);
            tr.appendChild(tdPrice7);
            tr.appendChild(tdPrice30);


            portfolioValue = portfolioValue + (jData.tokens[i].tokenInfo.price.rate * truBalance);

        } else if (toHide == false) {

            tdName.appendChild(document.createTextNode(truncate(jData.tokens[i].tokenInfo.name, 22) + " (" + truncate(jData.tokens[i].tokenInfo.symbol, 15) + ")"));
            tdValue.appendChild(document.createTextNode("no market data"));
            tdBalance.appendChild(document.createTextNode(truBalance));
            tdPrice.appendChild(document.createTextNode("0"));
            tdPrice24.appendChild(document.createTextNode("N/A"));
            tdPrice7.appendChild(document.createTextNode("N/A"));
            tdPrice30.appendChild(document.createTextNode("N/A"));

            tbdy.appendChild(tr);
            tr.appendChild(tdName);
            tr.appendChild(tdValue);
            tr.appendChild(tdBalance);
            tr.appendChild(tdPrice);
            tr.appendChild(tdPrice24);
            tr.appendChild(tdPrice7);
            tr.appendChild(tdPrice30);

        }

    }

    var trEth = document.createElement('tr');
    var tdNameEth = document.createElement('td');
    var tdValueEth = document.createElement('td');
    var tdBalanceEth = document.createElement('td');
    var tdPriceEth = document.createElement('td');
    var tdPrice24Eth = document.createElement('td');
    var tdPrice7Eth = document.createElement('td');
    var tdPrice30Eth = document.createElement('td');

    tbdy.appendChild(trEth);
    trEth.appendChild(tdNameEth);
    trEth.appendChild(tdValueEth);
    trEth.appendChild(tdBalanceEth);
    trEth.appendChild(tdPriceEth);
    trEth.appendChild(tdPrice24Eth);
    trEth.appendChild(tdPrice7Eth);
    trEth.appendChild(tdPrice30Eth);

    tdNameEth.appendChild(document.createTextNode("Ethereum (ETH)"));
    tdValueEth.appendChild(document.createTextNode(commafy(decimalPlacer(ethPrice * jData.ETH.balance))));
    tdValueEth.id = "currencyAppender";
    tdBalanceEth.appendChild(document.createTextNode(eightDecimalPlacer(jData.ETH.balance)));
    tdPriceEth.appendChild(document.createTextNode(decimalPlacer(ethPrice)));
    tdPriceEth.id = "currencyAppender";
    tdPrice24Eth.appendChild(document.createTextNode(eth24 + "%"));
    tdPrice24Eth.style.backgroundColor = getColor(eth24);

    if (eth24 > 0) {
        tdPrice24Eth.setAttribute("class", "positivePercent");
    }

    tdPrice7Eth.appendChild(document.createTextNode(eth7 + "%"));
    tdPrice7Eth.style.backgroundColor = getColor(eth7);
    if (eth7 > 0) {
        tdPrice7Eth.setAttribute("class", "positivePercent");
    }

    tdPrice30Eth.appendChild(document.createTextNode("sorry, no data"));


    tbl.appendChild(tbdy);
    mainContain.appendChild(tbl);

    var portfolioValueBox = document.createElement('div');
    var portfolioValueBoxText = document.createElement('h3');
    portfolioValueBoxText.setAttribute("id", "portfolioValueBoxNode");

    portfolioValue = portfolioValue + (ethPrice * jData.ETH.balance);

    portfolioValueBox = document.getElementsByClassName("priceDisplay")[0];
    portfolioValueBox.appendChild(portfolioValueBoxText);
    portfolioValueBoxText.appendChild(document.createTextNode("Address value: $" + commafy(decimalPlacer(portfolioValue))));

    document.getElementById("loadingBox").setAttribute("hidden", "true");

    if (fromSearch === false) {

        var updatePortfolioValue = false;
        var addressToBeUpdated;

        for (var i = 0; i < globObjectSize; i++) {
            if (myAddressesGlob[i].address == addrex) { // could cause failure 
                updatePortfolioValue = true;
                addressToBeUpdated = i;
            } else {}
        }

        var lastValue = myAddressesGlob[addressToBeUpdated].totalValue;
        lastValue = lastValue.replace(/\$/g, '');
        lastValue = lastValue.replace(/\,/g, '');
        parseFloat(lastValue);

        if (updatePortfolioValue = true) {

            myAddressesGlob[addressToBeUpdated].totalValue = "$" + commafy(decimalPlacer(portfolioValue));
            addressObject = toObject(myAddressesGlob);

            var changeShower = (threeDecimalPlacer((1 - (lastValue / portfolioValue))));
            var changeShowerDisplay;
            if (changeShower > 0.0) {
                changeShower = "+" + changeShower + "%";
                changeShowerDisplay = ", " + changeShower + " since last check";
            } else {
                changeShower = changeShower + "%";
                changeShowerDisplay = ", " + changeShower + " since last check";
            }
            var choiceDiv = document.getElementById("choices-choicesDrop-item-choice-" + (addressToBeUpdated + 2));
            choiceDiv.innerText = myAddressesGlob[(addressToBeUpdated)].name + " (" + myAddressesGlob[(addressToBeUpdated)].totalValue + ")" + " | " + "    " + changeShower;

            document.getElementById("portfolioValueBoxNode").innerHTML = "Address value: $" + commafy(decimalPlacer(portfolioValue)) + changeShowerDisplay;


            chrome.storage.local.set(addressObject, function() {});

        }

    }

// below needs to be fixed for 1.0.2

    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

    const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
        const table = th.closest('table');
        Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
            .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
            .forEach(tr => table.appendChild(tr));
    })));
}

// beta pointed out this needs to occur before table DOM is loaded
