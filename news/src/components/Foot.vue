<template>
	<div id="foot" class="mint-tabbar foot" :class="{
      'is-fixed': fixed
    }">
	    <mt-tabbar v-model="selected">
		    <mt-tab-item id="news">
		        <img slot="icon" src="../assets/news.png">
		        新闻
		    </mt-tab-item>
		    <mt-tab-item id="pictures">
		        <img slot="icon" src="../assets/picture.png">
		        图片
		    </mt-tab-item>
		    <mt-tab-item id="videos">
		        <img slot="icon" src="../assets/video.png">
		        视频
		    </mt-tab-item>
		    <mt-tab-item id="mine">
		        <img slot="icon" src="../assets/mine.png">
		        我的
		    </mt-tab-item>
	    </mt-tabbar>
	</div>
</template>

<script>
	import Vue from 'vue';

	import { Tabbar, TabItem } from 'mint-ui';

	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);
	export default{
		name:'foot',
		data () {
			return {
				fixed:true,
				selected:'news'
			}
		},
		watch:{
			selected: function(val){
				console.log(val);
				this.$emit('changeTab', val);
			}
		}
	}
</script>
<style>
	.foot{
		height:3.45rem;
	}
</style>