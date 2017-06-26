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


    var nativeoContainer = "#nativeo-embed"
    new NativeoEmbed(nativeoContainer, "9b01d95abc904944b060968ef23a0915", 32);

    var oldRefreshGrid = window.NativeoCommons.refreshGrid;

    window.NativeoCommons.refreshGrid = function () {
        var innerContainer = arguments[0];
        oldRefreshGrid.apply(this, arguments);
        $(nativeoContainer + " " + innerContainer).css("height", "100%");
        $(nativeoContainer + " " + innerContainer).css("background", "none");
        $(nativeoContainer + " " + innerContainer + " .fetchMoreLink").remove();
        $(nativeoContainer + " .ntv-tile").each(function () {
            var tile = $(this);
            var resetNativeoPostion = function () {
                tile.css("width", "");
                tile.css("height", "");
                tile.css("position", "relative");
                tile.css("left", "");
                tile.css("top", "");
                tile.css("height", "");
                tile.css("display", "block")
                tile.css('margin-bottom', "")
            }
            var setFixedContentSize = function () {
                tile.find(".ntv-post-content").css('height', 'initial');
                tile.find(".ntv-post-content").css('background-color', 'white');
                tile.find(".ntv-post-content").css('color', 'black');
                // tile.find(".ntv-content").css('height', '150px');
                // tile.find(".ntv-content").css('overflow', 'hidden');
            }

            resetNativeoPostion();
            setFixedContentSize();
            tile.on('click', 'button', function () {
                if (window.masonryGrid) {
                    window.masonryGrid.masonry("layout");
                }
            })

            tile.find("button").addClass("button");
            tile.find("button").addClass("round");
            tile.find(".ntv-lead-catcher-form").wrap("<form></form>")

        });
        var $grid = $(nativeoContainer).imagesLoaded(function () {
            console.log("Images loaded")
            window.masonryGrid = $("#aut-embed").masonry({
                itemSelector: '.ntv-tile',
                percentPosition: true,
                gutter: 10,
                horizontalOrder: true
            });
            window.setInterval(function () {
                window.masonryGrid.masonry("layout");
            }, 1500);
        });
    }
});
