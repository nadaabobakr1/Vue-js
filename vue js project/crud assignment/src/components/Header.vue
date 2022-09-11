<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" @btn-click="$emit('toggle-add-Student')" :text="showAddStudent ? 'Close':'Add Student'" :color="showAddStudent ? 'red' : 'green'"/>
    </header>
</template>


<script>
import Button from './Button'

export default {
name: 'Header',
props:{
    title:String,
    showAddStudent:Boolean
},

components:{
    Button
},
computed:{
    homePage(){
        if(this.$route.path ==='/'){
            return true
        } 
        else {
            return false

        }
    }


}
}

</script>

<style scoped>
header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>