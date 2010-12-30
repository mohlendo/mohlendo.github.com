function paragraphPermalinks(){
  $("article div").each(
       function(j) {
         $(this).children("p[id]").each(
            function(i) {
              p = $(this);
              a = $("<a/>");
              //Full href for when we are not on the permapage
              href = p.parents("article div").find("h2.blogPostTitle a").attr("href");
              if(document.documentURI.match(href)){
                //If we are on the permapage, specify a relative url
                //so as not to reload the page.
                href = "";
              }
              a.attr('href',href+"#p"+(i+1));
              a.attr('class','paragraphPermalink');
              a.text(" ¶");
              a.attr("title","Link to this paragraph");
              p.append(a);
            }
          )
        });
}

function twitterSidebar(){
  $("#mohlendo_tweets").tweet({
      avatar_size: 16,
        count: 5,
        query: "mohlendo",
        loading_text: "searching twitter..."
        });
}

$(document).ready(function(){
    twitterSidebar();
    paragraphPermalinks();
  });
