let Iphone = function () {
    this.power = false,
        this.battery = function () {
            batteryPhone = 100;
            return batteryPhone;
        },
        this.SmsClipboard = function (SmsText) {
            let SmsTextResult = "";
            SmsTextResult = SmsText;
            return SmsTextResult;
        },
        this.SmsArrivalMemory = function () {

        },
        this.SmsdepartureMemory = function () {

        },
        this.checkPower = function () {

        },
        this.PowerPhone = function () {

        },
        this.chargePhone = function () {

        },
        this.NewSms = function () {

        },
        this.SmsArrival = function (SmsArrivalResult) {
            return SmsArrivalResult;
        },
        this.SmsDeparture = function () {

        },
        this.checkSms = function () {

        },
        this.checkSmsArrival = function () {

        },
        this.powerOn = function () {

        },
        this.powerOff = function () {

        }

};


let Nokia = function () {
    this.battery = function () {

    };
    this.SmsClipboard = function () {

    };
    this.SmsArrivalMemory = function () {

    };
    this.SmsdepartureMemory = function () {

    };
    this.checkPower = function () {

    };
    this.PowerPhone = function () {

    };
    this.chargePhone = function () {

    };
    this.NewSms = function () {

    };
    this.SmsArrival = function () {

    };
    this.SmsDeparture = function (SmsDepartureResult) {
        return SmsDepartureResult;
    };
    this.checkSms = function () {

    };
    this.checkSmsArrival = function () {

    };
    this.powerOn = function () {

    };
    this.powerOff = function () {

    }
};
let iphone = new Iphone();
let nokia = new Nokia();
let checkBateryIphone = iphone.battery()
let checkBateryNokia = iphone.battery()
let lowerBattery = true;
let CheckCharge = false;
function turnOff(){

}
$("#contactNokiaImg").click(function (){
    var display =  $("#screenNokia").css("display");
    var display2 = $("#screenNokia2").css("display");
    if(checkBateryNokia > 0){
        lowerBattery = false;
    }else{
        lowerBattery = true;

    }
    $(".loader").show()
    $(".NotiTurnOff").show()
    $("#ContactNokia").hide()
    $("#contactNokiaImg").hide()
    $("#nameContactNokia").hide()
    $("#SmsContentNokia").hide()
    $("#SmsWriteNokia").hide()

    setTimeout(function(){  $("#screenNokia").hide(); }, 3000);

    setTimeout(function(){ $("#screenNokia3").show(); }, 3000);

    // if (display != "none"){
    //
    // }else if(display2 != "none"){
    //     $("#screenNokia2").hide();
    //     $("#screenNokia").show();
    // }
})
$("#backNokia").click(function (){
    var display =  $("#screenNokia").css("display");
    var display2 = $("#screenNokia2").css("display");
    if (display != "block" && lowerBattery == false){
        $("#screenNokia2").show()
        $("#screenNokia3").hide()
        setTimeout(function(){  $(".loader").hide()}, 4000);
        setTimeout(function(){  $(".NotiTurnOff").hide()}, 4000);
        setTimeout(function(){  $("#screenNokia2").hide();}, 4000);
        setTimeout(function(){  $("#screenNokia").show();}, 4000);
        setTimeout(function(){  $("#ContactNokia").show();}, 4000);
        setTimeout(function(){  $("#contactNokiaImg").show();}, 4000);
        setTimeout(function(){  $("#nameContactNokia").show();}, 4000);
        setTimeout(function(){  $("#SmsContentNokia").show();}, 4000);
        setTimeout(function(){  $("#SmsWriteNokia").show();}, 4000);
    }



    // $("#ContactNokia").hide()
    // $("#contactNokiaImg").hide()
    // $("#nameContactNokia").hide()
    // $("#SmsContentNokia").hide()
    // $("#SmsWriteNokia").hide()

    // setTimeout(function(){  $("#screenNokia").hide(); }, 3000);
    //
    // setTimeout(function(){ $("#screenNokia3").show(); }, 3000);

    // if (display != "none"){
    //
    // }else if(display2 != "none"){
    //     $("#screenNokia2").hide();
    //     $("#screenNokia").show();
    // }
})
$("#homeNokia").click(function (){
    var display =  $("#screenNokia").css("display");
    var displayMenu = $("#screenMenu").css("display");
    var displayCamera = $("#Camera").css("display");
    if (display != "none"){
        $("#ContactNokia").hide()
        $("#contactNokiaImg").hide()
        $("#nameContactNokia").hide()
        $("#SmsContentNokia").hide()
        $("#SmsWriteNokia").hide()
        $("#screenNokia2").hide()
        $("#screenNokia3").hide()
        $("#screenNokia").hide()
        $("#Camera").hide()
        $("#video").hide()
        $("#screenMenu").show()
    }
    else if(displayMenu != "block" ){
        $("#ContactNokia").hide()
        $("#contactNokiaImg").hide()
        $("#nameContactNokia").hide()
        $("#SmsContentNokia").hide()
        $("#SmsWriteNokia").hide()
        $("#screenNokia2").hide()
        $("#screenNokia3").hide()
        $("#screenNokia").hide()
        $("#Camera").hide()
        $("#video").hide()
        $("#screenMenu").show()
        // $("#ContactNokia").show()
        // $("#contactNokiaImg").show()
        // $("#nameContactNokia").show()
        // $("#SmsContentNokia").show()
        // $("#SmsWriteNokia").show()
        // $("#screenNokia2").hide()
        // $("#screenNokia3").hide()
        // $("#screenNokia").show()
        // $("#screenMenu").hide()
        // $("#Camera").hide()
    }

})
function chargeBateryWhenLower(){
    CheckCharge = true;
    lowerBattery = false;
    checkBateryNokia = 1;
    $("#BatteryNokia").css("color","blue");

}
function chargeBatery(){
    CheckCharge = true;
    lowerBattery = false;
    $("#BatteryNokia").css("color","blue");

}
function ResultBattery() {
    let BatteryIphone = document.getElementById("BatteryIphone");
    let BatteryNokia = document.getElementById("BatteryNokia");

    BatteryIphone.innerHTML = checkBateryIphone + "%";
    BatteryNokia.innerHTML = checkBateryNokia + "%"
    if (checkBateryIphone == 80){
        $("#batteryLogoIphone").attr('src',"batterty80.png");
    }else if (checkBateryIphone == 50){
        $("#batteryLogoIphone").attr('src',"battery50.png");
    }else if (checkBateryIphone == 20){
        $("#batteryLogoIphone").attr('src',"batterty20.png");
    }


    if (checkBateryNokia == 80){
        $("#batteryLogoNokia").attr('src',"batterty80.png");
    }else if (checkBateryNokia == 50){
        $("#batteryLogoNokia").attr('src',"battery50.png");
    }else if (checkBateryNokia == 20){
        $("#batteryLogoNokia").attr('src',"batterty20.png");
        $("#BatteryNokia").css("color","red");
    }else if (checkBateryNokia == 0){
        lowerBattery = true;
        var display =  $("#screenNokia").css("display");
        var display2 = $("#screenNokia2").css("display");

        $(".loader").show()
        $(".NotiTurnOff").show()
        $("#ContactNokia").hide()
        $("#contactNokiaImg").hide()
        $("#nameContactNokia").hide()
        $("#SmsContentNokia").hide()
        $("#SmsWriteNokia").hide()

        setTimeout(function(){  $("#screenNokia").hide(); }, 3000);

        setTimeout(function(){ $("#screenNokia3").show(); }, 3000);

        // if (display != "none"){
        //
        // }else if(display2 != "none"){
        //     $("#screenNokia2").hide();
        //     $("#screenNokia").show();
        // }
    }
}



