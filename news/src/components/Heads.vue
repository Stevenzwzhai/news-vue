<template>
	<div id="head">
		<mt-search v-model="value">
			<mt-cell
			    v-for="item in result"
			    :title="item.title"
			    :value="item.value"
			    cancel-text="取消"
  				placeholder="搜索">
			</mt-cell>
		</mt-search>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { Search } from 'mint-ui';

	Vue.component(Search.name, Search);

	export default{
		name:'head',
		data () {
			return{
				value:'',
				result:[{
					title:'aa',
					value:'aa1'
				}]
			}
		}
	}
</script>
<style>
	#head{
		height: 58px;
	}
</style>