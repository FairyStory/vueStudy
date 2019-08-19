<template>
   <div class="">
 tab1
   </div>
</template>

<script type="text/ecmascript-6">
import {requestFansList  } from "../api/api.js";
export default {
   name: '',
   data() {
       return {}
   },
  components: {},
  created () {
    requestFansList("",{
      page:1
    }).then(data=>{
      console.log("tab1",data)
    })
  }
}
</script>

<style >
</style>
