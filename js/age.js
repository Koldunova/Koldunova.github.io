
    var birth = new Date(2001, 1, 3); 
    var year = birth.getFullYear();
    var today = new Date();
    result="Date of Birth: 03.01.2001 (";
    result+=today.getFullYear() - year - (today.getTime() < birth.setFullYear(year));
    result+=" years old)";
    document.getElementById('myage').innerHTML =result;




