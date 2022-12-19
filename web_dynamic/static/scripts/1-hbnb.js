const data_dict = {};
const checkDataDict = () => {
    let checkedInput = $("input:checked");
    console.log({ checkedInput });
};
$(function () {
    $("input[type=checkbox]").click(checkDataDict());
});

$.get(
    "http://f27b91ad72f7.cd567695.hbtn-cod.io:5001/api/v1/status/",
    (data) => {
        console.log({ data });
    }
);
