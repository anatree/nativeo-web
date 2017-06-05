$(document).ready(function () {
    "use strict";
    $("#free-trial-form").submit(function (event) {
        event.preventDefault();
        var data = {
            "email": $("#free-trial-email").val()
        };
        $.ajax({
            type: 'post',
            url: 'https://hooks.zapier.com/hooks/catch/2286800/98j9bi/',
            data: JSON.stringify(data),
            success: function (data) {
                window.showPopup("trial-send-popup");
            }
        });
    })
});
