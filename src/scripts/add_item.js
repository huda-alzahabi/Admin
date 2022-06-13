function addItem() {
    let base64String = "";

    const addBtn = document.getElementById("add_items");
    addBtn.addEventListener("click", newItem);
    const item_image = document.getElementById("it_image");
    item_image.addEventListener("change", getImage);

    const item_name = document.getElementById("it_name");
    const item_price = document.getElementById("it_price");
    const item_cat = document.getElementById("it_cat");
    const token = window.localStorage.getItem("Bearer");
    console.log(token);

    function newItem() {
        let data = new FormData();
        data.append("name", item_name.value);
        data.append("price", item_price.value);
        data.append("image", base64String);
        data.append("categories_id", item_cat.value);
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v1/admin/add_item",
            data: data,
            headers: { Authorization: "Bearer " + token },
        }).then(function(response) {
            item_name.value = "";
            item_price.value = "";
            item_cat.value = "";
            let result = response.data;
            let message = result.status;
            if (message == "Success") {
                alert("Item Added!");
            }
        });
    }

    function getImage() {
        var file = document.querySelector("input[type=file]")["files"][0];
        var reader = new FileReader();
        reader.onload = function() {
            base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            imageBase64Stringsep = base64String;
        };
        reader.readAsDataURL(file);
    }
}
addItem();