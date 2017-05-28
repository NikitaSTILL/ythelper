var phr1 = [
    "влог",
    "DIY",
    "еда",
    "пранк",
    "ирония"
];

var phr2 = [
    "развитие",
    "aliexpress",
    "игры",
    "мотивация",
    "интересная ситуация"
];

var phr3 = [
    "урок",
    "технологии",
    "теория заговора",
    "инфоповод", // синоним: хайп
    "сталк"
];

var infopovods = [];

function genPhrase() {
    var info = phr3[getRand(0, phr3.length)];
    $('#d1').text(phr1[getRand(0, phr1.length)]);
    $('#d2').text(phr2[getRand(0, phr2.length)]);
    $('#d3').text(info);
    if(info == phr3[3]){
        $('#d3').css('border', '1px solid #FF9500');
        $('#d3').css('color', '#FF9500');
    }
    else{
        $('#d3').css('border', '1px solid #E62117');
        $('#d3').css('color', '#E62117');
    }
}

function getRand(min, max)
{
  return Math.floor(Math.random() * (max - min) + min);
}

function loadhipe() {
    myApp.showPreloader();
    $.ajax({
        url:"http://akipo.pw/server.php",
        type:"POST",
        success:function(result){   //роль играет только этот блок
            console.log(result);
            var json = JSON.parse(result);
            var data = json[Object.keys(json)[0]];
            $('#hipes').css('display', '');
            $('#hipes').text('');
            for (var i = 0; i < data.length; i++) {
                //data[i]
                $('#hipes').append('<li class="item-content"> <div class="item-inner"> <div class="item-title">' + data[i] + '</div> </li>');
                myApp.hidePreloader();
            }
        }
    });
}

// Initialize your app
var myApp = new Framework7({
    panelLeftBreakpoint: 1024
});

// Export selectors engine
var $$ = Dom7;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
