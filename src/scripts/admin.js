function loginToMain() {
    if (document.URL.includes("index.html")) {
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
    }
    // main();
}

loginToMain();

// function main() {
//     if (document.URL.includes("main.html")) {
//         document
//             .getElementById("view_categories")
//             .addEventListener("click", function() {
//                 location.href = "./Categories.html";
//             });
// let view_items = document
//     .getElementById("view_items")
//     .addEventListener("click", viewItems);
//     }
// }