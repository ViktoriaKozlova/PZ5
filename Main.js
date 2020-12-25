var p = document.getElementById("InPut");
    let d = prompt("Username:")
    if (d == "") {
        alert("Username field isn't filled!!!");
    }
    let t = prompt("Password:");
    if (t == "") {
        alert("Password field isn't filled!!!");
    }
    let v = prompt("Confirm your password:");
    if (v == "") {
        alert("Password field isn't filled!!!");
    }
    if (t !== "" && v !== ""){
        if (t == v) {
            alert("User verified successfully. Press OK to continue.");
        }
    }
    alert("Entered passwords do not match!!!");