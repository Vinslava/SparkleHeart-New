function ClickMe(i) // i = div block called 'HiddenPopup'. when you click on golden div block nr 5
{
    document.getElementById(i).classList.remove("d-none"); //removes dnone class from ''hiddenpopup'
};
function DeleteMe(i) // when you click on x icon
{
    document.getElementById(i).classList.add("d-none"); //adds dnone class to ''hiddenpopup'
};

const targetDiv1 = document.getElementById("HideMe1"); //targetDiv = container with the id "HideMe"
const targetDiv2 = document.getElementById("HideMe2"); 
const targetDiv3 = document.getElementById("HideMe3"); 
const targetDiv4 = document.getElementById("HideMe4"); 
const targetDiv5 = document.getElementById("HideMe5"); 
const targetDiv6 = document.getElementById("HideMe6"); 
const targetDiv7 = document.getElementById("HideMe7"); 
const targetDiv8 = document.getElementById("HideMe8"); 
const targetDiv9 = document.getElementById("HideMe9"); 
const targetDiv10 = document.getElementById("HideMe10"); 
const targetDiv11 = document.getElementById("HideMe11");
const targetDiv12 = document.getElementById("HideMe12"); 
const targetDiv13 = document.getElementById("HideMe13"); 
const targetDiv14 = document.getElementById("HideMe14"); 
const targetDiv15 = document.getElementById("HideMe15"); 
const targetDiv16 = document.getElementById("HideMe16"); 
const targetDiv17 = document.getElementById("HideMe17"); 
const targetDiv18 = document.getElementById("HideMe18"); 
const targetDiv19 = document.getElementById("HideMe19"); 
const targetDiv20 = document.getElementById("HideMe20"); 
const targetDiv21 = document.getElementById("HideMe21"); 
const targetDiv22 = document.getElementById("HideMe22"); 
const targetDiv23 = document.getElementById("HideMe23"); 
const targetDiv24 = document.getElementById("HideMe24"); 
const targetDiv25 = document.getElementById("HideMe25"); 
const targetDiv26 = document.getElementById("HideMe26"); 
const targetDiv27 = document.getElementById("HideMe27"); 
const targetDiv28 = document.getElementById("HideMe28"); 
const targetDiv29 = document.getElementById("HideMe29"); 
const targetDiv30 = document.getElementById("HideMe30"); 
const targetDiv31 = document.getElementById("HideMe31"); 
const targetDiv32 = document.getElementById("HideMe32"); 
const targetDiv33 = document.getElementById("HideMe33"); 
const targetDiv34 = document.getElementById("HideMe34"); 
const targetDiv35 = document.getElementById("HideMe35"); 
const targetDiv36 = document.getElementById("HideMe36"); 
const targetDiv37 = document.getElementById("HideMe37"); 
const targetDiv38 = document.getElementById("HideMe38"); 
const targetDiv39 = document.getElementById("HideMe39"); 
const targetDiv40 = document.getElementById("HideMe40"); 
const targetDiv41 = document.getElementById("HideMe41"); 
const targetDiv42 = document.getElementById("HideMe42"); 
const targetDiv43 = document.getElementById("HideMe43"); 
const targetDiv44 = document.getElementById("HideMe44"); 
const targetDiv45 = document.getElementById("HideMe45"); 
const targetDiv46 = document.getElementById("HideMe46"); 
const targetDiv47 = document.getElementById("HideMe47"); 
const targetDiv48 = document.getElementById("HideMe48"); 
const targetDiv49 = document.getElementById("HideMe49"); 
const targetDiv50 = document.getElementById("HideMe50"); 
const targetDiv51 = document.getElementById("HideMe51"); 
const targetDiv52 = document.getElementById("HideMe52"); 
const targetDiv53 = document.getElementById("HideMe53"); 
const targetDiv54 = document.getElementById("HideMe54"); 
const targetDiv55 = document.getElementById("HideMe55"); 
const targetDiv56 = document.getElementById("HideMe56"); 
const targetDiv57 = document.getElementById("HideMe57"); 
const targetDiv58 = document.getElementById("HideMe58"); 
const targetDiv59 = document.getElementById("HideMe59"); 
const targetDiv60 = document.getElementById("HideMe60"); 
const targetDiv61 = document.getElementById("HideMe61"); 
const targetDiv62 = document.getElementById("HideMe62"); 
const targetDiv63 = document.getElementById("HideMe63"); 
const targetDiv64 = document.getElementById("HideMe64"); 
const targetDiv65 = document.getElementById("HideMe65"); 
const targetDiv66 = document.getElementById("HideMe66"); 
const targetDiv67 = document.getElementById("HideMe67"); 
const targetDiv68 = document.getElementById("HideMe68"); 
const targetDiv69 = document.getElementById("HideMe69"); 
const targetDiv70 = document.getElementById("HideMe70"); 
const targetDiv71 = document.getElementById("HideMe71"); 
const targetDiv72 = document.getElementById("HideMe72"); 
const targetDiv73 = document.getElementById("HideMe73"); 
const targetDiv74 = document.getElementById("HideMe74"); 
const targetDiv75 = document.getElementById("HideMe75"); 
const targetDiv76 = document.getElementById("HideMe76"); 
const targetDiv77 = document.getElementById("HideMe77"); 
const targetDiv78 = document.getElementById("HideMe78"); 
const targetDiv79 = document.getElementById("HideMe79"); 

