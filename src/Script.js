document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector('.login-btn');
    //ເມືື່ອກົດປຸ່ມ
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

       if (username == ''|| password== '' ) {
        alert('ກະລູນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ')
        return;
       }
    } );
    passwordInput.addEventListener('input', function () {
        const strength = passwordInput.value.length;
        if(strength <6 ) {
            loginButton.style.backgroundColor = "#ff4d4d";
        } else if (strength < 10) {
            loginButton.style.backgroundColor = "#ffa500";
        } else {
            loginButton.style.backgroundColor = "#4caf50";
        } 
    });
});