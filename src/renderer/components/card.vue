<template>
  <div class="card-container">
    <h3>Highest Mastery Points</h3>
    <div class="card">
      <div class="image-box">
        <img
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/94/Fiora_OriginalSquare.png/revision/latest?cb=20150725010749"
          alt=""
        >
      </div>
      <div class="data">
        <div class="top">
          27542 point
        </div>
        <div class="bottom">
          250 game
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss'>
.card-container{
    h3{
        color:rgba(254, 254, 254, 0.67);
    }
    .card{
    background-color: #090809;
    width: 320px;
    margin-top: 1.01em;
    height: 153px;
    padding: 1.8em;
    display: flex;
    align-items: center;
    border-radius: 0.7em;
    .data{
        width:72%;
        height: 100%;
        margin-left: 1.2em;
        .top,.bottom{
            background-color:#0F0E0F;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .top{
            height:70%;
            color:#fff;
            border-top-left-radius: 17px;
            border-top-right-radius: 17px;
            margin-bottom:0.3em;

        }
        .bottom{
            height:30%;
            border-bottom-left-radius: 17px;
            border-bottom-right-radius: 17px;
        }

    }
    .image-box{
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5em;
        background-color:#0F0E0F;
        width: 40%;
        height: 84%;
        border-radius: 1.2em;
        img{
        width: 66px;
        border-radius: 50%;
        }
    }
}
}
</style>
