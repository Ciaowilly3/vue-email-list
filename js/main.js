const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      emailList: [],
      arrayToCopy: [],
    };
  },
  methods: {
    createEmailArray() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((email) => {
          this.arrayToCopy.push(email.data.response);
          if (this.arrayToCopy.length === 10) {
            this.emailList = this.arrayToCopy;
          }
        });
    },
    itineratingFnction() {
      for (let i = 0; i < 10; i++) {
        this.createEmailArray();
      }
    },
  },
  mounted() {
    this.itineratingFnction();
  },
}).mount("#app");
