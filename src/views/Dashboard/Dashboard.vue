<template>
  <div class="container">
    <DataTable class="display" :options="options" :data="users.users"/>
  </div>
</template>

<script>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs4';

DataTable.use(DataTablesCore);

export default {
  components: {
    DataTable
  },
  data() {
    return {
      options: {
        columns: [
          {
            data: 'id',
            title: this.$t('users.id')
          },
          {
            data: 'email',
            title: this.$t('users.email')
          },
          {
            data: 'username',
            title: this.$t('users.username')
          },
          {
            data: 'firstName',
            title: this.$t('users.firstName')
          },
          {
            data: 'lastName',
            title: this.$t('users.lastName')
          }
        ],
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pl.json',
        },
        lengthMenu: [5, 10, 20],
        pageLength: 10
      },
      users: []
    };
  },
  mounted() {
    this.get('users?limit=20')
        .then((response) => {
          this.users = response;
        });
  }
};
</script>

<style>
@import 'bootstrap';
@import 'datatables.net-bs4';

</style>