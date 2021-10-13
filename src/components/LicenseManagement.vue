<template>
  <div class="license_flex">
    <div class="license_create">
      <p>Создание лицензий</p>
    </div>
    <div class="license_recently">
      <p>Недавно созданные</p>
    </div>

  </div>
</template>

<script>
export default {
  name : "LicenseManagement"
}
</script>

<style scoped>
  .license_flex{
    height: 100vh;
    display: flex;
    flex-direction: row;
    /*background-color: #161E29;*/
    margin: 7vh 0 5vh 0;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
  }
  .license_create{
    height: 30%;
    width: 33%;
    background: #0D121A;
    border-radius: 10px;
    padding: 2vh;
    margin-right: 4vh;
  }
  .license_recently{
    height: 100%;
    width: 58%;
    background: #0D121A;
    border-radius: 10px;
    padding: 2vh;
  }
  p{
    margin-top: 0;
    font-family: Roboto,serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2vh;
    line-height: 3vh;
    letter-spacing: 0.01em;
    color: #FFFFFF;
  }
</style>