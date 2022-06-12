function addItem() {
    const item_image = document.getElementById("inputTag");
    const item_name = document.getElementById("it_name");
    const item_price = document.getElementById("it_price");
    const item_cat = document.getElementById("it_cat");
    const addBtn = document.getElementById("add_items");
    addBtn.addEventListener("click", newItem);

    function newItem() {
        let data = new FormData();
        data.append("name", item_name.value);
        data.append("price", item_price.value);
        data.append(
            "image",
            document.querySelector("input[type=file]")["files"][0]
        );
        data.append("categories_id", item_cat.value);
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v1/admin/add_item",
            data: data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
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
}
addItem();