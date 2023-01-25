var page_id = "<%=facebookPageId%>";
var page_id = "2704";
var pageaccessToken =
  "EAAQ9UvsBkZAMBAGwpscjmBUZBJbzzUVTXISRjswTHQO1F641tZB5t44scCsMyu0ZA22iwAiFMNPR2la792fbbpWgSBt7Cx51sgLlgoDVt40xEW99j3IGuYAsSMGa5k7JgC6mOXDAe9N5AEVX5JYWk5NnzkutWAfapK5jNtHeJ7gmRQvVl39Jsdyt0Bn7adZCDARo9O95KlnGwpZCxg81ml";
FB.api(
  "/" + page_id + "/feed?access_token=" + pageaccessToken,
  { limit: 5 },
  function (response) {
    if (response && response.data && response.data.length) {
      var ul = document.getElementById("pagefeed");
      for (var j = 0; j < response.data.length; j++) {
        var feed = response.data[j],
          li = document.createElement("li"),
          a = document.createElement("a");
        a.innerHTML = feed.message;
        a.href = feed.link;
        li.appendChild(a);
        ul.appendChild(li);
      }
    }
  }
);

//how to get feed of a facebook page using api?
