window.readyState = first();
window.setInterval(first, 1000);
function first() {
  var id1440 = "css1440";
  var id1366 = "css1366";
  var id700 = "css700";
  var id600 = "css600";
  var id500 = "css500";
  var id390 = "css390";
  var id300 = "css300";
  var id250 = "css250";

  if (
    !document.getElementById(id1440) &&
    window.screen.width >= "1440" &&
    document.documentElement.clientWidth >= "1440"
  ) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id1440;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 1440px)";
    link.href = "1440X900.css";

    head.appendChild(link);
  } else if (
    !document.getElementById(id1366) &&
    window.screen.width >= "1366" &&
    window.screen.width <= "1439" &&
    document.documentElement.clientWidth >= "1366" &&
    document.documentElement.clientWidth >= "1439"
  ) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id1366;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 1366px) and (max-width:1439px)";
    link.href = "1366X768.css";

    head.appendChild(link);
  } else if (
    !document.getElementById(id700) &&
    window.screen.width >= "700" &&
    window.screen.width <= "1365"
  ) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id700;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 700px) and (max-width:1365px)";
    link.href = "700-1365.css";

    head.appendChild(link);
  } else if (
    !document.getElementById(id600) &&
    window.screen.width >= "600" &&
    window.screen.width <= "699"
  ) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id600;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 600px) and (max-width: 699px)";
    link.href = "600X400.css";

    head.appendChild(link);
  } else if (
    !document.getElementById(id500) &&
    window.screen.width >= "500" &&
    window.screen.width <= "599"
  ) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id500;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 500px) and (max-width: 599px)";
    link.href = "500X600.css";

    head.appendChild(link);
  } else if (
    !document.getElementById(id390) &&
    window.screen.width >= "390" &&
    window.screen.width <= "499"
  ) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id390;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 390px) and (max-width: 499px)";
    link.href = "390X400.css";

    head.appendChild(link);
  } else if (
    !document.getElementById(id300) &&
    window.screen.width >= "300" &&
    window.screen.width <= "389"
  ) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id300;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 300px) and (max-width: 389px)";
    link.href = "300X400.css";

    head.appendChild(link);
  } else if (!document.getElementById(id250) && window.screen.width <= "299") {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id250;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (max-width: 299px)";
    link.href = "250X400.css";

    head.appendChild(link);
  }
}

$(document).ready(function () {
  var _originalSize = $(window).width() + $(window).height();
  $(window).resize(function () {
    if ($(window).width() + $(window).height() != _originalSize) {
      first();
    }
  });
});

window.addEventListener("resize", first);

function second() {
  var id1440 = "css1440";
  var id1366 = "css1366";
  var id700 = "css700";
  var id600 = "css600";
  var id500 = "css500";
  var id390 = "css390";
  var id300 = "css300";
  var id250 = "css250";

  if (!document.getElementById(id1440)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id1440;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 1440px)";
    link.href = "1440X900.css";

    head.appendChild(link);
  }
  if (!document.getElementById(id1366)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id1366;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 1366px) and (max-width:1439px)";
    link.href = "1366X768.css";

    head.appendChild(link);
  }
  if (!document.getElementById(id700)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id700;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 700px) and (max-width:1365px)";
    link.href = "700-1365.css";

    head.appendChild(link);
  }
  if (!document.getElementById(id600)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id600;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 600px) and (max-width: 699px)";
    link.href = "600X400.css";

    head.appendChild(link);
  }
  if (!document.getElementById(id500)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id500;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 500px) and (max-width: 599px)";
    link.href = "500X600.css";

    head.appendChild(link);
  }
  if (!document.getElementById(id390)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id390;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 390px) and (max-width: 499px)";
    link.href = "390X400.css";

    head.appendChild(link);
  }
  if (!document.getElementById(id300)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id300;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (min-width: 300px) and (max-width: 389px)";
    link.href = "300X400.css";

    head.appendChild(link);
  }
  if (!document.getElementById(id250)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = id250;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "screen and (max-width: 299px)";
    link.href = "250X400.css";

    head.appendChild(link);
  }
}

setTimeout(() => {
  second();
}, 1000);
