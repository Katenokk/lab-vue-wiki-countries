<template>
            <div href="#" class="col-7 text-center">
            <img :src="`https://flagcdn.com/w320/${country.flag.toLowerCase()}.png
`" :alt="`${country.name} flag`" style="width: 300px"/>
            <h1> {{ country.name }} </h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{ country.capital }}</td>
                </tr>
                <tr> 
                  <td>Area</td>
                  <td>
                    {{ country.area }} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul v-for="border in country.borders" :key="border.id">
                      <li><router-link :to="`/${ border }`" 
                   
                      >{{ border }}</router-link></li>
                  
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <router-view/>
</template>

<script>
import { useCountryStore } from "../store/country";
export default {
  //¿cómo asociar el "border" con el :id del router??
   setup() {
    const country = useCountryStore();
    return { country };
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>