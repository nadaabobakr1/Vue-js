<template >

  
  
  <router-link to="/"  class="btn bg-primary text-decoration-none  text-white">Back</router-link>
  
  
  
  <form  @submit='validateForm' class="edit-form">
     
      <div >
      <div  class="alert alert-danger" :key="error.id" v-for="error in formErrors">{{ error }}</div>
      </div>
    
      <div class="form-control">
        <label>Student</label>

        <textarea  name="name" minlength="3" maxlength="20" v-model="this.studentName" />
  
       
        
  
      </div>
      <div class="form-control">
        <label>Email</label>
     
        <textarea name="email"   type="email"  v-model="this.studentEmail" />
  
      </div>
      <div class="form-control">
        <label>Add Age</label>
        <textarea  min=18 max=25 name="age" type="number"   v-model="this.studentAge" />
        
      </div>
    
  
      <input type="submit"  class="btn btn-block" />
      
    </form>

  </template>
  
  <script>
      
  
  
  export default( {
      
  
      name:'EditStudent',
     
      
      data(){
        return{
          studentID:this.$route.params.id,
          studentName:this.$route.params.name,
          studentEmail:this.$route.params.email,
          studentAge:this.$route.params.age,
          formErrors:[],
          name:'',
          email:'',
          age:'',
          reminder:false,
          message:null,
          Students:[],
  
        }
      },
  
  methods:{
    async fetchStudents(){
      const res = await fetch('/api/students')
      const data = await res.json()
       console.log("here at fetch Students")
      console.log(data)
      return data
      },
  
    async fetchStudent(id){
      console.log("here at fetch before ")
      const res = await fetch(`/api/students/${id}`)
      const data = await res.json()
       console.log("here at fetch after")
      console.log(data)
      return data
      },
  
    async editStudent(){
      
      console.log("studentName")
  
      console.log(this.studentName)
  
      const StudenttToToggle = await this.fetchStudent(this.studentID)
      const updStudent ={...StudenttToToggle, name: this.studentName,email: this.studentEmail,age: this.studentAge}
  
      const res = await fetch (`/api/students/${this.studentID}`,{
        method:'PUT',
        headers :{
          'Content-type': 'application/json'
        },
        body :JSON.stringify(updStudent)
      })
      return true;
     
  
      
  
  
  
  
      },
  
     
  
  
     async validateForm(e) {
          e.preventDefault();
          this.formErrors = []; 
        
        console.log("this.studentName")
        console.log(this.studentName)
        if (!this.studentName) {
          this.formErrors.push("Name Can't Be Empty");
        }
        
        if (!this.studentEmail) {
          this.formErrors.push("Email Can't Be Empty");
        }
  
        if (!this.studentAge) {
          this.formErrors.push("Age Can't Be Empty");
        }
        if (this.studentAge<18  ) {
          this.formErrors.push("Age Can't Be Less than 18");
        }
        if (this.studentAge > 25  ) {
          this.formErrors.push("Age Can't Be Greater than 25");
        }
  
        
  
  
        if (!this.formErrors.length) {
          const isEdited=await this.editStudent()
          
          this.$router.push('/')
        }
  
        
        
      }
  
      },
  
    
      
  })
  </script>
  
  <style scoped>
      .edit-form {
        margin-bottom: 40px;
      }
      .form-control {
        margin: 20px 0;
      }
      .form-control label {
        display: block;
      }
      .form-control input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
      }
      .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .form-control-check label {
        flex: 1;
      }
      .form-control-check input {
        flex: 2;
        height: 20px;
      }
      </style>
      