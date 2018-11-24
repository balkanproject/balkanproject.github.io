$(document).ready(function(){
    var info = [
        ["Albania","Country"],
        ["Romanian","Language"],
        ["Skopje","City"],
        ["Greece","Country"],
        ["Albanian","Language"],
        ["Ljubljana","City"],
        ["Serbia","Country"],
        ["Turkish","Language"],
        ["Rijeka","City"],
    ];
    for(var x = 0; x < info.length; x++){
        $("#home").append(`
        <div class="script" id="${info[x][1]}_${info[x][0]}" style="background-image: url('images/${info[x][1]}/${info[x][0]}.jpg')">
            <div class="info ${info[x][1]}">
                <h1>${info[x][0]}</h1>
            </div>
        </div>
        `);
    }
});

$(document).on("click", ".script", function() {
    $('body').scrollTop(0);
    var info = $(this).attr("id");
    info = info.split("_");
    var type = info[0];
    var id = info[1];
    $("#home").hide();
    $("#section").show();
    if(type == "Language"){
        $("#section").append(`
        <div class="text">
            <a class="back">Home</a>
            <h1>${id} Language</h1>
            <p>${data.language[id].info}</p>
            <div class="image" style="background-image: url('images/language/${id}.jpg')"></div>
            ${data.language[id].pronunciation ? 
            `<table>
                <header>Pronunciation Notes</header>
                <tr>
                    <th>Letters</th>
                    <th>Pronunciation</th>
                </tr>
                ${data.language[id].pronunciation.map((c)=>
                    `<tr>
                        <td>${c[0]}</td>
                        <td>${ipa[c[1]].replace(/\{/g,"<span style='text-decoration:underline;color:#f37cfc'>").replace(/\}/,"</span>")}</td>
                    </tr>`
                ).join('')}
            </table>`
            : ``}
            <table>
            <header>Basic Phrases</header>
            ${data.language[id].phrases.map((c)=>
                `<tr>
                    <td>${c[0]}</td>
                    <td>${c[1]}</td>
                </tr>`
            ).join('')}
            </table>
        </div>
        `);
    }
    else if(type == "City"){
        $("#section").append(`
        <div class="text">
            <a class="back">Home</a>
            <h1>${id}</h1>
            <div class="image" style="background-image: url('images/city/${id}.jpg')"></div>
            ${data.city[id].history.map((c)=>
                `<p>${c}</p>`
            ).join('')}
            ${data.city[id].sites.map((c)=>
                `<div class="cityinfo" style="font-size: 1.5em">
                    <p>${c.name}</p>
                </div>
                <p>${c.information}</p>
                <div class="image" style="background-image: url('images/city/${id}${c.image}.jpg')"></div>`
            ).join('')}
        </div>
        `);
    }
    else if(type == "Country"){
        $("#section").append(`
        <div class="text">
            <a class="back">Home</a>
            <h1>${id} - ${data.country[id].nativename}</h1>
            <img class='flag' src='images/flag/${id}Flag.jpg' width="600" height="400">
            ${data.country[id].history.map((c)=>
                `<p>${c}</p>`
            ).join('')}
            <div class="image" style="background-image: url('images/country/${id}.jpg')"></div>
            <div class="countryinfo" style="font-size: 1.5em">
                <p>Cities:
                ${data.country[id].cities.map((c)=>
                    `<span><span style="text-decoration:underline; text-decoration-color: #00d8eb">${c}</span> </span>`
                ).join('')}
                </p>
                <p>Currency: ${data.country[id].currency}</p>
            </div>
        </div>
        `);
    }
});
$(document).on("click", ".back", function() {
    $('body').scrollTop(0);
    var id = $(this).attr("id");
    $("#home").show();
    $("#section").empty();
    $("#section").hide();
});