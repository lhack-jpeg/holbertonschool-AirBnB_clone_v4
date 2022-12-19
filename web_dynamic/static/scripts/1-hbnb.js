const checkDataDict = () => {
    const amenityList = [];
    let checkedInput = $("input:checked");
    for (const item in object) {
        console.log(item["data-name"]);
    }
    console.log({ checkedInput });
};
$(function () {
    console.log("Page loaded");
    $("input[type=checkbox]").click(checkDataDict());
});

$.get(
    "http://f27b91ad72f7.cd567695.hbtn-cod.io:5001/api/v1/status/",
    (data) => {
        console.log({ data });
    }
);
