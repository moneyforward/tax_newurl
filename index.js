!function($, Vue) {
  'use strict';
  new Vue({
    el: '#app',
    data: function() {
      return {
        csv: null,
        searchQuery: '',
        results: [],
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
              return JSON.stringify(x).indexOf(q) >= 0;
            }.bind(this));
          }.bind(this));
        }.bind(this), 0);
      }
    },
    mounted: function() {
      this.fillCSV();
    },
    computed: {
      isNoData: function() {
        return this.results.length === 0;
      }
    }
  });
}($, Vue);
