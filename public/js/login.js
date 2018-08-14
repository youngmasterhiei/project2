var $signUp = $("#signUp");


var API = {
    saveUser: function(example) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/examples",
        data: JSON.stringify(example)
      });
    },
    getUser: function() {
      return $.ajax({
        url: "api/examples",
        type: "GET"
      });
    },
    // deleteExample: function(id) {
    //   return $.ajax({
    //     url: "api/examples/" + id,
    //     type: "DELETE"
    //   });
    // }
  };