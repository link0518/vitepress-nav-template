---
layout: home
layoutClass: 'm-home-layout'

#layoutClass: m-nav-layout
outline: [2, 3, 4]
hero:
  name: 甜菜的
  text: 个人导航
  tagline: 存档自己搭建的一些小玩意
  image:
    src: /logo.png
    alt: 甜菜
  actions:
    
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
   
  linkText: 前端常用知识 
  
---
<script setup>
import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.scss"></style>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip
这里是甜菜的秘密基地
:::

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
