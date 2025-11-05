function getQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        document.getElementById("quote").textContent = response.quoteText;
        document.getElementById("author").textContent = response.quoteAuthor ? "- " + response.quoteAuthor : "- Unknown";
      },
      error: function() {
        document.getElementById("quote").textContent = "Oops! Could not fetch quote.";
        document.getElementById("author").textContent = "";
      }
    });
  }
  