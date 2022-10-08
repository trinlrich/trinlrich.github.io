function validate() {
    let username = document.info_form.elements["username"].value;
    let email = document.info_form.elements["email"].value;
    let phone = document.info_form.elements["phone"].value;
    let password = document.info_form.elements["password"].value;
    let conf_password = document.info_form.elements["conf_password"].value;
    let gender_items = document.getElementsByClassName("gender_items");
    let gender;
    let age_group = document.info_form.age_menu.value;

    let output = "";
    let enter_string = "Please Enter ";

    // Validate Username
    if (username.length > 0) {
        if (username.length < 4 || username.length > 12 || username.toLowerCase() != username) {
            output += enter_string + "<span class='not_valid'>a valid username</span><br/><br/>";
        }
    } else {
        output += enter_string + "<span class='empty'>Username</span><br/><br/>";
    }

    // Validate Email
    if (email.length > 0) {
        let valid_domains = [".net", ".com", ".org", ".edu"];
        let input_domain = email.substring(email.indexOf("."));
        if (email.indexOf("@") == -1 || !valid_domains.includes(input_domain)) {
            output += enter_string + "<span class='not_valid'>a valid email</span><br/><br/>";
        }
    } else {
        output += enter_string + "<span class='empty'>Email</span><br/><br/>";
    }

    // Validate Phone Number
    if (phone.length > 0) {
        if (phone.length == 14 && phone.indexOf("(") == 0 && phone.indexOf(")") == 4 &&  phone.indexOf("-") == 5 && phone.indexOf("-", phone.indexOf("-") + 1) == 9) {
            phone = phone.replace("(", "");
            phone = phone.replace(")", "");
            phone = phone.replace("-", "");
            phone = phone.replace("-", "");
            console.log(phone)
            console.log(parseInt(phone))
            console.log(isNaN(parseInt(phone)))
            console.log(parseInt(phone) == phone)
            if (parseInt(phone) != phone || phone.length != 10) {
                output += enter_string + "<span class='not_valid'>a valid phone number</span><br/><br/>";
            }
        } else {
            output += enter_string + "<span class='not_valid'>a valid phone number</span><br/><br/>";
        }
    } else {
        output += enter_string + "<span class='empty'>Phone Number</span><br/><br/>";
    }

    // Validate Password
    if (password.length > 0) {
        if (password.length > 8) {
            let hasLower = false;
            let hasUpper = false;
            let hasNum = false;
            let hasSpecChar = false;
            let spec_chars = ["\\", "/", "[", "]", "{", "}", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", ";", "'", "\"", ":", "|", ",", ".", "<", ">", "?"];
            for (let i = 0; i < password.length; i++) {
                let letter = password[i];
                if (!isNaN(parseInt(letter))) {
                    hasNum = true;
                } else {
                    if (spec_chars.includes(letter)) {
                        hasSpecChar = true;
                    } else {
                        if (letter.toLowerCase() == letter) {
                            hasLower = true;
                        }
                        if (letter.toUpperCase() == letter) {
                            hasUpper = true;
                        }
                    }
                }
            }
            if (!(hasLower && hasUpper && hasNum && hasSpecChar)) {
                console.log("missing req: " + hasLower + " " + hasUpper + " " + hasNum + " " + hasSpecChar);
                output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>";
            }
        } else {
            console.log("too short")
            output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>";
        }
    } else {
        output += enter_string + "<span class='empty'>Password</span><br/><br/>";
    }

    // Validate Gender 
    for (let i = 0; i < gender_items.length; i++) {
        if (gender_items[i].checked) {
            gender = gender_items[i];
        }
    }

    if (gender == null) {
        output += enter_string + "<span class='empty'>Gender</span><br/><br/>";
    }

    // Validate Age Group
    if (age_group.length <= 0) {
        output += enter_string + "<span class='empty'>Age Group</span><br/><br/>";
    }

    // Print Errors
    document.getElementById("form_errors").innerHTML = output;

    // Validate Confirm Password
    if (output.length <= 0) {
        if (conf_password != password) {
            alert("Passwords do not match");
        } else {
            window.location.replace("https://trinlrich.github.io/");
        }
    }
}

function clear_form() {
    document.getElementById("form_errors").innerHTML = "";
    console.log("cleared");
}