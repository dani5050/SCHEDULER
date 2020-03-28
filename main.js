jQuery(document).ready(function($) {
    $.each($('td'), function () {
        var str = $(this).html()
        var test = str.split(' ');
        test[0] = test[0].replace(/(\r\n|\n|\r)/gm, "");
        //console.log(test[0]);
         switch (test[0]) {
           case 'OFF':
                $(this).addClass('OFF');
               break;
            case 'DESPIERTA':
                $(this).addClass('DESPIERTA');
               break;
            case 'EDICION':
                $(this).addClass('DIGITAL');
               break;
            case 'COORDINATOR':
                $(this).addClass('COORDINATOR');
               break;
                 
            case 'AYA':
                $(this).addClass('AYA');
               break;
            case 'DAILIES':
                $(this).addClass('DAILIES');
               break;
            case 'PROJECTS':
                $(this).addClass('PROJECTS');
               break;
            case 'DA':
                $(this).addClass('OVERFLOW');
               break;
            case 'CRONICAS':
                $(this).addClass('CRONICAS');
               break;
            case 'AL':
                $(this).addClass('ALPUNTO');
               break;
            case 'VIZ-DAILIES':
                $(this).addClass('VIZDAILIES');
               break;
             case 'VIZ-PROJECTS':
                $(this).addClass('VIZPROJECTS');
               break;
           default:
              
               // statements_def
               break;
       }

});

});
