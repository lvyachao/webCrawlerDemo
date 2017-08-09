var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            $("span.field-content").each(function( index ){
                console.log( index + ": " + $( this ).text() );
            });
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('https://nhmrc-stage.icfwebservices.com/library-search-results?search_api_aggregation_3=&search_api_aggregation_2=&search_api_views_fulltext=medical&items_per_page=10');


c.queue('https://nhmrc-stage.icfwebservices.com/library-search-results?search_api_aggregation_3=&search_api_aggregation_2=&search_api_views_fulltext=medical&items_per_page=10&page=1');

// // Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.yahoo.com']);

// // Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,

//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);

