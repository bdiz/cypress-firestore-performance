<template>
  <div id="app">

    <button
       @click="sendRequest"
       data-test="add-doc-button"
     >Add document to Firestore</button>

    <h3 v-if="timerStarted">XHR response received in <span data-test="timer">{{ timer }}</span>s.</h3>

  </div>
</template>

<script>
import firestore from "./firestore";

export default {
  name: 'app',
  data() {
    return {
      timer: 0.0,
      timerStarted: false
    };
  },
  methods: {
    sendRequest() {

      this.timer = 0;
      this.timerStarted = true;

      let interval = setInterval(() => {
        this.timer = this.timer + 0.1;
      }, 100);

      firestore.collection("users").add({name: "fred"})
        .then(() => {
          clearInterval(interval);
        });

    }
  }
}
</script>
