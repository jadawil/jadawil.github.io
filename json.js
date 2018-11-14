var data = {
  "label":"VZ-01",
  "row":[
    {
      "level":1,
      "locations":[
        {
          "name":"VZ-01-01",
          "stock":[
            {
              "product":"Left door",
              "qty":100,
              "replenishment":"slow"
            }
          ]
        }
      ]
    },
    {
      "level":2,
      "locations":[
        {
          "name":"VZ-01-02",
          "stock":[

          ]
        },
        {
          "name":"VZ-02-02",
          "stock":[
            {
              "product":"Rear brake disk",
              "qty":3,
              "replenishment":"fast"
            }
          ]
        }
      ]
    },
    {
      "level":3,
      "locations":[
        {
          "name":"VZ-01-03",
          "stock":[
            {
              "product":"Front brake disk",
              "qty":2,
              "replenishment":"standard"
            }
          ]
        },
        {
          "name":"VZ-01-04",
          "stock":[
            {
              "product":"Shock",
              "qty":10,
              "replenishment":"standard"
            }
          ]
        }
      ]
    }
  ]
};

//Keys
const LABEL = "label";
const LEVEL = "level";
const LOCATIONS = "locations";
const NAME = "name";
const STOCK = "stock";
const PRODUCT = "product";
const QUANTITY = "qty";
const REPLENISHMENT = "replenishment";

$(document).ready(function() {  
    $("#main").append("<ul class=\"top "+ data[LABEL] + "\">" + data[LABEL] + "</ul>");
    
    for(var i in data["row"]) {
      var level = data["row"][i];
      $("."+data[LABEL]).append("<li><span class=\"caret\">" + level[LEVEL] + "</span><ul class=\"nested " + level[LEVEL] + "\"></ul></li>");

      for(var j in level[LOCATIONS]) {
        var location = level[LOCATIONS][j];
        $("."+level[LEVEL]).append(`<li>
                                      <span class=\"caret\">` + location[NAME] + `</span>
                                      <ul class=\"nested ` + location[NAME] + `\">
                                      </ul>
                                    </li>`);

        for(var k in location[STOCK]) {
            var item = location[STOCK][k];
            $("."+location[NAME]).append(`<li class=\"stock\">
                                            <span class=\"caret stock\">Stock</span>
                                            <ul class=\"nested\">
                                              <li>
                                                <span class=\"caret\">` + item[PRODUCT] + `</span>
                                                <ul class=\"nested ` + item[PRODUCT] + `\">
                                                  <li><span>Quantity: ` + item[QUANTITY] + `</span></li>
                                                  <li><span>Replenishment: ` + item[REPLENISHMENT] + `</span></li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>`);
        }  
      }
    }

    $(".caret").on("click", function() {
        $($(this).parent()).children().toggleClass("active");
        $(this).toggleClass("caret-down");
    });

    $("#showstock").on("click", function() {
        $(".stock").toggle(this.checked);
    });

});

