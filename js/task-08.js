const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    
    event.preventDefault();   

    const userEmail = event.currentTarget.elements.email.value;
    const userPass = event.currentTarget.elements.password.value;

    // const formData = new FormData(event.currentTarget);
        if (!event.currentTarget.elements.email.value ||
            !event.currentTarget.elements.password.value) {
            alert ('Всі поля повинні бути заповнені')
        } else {
            const objectData = {
                email: userEmail,
                password: userPass
            }
            console.log(objectData);
            event.currentTarget.reset();
        }
}