<template>
  <div class="bg-gray-600 px-5">
    <!-- header -->
    <div class="flex py-10"> 
      <div class="text-center w-1/2 flex justify-center items-center">
        <div>
          <h1 class="text-white text-7xl">ROCKET X</h1>
          <p class="text-white">Powered by <a target=”_blank” href="https://github.com/r-spacex/SpaceX-API">SpaceX-API</a></p>
        </div>
      </div>
      <div class="w-1/2"> 
        <img src="../assets/moon.svg" width="500">
      </div>
    </div>
    <!-- past launch -->
    <div class="px-20 py-5">
      <h2 class="text-white text-3xl">PAST LAUNCH</h2>
      <div> 
        <div v-for="l in launches" :key="l.date" class="flex p-5 m-2 items-center bg-gray-200 rounded-xl"> 
          <img :src="`${l.links.mission_patch}`" width="150" height="150" class="m-3"> 
          <div class="w-full">
            <h3 class="text-2xl text-gray-600">{{l.mission_name}}</h3>
            <p class="text-sm text-gray-500 py-2">{{l.details}}</p>
            <p class="text-gray-600">LAUNCH TIME : {{l.launch_date_local}}</p>
            <div class="bg-gray-600 rounded-xl p-4 text-center">
              <a class="text-white" :href="`${l.links.video_link}`" target="_blank">  
                WATCH LIVE STREAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'

export default {
  name: 'Home',
  data() {
    return {
      launches: []
    };
  },
  created() {
    axios.get('https://api.spacexdata.com/v3/launches/past?order=desc&limit=5')
    .then(res => this.launches = res.data)
    .catch(err => console.log(err));
    /*
    axios.get('https://api.spacexdata.com/v3/launches/past?order=desc&limit=5')
      .then(res => {
        const launches = res.data.map((obj) => ({
          name: obj.mission_name, 
          date: obj.launch_date_local, 
          image: obj.links.mission_patch_small, 
          detail: obj.details,
          links: obj.links.video_link}));
        pastLaunches = launches;
      })
      */
  },
}
</script>

<style>
</style>
