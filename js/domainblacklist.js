// This JS is based almost entirely on Ether Address Lookup - Donate to the author: 0x661b5dc032bedb210f225df4b1aa2bdd669b38bc
var warningDisplay = '<html><head></head><body style="background-color:red;padding:150px;font-family: sans-serif;"><div class="centered" style="display:flex;justify-content:center;color:white;max-width: 500px;flex-direction:column;"> <h2>WARNING!</h2><br><p>This site is trying to steal your private data, install malware on your device or trick you in to doing something.</p><p>Take note of the URL you have been directed to. Please inform other users that may have been directed here that it is a malicious site.</p><h4>- Security provided by</h4><h3> <strong>Portfolieth Advanced Protection</strong></h3></div></body></html>';
(function() {
  var objBrowser = chrome ? chrome : browser;
  objBrowser.runtime.sendMessage({func:"blacklist_domains"}, function(objResponse) {
    if (objResponse && objResponse.hasOwnProperty("resp")) {
      if (objResponse.resp == 1) {
        blacklistedDomainCheck();
      }
    }
  });
  function blacklistedDomainCheck() {
    var objBrowser = chrome ? chrome : browser;
    var arrBlacklistedDomains = [];
    var arrWhitelistedDomains = ["www.myetherwallet.com", "myetherwallet.com"];
    objBrowser.runtime.sendMessage({func:"blacklist_whitelist_domain_list"}, function(objResponse) {
      if (objResponse && objResponse.hasOwnProperty("resp")) {
        var objDomainLists = JSON.parse(objResponse.resp);
        var arrWhitelistedDomains = objDomainLists.whitelist;
        var arrBlacklistedDomains = objDomainLists.blacklist;
        return doBlacklistCheck(arrWhitelistedDomains, arrBlacklistedDomains);
      }
    });
  }
  function doBlacklistCheck(arrWhitelistedDomains, arrBlacklistedDomains) {
    objBrowser.runtime.sendMessage({func:"block_punycode_domains"}, function(objResponse) {
      if (objResponse && objResponse.hasOwnProperty("resp")) {
        var strCurrentTab = window.location.hostname.replace(/www\./g, "");
        if (objResponse.resp == 1) {
          var arrDomainParts = strCurrentTab.split(".");
          arrDomainParts.forEach(function(strDomainPart) {
            if (strDomainPart.startsWith("xn--")) {
              document.documentElement.innerHTML = warningDisplay;
              return false;
            }
          });
        }
      }
    });
    var strCurrentTab = window.location.hostname.replace(/www\./g, "");
    if (arrWhitelistedDomains.indexOf(strCurrentTab) >= 0) {
      console.log("Domain " + strCurrentTab + " is whitelisted on EAL!");
      return false;
    }
    if (arrBlacklistedDomains.length > 0) {
      var isBlacklisted = arrBlacklistedDomains.indexOf(strCurrentTab) >= 0 ? true : false;
      var blHolisticStatus = false;
      if (isBlacklisted === false && arrWhitelistedDomains.indexOf(strCurrentTab) < 0) {
        strCurrentTab = punycode.toUnicode(strCurrentTab);
        var source = strCurrentTab.replace(/\./g, "");
        var intHolisticMetric = levenshtein(source, "myetherwallet");
        var intHolisticLimit = 5;
        blHolisticStatus = intHolisticMetric > 0 && intHolisticMetric < intHolisticLimit ? true : false;
        if (blHolisticStatus === false) {
          intHolisticMetric = levenshtein(source, "mycrypto");
          blHolisticStatus = intHolisticMetric > 0 && intHolisticMetric < 3 ? true : false;
        }
      }
      if (arrWhitelistedDomains.indexOf(strCurrentTab) < 0 && (isBlacklisted === true || blHolisticStatus === true)) {
        console.warn(window.location.href + " is blacklisted by EAL - " + (isBlacklisted ? "Blacklisted" : "Levenshtein Logic"));
        document.documentElement.innerHTML = warningDisplay;
        return false;
      }
    }
    objBrowser.runtime.sendMessage({func:"3rd_party_blacklist_domains"}, function(objResponse) {
      if (objResponse && objResponse.hasOwnProperty("resp")) {
        if (objResponse.resp == 1) {
          objBrowser.runtime.sendMessage({func:"3p_blacklist_domain_list"}, function(objResponse) {
            if (objResponse && objResponse.hasOwnProperty("resp")) {
              var obj3rdPartyLists = JSON.parse(objResponse.resp);
              var strCurrentTab = window.location.hostname.replace(/www\./g, "");
              for (var str3rdPartyIdentifier in obj3rdPartyLists) {
                if (obj3rdPartyLists[str3rdPartyIdentifier].format == "sha256") {
                  strCurrentTab = sha256(strCurrentTab);
                }
                if (obj3rdPartyLists[str3rdPartyIdentifier].domains.indexOf(strCurrentTab) >= 0) {
                  console.warn(window.location.href + " is blacklisted by " + str3rdPartyIdentifier);
                  document.documentElement.innerHTML = warningDisplay;
                  return false;
                }
              }
            }
          });
        }
      }
    });
  }
  function levenshtein(a, b) {
    if (a.length == 0) {
      return b.length;
    }
    if (b.length == 0) {
      return a.length;
    }
    if (a.length > b.length) {
      var tmp = a;
      a = b;
      b = tmp;
    }
    var row = [];
    for (var i$0 = 0; i$0 <= a.length; i$0++) {
      row[i$0] = i$0;
    }
    for (var i = 1; i <= b.length; i++) {
      var prev = i;
      for (var j = 1; j <= a.length; j++) {
        var val;
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          val = row[j - 1];
        } else {
          val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
        }
        row[j - 1] = prev;
        prev = val;
      }
      row[a.length] = prev;
    }
    return row[a.length];
  }
})();