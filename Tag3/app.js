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

function renderData() {
    // Daten holen (1)
    $.ajax({
        type: "get",
        url: "./api/api.php",
        dataType: "json",
        success: function (response) {
            console.log(response);
            // JSON ist da!
            // Daten in Tabelle ausgeben und mit handlebars anzeigen
           
            $.get("auto.hbs", function(template) { // (2)
                console.log(template)
                // (3)
                let compiled = Handlebars.compile(template);
                console.log(compiled)
                let html = compiled(response);
                console.log(html)
                // (4)
                $('main').html(html);
                
                // Delete - Action (5)
                $(".delete").on("click", function() {
                    console.log("delete");
                    let id = $(this).attr("data-id");
                    console.log(id);
                    deleteData(id);
                    renderData();
                });

                // Tanken - Action (NEW)
                $(".tanken").on("click", function() {
                    let id = $(this).attr("data-id");

                    // daten holen von dem einen Datensatz mit id ?
                    $.ajax({
                        // holt dateien
                        type: "GET",
                        // nur die datensätze mit wo id this ist (Z.104)
                        url: "./api/api.php?id="+id,
                        // Wird im datentyp json geladen 
                        dataType: "json",
                        success: function (response) {
                            console.log(response.data[0].tanken);
                            let tanken = parseInt(response.data[0].tanken) +1;
                            console.log(tanken);
                            
                            
                            let newData = response.data[0];
                            newData.tanken = tanken;
                            console.log(newData);
                            
                            
                            $.ajax({
                                type: "post",
                                url: "./api/api.php?id="+id,
                                data: newData,
                                dataType: "json",
                                success: function (response) {
                                    renderData();
                                }
                            });
                        }
                    });
                });
            });
        }
    });
}

 
export {renderData, getData, getDataID, insertData, updateData, deleteData};