amenityList = [];
const checkDataDict = () => {
    let checkedInput = $("input:checked");
    for (const item of checkedInput) {
        amenityList.push(item.dataset.name);
    }
    console.log(amenityList);
};

checkDataDict();
$(function () {
    $("input[type=checkbox]").click(checkDataDict);
});
