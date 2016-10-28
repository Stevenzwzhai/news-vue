<template>
	<div id="videoPage">
		<mt-index-list>
		    <mt-index-section index="A">
			    <mt-cell title="Aaron"></mt-cell>
			    <mt-cell title="Alden"></mt-cell>
			    <mt-cell title="Austin"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="B">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
			<mt-index-section index="C">
			    <mt-cell title="Caldwin"></mt-cell>
			    <mt-cell title="Craden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="D">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="E">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="F">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="G">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="H">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="I">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="J">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="K">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="L">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="M">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="N">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="O">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="P">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="Q">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="R">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="S">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    
		    <mt-index-section index="T">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="U">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="V">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="W">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="X">
			    <mt-cell title="Xaldwin"></mt-cell>
			    <mt-cell title="Xraden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="Y">
			    <mt-cell title="Yaldwin"></mt-cell>
			    <mt-cell title="Yraden"></mt-cell>
		    </mt-index-section>
		    <mt-index-section index="Z">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
		    </mt-index-section>
		</mt-index-list>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { IndexList, IndexSection } from 'mint-ui'

	Vue.component(IndexList.name, IndexList);
	Vue.component(IndexSection.name, IndexSection)
	export default{
		name:'videoPage',
		data () {
			return {
				index:'',
				title:''
			}
		}
	}
</script>