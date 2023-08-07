// (function(){
//     document.addEventListener('DOMContentLoaded', function(){
//         document.getElementById('greeting').innerHTML = "Hello my friend!";
//         Logger("Greeting has been updated");
//     })
// })();

var Logger = require('./logger.js');

//update content of greeting element when DOM has been loaded
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('greeting').innerHTML = "Hello my friend!";
    Logger("Greeting has been updated");
})