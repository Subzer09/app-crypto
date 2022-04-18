<template>
  <div class="container">
    <div class="row wrapper-row mt-5 p-5 align-items-center">
      <div class="col-6">
        <h2 class="text-center mb-5">
          ¡Manténgase al día con el mundo criptográfico buscando monedas!
        </h2>
        <form novalidate @submit.prevent="onSubmit">
          <div class="form-group position-relative">
            <input
              type="text"
              class="form-control rounded-pill shadow-lg"
              placeholder="Buscar por nombre de criptomoneda"
              name="searchTerm"
              v-model="searchItem"
            />
            <i 
            class="fas fa-search search-icon position-absolute"
            @click="onSubmit"
            ></i>
          </div>
        </form>
      </div>
      <div class="col-6">
        <img src="../assets/img/landing-right-bg.png" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-5 mb-5">
        <div class="col-4">
            <div class="card border-0 text-center">
                <div class="card-body">
                    <img 
                    src="../assets/img/trending.png" 
                    class="card-icon-size"
                    alt="tranding-cryptopcurrencies"
                    />
                    <p class="card-text mt-2 card-description">
                    Conozca las criptomonedas más populares y de tendencia.
                    </p>
                    <a href="#" class="btn btn-dark text-light text-center">
                        Listados de tendencias
                    </a>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card border-0 text-center">
                <div class="card-body">
                    <img 
                    src="../assets/img/trending.png" 
                    class="card-icon-size"
                    alt="tranding-cryptopcurrencies"
                    />
                    <p class="card-text mt-2 card-description">
                    Manténgase al día con los mercados de intercambio de cifrado.
                    </p>
                    <a href="#" class="btn btn-dark text-light text-center">
                        Intercambios
                    </a>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card border-0 text-center">
                <div class="card-body">
                    <img 
                    src="../assets/img/portfolio.png" 
                    class="card-icon-size"
                    alt="tranding-cryptopcurrencies"
                    />
                    <p class="card-text mt-2 card-description">
                    Revise su cartera y vea cómo se desempeñan
                    </p>
                    <a href="#" class="btn btn-dark text-light text-center">
                        Mi portafolio
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      searchItem: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.searchItem);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Home.scss";
</style>
