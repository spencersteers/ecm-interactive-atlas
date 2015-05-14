import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
    var data = this.get('data');
    var tissues = this.get('tissues');
    var proteins = this.get('proteins');
    var minwidth = 500;
    var minheight = 0;
    // console.log(this.get('data'));
    var margin = { top: 200, right: 100, bottom: 100, left: 225 };
    var gridSize = 63;
    var legendElementWidth = gridSize;
    var colors = ["#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#045a8d"];

    var width = proteins.length * (gridSize + 10) - margin.left - margin.right;
    var height = tissues.length * (gridSize + 10) - margin.top - margin.bottom;
              // tissues = ["Heart", "Lung", "Liver", "Bone"],
              // proteins = ["ACAN", "ACT", "ACTB", "ADAMTS14", "ADAMTS2"];
    if (width < minwidth) {
      width = minwidth;
    }

    if (height < minheight) {
      height = minheight;
    }

    function tissueToInt(tissue) {
      return tissues.indexOf(tissue);
    }

    function proteinToInt(protein) {
      return proteins.indexOf(protein);
    }

    var legendQuantile = d3.scale.quantile()
        .domain([d3.min(data, function (d) { return Math.log(d.value); }), d3.max(data, function (d) { return Math.log(d.value); })])
        .range(colors);

    var svg = d3.select("#relative-concentrations-chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var tissueLabels = svg.selectAll(".tissueLabel")
        .data(tissues)
        .enter().append("text")
          .text(function (d) { return d; })
          .attr("x", 0)
          .attr("y", function (d, i) {
            return i * gridSize;
          })
          .style("text-anchor", "end")
          .attr("transform", "translate(-75," + -gridSize / 2.25 + ")")
          .attr("class", "tissueLabel mono axis axis-workweek");

    var proteinLabels = svg.selectAll(".proteinLabel")
        .data(proteins)
        .enter().append("text")
          .text(function(d) { return d; })
          .attr("x", function(d, i) { return i * gridSize; })
          .attr("y", 0)
          .style("text-anchor", "middle")
          .attr("transform", "translate(" + -gridSize / 2 + ", -75)")
          .attr("class", "proteinLabel mono axis axis-workprotein");

    var heatMap = svg.selectAll(".protein")
        .data(data)
        .enter().append("rect")
        .attr("x", function(d) { return (proteinToInt(d.protein) - 1) * gridSize; })
        .attr("y", function(d) { return (tissueToInt(d.tissue) - 1) * gridSize; })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "protein bordered")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .style("fill", colors[0]);

    heatMap.transition().duration(1000)
        .style("fill", function(d) { return legendQuantile(Math.log(d.value)); });

    heatMap.append("title").text(function(d) { return d.value; });

    var legend = svg.selectAll(".legend")
        .data([0].concat(legendQuantile.quantiles()), function(d) { return d; })
        .enter().append("g")
        .attr("class", "legend");

    legend.append("rect")
      .attr("x", function(d, i) { return -62 + legendElementWidth * i; })
      .attr("y", -150)
      .attr("width", legendElementWidth)
      .attr("height", gridSize / 2)
      .style("fill", function(d, i) { return colors[i]; });

    legend.append("text")
      .attr("class", "mono")
      .text(function(d) { return "≥ " + Math.round(d * 1000); })
      .attr("x", function(d, i) { return -55 + legendElementWidth * i; })
      .attr("y", -130 );
  }

});
