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
});
