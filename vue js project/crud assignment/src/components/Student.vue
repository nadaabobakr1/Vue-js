<template>
  
<div @dblclick="$emit('toggle-reminder',Student.id)" :class="[Student.reminder ? 'reminder' :'',   'Student']" >
    <h3>{{Student.name}}</h3>
    <p>{{Student.email}}</p>
    <p>{{Student.age}}</p>
    <span  class="btn bg-danger" @click="$emit('delete-Student',Student.id)">Delete</span>

    <router-link :to="{ name: 'EditStudent', params: { id: Student.id,name: Student.name, age: Student.age,email:Student.email } }"  class="btn bg-warning">Edit</router-link>

    <router-link :to="{ name: 'ShowStudent', params: { id: Student.id,name: Student.name, age: Student.age,email:Student.email } }"  class="btn bg-primary">Show Single</router-link>



    

</div>
    
</template>

<script>
  import Button from './Button'

export default {
    name:'Student',
    props:{
        Student:Object,
    },
    components:{
    Button,
    Button
},

   
}
</script>




<style scope>
.fas {
  color: red;
  font-size: x-large;
  
}
.Student {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.Student.reminder {
  border-left: 5px solid green;
}
.Student h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>