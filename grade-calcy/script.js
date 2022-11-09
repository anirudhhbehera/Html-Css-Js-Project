const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";
    
   
    




    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    


    let perc = (totalGrades / 400) * 100;
    


    debugger;


    if (perc <= 100 && perc > 90) {
        grades = 'A+';
    }else if (perc <= 90 && perc > 80) {
        grades = 'A';
    } else if (perc <= 80 && perc > 70) {
        grades = 'B';
    } else if (perc <= 70 && perc > 60) {
        grades = 'C';
    } else if (perc <= 60 && perc > 50) {
        grades = 'D';
    } else if (perc <= 50 && perc > 40) {
        grades = 'E';
    }else {
        grades = 'F';
    }


    if (perc >= 40) {
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else {
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
    


}

var load = document.getElementById("sec");
// var lol = document.getElementsById("background");  
function loadfun(){
    setTimeout(function(){
        load.style.display = 'none';
     },1000);
      
                                                                                                                                                                                                                                                                                                                                                                                                        
}

