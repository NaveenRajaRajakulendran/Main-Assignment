var autoincrementuserID=1000;
var autoincrementcourseID=100;

class user{
    userID:string;
    name:string;
    age:string;
    mobileNO:string;
    constructor(paramname:string,paramage:string,parammobileno:string){
        autoincrementuserID++
        this.name=paramname;
        this.age=paramage;
        this.mobileNO=parammobileno;
        this.userID=autoincrementuserID.toString();

    }
}
class course{
    courseID:string;
    coursename:string;
    requireddays:number;
    userID:string;
    constructor(paramId:string, paramcoursename:string,paramdays:number){
        autoincrementcourseID++;
        this.userID=paramId;
        this.courseID=autoincrementcourseID.toString();
        this.coursename=paramcoursename;
        this.requireddays=paramdays;
        
    }
}
let userlist:Array<user>=new Array<user>();
userlist.push(new user("naveen","21","9080327102"))
userlist.push(new user("karthick","24","8248893599"))


let usercourselist:Array<course>=new Array<course>();
usercourselist.push(new course("102","HTML",5))
usercourselist.push(new course("101","C#",10))

function registration(){
    var Home=document.getElementById("home") as HTMLDivElement;
    var newregister=document.getElementById("register") as HTMLDivElement;
    Home.style.display="none";
    newregister.style.display="block"
}

function completeregister(){
    
    var Name=(document.getElementById("Uname") as HTMLInputElement).value;
    var Age=(document.getElementById("Uage") as HTMLInputElement).value;
    var PHNO=(document.getElementById("Uphno") as HTMLInputElement).value;
    if(Name!=""&&Age!=""&&PHNO!=""){
        
        userlist.push(new user(Name,Age,PHNO));
        for(let i=0;i<userlist.length;i++){
            if(userlist[i].name==Name&&userlist[i].mobileNO==PHNO){
            alert(userlist[i].userID);
            }
        }
        
        var Home=document.getElementById("home") as HTMLDivElement;
        var newregister=document.getElementById("register") as HTMLDivElement;
        newregister.style.display="none";
        Home.style.display="block";
        
    }
    
    
} 

function ExistingUser(){
    var Home=document.getElementById("home") as HTMLDivElement;
    var olduser=document.getElementById("existuser") as HTMLDivElement;
    Home.style.display="none";
    olduser.style.display="block";
    let labeluser=document.getElementById("displayuser") as HTMLLabelElement;
    labeluser.innerHTML="<h2>Available user</h2>";
    for(let i=0;i<userlist.length;i++){
        labeluser.innerHTML+=`UserID :${userlist[i].userID} || UserName :${userlist[i].name}<br>`;
    }
}

function displaycourse(){
    var checkuserid =(document.getElementById("confirm")as HTMLInputElement).value;
    var olduser=document.getElementById("existuser") as HTMLDivElement;
    var coursepage=document.getElementById("course") as HTMLDivElement;
    for(let i=0;i<userlist.length;i++){
        if(checkuserid!=userlist[i].userID){
            
            alert("enter a valid userID");
            break;
        }
        else{
            olduser.style.display="none";
            coursepage.style.display="block";
            break;
        }
        
    }
    
    

}

function addcourse(){
    let select=(document.getElementById("selectcourse") as HTMLInputElement).value;
    var show=document.getElementById("daysforcourse") as HTMLLabelElement;
    if(select=="C#"){
        var Csharpdays=10;
        show.innerHTML="days for C# is 10";
        usercourselist.push(new course("101",select,Csharpdays))
        alert("added successfully");

    }
    else if(select=="HTML"){
        var htmldays=5;
        show.innerHTML="days for HTML is 5";
        usercourselist.push(new course("102",select,htmldays))
        alert("added successfully");
    }
    else if(select=="CSS"){
        var cssdays=5;
        show.innerHTML="days for CSS is 5";
        usercourselist.push(new course("103",select,cssdays))
        alert("added successfully");

    }
    else if(select=="JS"){
        var jsdays=3;
        show.innerHTML="days for JS is 3";
        usercourselist.push(new course("104",select,jsdays))
        alert("added successfully");
    }
    else{
        var tsdays=2;
        show.innerHTML="days for TS is 2";
        usercourselist.push(new course("105",select,tsdays))
        alert("added successfully");
    }
    
    
}

function enroll(){
    var coursepage=document.getElementById("course") as HTMLDivElement;
    var last=document.getElementById("totaldays") as HTMLDivElement;
    coursepage.style.display="none";
    last.style.display="block";
    var labeldays=document.getElementById("totalDays")as HTMLLabelElement;
    labeldays.style.display="block";
    var TotalDays=document.getElementById("Totaldays")as HTMLDivElement;
    TotalDays.style.display="block";
    var coursedet=0;
    for(let i=0;i<usercourselist.length;i++){
        labeldays.innerHTML+=`course ID:${usercourselist[i].courseID} || course name: ${usercourselist[i].coursename} || required days: ${usercourselist[i].requireddays}<br>`
        coursedet=coursedet+usercourselist[i].requireddays;
        TotalDays.innerHTML=coursedet.toString()
         
    };  
    

}