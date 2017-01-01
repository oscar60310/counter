var target;
function start() {
    if (getUrlParameter('title') == null || getUrlParameter('time') == null) {
        $('#title').html("資訊不完整");
        return;
    }
    $('#title').html(getUrlParameter('title'));
    var times = getUrlParameter('time').split('/');
    target = new Date();
    target.setFullYear(parseInt(times[0]));
    target.setMonth(parseInt(times[1]) - 1);
    target.setDate(parseInt(times[2]));
    target.setHours(parseInt(times[3]));
    target.setMinutes(parseInt(times[4]));
    target.setSeconds(parseInt(times[5]));


    setTimeout(count, 1000);

}
function count() {
    var now = new Date();
    var bet = Math.floor((target.getTime() - now.getTime()) / 1000);
    if (bet < 0) {
        return;
    }

    //console.log(bet);
    var tt =  $('#title').html()+" ";
    $('#day').html(Math.floor(bet / 60 / 60 / 24));
    tt += $('#day').html() + ":";
    bet %= 60 * 60 * 24;
    $('#hour').html(Math.floor(bet / 60 / 60));
    tt += $('#hour').html() + ":";
    bet %= 60 * 60;
    $('#min').html(Math.floor(bet / 60));
    tt += $('#min').html() + ":";
    bet %= 60;
    $('#sec').html(Math.floor(bet));
    tt += $('#sec').html();
    document.title = tt;

    setTimeout(count, 1000);
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
start();