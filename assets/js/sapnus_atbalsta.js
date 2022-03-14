const RigaMap = document.getElementById("DefaultRigaMap"); 
const JelgavaMap = document.getElementById("DefaultJelgavaMap"); 
const OgreMap = document.getElementById("DefaultOgreMap"); 
const RigaFoodMap = document.getElementById("RigaFoodMap"); 

const PurchContent = document.getElementById("PurchContainer"); 
const KurtsContent = document.getElementById("KurtsContainer"); 

function MapFunction() 
{
    var selectBox1 = document.getElementById("selectBoxPlace");
    var Place = selectBox1.options[selectBox1.selectedIndex].value;

    var selectBox2 = document.getElementById("selectBoxType");
    var PlaceSort = selectBox2.options[selectBox2.selectedIndex].value;
    
    if(Place == "Riga")
    {
        RigaMap.classList.remove("d-none");
        JelgavaMap.classList.add("d-none");
        OgreMap.classList.add("d-none");
        if(PlaceSort == "Food")
        {
            PurchContent.classList.remove("d-none");
            KurtsContent.classList.remove("d-none");
            RigaFoodMap.classList.remove("d-none");
            JelgavaMap.classList.add("d-none");
            OgreMap.classList.add("d-none");
            RigaMap.classList.add("d-none");
        }
    }
    else if(Place == "Jelgava")
    {
        JelgavaMap.classList.remove("d-none");
        RigaFoodMap.classList.add("d-none");
        RigaMap.classList.add("d-none");
        OgreMap.classList.add("d-none");
        PurchContent.classList.add("d-none");
        KurtsContent.classList.add("d-none");
    }
    else if(Place == "Ogre")
    {
        OgreMap.classList.remove("d-none");
        RigaFoodMap.classList.add("d-none");
        RigaMap.classList.add("d-none");
        JelgavaMap.classList.add("d-none");
        PurchContent.classList.add("d-none");
        KurtsContent.classList.add("d-none");
    }
}