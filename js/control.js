const pruebaTecnica = new Vue({
    el: "#pruebaTecnica",
    data: {
     placa:"",
     hora1:"",
     hora2:"",
     digito1:"",
     digito2:"",
     horaCirculacion:"",
     reglas:true
    
    },
    mounted() {
        
    },
    methods: {
        _guardarReglas(){
            if(this.digito1==this.digito2||this.digito1==""||this.digito2==""||this.digito1>9||this.digito1<0||this.digito2>9||this.digito2<0){
                           alert("Por favor ingresa un rango de numeros para el pico y placa valido")
            }
            if(this.hora1==this.hora2||this.hora1==""||this.hora2==""){
                alert("Por favor ingresa un rango horario para el pico y placa valido")
            }
            this.reglas=false;

        },
        _consultarPlaca(){
            validacion=this.validarPlaca()
           if (validacion){
            alert("Por favor ingresa un numero de placa válido")
           };
           const ultimoDigito=this.placa[this.placa.length-1]
           if(ultimoDigito==this.digito1||ultimoDigito==this.digito2){
            let horaCirculacion="";
            let mensaje;
            if(this.horaCirculacion==""){
                    var date=new Date
                    var hora= date.getHours();
                    var minutos= date.getMinutes();
                    horaCirculacion= hora+":"+minutos;
                    mensaje="Tu auto puede circular a esta hora"
            }else{
             horaCirculacion=this.horaCirculacion
             mensaje="Tu auto puede circular a la hora seleccionada"
            }
            if(this.hora1<horaCirculacion||horaCirculacion<this.hora2){
             alert(mensaje);
            }
            
           };
           alert("Tu auto no puede circular del dia de hoy")
        },
        validarPlaca(){
            if(this.placa.length!=7){
                return true;

            }
            if (!this.placa.includes("-")) {
                return true;
            }
            const placaSeparada=this.placa.split("-");
            let parteNumerica = /^[0-9]+$/.test(placaSeparada[1]);
            let parteLetras =/^[A-Z]+$/.test(placaSeparada[0]);
            if(!parteNumerica||!parteLetras){
                return true;
            }
        }
    }
   


})