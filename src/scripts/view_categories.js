function viewCategories() {
    axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/v1/admin/all_categories",
    }).then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            var view = document.querySelector("#tab");
            console.log(view);
            var viewClone = view.cloneNode(true);

            viewClone.id = "viewss";
            viewClone.querySelector("#id").innerText =
                response.data["categories"][i]["id"];

            viewClone.querySelector("#name").innerText =
                response.data["categories"][i]["name"];

            document.body.appendChild(viewClone);
        }
        document.querySelector("#view").remove;
    });
}
viewCategories();