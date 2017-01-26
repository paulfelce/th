
var hidden = false;
var qrcode1 ; 
var qrcode2 ; 
var qrcode3 ; 
var qrcode4 ; 
var qrcode5 ; 
var qrcode6 ;
$(function(){
qrcode1 = new QRCode("qrcode1");
qrcode2 = new QRCode("qrcode2");
qrcode3 = new QRCode("qrcode3");
qrcode4 = new QRCode("qrcode4");
qrcode5 = new QRCode("qrcode5");
qrcode6 = new QRCode("qrcode6");
});
function toggle(){
  if(hidden){
    $("#version").show()
    $("#text1").show()
    $("#text2").show()
    $("#text3").show()
    $("#text4").show()
    $("#text5").show()
    $("#text6").show()
  }
  else
    {
      $("#version").hide()
      $("#text1").hide()
      $("#text2").hide()
      $("#text3").hide()
      $("#text4").hide()
      $("#text5").hide()
      $("#text6").hide()
    }
  hidden = !hidden
}
