<template>
  <div>base feature, </div>
</template>

<script>
import { mapState } from "vuex";
import apiUserManager from "@/api/ucenter/userManager";

export default {
  name: "BaseFeature",
  computed: {
    ...mapState("app", {
      device: state => state.device
    })
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      apiUserManager.list({})
        .then(() => {})
        .catch(() => {});
    }
  }
};
</script>

<style scoped>

</style>
