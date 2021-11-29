var autoincrementuserID = 1000;
var autoincrementcourseID = 100;
var user = /** @class */ (function () {
    function user(paramname, paramage, parammobileno) {
        autoincrementuserID++;
        this.name = paramname;
        this.age = paramage;
        this.mobileNO = parammobileno;
        this.userID = autoincrementuserID.toString();
    }
    return user;
}());
var course = /** @class */ (function () {
    function course(paramId, paramcoursename, paramdays) {
        autoincrementcourseID++;
        this.userID = paramId;
        this.courseID = autoincrementcourseID.toString();
        this.coursename = paramcoursename;
        this.requireddays = paramdays;
    }
    return course;
}());
var userlist = new Array();
userlist.push(new user("naveen", "21", "9080327102"));
userlist.push(new user("karthick", "24", "8248893599"));
var usercourselist = new Array();
usercourselist.push(new course("102", "HTML", 5));
usercourselist.push(new course("101", "C#", 10));
function registration() {
    var Home = document.getElementById("home");
    var newregister = document.getElementById("register");
    Home.style.display = "none";
    newregister.style.display = "block";
}
function completeregister() {
    var Name = document.getElementById("Uname").value;
    var Age = document.getElementById("Uage").value;
    var PHNO = document.getElementById("Uphno").value;
    if (Name != "" && Age != "" && PHNO != "") {
        userlist.push(new user(Name, Age, PHNO));
        for (var i = 0; i < userlist.length; i++) {
            if (userlist[i].name == Name && userlist[i].mobileNO == PHNO) {
                alert(userlist[i].userID);
            }
        }
        var Home = document.getElementById("home");
        var newregister = document.getElementById("register");
        newregister.style.display = "none";
        Home.style.display = "block";
    }
}
function ExistingUser() {
    var Home = document.getElementById("home");
    var olduser = document.getElementById("existuser");
    Home.style.display = "none";
    olduser.style.display = "block";
    var labeluser = document.getElementById("displayuser");
    labeluser.innerHTML = "<h2>Available user</h2>";
    for (var i = 0; i < userlist.length; i++) {
        labeluser.innerHTML += "UserID :".concat(userlist[i].userID, " || UserName :").concat(userlist[i].name, "<br>");
    }
}
function displaycourse() {
    var checkuserid = document.getElementById("confirm").value;
    var olduser = document.getElementById("existuser");
    var coursepage = document.getElementById("course");
    for (var i = 0; i < userlist.length; i++) {
        if (checkuserid != userlist[i].userID) {
            alert("enter a valid userID");
            break;
        }
        else {
            olduser.style.display = "none";
            coursepage.style.display = "block";
            break;
        }
    }
}
function addcourse() {
    var select = document.getElementById("selectcourse").value;
    var show = document.getElementById("daysforcourse");
    if (select == "C#") {
        var Csharpdays = 10;
        show.innerHTML = "days for C# is 10";
        usercourselist.push(new course("101", select, Csharpdays));
        alert("added successfully");
    }
    else if (select == "HTML") {
        var htmldays = 5;
        show.innerHTML = "days for HTML is 5";
        usercourselist.push(new course("102", select, htmldays));
        alert("added successfully");
    }
    else if (select == "CSS") {
        var cssdays = 5;
        show.innerHTML = "days for CSS is 5";
        usercourselist.push(new course("103", select, cssdays));
        alert("added successfully");
    }
    else if (select == "JS") {
        var jsdays = 3;
        show.innerHTML = "days for JS is 3";
        usercourselist.push(new course("104", select, jsdays));
        alert("added successfully");
    }
    else {
        var tsdays = 2;
        show.innerHTML = "days for TS is 2";
        usercourselist.push(new course("105", select, tsdays));
        alert("added successfully");
    }
}
function enroll() {
    var coursepage = document.getElementById("course");
    var last = document.getElementById("totaldays");
    coursepage.style.display = "none";
    last.style.display = "block";
    var labeldays = document.getElementById("totalDays");
    labeldays.style.display = "block";
    var TotalDays = document.getElementById("Totaldays");
    TotalDays.style.display = "block";
    var coursedet = 0;
    for (var i = 0; i < usercourselist.length; i++) {
        labeldays.innerHTML += "course ID:".concat(usercourselist[i].courseID, " || course name: ").concat(usercourselist[i].coursename, " || required days: ").concat(usercourselist[i].requireddays, "<br>");
        coursedet = coursedet + usercourselist[i].requireddays;
        TotalDays.innerHTML = coursedet.toString();
    }
    ;
}
