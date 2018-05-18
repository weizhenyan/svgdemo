 var x=document.getElementById("can");
    var height=x.height;
    var c=x.getContext("2d");
    c.font="30px impact";
    c.fillStyle="#000";
    c.textAlign='center';
    c.fillText("用canvas实现",35,50,100);


    var cA=x.getContext("2d");
    cA.fillStyle="#f00";
    cA.fillRect(10,0.7*height,50,350);

    cA.font="16px impact";
    cA.fillStyle="#960";
    cA.textAlign='center';
    cA.fillText("30%",35,0.7*height,50);
    
    var cB=x.getContext("2d");
    cB.fillStyle="#ddd";
    cB.fillRect(80,0.2*height,50,350);

    cB.font="16px impact";
    cB.fillStyle="#960";
    cB.textAlign='center';
    cB.fillText("80%",105,0.2*height,50);

    var cC=x.getContext("2d");
    cC.fillStyle="#0FD";
    cC.fillRect(150,0.3*height,50,350);

    cC.font="16px impact";
    cC.fillStyle="#960";
    cC.textAlign='center';
    cC.fillText("70%",175,0.3*height,50);

    var cD=x.getContext("2d");
    cD.fillStyle="#FF0";
    cD.fillRect(220,0.4*height,50,350);

    cD.font="16px impact";
    cD.fillStyle="#960";
    cD.textAlign='center';
    cD.fillText("60%",245,0.4*height,50);

    var cE=x.getContext("2d");
    cE.fillStyle="#234";
    cE.fillRect(290,0.1*height,50,350);

    cE.font="16px impact";
    cE.fillStyle="#960";
    cE.textAlign='center';
    cE.fillText("90%",315,0.1*height,50);