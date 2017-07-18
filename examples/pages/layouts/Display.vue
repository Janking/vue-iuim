<template>
  <div class="display">
    <div class="display__header">
      <div class="col-left" @click="$router.go(-1)">
        <i class="fa fa-angle-left fa-2x"></i>
      </div>
      <div class="col-center">{{$route.query.title}}</div>
      <div class="col-right">&nbsp;</div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~scss-kit';
.display {
  #{&}__header {
    @include clearfix;
    background-color: lighten(#3aa8e3, 20%);
    color: #fff;
    line-height: 1;
    padding: rem(10) rem(20);
    .col-left {
      @include span(4 of 12 inside);
    }
    .col-center {
      @include span(4 of 12 inside);
      font-size: rem(40);
      text-align: center;
      line-height: rem(70);
    }
    .col-right {
      @include span(4 of 12 inside);
    }
  }
}
</style>
