document.addEventListener("contextmenu", (event) => event.preventDefault());
//error box toast appearance

setTimeout(() => {
  document.getElementById("errorBox").style.visibility = "visible";
}, 3000);
setTimeout(() => {
  document.getElementById("visa_logo").style.visibility = "visible";
}, 600);
setTimeout(() => {
  document.getElementById("body").style.visibility = "visible";
}, 600);

function Err1440() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "100px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "43px";
  }, 3000);
}

function Err1366() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "90px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "43px";
  }, 3000);
}

function Err700() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "75px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "33px";
  }, 3000);
}

function Err500() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "200px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "180px";
  }, 3000);

  document.getElementById("submitbtn").addEventListener("click", subm);
  document.getElementById("staticpin_tab").addEventListener("click", stat);

  function stat() {
    document.getElementById("errorBox").style.bottom = "80px";
  }

  function subm() {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "1";
    document.getElementById("errorBox").style.bottom = "100px";
    setTimeout(() => {
      document.getElementById("errorBox").style.visibility = "visible";
      document.getElementById("errorBox").style.opacity = "0";
      document.getElementById("errorBox").style.bottom = "80px";
    }, 3000);
  }
}

function box() {
  if (window.screen.width >= 1440) {
    Err1440();
  } else if (window.screen.width <= 1439 && window.screen.width >= 1366) {
    Err1366();
  } else if (window.screen.width <= 1365 && window.screen.width >= 700) {
    Err700();
  } else if (window.screen.width <= 599 && window.screen.width >= 500) {
    Err500();
  } else {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "1";
    document.getElementById("errorBox").style.bottom = "45px";
    setTimeout(() => {
      document.getElementById("errorBox").style.visibility = "visible";
      document.getElementById("errorBox").style.opacity = "0";
      document.getElementById("errorBox").style.bottom = "30px";
    }, 3000);
  }
}

//close error
function clserr() {
  document.getElementById("errorBox").style.opacity = "0";
}
//otp errormsg
function otperrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Invaild OTP";

  var otpbox = document.getElementsByClassName("otpbox");
  for (var i = 0; i < otpbox.length; i++) {
    otpbox[i].style.border = "0.5px solid rgb(255, 0, 49 ,0.5)";
  }
  document.getElementById("otpexclaim").style.opacity = "1";
  setTimeout(() => {
    for (var i = 0; i < otpbox.length; i++) {
      otpbox[i].style.border = "0.5px solid #E1E7F3";
    }
    document.getElementById("otpexclaim").style.opacity = "0";
  }, 3000);
}
//pin errormsg
function pinerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Invaild ATM PIN";

  var pinbox = document.getElementsByClassName("pinbox");
  for (var i = 0; i < pinbox.length; i++) {
    pinbox[i].style.border = "0.5px solid rgb(255, 0, 49 ,0.5)";
  }
  document.getElementById("pinexclaim").style.opacity = "1";
  setTimeout(() => {
    for (var i = 0; i < pinbox.length; i++) {
      pinbox[i].style.border = "0.5px solid #E1E7F3";
    }
    document.getElementById("pinexclaim").style.opacity = "0";
  }, 3000);
}
//expiry errorBox

function expiryerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Expiry date mismatch";
  document.getElementById("expbox").style.border =
    "0.5px solid rgb(255, 0, 49 ,0.5)";
  document.getElementById("resetmonthbox").style.border =
    "0.5px solid rgb(255, 0, 49 ,0.5)";
  document.getElementById("pinExpexclaim").style.opacity = "1";
  document.getElementById("rstexpexclaim").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("expbox").style.border = "0.5px solid #E1E7F3";
    document.getElementById("resetmonthbox").style.border =
      "0.5px solid #E1E7F3";
    document.getElementById("pinExpexclaim").style.opacity = "0";
    document.getElementById("rstexpexclaim").style.opacity = "0";
  }, 3000);
}
//password errorBox
function passerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Password doesnt matching";
  document.getElementById("passbox").style.border =
    "0.5px solid rgb(255, 0, 49 ,0.5)";
  document.getElementById("passexclaim").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("passbox").style.border = "0.5px solid #E1E7F3";
    document.getElementById("passexclaim").style.opacity = "0";
  }, 3000);
}
//reset otp errormsg
function resetOTPerrorBox() {
  box();
  document.getElementById("msginvalid").innerHTML = "Invaild OTP";
  var rstOtpbox = document.getElementsByClassName("rstOtpbox");
  for (var i = 0; i < rstOtpbox.length; i++) {
    rstOtpbox[i].style.border = "0.5px solid rgb(255, 0, 49 ,0.5)";
  }
  document.getElementById("rstotpexclaim").style.opacity = "1";
  setTimeout(() => {
    for (var i = 0; i < rstOtpbox.length; i++) {
      rstOtpbox[i].style.border = "0.5px solid #E1E7F3";
    }
    document.getElementById("rstotpexclaim").style.opacity = "0";
  }, 3000);
}

