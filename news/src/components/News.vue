<template>
	<div id="newsPage">
		<mt-cell v-for="n in newsList" :title="newsTitle+n"></mt-cell>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { TabContainer, TabContainerItem } from 'mint-ui'
	
	
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);
	export default{
		name:'newsPage',
		data () {
			return {
				newsList:20,
				newsTitle:"news title "
			}
		}
	}
</script>