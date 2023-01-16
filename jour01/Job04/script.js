function IsLeapYear(Year) {
    return (((Year & 3) == 0) && ((Year % 100 != 0) || (Year % 400 == 0)));
   }
    
   for(I=2000;I<=2022;I++) {
    if(IsLeapYear(I)) document.write(I+" est une année bissextile<BR>");
   }