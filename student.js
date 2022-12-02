const exp = require("express");
const app = exp();
const router = exp.Router();
const path = require('path');
const port = 3000;

//MongoDB Connection
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://tlrichards:Z64mQ0wgI20uGtnQ@cluster0.gdviubp.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'COMP322-Richards';
const client = new MongoClient(uri);

client.connect(function(err) {
    if (err) {
        //TODO :: Complete
        console.log(err);
        return;
    }
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    router.use(exp.static(__dirname + '/public'));
    router.use(exp.json());

    router.get('/student', function(req, res){
        res.sendFile(path.join(__dirname, '/student.html'));
    })

    router.post('/student/post', function(req, res) {
        var doc_res = res;
        var student = pullFormInfo(req);

        var errors = "";
        if (!/^\d{9}$/g.test(student.student_id)) errors += "<h2>Please Enter a Valid Student ID</h2>XXXXXXXXX";
        if (!/^\(\d{3}\)[\s.-]\d{3}[\s.-]\d{4}$/g.test(student.phone_num)) errors += "<h2>Please Enter a Valid Phone Number</h2>(XXX)-XXX-XXXX";
        if (!/^\w+\.?\w+@\w+\.\w+$/g.test(student.email_add)) errors += "<h2>Please Enter a Valid Email Address</h2>john@gmail.com";
        if (errors != "") {
            doc_res.send(errors);
            return;
        }

        db.collection("student").findOne(
            {student_id: student.student_id}, function(err, res) {
                if (err) throw err;
                if (res) {
                    console.log("A Student with this ID Already Exists");
                    doc_res.send("<h2>A Student with this ID Already Exists</2>");
                } else {
                    db.collection("student").insertOne(student);
                    console.log("ID Not Found. New Student Added");
                    doc_res.send("<h2>Success! A New Student has been Added</h2>");
                }
            }
        );
    });
    router.post('/student/get', function(req, res) {
        const doc_res = res;
        const student = pullFormInfo(req);
        db.collection("student").find(
            {
                $or: [
                    {student_id: student.student_id},
                    {first_name: student.first_name},
                    {last_name: student.last_name}
                ]
            }).toArray(
            function(err, res) {
                if (err) throw err;
                if (res.length > 0) {
                    console.log(res.length + " Student(s) Found");
                    var result_string = "";
                    for (let i = 0; i < res.length; i++) {
                        result_string += "<h2>Student " + (i + 1) + ":</h2>"
                        result_string += res[i].first_name + "<br/>"
                        result_string += res[i].last_name + "<br/>"
                        result_string += res[i].student_id + "<br/>"
                        result_string += res[i].mailing_add + "<br/>"
                        result_string += res[i].phone_num + "<br/>"
                        result_string += res[i].email_add + "<br/>"
                    }
                    doc_res.send(result_string);
                } else {
                    console.log("Student Not Found");
                    doc_res.send("<h2>No Student(s) Found</h2>");
                }
            }
        );
    });
    router.put('/student/put', function(req, res) {
        const doc_res = res;
        const student = pullFormInfo(req);
        db.collection("student").updateOne(
            {student_id: student.student_id}, 
            {
                $set:{
                    first_name: student.first_name,
                    last_name: student.last_name,
                    student_id: student.student_id,
                    mailing_add: student.mailing_add,
                    phone_num: student.phone_num,
                    email_add: student.email_add
                }
            }, 
            function(err, res) {
                if (err) throw err;
                if (res.matchedCount == 1) {
                    console.log("Student Found and Updates");
                    doc_res.send("<h2>Success! The Student has been Updated.</h2>");
                } else {
                    console.log("ID Not Found");
                    doc_res.send("<h2>This Student ID does not Exist.</h2>");
                }
            }
        );
    });
    router.delete('/student/delete', function(req, res) {
        const doc_res = res;
        const student = pullFormInfo(req);
        db.collection("student").deleteOne(
            {student_id: student.student_id}, function(err, res) {
                if (err) throw err;
                if (res.deletedCount == 1) {
                    console.log("Student Deleted");
                    doc_res.send("<h2>Success! The Student has been Deleted.</h2>");
                } else {
                    console.log("ID Not Found.");
                    doc_res.send("<h2>This Student ID does not Exist.</h2>");
                }
            }
        );
    });

    app.use(router);
    app.listen(port, () => console.log("App started listening on port " + port));
});

function pullFormInfo(req) {
    const student = {
        first_name: "",
        last_name: "",
        student_id: 0,
        mailing_add: "",
        phone_num: 0,
        email_add: ""
    }

    student.first_name = req.body.first_name != "" ? req.body.first_name : "N/A";
    student.last_name = req.body.last_name!= "" ? req.body.last_name : "N/A";
    student.student_id = req.body.student_id!= "" ? req.body.student_id : "N/A";
    student.mailing_add = req.body.mailing_add != "" ? req.body.mailing_add : "N/A";
    student.phone_num = req.body.phone_num!= "" ? req.body.phone_num : "N/A";
    student.email_add = req.body.email_add!= "" ? req.body.email_add : "N/A";

    return student;
}