<template>
  <div id="componentList">
    <div class="page-title">JS Components</div>
    <div v-for="(item,index) in list" :key="index" class="component-item" @click="$router.push({path:item.path,query:{title:item.name}})">
     <i class="fa" :class="item.icon"></i>&nbsp;&nbsp;{{item.name}}
    </div>
    <div class="page-title">CSS Components</div>
    <div v-for="(item,index) in list2" :key="index" class="component-item" @click="$router.push({path:item.path,query:{title:item.name}})">
    <i class="fa" :class="item.icon"></i>&nbsp;&nbsp; {{item.name}}
    </div>
  </div>
</template>

<style lang="scss">
@import '~scss-kit';
.page-title {
  font-size: rem(40);
  padding: 20px;
  // text-align: center;
  display: block;
  line-height: 1;
  background-color: #3aa8e3;
  color: #fff;
}

.component-item{
  padding:rem(30) rem(20);
  background-color: #fff;
  font-size:rem(32);
  text-transform: capitalize; 
  position: relative;
  color: #333;
  &::after{
    content:'\f105';
    font:normal normal normal 14px/1 FontAwesome;
    font-size: rem(50);
    position: absolute;
    top: rem(20);
    right:rem(20);
    color: #999;
  }
  &:hover{
    background-color: #fafafa;
  }
}
.fa{color: #3aa8e3;}
</style>
<script>
import {js,css} from '../../src/componentList';
export default {
  data(){
    return {
      list : js,
      list2 :css
    }
  }
}
</script>
