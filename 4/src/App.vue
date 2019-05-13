<template>
  <div id="app">
    <RetrieveHeader></RetrieveHeader>
    <RetrieveContainer></RetrieveContainer>
    <RetrieveFooter></RetrieveFooter>
  </div>
</template>

<script>
import RetrieveHeader from './components/RetrieveHeader'
import RetrieveContainer from './components/RetrieveContainer'
import RetrieveFooter from './components/RetrieveFooter'
import {fontsizeset} from './fontsizeset'
export default {
  name: 'app',
  components:{ RetrieveHeader ,RetrieveContainer , RetrieveFooter},
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>
