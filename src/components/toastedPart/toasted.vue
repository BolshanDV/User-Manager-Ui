<template>
  <div>
    <div class="toasted">
      <transition-group
          class="error_block"
          name="slide-fade"
      >
        <div class="toasted_element"
             v-for="arrayError in arrayErrors"
             :key="arrayError.id"
        >
          <div class="content_text">{{arrayError.text}}</div>
        </div>
      </transition-group>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "toasted",
  computed: {
    ...mapGetters('toastedStore', ['arrayErrors'])
  }
}
</script>

<style scoped >

.toasted{
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;
}
.toasted_element {
  padding: 16px;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 200px;
  margin-bottom: 16px;
  background: rgb(250, 10, 10);
}
.content_text{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.error_block{
  display: flex;
  flex-direction: column-reverse;
}
</style>
