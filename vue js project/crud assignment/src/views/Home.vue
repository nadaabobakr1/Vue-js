<template>
    
  <AddStudent v-show="showAddStudent" @add-Student ="AddStudent" />
    
  <Students   @delete-Student="deleteStudent" :Students="Students" @edit-Student ="editStudent" />
</template>

<script>
import Students from '../components/Students'
import AddStudent from '../components/AddStudent'
import EditStudentVue from '@/components/EditStudent.vue'
export default {
    name:'Home',
    props:{
        showAddStudent:Boolean,

    },
    components:{
        Students,
        AddStudent
    },
    

    data(){
        return{
            Students:[],
        }
    },

methods:{


    async AddStudent(Student){
      const res = await fetch('api/Students',{
        method:'POST',
        headers:{
          'Content-type':'application/json',
        },
        body: JSON.stringify(Student),
      })

      const data =await res.json()

      
      this.Students= [...this.Students,data]


    },


    async deleteStudent(id){
      if (confirm('Are you sure you want to delete ?')){
        const res = await fetch(`api/Students/${id}`,{
          method:'DELETE',
        })
      
        res.status=== 200 ?(this.Students=this.Students.filter((Student)=>Student.id!==id)): alert('errror deleting')

        
      }

    },
 
    
    async fetchStudents(){
    const res = await fetch('api/Students')
    const data = await res.json()
     console.log("here at fetch Students")
    console.log(data)
    return data
    },

    async fetchStudent(id){
    const res = await fetch(`api/Students/${id}`)
    const data = await res.json()
     console.log("here at fetch Students")
    console.log(data)
    return data
    },

  },
  async created(){
     console.log("here at created")
   this.Students= await this.fetchStudents()
  },
  
    
}
</script>