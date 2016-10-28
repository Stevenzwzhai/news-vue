<template>
	<div id="picturePage">
		<ul>
		    <li v-for="item in list">
		    	<img :src="item">
		    </li>
		</ul>
	</div>
</template>
<script>
	
	export default{
		name:'picturePage',
		data () {
			return {
				list:[require('../assets/logo.png'),require('../assets/pic1.jpg'),require('../assets/pic1.jpg')]
			}
		}
	}
</script>
<style>
	img {
	  width: 300px;
	  height: 300px;
	  margin: auto;
	}
</style>