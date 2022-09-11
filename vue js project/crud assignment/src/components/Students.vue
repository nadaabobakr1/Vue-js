<template>
    <div :key="Student.id" v-for="Student in Students">
   
        <Student  @toggle-reminder="$emit('toggle-reminder',Student.id)" @delete-Student="$emit('delete-Student',Student.id)" 
        :Student="Student"  @edit-Student="$emit('edit-Student',Student)" />

    </div>
</template>
<script>

import Student from './Student'
export default {
    name:'Students',
    props:{
        Students:Array,
    },
    components:{
        Student

    },
    emits:['delete-Student','toggle-reminder'],
   
}
</script>
