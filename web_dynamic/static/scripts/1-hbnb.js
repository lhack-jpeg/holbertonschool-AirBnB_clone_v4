amenityList = [];
const checkDataDict = () => {
    let checkedInput = $("input:checked");
    let checkInputLength = checkedInput.length;
    for (const item of checkedInput) {
        console.log(item.dataset.name);
        amenityList.push(item.dataset.name);
    }

    console.log({ checkedInput });
};

checkDataDict();
console.log({ amenity_list });
$(function () {
    $("input[type=checkbox]").click(checkDataDict());
});

$.get(
    "http://f27b91ad72f7.cd567695.hbtn-cod.io:5001/api/v1/status/",
    (data) => {
        console.log({ data });
    }
);
