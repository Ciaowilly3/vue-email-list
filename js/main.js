const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {
    createEmailArray() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((email) => {
          console.log(email.data.response);
          this.emailList.push(email.data.response);
        });
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.createEmailArray();
    }
  },
}).mount("#app");
