<template>
  <div
  v-if="$store.state.category == data.category | $store.state.category == 'All'"
  class="card mb-3" 
  style="max-width: 640px"> <!-- Burada kısacası filtreleme işlemi yapıyoruz. v-if yapımız ile-->
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="data.img" class="img-fluid rounded-start" alt="..." /> <!-- Yemek Resimi -->
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ data.title }}</h5> <!-- Yemek İsmi -->
          <p class="card-text">
            Price: <b>${{ data.price }}</b> <!-- Yemek Fiyatı -->
          </p>
          <hr />
          <p class="card-text">{{ data.desc }}</p> <!-- Yemek Açıklaması -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data"]
};
</script>