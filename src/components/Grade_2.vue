<template>
    <div>
        <div>
            <ul>
                <li v-for="(item , index) in studentData.groups.grade_2" v-bind:key="index.groupName">
                    {{ item.groupName }}
                    <ul>
                        <li v-for="(item_1 , index_1) in item.members" v-bind:key="index_1.id">
                            {{ item_1.id }} - {{ studentData.students[item_1.id].name }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import studentData from '@/assets/groups_copy.json'
export default {
    name : 'grade_2',
    data() {
        return {
            studentData: studentData
        }
    },
}
</script>

<style>

</style>