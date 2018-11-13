window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'mytransport.auth0.com',
    clientID: 'YcwQ86axCL75rOSGelryPeqcHoS3DW8W',
    responseType: 'token id_token',
    scope: 'openid',
    redirectUri: window.location.href
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});