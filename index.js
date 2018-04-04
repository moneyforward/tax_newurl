!function($, Vue) {
  'use strict';
  new Vue({
    el: '#app',
    data() {
      return {
        csv: null,
        searchQuery: '',
        results: [],
        isProgress: false
      };
    },
    methods: {
      fillCSV() {
        this.csv = $.csv.toObjects(document.getElementById("csv").text.trim());
      },
      search() {
        if (this.searchQuery === '') {
          return;
        }

        setTimeout(function() {
          this.results = this.csv.filter(x => {
            return this.searchQuery.split(/\s/).every(q => {
              return JSON.stringify(x).includes(q);
            });
          });
        }.bind(this), 0);
      }
    },
    mounted() {
      this.fillCSV();
    },
  });
}($, Vue);
