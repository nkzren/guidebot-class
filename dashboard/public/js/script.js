console.log('whuututt');
document.write('<link id="pagestyle" href="' + getCookie('theme') + '"rel="stylesheet" />');

function setCookie(cname, cvalue) {
  document.cookie = cname + '=' + cvalue;
}

function swapStyleSheet() {
  if (document.getElementById('swapButton').name === 'lightTheme') {
    document.getElementById('swapButton').innerHTML = '<i class="fa fa-fw fa-sun-o" aria-hidden="true"></i> Light theme';
    document.getElementById('pagestyle').setAttribute('href', '../public/css/darkly.css');
    setCookie('theme', '../public/css/darkly.css');
    document.getElementById('swapButton').name = 'darkTheme';
  } else {
    document.getElementById('pagestyle').setAttribute('href', '../public/css/spacelab.css');
    document.getElementById('swapButton').innerHTML = '<i class="fa fa-fw fa-moon-o" aria-hidden="true"></i> Dark theme';
    setCookie('theme', '../public/css/spacelab.css');
    document.getElementById('swapButton').name = 'lightTheme';
  }
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      if (c.substring(name.length, c.length).toString().startsWith('../')) {
        return c.substring(name.length, c.length);
      } else {
        return '../../public/css/darkly.css';
      }

    }
  }
  return '../../public/css/darkly.css';
}

function onload() {
  if (getCookie('theme') === '../../public/css/flatly.css') {
    document.getElementById('swapButton').name = 'lightTheme';
    document.getElementById('swapButton').innerHTML = '<i class="fa fa-fw fa-moon-o" aria-hidden="true"></i> Dark theme';
  } else {
    document.getElementById('swapButton').name = 'darkTheme';
    document.getElementById('swapButton').innerHTML = '<i class="fa fa-fw fa-sun-o" aria-hidden="true"></i> Light theme';
  }
  document.getElementById('loader').style.display = 'none';
}


window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    'palette': {
      'popup': {
        'background': '#030303',
        'text': '#ffffff'
      },
      'button': {
        'background': '#a300ff',
        'text': '#ffffff'
      }
    },
    'showLink': false,
    'content': {
      'message': 'This website uses cookies to ensure you get the best experience on our website. ',
      'dismiss': 'Got it!'
    },
  });
});
