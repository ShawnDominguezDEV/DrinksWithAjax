$(document).ready(function(){

    $("#add-order").click(function(){

        var order = {
            "name" : $("#name").val(),
            "drink" : {
                "drink1" : $("#drink1").val(),
                "drink2" : $("#drink2").val()
            },
            "color" : $("#select_color").val()
        };

        $.ajax({
            type: "POST",
            url : "http://rest.learncode.academy/api/cis3360/drinks",
            data : order,
            success : function (newOrder){
                alert("item added" + " " + newOrder.name + " " + newOrder.drink.drink1);
            },
            error : function(){
                alert("Error at POST attempt");
            }
        });

    });

    $("#get-order").click(function(){

        //We are not posting data, just simply using it to GET a record.
        //Going to output in the unordered list on our index "orders"
        $.ajax({
            type : "GET",
            url : "http://rest.learncode.academy/api/cis3360/drinks",
            success : function(orderlist){
                $.each(orderlist, function(i, item){
                   $("#orders").append("<li> name : " + item.name + ", Drink1: " + item.drink.drink1 + ", Drink2: " +
                       item.drink.drink2 + ", Color: " + item.color + " " + " " + item.id + "</li>");
                });
            }
        });
    });

    $("#put-order").click(function(){

        var order = {
            "id": $("#idul").val(),
            "name" : $("#name").val(),
            "drink" : {
                "drink1" : $("#drink1").val(),
                "drink2" : $("#drink2").val()
            },
            "color" : $("#select_color").val()
        };

        $.ajax({
            type : "PUT",
            url : "http://rest.learncode.academy/api/cis3360/drinks/" + order.id,
            data: order,
            success : function(){
                alert("item with id " + order.id + " has been updated")
            }
        });
    });

    $("#delete-order").click(function(){

        var id = $("#idul").val();

        $.ajax({
            type : "DELETE",
            url : "http://rest.learncode.academy/api/cis3360/drinks/" + id,
            success: function(){
                alert("item with id " + id + " has been deleted");
        }
        });
    });

});