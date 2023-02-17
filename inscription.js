var btn = document.querySelector(".submit").addEventListener("click", (e)=>{
    e.preventDefault();
    let inputs = document.getElementsByClassName("inputs");
    let formData = {
        nom: inputs[0].value,
        prenom: inputs[1].value,
        address: inputs[2].value,
        num_tel: inputs[3].value,
        date_naissance: inputs[4].value,
        mdp: inputs[5].value,
        cMdp: inputs[6].value
    }
    validate(formData);
})

const validate = (formData) => {
    // if(formData.nom.length < 3){
    //     document.getElementById("nom").innerHTML = "<span style='color:red'>Le nom doit contenir au min 3 caractere</span>"
    // }else{
    //     document.getElementById("nom").innerHTML = "<span style='color:green'>Le nom est OK!</span>" 
    // }
    if(formData.prenom.length < 4){
        document.getElementById("prenom").innerHTML = "<span style='color:red'>Le prenom doit contenir au min 4 caractere</span>"
    }
}

const checkName = (input) => {
    let name = input.value;
    if(name.length < 3){
        document.getElementById("nom").innerHTML = "<span style='color:red'>Le nom doit contenir au min 3 caractere</span>"
    }else{
        document.getElementById("nom").innerHTML = "<span style='color:green'>Le nom est OK!</span>" 
    }
}