const btn = document.getElementById("toggle"); //btn = button with the id "toggle"

btn.onclick = function () //when clicking the "skatīt vairāk" button
{
    if (targetDiv1.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv1.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv1.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv2.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv2.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv2.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv3.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv3.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv3.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv4.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv4.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv4.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv5.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv5.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv5.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv6.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv6.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv6.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv7.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv7.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv7.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv8.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv8.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv8.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv9.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv9.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv9.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv10.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv10.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv10.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv11.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv11.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv11.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv12.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv12.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv12.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv13.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv13.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv13.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv14.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv14.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv14.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv15.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv15.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv15.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv16.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv16.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv16.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv17.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv17.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv17.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv18.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv18.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv18.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv19.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv19.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv19.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv20.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv20.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv20.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    if (targetDiv21.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv21.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv21.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv22.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv22.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv22.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv23.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv23.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv23.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv24.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv24.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv24.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv25.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv25.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv25.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv26.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv26.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv26.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv27.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv27.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv27.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv28.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv28.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv28.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv29.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv29.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv29.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv30.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv30.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv30.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    if (targetDiv31.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv31.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv31.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv32.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv32.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv32.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv33.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv33.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv33.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv34.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv34.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv34.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv35.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv35.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv35.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv36.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv36.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv36.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv37.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv37.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv37.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv38.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv38.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv38.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv39.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv39.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv39.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv40.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv40.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv40.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    if (targetDiv41.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv41.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv41.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv42.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv42.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv42.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv43.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv43.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv43.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv44.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv44.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv44.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv45.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv45.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv45.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv46.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv46.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv46.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv47.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv47.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv47.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv48.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv48.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv48.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv49.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv49.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv49.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv50.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv50.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv50.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    if (targetDiv51.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv51.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv51.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv52.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv52.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv52.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv53.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv53.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv53.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv54.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv54.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv54.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv55.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv55.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv55.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv56.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv56.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv56.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv57.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv57.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv57.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv58.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv58.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv58.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv59.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv59.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv59.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv60.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv60.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv60.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    if (targetDiv61.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv61.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv61.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv62.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv62.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv62.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv63.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv63.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv63.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv64.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv64.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv64.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv65.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv65.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv65.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv66.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv66.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv66.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv67.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv67.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv67.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv68.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv68.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv68.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv69.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv69.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv69.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    if (targetDiv70.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv70.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv70.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    if (targetDiv71.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv71.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv71.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv72.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv72.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv72.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv73.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv73.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv73.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
    
    if (targetDiv74.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv74.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv74.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv75.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv75.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv75.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv76.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv76.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv76.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv77.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv77.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv77.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv78.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv78.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv78.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }

    if (targetDiv79.classList.contains("d-none")) //if the targetDiv container's class contains d-none
    {
        targetDiv79.classList.remove("d-none") //then d-none gets removed
        btn.innerText = "Skatīt mazāk"; //and button text shows skatīt mazāk
    }
    else //if the targetDiv containers doesn't contain contains d-none
    {
        targetDiv79.classList.add("d-none")
        btn.innerText = "Skatīt vairāk";
    }
};
