<template>
  <div class>
    <highcharts-component :options="options" :styles="styles" ref="simpleChart"></highcharts-component>
    <highcharts-component :options="options_02" :styles="styles" ref="simpleChart"></highcharts-component>
  </div>
</template>

<script type="text/ecmascript-6">
import { requestList } from "../api/api.js";
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
      },
       options_02:{}
    };
  },
  components: {
    highchartsComponent
  },
  created() {
    this.getData();
    this.getData_02()
  },
  methods: {
    getData(){
      let that = this;
      requestList("/user",{}).then(data => {
        that.options =data
      });
    },
    getData_02(){
       let that = this;
      requestList("/line",{}).then(data => {
        that.options_02 =data
      });
     
    }
  }
};
</script>

<style >
</style>
