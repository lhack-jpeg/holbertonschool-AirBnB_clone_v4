data_dict = {};
const checkDataDict = () => {
    let checkedInput = $("input:checked");
    console.log({ checkedInput });
};
$(function () {
    $("input[type=checkbox]").click(checkDataDict);
});
