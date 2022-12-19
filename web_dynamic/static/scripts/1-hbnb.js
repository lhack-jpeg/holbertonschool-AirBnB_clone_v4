let amenityList = [];
const checkDataDict = () => {
    let checkedInput = $("input:checked");
    for (const item of checkedInput) {
        console.log(item.dataset.name);
        amenityList.push(item.dataset.name);
    }
    console.log(amenityList);
};

checkDataDict();
$(function () {
    $("input[type=checkbox]").click(checkDataDict);
});
