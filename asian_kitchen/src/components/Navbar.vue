<template>
  <div class="container">
    <div class="buttons text-center d-flex gap-2 justify-content-center">
      <button 
      type="button"
      class="btn"
      :class="[$store.state.category == 'All' ? 'btn-dark' : 'btn-outline-dark']"
      @click="$store.state.category = 'All'">All</button>
      <button 
      type="button" 
      class="btn"
      :class="[$store.state.category == 'Korea' ? 'btn-dark' : 'btn-outline-dark']"
      @click="$store.state.category = 'Korea'">Korea</button>
      <button 
      type="button" 
      class="btn"
      :class="[$store.state.category == 'Japan' ? 'btn-dark' : 'btn-outline-dark']"
      @click="$store.state.category = 'Japan'">Japan</button>
      <button 
      type="button" 
      class="btn"
      :class="[$store.state.category == 'China' ? 'btn-dark' : 'btn-outline-dark']"
      @click="$store.state.category = 'China'">China</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>