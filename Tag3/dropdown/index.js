          // JQuery - Document ready
          $(function () {
            console.log('Document ready');
            setTimeout(InputSet, 2000); // zwei sekunde warten, dann funktion aufrufen

            // Click - Event
            $('#WerteLesen').click(function () {
                // Funktion aufrufen
                getValue();
            });
        });
        function InputSet() {
            // Wert setzten
            $('#first_name').val('Harald');
            console.info('Wert wurde in das erste Feld geschrieben');
            // class valid zu inputfeld hinzufügen
            $("#first_name").addClass("valid");
            // Prefilling Text Inputs (damit Labels nicht im Input Feld sind wenn kein placeholder vorhanden ist)
            M.updateTextFields();
        }
        function getValue() {
            // Wert lesen
            var tmpVar1 = $('#first_name').val();
            console.warn('Wert im Feld 1: ' + tmpVar1);
            var tmpVar2 = $('#last_name').val();
            console.warn('Wert im Feld 2: ' + tmpVar2);
            $('body').append('<hr><p id="Absatz1"> Wert im Feld 1: ' + tmpVar1 + '<br>Wert im Feld 2: ' + tmpVar2 +'</p>');
        }