const app = new Vue({
  el: "#app",
  data() {
    return {
      inputUshiId: "",
      ushiList: [
        {
          id: "0123",
          name: "牛太郎",
          age: 10,
        },
        {
          id: "0124",
          name: "牛次郎",
          age: 8,
        },
        {
          id: "0123",
          name: "牛三郎",
          age: 6,
        },
        {
          id: "0125",
          name: "牛四郎",
          age: 4,
        },
        {
          id: "0126",
          name: "牛五郎",
          age: 2,
        },
        {
          id: "0125",
          name: "牛六郎",
          age: 1,
        },
      ],
      resultUshiList: [],
      error: false,
    };
  },
  methods: {
    searchUshi() {
      this.error = false;
      this.resultUshiList = [];

      const filteredUshiList = this.ushiList.filter((element) => {
        return element.id === this.inputUshiId;
      });

      if (filteredUshiList.length) {
        this.resultUshiList = filteredUshiList;
      } else {
        this.error = true;
      }
    },
    copyUshiId(ushiId, index) {
      const input = document.createElement("input");
      input.setAttribute("id", "copyinput");
      document.body.appendChild(input);
      input.value = ushiId;
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);

      const doneCopiedMessage = document.querySelectorAll(".doneCopiedMessage");
      doneCopiedMessage[index].classList.add("show");
      setTimeout(() => {
        doneCopiedMessage[index].classList.remove("show");
      }, 1000);
    },
  },
});
