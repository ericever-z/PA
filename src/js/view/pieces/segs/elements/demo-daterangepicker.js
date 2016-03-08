define(['moment'], function(moment) {
    function Demo() {


        var tpl = '<div class="daterangepicker dropdown-menu">' +
            '<div class="clearfix">'       + 
            '<div class="calendar left">' +
            '<div class="daterangepicker_input">' +
            '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' +
            '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
            '<div class="calendar-time">' +
            '<div></div>' +
            '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
            '</div>' +
            '</div>' +
            '<div class="calendar-table"></div>' +
            '</div>' +
            '<div class="calendar right">' +
            '<div class="daterangepicker_input">' +
            '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' +
            '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
            '<div class="calendar-time">' +
            '<div></div>' +
            '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
            '</div>' +
            '</div>' +
            '<div class="calendar-table"></div>' +
            '</div>' +
            '</div>' +
            '<div class="ranges">' +
            '<div class="range_inputs">' +
            '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
            '<button class="cancelBtn" type="button"></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var range = {
            'Today': [moment(), moment()],
            'Last 3 Days': [moment().subtract(2, 'days'), moment()],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        };

        $('.daterangepicker-sample').daterangepicker({
            "ranges": range,
            "startDate": "01/20/2016",
            "endDate": "01/26/2016"
        }, function(start, end, label) {
            console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
        });

        $('.daterangepicker-sample1').daterangepicker({
            "ranges": range,
            "startDate": "01/20/2016",
            "endDate": "01/26/2016",
           // "template": tpl,
            "opens": "nxdc",
            "alwaysShowCalendars": true  
        }, function(start, end, label) {
            console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
        });
    }
    return Demo;
});
