var form = document.querySelector('.needs-validation'); //gives access to form
form.addEventListener('submit', function(event) //when the "Sūtīt" button is clicked then
{
    if (form.checkValidity() === false) //if validity is false
    {
        event.preventDefault(); //no request is sent
        event.stopPropagation(); //form submission is stopped
    }
    //makes sure boostrap asigns the right styles to the elements and inputs inside the form:
    form.classList.add('was-validated'); 
    event.preventDefault(); //no request is sent
});

const FormBtn = document.getElementById("FormButton"); //btn = button with the id "toggle"
const Result = document.getElementById("Result"); 
const FormBtnDiv = document.getElementById("FormButtonDiv"); 
const checkboxdiv = document.getElementById("checkboxcontent"); 
const tinylbl = document.getElementById("tinylabel"); 

FormBtn.onclick = function () //when clicking the "skatīt vairāk" button
{
    if (form.classList.contains('was-validated')) //if the targetDiv container's class contains d-none
    {
        Result.classList.remove("d-none");
        FormBtnDiv.classList.add("d-none");
        checkboxdiv.classList.add("d-none");
        tinylbl.classList.add("d-none");
    }
};