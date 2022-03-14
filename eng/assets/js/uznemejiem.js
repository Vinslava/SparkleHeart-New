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
});