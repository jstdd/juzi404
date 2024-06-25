var xhttp = new XMLHttpRequest();
　　xhttp.onreadystatechange = function() {
　　　　if (this.readyState == 4 && this.status == 200) {
　　　　console.log(this.responseText);
　　　　}
　　};
　　xhttp.open("POST", "https://www.huaban.com/v3/wechat/qrcode", true);
　　xhttp.withCredentials = true;
  xhttp.send();
