function ExternalAlert(){
    alert('Please Check The Details.');
}
function ExternalConfirm(){
    if(confirm('Please Check The Details.'))
    {
        alert('Submmited Succesfully.');
    }
    else{
        alert('Not Submmited')
    }
}
function ExternalPrompt(){
    var fn = prompt('Enter First Name: ');
    var ln = prompt('Enter last Name: ');
    alert(fn+" "+ln );
}