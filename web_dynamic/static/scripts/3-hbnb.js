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
        data.forEach(data, function () {
            $(`<article>
<div class="title">
<h2>${data.name}</h2>
<div class="price_by_night">
</div>
</div>
<div class="information">
<div class="max_guest">
<i class="fa fa-users fa-3x" aria-hidden="true"></i>
<br />
${data.max_guest} Guests
</div>
<div class="number_rooms">
<i class="fa fa-bed fa-3x" aria-hidden="true"></i>
<br />
${data.number_rooms} Bedrooms
</div>
<div class="number_bathrooms">
<i class="fa fa-bath fa-3x" aria-hidden="true"></i>
<br />
${data.number_bathrooms} Bathroom
</div>
</div>
<div class="user">
<strong>Owner: PLACEHOLDER</strong>
</div>
<div class="description">
${data.description}
</div>
</article>`).appendTo(".places");
        });
        console.log({ data });
    },
});
