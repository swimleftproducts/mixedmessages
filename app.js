import { assignEvents } from './modules/assignEvents.js';

// assign onclick functions
assignEvents("startButton");
$(".logo").click(function() {
    alert("Jquery success")
})

$(".menu").click(function(){
    $(this).hide()
    $("nav ul").css("display", "block")
})