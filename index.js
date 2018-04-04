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
      console.log('in:search')
      if (this.searchQuery === '') { return '' }

      setTimeout(function() {
        console.log('in:setTimeuout');
        this.results = this.csv.filter(x => { 
          return this.searchQuery.split(/\s/).every(q => {
            return JSON.stringify(x).includes(q) 
          })
        });
        console.log('out:setTimeout');
      }.bind(this), 0)
      console.log('out')
    }
  },
  mounted() {
    this.fillCSV();
  },
})