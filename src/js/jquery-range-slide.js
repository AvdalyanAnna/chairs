jQuery(document).ready(function ($) {
    $(function () {
        const el = $("#slider-range")
        const minMileage = el.data('min');
        const maxMileage = el.data('max');

        $("#slider-range").slider({
            range: true,
            min: minMileage,
            max: maxMileage,
            values: [minMileage, maxMileage],
            slide: function (event, ui) {
                $("#startmiles").val(ui.values[0]);
                $("#endmiles").val(ui.values[1]);
            }
        });

        $("#startmiles").val($("#slider-range").slider("values", 0));
        $("#endmiles").val($("#slider-range").slider("values", 1));
        $("#startmiles").change(function () {
            let startvalue = $("#startmiles").val();
            let endvalue = $("#endmiles").val();
            $("#slider-range").slider("option", "values", [startvalue, endvalue]);
        });
        $("#endmiles").change(function () {
            let startvalue = $("#startmiles").val();
            let endvalue = $("#endmiles").val();
            $("#slider-range").slider("option", "values", [startvalue, endvalue]);
        });

        $("#slider-range1").slider({
            range: true,
            min: minMileage,
            max: maxMileage,
            values: [minMileage, maxMileage],
            slide: function (event, ui) {
                $("#startmiles1").val(ui.values[0]);
                $("#endmiles1").val(ui.values[1]);
            }
        });

        $("#startmiles1").val($("#slider-range1").slider("values", 0));
        $("#endmiles1").val($("#slider-range1").slider("values", 1));
        $("#startmiles1").change(function () {
            let startvalue = $("#startmiles1").val();
            let endvalue = $("#endmiles1").val();
            $("#slider-range1").slider("option", "values", [startvalue, endvalue]);
        });
        $("#endmiles1").change(function () {
            let startvalue = $("#startmiles1").val();
            let endvalue = $("#endmiles1").val();
            $("#slider-range1").slider("option", "values", [startvalue, endvalue]);
        });
    });

    function hoverPairing(sourceEl, targetEl) {
        $(sourceEl).hover(function () {
            $(targetEl).addClass("ui-state-hover");
        }, function () {
            $(targetEl).removeClass("ui-state-hover");
        });
    }

    hoverPairing("#startmiles", "#slider-range span:first-of-type");
    hoverPairing("#endmiles", "#slider-range span:last-of-type");

    $("#slider-range").on("slidestart", function (event, ui) {
        if (ui.handleIndex == 0) {
            $("#startmiles").addClass("ui-state-hover");
        } else if (ui.handleIndex == 1) {
            $("#endmiles").addClass("ui-state-hover");
        }
    });
    $("#slider-range").on("slidestop", function (event, ui) {
        $("#startmiles").removeClass("ui-state-hover");
        $("#endmiles").removeClass("ui-state-hover");
    });
    $("#slider-range1").on("slidestart", function (event, ui) {
        if (ui.handleIndex == 0) {
            $("#startmiles1").addClass("ui-state-hover");
        } else if (ui.handleIndex == 1) {
            $("#endmiles1").addClass("ui-state-hover");
        }
    });
    $("#slider-range1").on("slidestop", function (event, ui) {
        $("#startmiles1").removeClass("ui-state-hover");
        $("#endmiles1").removeClass("ui-state-hover");
    });
});
