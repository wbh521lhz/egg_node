<template>
  <div id="app">
    <LoginHeader></LoginHeader>
    <LoginContainer></LoginContainer>
    <LoginFooter></LoginFooter>
  </div>
</template>

<script>
import LoginHeader from './components/LoginHeader'
import LoginContainer from './components/LoginContainer'
import LoginFooter from './components/LoginFooter'
import {fontsizeset} from './fontsizeset'
export default {
  name: 'app',
  components:{ LoginHeader ,LoginContainer , LoginFooter},
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
