<template>
  <div class>
    <highcharts-component :options="options" :styles="styles" ref="simpleChart"></highcharts-component>
  </div>
</template>

<script type="text/ecmascript-6">
import { requestFansList } from "../api/api.js";
import highchartsComponent from "@/components/highcharts_components";

export default {
  name: "",
  data() {
    return {
      options: {
      },
      styles: {
        width: "100%",
        height: "100%"
      }
    };
  },
  components: {
    highchartsComponent
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      let that = this;
      requestFansList("", {
        page: 1
      }).then(data => {
        that.options =data
      });
    }
  }
};
</script>

<style >
</style>
