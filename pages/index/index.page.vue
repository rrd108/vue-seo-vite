<script setup>
  import { ref } from 'vue'
  import Link from '../../renderer/Link.vue'

  const props = defineProps(['products'])

  const showToast = ref(false)
</script>

<template>
  <h1>Shop</h1>
  <div id="toast" v-if="showToast">
    A termék a kosárba rakva <span @click="showToast = false">✖</span>
  </div>
  <main>
    <section v-for="product in products">
      <h2>{{ product.name }}</h2>
      <img :src="product.picture" />
      <p>{{ product.description }}</p>
      <h3>{{ Intl.NumberFormat().format(product.price) }} Ft</h3>
      <div class="actions">
        <button v-if="product.stock" @click="showToast = true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
            <path
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
            />
          </svg>
        </button>
        <Link :href="`/product/${product.name}`">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
            />
          </svg>
        </Link>
      </div>
      <p v-if="!product.stock">Nem rendelhető</p>
    </section>
  </main>
</template>

<style scoped>
  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }

  section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-radius: 0.5rem;
    background-color: #8db38b;
    color: #fff;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    background-color: #04724d;
    padding: 0.25em;
  }
  img {
    display: block;
    margin: 0 auto;
    object-fit: cover;
    width: 80%;
    margin-bottom: 1rem;
  }
  p {
    color: #023b28;
  }
  button,
  a {
    background-color: #04724d;
    color: #fff;
    border: none;
    border-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    margin: 0 auto;
  }
  svg {
    fill: #fff;
    width: 1.25rem;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #toast {
    position: fixed;
    top: 1em;
    right: 1em;
    background-color: #8db38b;
    color: #fff;
    font-size: 1.25rem;
    border-radius: 0.5em;
    padding: 0.5em 1em;
  }
</style>
