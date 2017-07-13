<template>
<div class="welcome">
  <div class="full-screen">
    <div>
      <h1>Vue-iuim</h1>
      <br>
      <a class="button-line" @touchstart="$router.push('/home')">Get Started</a>
    </div>
  </div>
</div>
</template>
<style lang="scss">

@import '~scss-kit';

.welcome{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: linear-gradient(253deg, #0cc898, #1797d2, #864fe1);
  background-size: 300% 300%;
}



.full-screen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(http://images.vrm.cn/2017/07/13/wCG2csZ.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  text-align: center;
  h1 {
    margin-top: 40%;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: rem(110);
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, .6);
  }

  h1:after {
    display: block;
    color: #fff;
    letter-spacing: 1px;
    font-family: 'Poiret One', sans-serif;
    content: 'Flexible  &  Easy';
    margin-top: rem(20);
    font-size: rem(40);
    text-align: center;
  }

  .button-line {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    text-align: center;
    border-radius: rem(10);
    font-size: rem(30);
    opacity: 1;
    padding: rem(25);
    text-decoration: none;
    transition: all .5s ease;
    margin: rem(200) auto 0;
    display: block;
    width: rem(300);
  }

  .button-line:hover {
    opacity: 1;
  }
}
</style>

<script>
export default {
  mounted() {

  }
}
</script>
