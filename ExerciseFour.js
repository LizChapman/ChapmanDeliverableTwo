var a = "Since it is morning, you should be eating breakfast. We recommend eggs and toast.";
var b = "Since it is afternoon, you should be eating lunch. We recommend a salad.";
var c = "Since it is evening, you should be eating dinner. We recommend chicken and rice.";
var d = "what time of day is it?";
var e = "morning";
var f = "afternoon";
var g = "evening";
var y = "Does not comput... bleep blop blorp beep";

var z = prompt(d);

switch(z){
  case e:
    console.log(a);
    break;
  case f:
    console.log(b);
    break;
  case g:
    console.log(c);
    break;
  default:
    console.log(y);
}
