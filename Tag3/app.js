// get Data from api
function getData() {
    $.ajax({
        type: "get",
        url: "./api/api.php",
        //data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}

function getDataID(id) {
    // nur ein Datensatz holen
    $.ajax({
        type: "get",
        url: "./api/api.php?id=" + id,
        //data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}


function insertData(data){
    $.ajax({
        type: "post",
        url: "./api/api.php?id=0",
        /* data: {
            name: "Fritzli",
            kraftstoff: "Diesel"
        }, */
        data: data,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}

function updateData(id, data){
    $.ajax({
        type: "post",
        url: "./api/api.php?id="+id,
        data: data,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}


function deleteData(id){
    $.ajax({
        type: "delete",
        url: "./api/api.php?id="+id,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}   

function test1(){
    
}
function renderData(){
    // Daten holen (1)
    $.ajax({
        type: "get",
        url: "./api/api.php",
        dataType: "json",
        success: function (response) {
            console.log(response);
            // JOSON ist da!
            // Daten in Tabelle ausgeben und mit handlebars anzeigen
           
            $.get("auto.hbs", function(template){ // (2)
                //(3)
                var compiled = Handlebars.compile(template);
                var html = compiled(response);
                // (4)
                $('main').html(html);
                // delete - Action (5)
                $(".delete").on("click", function(){
                    console.log("delete");
                    //let id = $(this).data("id");
                    let id = $(this).attr("data-id");
                    console.log(id);
                    deleteData(id);
                    renderData();
                });
              });
        }
    });
}
 
export {renderData, getData, getDataID, insertData, updateData, deleteData};