function chargeBateryPlus(){
    if (CheckCharge == true){
        if (checkBateryNokia >= 100){
            checkBateryNokia = 100;
        }else {
            checkBateryNokia += 1;
            ResultBattery()
        }
    }
}
let PlysEnergy = setInterval(chargeBateryPlus, 4000);

function cancerCharge(){
    clearInterval(PlysEnergy);
    $("#BatteryNokia").css("color","black");
    CheckCharge = false;
}

$("#imess").click(function (){
    $("#ContactNokia").show()
    $("#contactNokiaImg").show()
    $("#nameContactNokia").show()
    $("#SmsContentNokia").show()
    $("#SmsWriteNokia").show()
    $("#screenNokia2").hide()
    $("#screenNokia3").hide()
    $("#Camera").hide()
    $("#video").hide()
    $("#screenMenu").hide()
    $("#screenNokia").show()

})
$("#sendLogo").click(function () {
    $("#SmsContent").append(`<div class="SmsContentResultIphone">` + $("#SmsWriteContent").val() + `</div>`)
    $("#SmsContentNokia").append(`<div class="SmsContentResultIphone1">` + $("#SmsWriteContent").val() + `</div>`)
    checkBateryIphone -= 1;
    ResultBattery();
})
$("#sendLogoNokia").click(function () {

    let a = ""
    if ($("#SmsWriteContentNokia").val() === "") {

    } else {
        $("#SmsContentNokia").append(`<div class="SmsContentResultNokia1">` + $("#SmsWriteContentNokia").val() + `</div>`)
        $("#SmsContent").append(`<div class="SmsContentResultNokia">` + $("#SmsWriteContentNokia").val() + `</div>`)
        checkBateryNokia -= 1;
        ResultBattery();
        document.getElementById("SmsWriteContentNokia").value = "";
    }


})
$("#appCamera").click(function (){
    $("#ContactNokia").hide()
    $("#contactNokiaImg").hide()
    $("#nameContactNokia").hide()
    $("#SmsContentNokia").hide()
    $("#SmsWriteNokia").hide()
    $("#screenNokia2").hide()
    $("#screenNokia3").hide()
    $("#screenNokia").hide()
    $("#screenMenu").hide()
    $("#Camera").show()
    $("#video").show()




    // Grab elements, create settings, etc.
    var video = document.getElementById('video');

// Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
    }
})



/* Legacy code below: getUserMedia
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.srcObject = stream;
        video.play();
    }, errBack);
}
*/
