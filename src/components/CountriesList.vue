<template>
  
  <div>
     <a>
        <img :src="flag" alt=""/>
        <p> {{countryName}} </p>
        </a>
  </div>
</template>

<script>
export default {
  props: {
      flag: String,
      countryName: String
    },
  data() {
    return {
      //CountriesNames: [],
    }
  },
  // async mounted() {
  //   const CountriesList = await this.getCountriesList();
    
  //   for (let i=0; i<CountriesList.length;i++) {
  //     this.CountriesNames.push(
  //       {
  //           name: CountriesList[i].name.common,
  //           img: CountriesList[i].alpha2Code,
  //       }
  //     )
      
  //   }
    
    
  // },
  // methods: {
  //   async getCountriesList() {
   
  //     const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
  //     const finalRes = await res.json();
  //     return finalRes;
  //   },
  //   // async getCountriesFlags() {
      
  //   // }
  // }
}
</script>

<style>

</style>