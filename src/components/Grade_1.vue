<template>
  <div>
      <div v-for="(item, index) in studentData.groups.grade_1" v-bind:key="item.groupName">
          {{ item.groupName }}
          <ul>
              <li v-for="item_1 in studentData.groups.grade_1[index].members" v-bind:key="item_1.id">
                  {{ studentData.students[item_1.id].name }}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import studentData from '@/assets/groups_copy.json'
export default {
    name : 'grade_1',
    data() {
        return {
            studentData: studentData
        }
    }
}
</script>

<style>

</style>