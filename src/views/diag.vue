<template>
<div class="diag">
  <div class="col-lg-3 col-md-3 col-sm-5 col-sx-10">
    <div class="uploadInput" style="position:relative;">
      <img src="../assets/add.png"
      style="position: relative;top: 5px;cursor:pointer"
      onclick="document.getElementById('file').click()">
      <input
        type="file"
        accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
        name="file"
        id="file"
        style="display:none"
        onChange="document.getElementById('fileName').value=this.value"
        @change="getFile($event)"
      />
      <input
        type="text"
        id="fileName"
        size="40"
        placeholder="Image Upload"
        style="display: inline; margin: 8mm;border:none; font-size: large; background-color: #e8e8e8;"
        readonly
      />
      <button
        type='submit'
        @click="uploadFile($event)"
        style="display: inline; font-size: large;border-radius: 10px; background-color: #ffffff;cursor:pointer;
        position: relative; right: -200px;"
      >confirm</button>
    </div>
    <label class="gray_line" style="position: relative;"></label><br>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      file: '',
      inputFiles: [],
      fileName: ''
    }
  },
  methods: {
    reload () {
      this.$router.go(0)
    },
    getFile (event) {
      this.file = event.target.files[0]
      console.log(this.file)
    }
  }
}
</script>

<style scoped lang="scss">
.diag{
  position: fixed;
  top: 10%;
}

div.col-lg-3 {
  display: inline-block;
  margin: 30px;
  padding: 20px;
  border: #DCDCDC solid thin;
  background-color: #e8e8e8;
  border-radius: 30px;
  width: 930px;
  height: 550px;
  text-align: left;
}

div.col-lg-3 p{
  font-size: large;
  font-weight: 500;
  color: #000000;
}

.gray_line {
  background:#b6b6b6;
  width: 900px;
  height: 1px;
  float: left;
}
</style>
