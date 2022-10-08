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
    let regex = "";

    // Validate Username
    regex = /^[a-z\d]{4,12}$/g;
    if (username.length > 0) {
        if (!regex.test(username)) {
            output += enter_string + "<span class='not_valid'>a valid username</span><br/><br/>";
        }
    } else {
        output += enter_string + "<span class='empty'>Username</span><br/><br/>";
    }
    
    // Validate Email
    regex = /^\w+\.?\w+@\w+(\.net|\.com|.org|\.edu)$/g;
    if (email.length > 0) {
        if (!regex.test(email)) {
            output += enter_string + "<span class='not_valid'>a valid email</span><br/><br/>";
        }
    } else {
        output += enter_string + "<span class='empty'>Email</span><br/><br/>";
    }

    // Validate Phone Number
    regex = /^\(\d{3}\)\-\d{3}\-\d{4}$/g;
    if (phone.length > 0) {
        if (!regex.test(phone)) {
            output += enter_string + "<span class='not_valid'>a valid phone</span><br/><br/>";
        }
    } else {
        output += enter_string + "<span class='empty'>Phone Number</span><br/><br/>";
    }

    // Validate Password
    if (password.length > 0) {
        if (password.length > 8) {
            if (/[a-z]/g.test(password)) {
                if (/[A-Z]/g.test(password)) {
                    if (/[0-9]/g.test(password)) {
                        if (/[\W]/g.test(password)) {
                            if (/[\s]/g.test(password)) { output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>"; }
                        } else { output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>"; }
                    } else { output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>"; }
                } else { output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>"; }
            } else { output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>"; }
        } else { output += enter_string + "<span class='not_valid'>a valid password</span><br/><br/>"; }
    } else { output += enter_string + "<span class='empty'>Password</span><br/><br/>"; }

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