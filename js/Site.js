function getValue(){
    alert("Hello World!");
}

function getValue2(){
    let msg = '';

    msg = document.getElementById("message").value;

    Swal.fire(
        {
            backdrop: false,
            title: 'app name',
            text: msg
        }
    )
}