const checkDataDict = () => {
    const amenityList = [];
    let checkedInput = $("input:checked");
    for (const item of checkedInput) {
        console.log(item.dataset.name);
        amenityList.push(item.dataset.name);
    }
    return amenityList;
};

checkDataDict();
$(function () {
    $("input[type=checkbox]").click(() => {
        const selectedAmenity = checkDataDict();
        selectedAmenity.forEach((element) => {
            $(`<span>${element}</span>`).appendTo($(".amenities h4"));
        });
    });
});
