var app = new Vue({
  el: "#app",
  data: { 
    username:"",
    password:"",
    usernameError:false,
    passwordError:false,
    usernameErrorMessage:'',
    passwordErrorMessage:''    
  },
  methods:{
    login: function(){
      this.usernameError  =false
      this.passwordError = false
      this.usernameErrorMessage =''
      this.passwordErrorMessage = ''

      if(this.username.length < 3){
        this.usernameError = true
        this.usernameErrorMessage = 'username too short!'
      }
      if(this.username.indexOf('@') == -1 || this.username === ""){
        this.usernameError = true
        this.usernameErrorMessage = 'Enter valid email address'
        
      }
      if(this.password.length < 6){
          this.passwordError = true
          this.passwordErrorMessage = 'password must be 6 or more charectors'
      }
      if(this.password ===""){
        this.passwordError = true
        this.passwordErrorMessage = 'password canot be empty!'
      }

    }
  }
})