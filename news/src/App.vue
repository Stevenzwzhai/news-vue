<template>
    <div id="app">
        <Bodys :tabname="tabname"></Bodys>
        <Foot @changeTab="getTab"></Foot>
    </div>

</template>

<script>
import Heads from './components/Heads.vue'
import Bodys from './components/Bodys.vue'
import Foot from './components/Foot.vue'
export default {
    name: 'app',
    data() {
        return {
            tabname:''
        }
    },
    components:{
        Heads,
        Bodys,
        Foot
    },
    methods:{
        getTab: function(TabName){
            console.log('tabname:'+TabName);
            this.tabname = TabName;
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
    
}

a {
  color: #42b983;
}
</style>
