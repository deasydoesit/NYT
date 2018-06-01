    var searchTerm = "";
    var page = 0; 
    var beginDate = "";
    var endDate = "";

$("button").on("click", function() {

    searchTerm = $("#search-term").val();
    page = $("#page").val();
    beginDate = $("#begin-date").val();
    endDate = $("#end-date").val();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    
    if (searchTerm) {
        url += '?q=' + searchTerm;
    } 

    if (page) {
        url += '&page=' + page;
    }
    
    if (beginDate) {
        url += '&begin_date=' + beginDate;
    } 
    
    if (endDate) {
        url += '&end_date=' + endDate;
    } 

    url += '&api-key=f3b5a711b8234afda1b8ad849dafc53b';

    console.log(url);

    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(result) {
      $("#data-dump").append(JSON.stringify(result));
    }).fail(function(err) {
      throw err;
    });
});