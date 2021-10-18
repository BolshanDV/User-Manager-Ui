<template>
 <div class="preloader">
   <div class="preloader-wrapper big active">
     <div class="spinner-layer spinner-blue-only">
       <div class="circle-clipper left">
         <div class="circle"></div>
       </div><div class="gap-patch">
       <div class="circle"></div>
     </div><div class="circle-clipper right">
       <div class="circle"></div>
     </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
name: "Preloader"
}
</script>

<style scoped>
.preloader{
  display: flex;
  justify-content: center;
  align-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 80vh;
}
</style>