<template>
<div class="home">
  <div class="container">
    <div class="col-lg-3 col-md-3 col-sm-5 col-sx-10">
      <div class="intro" @click="gotoInfo">
        <div class="intro-pic-text">
          <a>
            <img src=".././assets/intro.png">
            <div class="intro-text">
              <p>Skin Cancer Information</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
   <div class="row1">
     <div class="col-lg-3 col-md-3 col-sm-5 col-sx-10">
       <div class="monitor" @click="gotoRisk">
         <div class="monitor-pic-text">
           <a>
             <img src=".././assets/monitor.png">
             <div class="monitor-text">
               <p>Risk Factors</p>
             </div>
           </a>
         </div>
       </div>
     </div>
     <div class="col-lg-3 col-md-3 col-sm-5 col-sx-10">
       <div class="file" @click="gotoPrev">
         <div class="file-pic-text">
           <a>
             <img src=".././assets/file1.png">
             <div class="file-text">
               <p>Prevention</p>
             </div>
           </a>
         </div>
       </div>
     </div>
   </div>
   <div class="row2">
     <div class="col-lg-3 col-md-3 col-sm-5 col-sx-10">
       <div class="computation" @click="gotoDiag">
         <div class="computation">
           <a>
             <img src=".././assets/computation.png">
             <div class="computation-text">
               <p>Diagnosis</p>
             </div>
           </a>
         </div>
       </div>
     </div>
     <div class="col-lg-3 col-md-3 col-sm-5 col-sx-10">
       <div class="data" @click="gotoTreat">
         <div class="data-pic-text">
           <a>
             <img src=".././assets/data.png">
             <div class="data-text">
               <p>Treatment</p>
             </div>
           </a>
         </div>
       </div>
     </div>
   </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    gotoInfo () {
      this.$router.push('info')
    },
    gotoRisk () {
      this.$router.push('risk')
    },
    gotoPrev () {
      this.$router.push('prev')
    },
    gotoDiag () {
      this.$router.push('diag')
    },
    gotoTreat () {
      this.$router.push('treat')
    }
  }
}
</script>

<style scoped>
.home{
  position: fixed;
  top: 10%;
  left: 7%;
}

div.container{
    display: inline-block;
    margin-left: 30px;
    margin-top: 20px;
}

div.col-lg-3 {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    border: #DCDCDC solid thin;
    background-color: #fdffff;
    border-radius: 30px;
    text-align: center;
}

div.col-lg-3 p{
  font-size: x-large;
  font-weight: 900;
  color: #000000;
}
</style>
