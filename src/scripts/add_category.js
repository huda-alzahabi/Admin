function addCategory() {
    let add_category = document.getElementById("add_categories");
    add_category.addEventListener("click", function(e) {
        e.preventDefault();
        let name = document.getElementById("cat").value;
        let data = new FormData();
        data.append("name", name);
        const token = window.localStorage.getItem("Bearer");
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v1/admin/add_category",
            data: data,
            headers: { Authorization: "Bearer " + token },
        }).then(function(response) {
            document.getElementById("cat").value = "";
            let result = response.data;
            let message = result.status;
            if (message == "Success") {
                alert("Category Added!");
            }
        });
    });
}
addCategory();