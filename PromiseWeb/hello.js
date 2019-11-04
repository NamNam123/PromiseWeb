function ShowHelloMessage() {
    var name = document.getElementById("myname");
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
}
promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            message: "The man likes to keep his word",
            code: "aManKeepsHisWord"
        });

       
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time)
    }, 5000);
});
console.log(promise2);