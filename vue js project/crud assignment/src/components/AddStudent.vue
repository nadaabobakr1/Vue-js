<template>

 <form  @submit='validateForm' class="add-form">
    <div >
    <div  class="alert alert-danger" :key="error.id" v-for="error in formErrors">{{ error }}</div>
    </div>
  
    <div class="form-control">
      <label>Student</label>
      <input type="text" v-model="name" name="name" placeholder="Add Student"  minlength="3" maxlength="20"  />
    </div>
    <div class="form-control">
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Add Email"
      />

   
    </div>
    <div class="form-control">
      <label>Add Age</label>
      <input
        type="number"
        v-model="age"
        name="age"
        placeholder="Add Age"
         min=18 max=25
      />
    </div>


    <input type="submit"  class="btn btn-block" />
  </form>
    
</template>


<script>

export default ({
    name:'AddStudent',
    data(){
      return{
        formErrors:[],
        name:'',
        email:'',
        age:'',
        reminder:false,
        message:null,
        studentsArray:[],
        repeatedEmail:null,

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
   

     async validateForm(e) {
        e.preventDefault();
      this.formErrors = []; 
      this.repeatedEmail=''
      this.studentsArray= await this.fetchStudents()
          const tempArray=this.studentsArray
          console.log("this.email")
          console.log(this.email)
          const tempEmail=this.email
          

          this.repeatedEmail = tempArray.findIndex(function(student) {
            console.log("student.email")
            console.log(student.email)

          return student.email===tempEmail
          
         
          })

        if (this.repeatedEmail !=-1) {
          this.formErrors.push("Email used before please add another one");
        }
     
      if (!this.name) {
        this.formErrors.push("Name Can't Be Empty");
      }
       
      if (!this.email) {
        this.formErrors.push("Email Can't Be Empty");
      }

      
      if (!this.age) {
        this.formErrors.push("Age Can't Be Empty");
      }


      
      if (!this.formErrors.length) {
        const newStudent ={
          id:Math.floor(Math.random() * 100000),
          name :this.name,
          email:this.email,
          age:this.age,
          reminder:this.reminder,
         }
        this.$emit('add-Student',newStudent)
        this.name='',
        this.email ='',
        this.age ='',
        this.reminder =false
        return true;
      }
      
    }
  

    },
    
})
</script>


<style scoped>
.add-form {
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
