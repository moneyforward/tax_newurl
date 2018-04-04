!function($, Vue) {
  'use strict';
  new Vue({
    el: '#app',
    data: function() {
      return {
        csv: null,
        searchQuery: '',
        results: [],
        isProgress: false
      };
    },
    methods: {
      fillCSV: function() {
        this.csv = $.csv.toObjects(document.getElementById("csv").text.trim());
      },
      search: function () {
        if (this.searchQuery === '') {
          return;
        }

        setTimeout(function() {
          this.results = this.csv.filter(function(x) {
            return this.searchQuery.split(/\s/).every(function(q) {
              return JSON.stringify(x).includes(q);
            }.bind(this));
          }.bind(this));
        }.bind(this), 0);
      }
    },
    mounted: function() {
      this.fillCSV();
    },
  });
}($, Vue);