//disable buttons
function dblotpbtn() {
  const otpbtn = document.getElementById("otpverifybtn");
  otpbtn.disabled = "true";
  otpbtn.value = "";
  document.getElementById("otploader").style.opacity = "1";
  document.getElementById("otploader").style.visibility = "visible";

  setTimeout(() => {
    //otpbtn.disabled = false;
    otpbtn.value = "VERIFY & PROCEED";
    document.getElementById("otploader").style.opacity = "0";
    document.getElementById("otploader").style.visibility = "hidden";
  }, 4000);
}

function dblpinbtn() {
  const pinbtn = document.getElementById("pinverifybtn");
  pinbtn.disabled = "true";
  pinbtn.value = "";
  document.getElementById("pinloader").style.opacity = "1";
  document.getElementById("pinloader").style.visibility = "visible";
  setTimeout(() => {
    //pinbtn.disabled = false;
    pinbtn.style.opacity = "1";
    pinbtn.value = "VERIFY & PROCEED";
    document.getElementById("pinloader").style.opacity = "0";
    document.getElementById("pinloader").style.visibility = "hidden";
  }, 4000);
}

function dblpassbtn() {
  const pinbtn = document.getElementById("passbtn");
  pinbtn.disabled = "true";
  pinbtn.value = "";
  document.getElementById("passloader").style.opacity = "1";
  document.getElementById("passloader").style.visibility = "visible";
  setTimeout(() => {
    //pinbtn.disabled = false;
    pinbtn.value = "VERIFY & PROCEED";
    document.getElementById("passloader").style.opacity = "0";
    document.getElementById("passloader").style.visibility = "hidden";
  }, 4000);
}

