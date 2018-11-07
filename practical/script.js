var app = new Vue({
    el: "#app",
    data: {
        guess:0,
        number:0
    },
    methods: {
        showAlert: function () {
            if(this.$data.number != this.guess){
                alert('Oops!! try again that guess is incorrect'+' '+ 'Random guess is' + ' '+ this.guess)
            }
            else{
                alert('Yappy!! you guesed it! ')
            }
         
        
        } 
        }
      })


app.guess = Math.round(Math.random()*10)
console.log(app.guess)


