<template>
  <div class="child">
      <h2>Child Component</h2>
      <!-- 3. 사용한다. -->
      {{ propFromParent}}

      <button @click="hungrySignal"> 배고파요!</button>
  </div>
</template>

<script>
export default {
    name: 'Child',
    // 2. props 등록 (반드시 object 를 써야 Validation 가능)
    props: {
        propFromParent: String, //넘어오는 data 의 validation 검사
    },
    methods: {
        hungrySignal () {
            // 1. 부모한테 이벤트 (시그널) 방출
            this.$emit('hungry', '피자 먹고싶다', '치킨도 먹고싶다') // Custom Event('이벤트이름', ...데이터)
        }
    }
}
</script>

<style>
    .parent {
        border: 3px solid gray;
        margin: 3px;
        padding: 3px;
    }

    .child {
        border: 3px solid blue;
        margin: 3px;
        padding: 3px;
    }
</style>