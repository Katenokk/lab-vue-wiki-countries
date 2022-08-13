
<template>
   <div class="list-group">
    <div
      class="list-group-item list-group-item-action"
      v-for="elemento in CountriesNames"
      @click="showCountry(elemento)"
      :key="elemento.id"
    >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${elemento.alpha2Code.toLowerCase()}.png`"/>
      <p>{{ elemento.name.common }}</p>
    </div>
  </div>
</template>

<script>
import { useCountryStore } from "../store/country";
export default {
setup() {
    const country = useCountryStore();
    return { country };
  },
  data() {
    return {
      CountriesNames: [],
    }
  },
  mounted() {
    this.getCountriesList();
    this.orderArray();//no los ordena!!
  },
  methods: {
    async getCountriesList() {
      const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const finalRes = await res.json();
      this.CountriesNames = finalRes;
    },
    showCountry(elemento) {
      this.country.name = elemento.name.common;
      this.country.flag = elemento.alpha2Code;
      this.country.id = elemento.alpha3Code; 
      this.country.borders = elemento.borders;
      this.country.area = elemento.area;
      this.country.capital = elemento.capital[0];
    },
   
  },
   computed: {
      orderArray() {
        return this.CountriesNames.sort() //no funciona!!
      }
      
   } 
  
}
</script>

<style>

</style>