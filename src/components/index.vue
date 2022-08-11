<template>
  <div>Esto es la index</div>

      <!-- <div>
     <a v-for="country in CountriesNames" class="list-group-item list-group-item-action" href="/ABW" :key="country.id">
                <img src="{{country.img}}" alt=""/>
                <p > {{country.name}}</p>
              </a>
  </div> -->
   <CountriesList v-for="country in CountriesNames" :countryName="country.name" :flag="country.img" :key="country.id"></CountriesList>

   <CountryDetails></CountryDetails>
</template>

<script>
import CountriesList from './CountriesList.vue'
import CountryDetails from './CountryDetails.vue'
export default {
    components: {
      CountriesList,
      CountryDetails
      
    },
     data() { // el array de paises en esta pagina!!
    return {
      CountriesNames: [],
    }
  },
  async mounted() {
    const CountriesList = await this.getCountriesList();
    
    for (let i=0; i<CountriesList.length;i++) {
      this.CountriesNames.push(
        {
            name: CountriesList[i].name.common,
            img: "https://flagpedia.net/data/flags/icon/72x54/" + CountriesList[i].alpha2Code.toLowerCase() + ".png",
        }
      )
      
    }
    
    
  },
  methods: {
    async getCountriesList() {
   
      const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const finalRes = await res.json();
      return finalRes;
    },
   
  },
  // computed: {
  //   return this.CountriesNames.sort() 
  // } 
}
</script>

<style>

</style>