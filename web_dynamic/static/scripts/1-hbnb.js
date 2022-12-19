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
console.log({ amenityList });
$(function () {
    $("input[type=checkbox]").click(checkDataDict);
});
