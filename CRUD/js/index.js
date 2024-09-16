$(document).ready(function () {
    let vehicleId = 3;

    // Initialize Materialize modal
    $('.modal').modal();

    // Increase tank value on car icon click
    $(document).on('click', '.car', function () {
        const tankCell = $(this).closest('tr').find('.tank');
        let tankValue = parseInt(tankCell.text());
        tankCell.text(tankValue + 1);
        M.toast({html: '<i class="material-icons left">local_gas_station</i> Tank erhöht für Fahrzeug!', classes: 'blue darken-1'});
        console.log('Tank increased for vehicle');
    });

    // Open modal to add new vehicle
    $('.add-vehicle').click(function () {
        $('#add-vehicle-modal').modal('open');
    });

    // Save new vehicle from modal input
    $('#save-vehicle').click(function () {
        vehicleId++;
        const name = $('#vehicle-name').val() || 'Neues Auto';
        const fuel = $('#vehicle-fuel').val() || 'Elektro';
        const color = $('#vehicle-color').val() || '#008888';
        const type = $('#vehicle-type').val() || 'Limousine';

        const newRow = `
            <tr data-id="${vehicleId}">
                <td>${vehicleId}</td>
                <td>${name}</td>
                <td>${fuel}</td>
                <td><div class="color-box" style="background-color:${color};"></div> ${color}</td>
                <td>${type}</td>
                <td class="tank">0</td>
                <td>
                    <i class="material-icons blue-text action-btn car" data-action="car">directions_car</i>
                    <i class="material-icons green-text action-btn edit" data-action="edit">edit</i>
                    <i class="material-icons red-text action-btn delete" data-action="delete">delete</i>
                </td>
            </tr>`;

        $('#vehicle-table').append(newRow);
        M.toast({html: '<i class="material-icons left">add</i> Neues Fahrzeug hinzugefügt!', classes: 'green darken-1'});
        console.log('New vehicle added');

        // Clear the form fields
        $('#vehicle-name').val('');
        $('#vehicle-fuel').val('');
        $('#vehicle-color').val('');
        $('#vehicle-type').val('');

        // Close the modal
        $('#add-vehicle-modal').modal('close');
    });

    // Edit vehicle row
    $(document).on('click', '.edit', function () {
        const row = $(this).closest('tr');
        const currentValues = {
            name: row.find('td:nth-child(2)').text(),
            kraftstoff: row.find('td:nth-child(3)').text(),
            farbe: row.find('td:nth-child(4)').text(),
            bauart: row.find('td:nth-child(5)').text(),
        };

        const name = prompt('Fahrzeugnamen bearbeiten:', currentValues.name);
        const kraftstoff = prompt('Kraftstoff bearbeiten:', currentValues.kraftstoff);
        const farbe = prompt('Farbe bearbeiten:', currentValues.farbe);
        const bauart = prompt('Bauart bearbeiten:', currentValues.bauart);

        if (name) row.find('td:nth-child(2)').text(name);
        if (kraftstoff) row.find('td:nth-child(3)').text(kraftstoff);
        if (farbe) row.find('td:nth-child(4)').html(`<div class="color-box" style="background-color:${farbe};"></div> ${farbe}`);
        if (bauart) row.find('td:nth-child(5)').text(bauart);

        M.toast({html: '<i class="material-icons left">edit</i> Fahrzeug bearbeitet!', classes: 'yellow darken-2'});
        console.log('Vehicle edited');
    });

    // Delete vehicle row
    $(document).on('click', '.delete', function () {
        const row = $(this).closest('tr');
        row.remove();
        M.toast({html: '<i class="material-icons left">delete</i> Fahrzeug gelöscht!', classes: 'red darken-2'});
        console.log('Vehicle deleted');
    });
});
