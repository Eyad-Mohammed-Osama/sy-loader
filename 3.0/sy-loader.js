
/*

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.



*/


window.onload=function() {
var loader=document.querySelectorAll("[data-sy-loader=true]");
var i;
for (i=0;i<loader.length;i++)
{



var syStyleCreating=document.createElement("STYLE");
var syStyleInfo=document.createTextNode("@keyframes loaderSpin {from {transform:rotate(0deg);} to {transform:rotate(360deg);}} @-webkit-keyframes loaderSpin {from {-webkit-transform:rotate(0deg);} to {-webkit-transform:rotate(360deg);}} @-moz-keyframes loaderSpin {from {-moz-transform:rotate(0deg);} to {-moz-transform:rotate(360deg);}} @-ms-keyframes loaderSpin {from {-ms-transform:rotate(0deg);} to {-ms-transform:rotate(360deg);}} @-o-keyframes loaderSpin {from {-o-transform:rotate(0deg);} to {-o-transform:rotate(360deg);}} [data-sy-loader=true] {border-style:solid;border-top-style:solid;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;animation-name:loaderSpin;-webkit-animation-name:loaderSpin;-moz-animation-name:loaderSpin;-ms-animation-name:loaderSpin;-o-animation-name:loaderSpin;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-duration:2s;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;-o-animation-duration:2s;width:15px;height:15px;}[data-sy-loader-mode=],[data-sy-loader-mode=default],[data-sy-loader-mode=ease]{animation-timing-function:ease;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;}[data-sy-loader-mode=linear]{animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;-o-animation-timing-function:linear;}[data-sy-loader-mode=ease-in]{animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;-moz-animation-timing-function:ease-in;-ms-animation-timing-function:ease-in;-o-animation-timing-function:ease-in;}[data-sy-loader-mode=ease-out]{animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;-moz-animation-timing-function:ease-out;-ms-animation-timing-function:ease-out;-o-animation-timing-function:ease-out;}[data-sy-loader-mode=ease-in-out]{animation-timing-function:ease-in-out;-webkit-animation-timing-function:ease-in-out;-moz-animation-timing-function:ease-in-out;-ms-animation-timing-function:ease-in-out;-o-animation-timing-function:ease-in-out;}[data-sy-loader-delay=],[data-sy-loader-delay=default]{animation-delay:500ms;-webkit-animation-delay:500ms;-moz-animation-delay:500ms;-ms-animation-delay:500ms;-o-animation-delay:500ms;}[data-sy-loader-direction=],[data-sy-loader-direction=default],[data-sy-loader-direction=normal]{animation-direction:normal;-webkit-animation-direction:normal;-moz-animation-direction:normal;-ms-animation-direction:normal;-o-animation-direction:normal;}[data-sy-loader-direction=reverse]{animation-direction:reverse;-webkit-animation-direction:reverse;-moz-animation-direction:reverse;-ms-animation-direction:reverse;-o-animation-direction:reverse;}[data-sy-loader-direction=alternate]{animation-direction:alternate;-webkit-animation-direction:alternate;-moz-animation-direction:reverse;-ms-animation-direction:alternate;-o-animation-direction:alternate;}[data-sy-loader-direction=alternate-reverse]{animation-direction:alternate-reverse;-webkit-animation-direction:alternate-reverse;-moz-animation-direction:alternate-reverse;-ms-animation-direction:alternate-reverse;-o-animation-direction:alternate-reverse;}[data-sy-loader-border-type=solid]{border-style:solid;border-top-style:solid;}[data-sy-loader-border-type=dashed]{border-style:dashed;border-top-style:dashed;}[data-sy-loader-border-type=dotted]{border-style:dotted;border-top-style:dotted;}[data-sy-loader-border-type=double]{border-style:double;border-top-style:double;}[data-sy-loader-border-type=groove]{border-style:groove;border-top-style:groove;}[data-sy-loader-border-type=inset]{border-style:inset;border-top-style:inset;}[data-sy-loader-border-type=outset]{border-style:outset;border-top-style:outset;}[data-sy-loader-border-type=ridge]{border-style:ridge;border-top-style:ridge;}[data-sy-loader-border-width=],[data-sy-loader-border-width=default]{border-width:10px;border-top-width:10px;}[data-sy-loader-border-color=],[data-sy-loader-border-color=default]{border-color:black;}[data-sy-loader-spinner-color=],[data-sy-loader-spinner-color=default]{border-top-color:silver;}[data-sy-loader-radius=default]{width:15px;height:15px;}");
syStyleCreating.appendChild(syStyleInfo);
document.body.appendChild(syStyleCreating);


loader[i].style["animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-webkit-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-moz-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-ms-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-o-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");






loader[i].style["animation-duration"]=loader[i].getAttribute("data-sy-loader-duration");
 loader[i].style["-moz-animation-duration"]=loader[i].getAttribute("data-sy-loader-duration"); 
 loader[i].style["-webkit-animation-duration"]=loader[i].getAttribute("data-sy-loader-duration"); 
 loader[i].style["-ms-animation-duration"]=loader[i].getAttribute("data-sy-loader-duration"); 



loader[i].style["border-width"]=loader[i].getAttribute("data-sy-loader-border-width");
 loader[i].style["border-top-width"]=loader[i].getAttribute("data-sy-loader-border-width"); 



 loader[i].style["border-color"]= loader[i].getAttribute("data-sy-loader-border-color");




 loader[i].style["border-top-color"]=loader[i].getAttribute("data-sy-loader-spinner-color");



 loader[i].style.width=loader[i].getAttribute("data-sy-loader-radius");
 loader[i].style.height=loader[i].getAttribute("data-sy-loader-radius"); 




}
}
