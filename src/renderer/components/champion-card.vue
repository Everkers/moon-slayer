<template>
  <div
    :style="{ backgroundImage: 'url(' + 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + image + '_0.jpg' + ')' }"
    class="champion-card"
  >
    <div class="info">
      <span>{{ name }}</span>
      <span>{{ subname }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'subname', 'image'],
};
</script>

<style lang='scss'>
.champion-card{
    margin:{
        bottom:1.5em;
        right:1.5em
    };
    .info{
    width:100%;
    height:26%;
    background:#0F0E0F;
    padding: 0 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:first-child{
        color: #fff;
    }
    span:last-child{
    font-size: 9px;
    color: #ABABAB;
    }

    }
    width: 9em;
    border-radius: 0.3em;
    height: 15em;
    overflow:hidden;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-image: url(https://3.bp.blogspot.com/-Q9FU11d04K4/VbAFkiv2ymI/AAAAAAAAuJg/1264bftVs_E/s1600/Fiora_0.jpg);
}
</style>
