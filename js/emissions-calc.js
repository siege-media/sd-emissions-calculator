let selectedFuel = undefined;
// When the dropdown button is clicked, show the menu
// When is is already showing and the button is clicked, hide it
// When an option is selected, hide it
function ddButton() {
    $('#fuel').click(function(e) {
        e.preventDefault();
        if ($('#dropdownContent').hasClass("show")) {
            $('#dropdownContent').removeClass('show');
            $('#dropdownContent').addClass('calc-dropdown-content');
        } else {
            $('#dropdownContent').addClass('show');
            $('#dropdownContent').removeClass('calc-dropdown-content');
        }
    })
    $('.calc-dropdown').mouseleave(function() {
        $('#dropdownContent').removeClass('show');
        $('#dropdownContent').addClass('calc-dropdown-content');
    })
}
// Show the name of the selected option in the dropdown title
function showSelection() {
    $('.fuel-name').text($('.gas').data("name"));
    selectedFuel = $('.gas').data("name");
}

$('.dropdown-item').click(function(e) {
    $('.fuel-name').empty();
    e.preventDefault();
    $('.fuel-name').text($(this).data("name"));
    selectedFuel = $(this).data("name");
    $('#dropdownContent').removeClass('show');
    $('#dropdownContent').addClass('calc-dropdown-content');
})

// When Average Emissions button is clicked, populate with the typical emissions info and calculate.
$('#averages').on('click', function(e) {
    e.preventDefault();

    $('#miles').val(363);
    $('#mpg').val(22);
    $('.fuel-name').text($('.gas').data("name"));

    let avgGas = Math.round((8887 / 22) * 363);
    let avgGasFormatted = avgGas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#formResult').html(avgGasFormatted);
})

$('#submitButton').on('click', function(e) {;
    e.preventDefault();

    let miles = $('#miles').val();
    let mpg = $('#mpg').val();
    let fuel = selectedFuel;


    miles = parseInt(miles, 10);
    mpg = parseInt(mpg, 10);

    
    // Gasoline
    if (fuel === "Gasoline") {
        let gas = Math.round((8887 / mpg) * miles);
        let gasFormatted = gas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $('#formResult').html(gasFormatted);
    }

    // Diesel
    if (fuel === "Diesel") {
        let diesel = Math.round((10180 / mpg) * miles);
        let dieselFormatted = diesel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $('#formResult').html(dieselFormatted);
    }

})

function embedClick() {
    jQuery('#calc-embed-button').click(function() {
        jQuery('.calc-embed-code').css('display', 'block');
    })

    jQuery(document).mouseup(function (e) { 
        if (jQuery(e.target).closest("#calc-embed-code").length 
                    === 0) { 
            jQuery("#calc-embed-code").css('display', 'none');  
        } 
    });
}

$(embedClick);
$(ddButton);
$(showSelection);