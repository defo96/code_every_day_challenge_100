const btn = document.querySelector('button')
const passwordLength = document.getElementById('_1')
const checkuppercase = document.getElementById('_2')
const checklowercase = document.getElementById('_3')
const checknumber = document.getElementById('_4')
const checksymbols = document.getElementById('_5')
const txt = document.querySelector('.password')
const bouttonCopy = document.querySelector('.btncopy')



const uppercase = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
const lowercase = 'azertyuiopqsdfghjklmwxcvbn'
const number = '0123456789'
const symbols = "'^¨$£¤%*!§:/;.?,+-=})]°@ç_`|[({'#\"~&"




btn.addEventListener('click', () => {
    getPassword()
    })

function getPassword() {
    var motdepasse = ''
    var passWord = ''

    var randomNumber =-1

    var char = ''
    if(checkuppercase.checked){
        randomNumber = Math.floor(Math.random() * uppercase.length)
        passWord += uppercase.substring(randomNumber, randomNumber + 1)
        char+= uppercase
    }
    if(checklowercase.checked){
        randomNumber = Math.floor(Math.random() * lowercase.length)
        passWord += lowercase.substring(randomNumber, randomNumber + 1)
        char+=lowercase
    }
    if(checknumber.checked){
        randomNumber = Math.floor(Math.random() * number.length)
        passWord += number.substring(randomNumber, randomNumber + 1)
        char+=number
    }
    if(checksymbols.checked){
        randomNumber = Math.floor(Math.random() * symbols.length)
        passWord += symbols.substring(randomNumber, randomNumber + 1)
        char+=symbols
    }
    
    var lengthPassword = passwordLength.value
    
    motdepasse = passWord

    const lengthPassword1 = passWord.length

   
    if (lengthPassword <= 0) {
        txt.value = "erreur entrer une logueur de password"
        txt.style.color = "white"
    } else {
        let i = 0
        //générer le mot de passe
        for ( i = 0; i < (lengthPassword - lengthPassword1); i++) {
            randomNumber = Math.floor(Math.random() * char.length)

            motdepasse += char.substring(randomNumber, randomNumber + 1)

            // afficher le mot de passe

            
            //changer le style du button copier

            btn.style.background = "#6c757d"
            // copyBtn.style.color = "#fff"
            
        }
    }
    txt.value = motdepasse;

}

function copyMdp() {
    var password = txt.value;
    console.log("ok")
    if (password.length > 0) {

        navigator.clipboard.writeText(password);
        
        bouttonCopy.style.color = "red";

        alert("Mot de passe copié !");

    } else {
        alert("Veuillez générer un mot de passe avant de copier.");
    }
}


bouttonCopy.addEventListener('click', copyMdp);

