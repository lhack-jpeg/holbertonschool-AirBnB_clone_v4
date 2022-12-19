const checkDataDict = () => {
    const amenityList = [];
    let checkedInput = $("input:checked");
    for (const item of checkedInput) {
        amenityList.push(item.dataset.name);
    }
    return amenityList;
};

checkDataDict();
$(function () {
    $("input[type=checkbox]").click(() => {
        const selectedAmenity = checkDataDict();
        if (selectedAmenity.length > 0) {
            $(".amenities h4").text(selectedAmenity.join(", "));
        } else {
            $(".amenities h4").html("&nbsp;");
        }
    });
    $.get(
        "http://f27b91ad72f7.cd567695.hbtn-cod.io:5001/api/v1/status/",
        (data) => {
            if (data.status === "OK") {
                $("#api_status").addClass("available");
            } else {
                $("#api_status").removeClass("available");
            }
        }
    );
});

$.ajax({
    url: "http://f27b91ad72f7.cd567695.hbtn-cod.io:5001/api/v1/places_search/",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({}),
    success: function (data) {
        console.log({ data });
        data.forEach((element) => {
            $(`<article>
    <div class="title">
    <h2>${element.name}</h2>
    <div class="price_by_night">
    </div>
    </div>
    <div class="information">
    <div class="max_guest">
    <i class="fa fa-users fa-3x" aria-hidden="true"></i>
    <br />
    ${element.max_guest} Guests
    </div>
    <div class="number_rooms">
    <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
    <br />
    ${element.number_rooms} Bedrooms
    </div>
    <div class="number_bathrooms">
    <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
    <br />
    ${element.number_bathrooms} Bathroom
    </div>
    </div>

    <div class="description">
    ${element.description}
    </div>
    </article>`).appendTo(".places");
        });
    },
});

$('button').click(function () {
    console.log(Object.keys(dictResults));
      $.ajax({
        type: 'POST',
        url: 'http://f27b91ad72f7.cd567695.hbtn-cod.io:5001/api/v1/places_search/',
        data: JSON.stringify({amenities: Object.values(dictResults)}),
        contentType: 'application/json',
        success: function (response) {
          $('section.places').empty();
          for (const place of response) {
            $(`<article>
            <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">${place.price_by_night}</div>
            </div>
            <div class="information">
            <div class="max_guest">${place.max_guest}Guest${place.max_guest !== 1 ? 's' : ''}</div>
            <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
            </div>
            <div class="description">${place.description}</div>
            </article>`).appendTo('section.places');
          }
        }
      });
  });
