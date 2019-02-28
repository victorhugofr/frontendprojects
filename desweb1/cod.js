  var fileId = 2;
            function rmElement(element) { 
                document.getElementById(element).innerHTML = '<br>';
            }
            function addFile() {
               fileId++;
               var campo = document.getElementById('meu-input').value;
               var texto = "<p id='at"+fileId+"'> <input type='checkbox'>"+campo+" <button type='button' onclick='rmElement('at"+fileId+")'>X</button><br></p>'";

               document.getElementById("teste").innerHTML += texto;
                e.preventDefault();
                return false;
            }