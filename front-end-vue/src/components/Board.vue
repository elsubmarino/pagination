<template>
  <table>
    <tbody v-if="result.pageList.length > 0">
    <tr  v-for="(item, index) in result.result.content" v-bind:key="index">
      <td>
        {{ item.no }}
      </td>
      <td>
        {{ item.title }}
      </td>
    </tr>
    </tbody>
  </table>
  <ul class="pagination">
    <li v-if="result.prevPage">
      <a v-on:click="getList(this.result.prevPage.pageNumber+1)">prev</a>
    </li>
    <li v-for="(item, index) in result.pageList" v-bind:key="index">
      <a @click="getList(item.pageNumber+1)">{{ item.pageNumber + 1 }}</a>
    </li>
    <li v-if="result.nextPage">
      <a v-on:click="getList(this.result.nextPage.pageNumber+1)">next</a>
    </li>
  </ul>
</template>

<script lang="ts">
import axios from 'axios';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BoardComponent',
  data() {
    return{
      result:{
        prevPage:{
          pageNumber:0,
        },
        nextPage:{
          pageNumber:0,
        },
        pageList:[],
      }
    };
  },
  methods:{
    async getList(page: number) {
      await axios.get('/api/board/list',{
        params:{
          page:page,
          size:10
        }
      })
          .then(response => this.result=response.data)
          .catch(error => console.log(error));
    }
  },
  mounted() {
    this.getList(1);
  },
})
</script>

<style scoped>

</style>