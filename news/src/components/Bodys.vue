<template>
	<div id="body" class="body">
		<!-- <all-component :is="CurrentPage"></all-component> -->
		<mt-tab-container v-model="CurrentPage">
		    <mt-tab-container-item id="news">
		    	<News></News>
		    </mt-tab-container-item>
		  	<mt-tab-container-item id="pictures">
		    	<Picture></Picture>
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="videos">
				<Videos></Videos>
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="mine">
		   		<Mine></Mine>
		  	</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { TabContainer, TabContainerItem } from 'mint-ui'
	import Mine from './Mine.vue'
	import News from './News.vue'
	import Picture from './Picture.vue'
	import Videos from './Videos.vue'
	
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);

	Vue.component('all-component');
	export default{
		name:'body',
		data () {
			return {
				currentPage:'news',
				newsList:20,
				newsTitle:'news list '
			}
		},
		props:['tabname'],
		watch:{
			tabname:function(val){
				console.log('Body:'+val);
				this.currentPage = val;
			}
		},
		computed:{
			CurrentPage: function(){
				return this.currentPage;
			}
		},
		components: {
			news: {
				template: '<div>this is news</div>'
			},
			pictures: {
				template: '<div>this is pictuer</div>'
			},
			videos: {
				template: '<div>this is video</div>'
			},
			mine: {
				template: '<div>this is mine</div>'
			},
			Mine,
			News,
			Picture,
			Videos
		},
		methods:{
			
		}
	}
</script>
<style>
	.body{
		margin-bottom: 1.3rem;
	}
</style>