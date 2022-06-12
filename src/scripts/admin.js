function loginToMain() {
    document.getElementById("login").addEventListener("click", function() {
        /*Defining variables*/
        let login_email = document.getElementById("login_email").value;
        let login_pass = document.getElementById("login_pass").value;

        /*Append the variables set by the user to the Form Data to send them to url*/
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v1/login",
            data: {
                email: login_email,
                password: login_pass,
            },
        }).then(function(response) {
            result = response.data;
            console.log(result);
            window.localStorage.setItem("Bearer", result.access_token);
            location.href = "./pages/main.html";
        });
    });
    main();
}
loginToMain();

function main() {
    let view_categories = document
        .getElementById("view_categories")
        .addEventListener("click", viewCategories);
    let view_items = document
        .getElementById("view_items")
        .addEventListener("click", viewItems);
}

function viewCategories() {
    axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/v1/admin/all_categories",
    }).then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            var view = document.querySelector("#tab");
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