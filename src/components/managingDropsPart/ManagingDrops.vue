<template>
  <div class="managingDrops_flex">
    <div class="managingDrops_column">

      <div class="managingDrops_column_create">
        <p>Создание дропа</p>

      </div>
      <div class="managingDrops_column_chart">
        <div class="managingDrops_column_chart_payment">
          <p>Успешные оплаты</p>
        </div>
        <div class="managingDrops_column_chart_key">
          <p>Привязанные ключи</p>
        </div>
      </div>

    </div>
    <div class="managingDrops">
      <p>Управление дропами</p>

    </div>

  </div>
</template>

<script>
export default {
name: "ManagingDrops"
}
</script>

<style scoped>
.managingDrops_flex{
  display: flex;
  flex-direction: row;
  background-color: #161E29;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0vh 0 5vh 0;

}
.managingDrops_column{
  height: 100vh;
  width: 30%;
  margin-right: 2%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}
.managingDrops{
  height: 100vh;
  width: 62%;
  background: #0D121A;
  border-radius: 10px;
  padding: 2vh;
}
.managingDrops_column_create{
  height: 95vh;
  width: 100%;
  background: #0D121A;
  margin-bottom: 6%;
  border-radius: 10px;
  padding: 2vh;


}
.managingDrops_column_chart{
  height: 70vh;
  width: 100%;
  background: #0D121A;
  border-radius: 10px;
  padding: 2vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

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
.managingDrops_column_chart_payment{
  height: 100%;
  width: 50%;
  margin-right: 2vh;
}
.managingDrops_column_chart_key{
  height: 100%;
  width: 50%;


}
</style>