function dblsubmitbtn() {
  const pinbtn = document.getElementById("submitbtn");
  pinbtn.disabled = "true";
  pinbtn.value = "";
  document.getElementById("resetloader").style.opacity = "1";
  document.getElementById("resetloader").style.visibility = "visible";
  setTimeout(() => {
    //pinbtn.disabled = false;
    pinbtn.value = "SUBMIT";
    document.getElementById("resetloader").style.opacity = "0";
    document.getElementById("resetloader").style.visibility = "hidden";
  }, 4000);
}
//tab switch
function tabOpen(evt, cnt) {
  var i, dyncnt, tabbtn;
  dyncnt = document.getElementsByClassName("dyncnt");
  for (i = 0; i < dyncnt.length; i++) {
    dyncnt[i].style.display = "none";
  }
  tabbtn = document.getElementsByClassName("tabbtn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].className = tabbtn[i].className.replace(" active", "");
  }
  document.getElementById(cnt).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("otptab").click();

function tabclr() {
  document.getElementById("otptab").className += " active";
}

function tabclr2() {
  document.getElementById("staticpin_tab").className += " active";
}
//container height
function container(ht, htn) {
  document.getElementById("container").style.height = ht + "px";
  document.getElementById("container").style.height = htn + "%";
  if (window.screen.width <= 1365 && window.screen.width >= 700) {
    document.getElementById("container").style.height = "";
  }
}

function container1(ht, htn) {
  if (window.screen.width <= 1439 && window.screen.width >= 1366) {
    document.getElementById("container").style.height = ht + "px";
    document.getElementById("container").style.height = htn + "%";
  }
}

function container2(ht, htn) {
  if (window.screen.width >= 1440) {
    document.getElementById("container").style.height = ht + "px";
    document.getElementById("container").style.height = htn + "%";
    document.getElementById("container").style.height = "";
  }
}
//Footer adjustment
// function foot1(hgt, pos) {
//   if (window.screen.width <= 599 && window.screen.width >= 500) {
//     document.getElementById("footer").style.height = hgt + "px";
//     document.getElementById("expirewrapper").style.bottom = pos + "px";
//   } else {
//     return null;
//   }
// }
//resend timer

//Tabbar configuration

//next otp box
function mvCursor(from, to, valid) {
  var lgth = document.getElementById(from).value.length;
  var from = document.getElementById(from);
  var to = document.getElementById(to);
  var maxLgth = from.getAttribute("maxlength");
  var minLgth = from.getAttribute("minlength");

  if (lgth == minLgth) {
    document.getElementById("resetconfirm").disabled = false;
  } else if (lgth !== maxLgth && !from.value.match(valid)) {
    //to.disabled = "true";
    from.focus();
    return false;
  } else if (lgth == maxLgth && from.value.match(valid)) {
    to.disabled = false;
    to.focus();
  }
}

$("#resetconfirm,#resetcreate").on("keyup", function () {
  if (
    $("#resetcreate").val() == $("#resetconfirm").val() &&
    $("#resetcreate").val() != "" &&
    $("#resetconfirm").val() != ""
  ) {
    $("#resetconfirm").css("border", "0.5px solid #7CFC00");
    $("#resetcreate").css("border", "0.5px solid #7CFC00");
    $("#resetconfirm").css("color", "black");
  } else {
    $("#resetconfirm").css("color", "red");
    $("#resetconfirm").css("border", "0.5px solid #e1e7f3");
    $("#resetcreate").css("color", "black");
  }
});

function otpvalid(val, idi) {
  if (idi.value.match(val)) {
    document.getElementById("otpverifybtn").disabled = false;
    document.getElementById("pinverifybtn").disabled = false;
    document.getElementById("passbtn").disabled = false;
    document.getElementById("submitbtn").disabled = false;
  }
}

function otpemptied(e) {
  e.preventDefault();
  var i, otp;
  var boxes = 0;
  otp = document.getElementsByClassName("otpbox");
  for (i = 0; i < otp.length; i++) {
    if (otp[i].value == "") {
      boxes++;
      document.getElementById("otpverifybtn").disabled = "true";
      return false;
    }
  }
  if (boxes == 0) {
    document.getElementById("otpverifybtn").disabled = false;
  }
}

function pinemptied(e) {
  e.preventDefault();
  var i, pin;
  var boxes = 0;
  pin = document.getElementsByClassName("pinbox");
  for (i = 0; i < pin.length; i++) {
    if (pin[i].value == "") {
      boxes++;

      document.getElementById("pinverifybtn").disabled = "true";
      return false;
    }
  }
  monthindex = document.getElementById("month").selectedIndex;
  yearindex = document.getElementById("year").selectedIndex;
  if (boxes == 0 && monthindex != 0 && yearindex != 0) {
    document.getElementById("pinverifybtn").disabled = false;
  }
}

function subemptied(e) {
  e.preventDefault();
  var i, sub;
  var boxes = 0;
  sub = document.getElementsByClassName("rstOtpbox");
  for (i = 0; i < sub.length; i++) {
    if (sub[i].value == "") {
      boxes++;
      document.getElementById("submitbtn").disabled = "true";
      return false;
    }
  }
  monthindex = document.getElementById("rstmonth").selectedIndex;
  yearindex = document.getElementById("rstyear").selectedIndex;
  createvalue = document.getElementById("resetcreate").value;
  confirmvalue = document.getElementById("resetconfirm").value;
  if (
    boxes == 0 &&
    monthindex != 0 &&
    yearindex != 0 &&
    confirmvalue.match(createvalue)
  ) {
    document.getElementById("submitbtn").disabled = false;
  }
}

function backsp(from, pre) {
  pre = document.getElementById(pre);
  var key = event.keyCode || event.charCode;
  if (key == 8 || key == 46) {
    pre.value = "";
    from.value = "";
    pre.focus();
  }
}

document
  .getElementById("resendOTPbtn1")
  .addEventListener("click", function Resendbtn() {
    this.style.color = "green";
    setTimeout(() => {
      this.style.color = "#2a1563";
    }, 3000);
  });

document
  .getElementById("resendOTPbtn2")
  .addEventListener("click", function Resendbtn() {
    this.style.color = "green";
    setTimeout(() => {
      this.style.color = "#2a1563";
    }, 3000);
  });

function msgbox(response = "Response Message") {
  box();
  document.getElementById("msginvalid").innerHTML =
    "OTP has been sent to your mobile";
  document.getElementById("msginvalid").style.color = "#007C23";
  document.getElementById("errorBox").style.border = "0.3px solid #007C23";
  document.getElementById("errorBox").style.background = "#eaffef";
  document.getElementById("errorBox").style.justifyContent = "center";
  document.getElementById("crossbar").style.display = "none";
  document.getElementById("exclaim").style.display = "none";

  setTimeout(() => {
    document.getElementById("msginvalid").style.color = "#ff0031";
    document.getElementById("errorBox").style.border =
      "0.3px solid rgb(255, 0, 49, 0.6)";
    document.getElementById("errorBox").style.background = "#ffeff2";
    document.getElementById("crossbar").style.display = "block";
    document.getElementById("exclaim").style.display = "block";
    document.getElementById("errorBox").style.justifyContent = "";
  }, 4000);
}

$(document).ready(function () {
  var _originalSize = $(window).width() + $(window).height();
  $(window).resize(function () {
    if ($(window).width() + $(window).height() != _originalSize) {
      $(".footer").removeClass("fixed");
      $(".footer").addClass("outofview");
      if (window.screen.width <= 499) {
        document.getElementById("footer").style.opacity = "0";
      } else {
        document.getElementById("footer").style.opacity = "1";
      }
    } else {
      $(".footer").addClass("fixed");
      $(".footer").removeClass("outofview");
      document.getElementById("footer").style.opacity = "1";
    }
  });
});

//page timer
window.onload = countdown2();
var mins2 = 5;
var secs2 = mins2 * 60;

function countdown2() {
  setTimeout("Decrement2()", 60);
  mins2 = 1;
  secs2 = mins2 * 60;
}

function Decrement2() {
  if (document.getElementById) {
    minutes2 = document.getElementById("minutes2");
    seconds2 = document.getElementById("seconds2");
    if (seconds2 < 59) {
      seconds2.innerHTML = secs2;
    } else {
      minutes2.innerHTML = getminutes2();
      seconds2.innerHTML = getseconds2();
    }

    if (mins2 < 0) {
      minutes2.innerHTML = 0;
      seconds2.innerHTML = 0;
    } else {
      secs2--;
      setTimeout("Decrement2()", 1000);
    }
  }
}

function getminutes2() {
  mins2 = Math.floor(secs2 / 60);
  return mins2;
}

function getseconds2() {
  return secs2 - Math.round(mins2 * 60);
}

//Date set today
document.getElementById("fromdatebox").valueAsDate = new Date();

//Minimum date set as today
function mindate() {
  var dat = document.getElementById("fromdatebox").value;
  var todat = document.getElementById("todatebox");
  todat.min = dat;

  if (!document.getElementById("preauth").checked) {
    document.getElementById("nooftrans").value = "";
    todat.value = "";
  }
}

//radio change one as block other as value null
function seamless(evt, radio, other) {
  var i, dyncnt;
  dyncnt = document.getElementsByClassName("choices");
  for (i = 0; i < dyncnt.length; i++) {
    dyncnt[i].style.display = "none";
  }

  document.getElementById(radio).style.display = "block";
  document.getElementById(other).value = "";
  mindate();
}
document.getElementById("seamlessdate").click();

function preauthpopup() {
  if (document.getElementById("preauth").checked) {
    document.getElementById("seamlesswrap").style.display = "block";
    document.getElementById("seamlesspopup").style.display = "flex";
    document.getElementById("seamlesspopup").style.opacity = "1";
    document.getElementById("seamlesswrap").style.transform = "scale(1)";
    document.getElementById("container").style.filter = "brightness(0.5)";
  } else {
  }
}
function closepopup() {
  document.getElementById("seamlesswrap").style.display = "none";
  document.getElementById("seamlesspopup").style.display = "none";
  document.getElementById("container").style.filter = "none";
  document.getElementById("todatebox").value = "";
  document.getElementById("nooftrans").value = "";
  document.getElementById("preauth").checked = false;
}

function donepopup() {
  if (
    !document.getElementById("nooftrans").value == "" ||
    !document.getElementById("todatebox").value == ""
  ) {
    document.getElementById("preauth").checked = "true";
    document.getElementById("seamlesswrap").style.display = "none";
    document.getElementById("seamlesspopup").style.display = "none";
    document.getElementById("container").style.filter = "none";
  }
}
