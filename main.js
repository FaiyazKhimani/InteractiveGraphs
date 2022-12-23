var width = 1250;
var height = 650;
var parseTime = d3.timeParse("%Y");

var Title = "Transportation Fatalities by Vehicle Type 1975-2020"
var selected = 'Total'
var dataFile
var Car_OccupantExtent
var PedestrianExtent
var MotorcycleExtent
var BicycleExtent
var TrucksExtent
var TotalExtent
var Car_Per_100KExtent
var Ped_Per_100KExtent
var Motorcycle_Per_100KExtent
var Bicycle_Per_100KExtent
var Trucks_Per_100KExtent
var Total_Per_100KExtent
var leftYScale
var rightYScale
var xScale
var leftValues = []
var rightValues = []
var leftMin = 100000000000
var leftMax = 0
var rightMin = 100000000000
var rightMax = 0



d3.csv("TransportationFatalities_ByYear_postoncanvas.csv", function (csv) {
  for (var i = 0; i < csv.length; ++i) {
    csv[i].Year = parseTime(csv[i].Year);
    csv[i].Population = Number(csv[i].Population);
    csv[i].Car_Occupant = Number(csv[i].Car_Occupant);
    csv[i].Pedestrian = Number(csv[i].Pedestrian);
    csv[i].Motorcycle = Number(csv[i].Motorcycle);
    csv[i].Bicycle = Number(csv[i].Bicycle);
    csv[i].Trucks = Number(csv[i].Trucks);
    csv[i].Total = Number(csv[i].Total);
    csv[i].Car_Per_100K = Number(csv[i].Car_Per_100K);
    csv[i].Ped_Per_100K = Number(csv[i].Ped_Per_100K);
    csv[i].Motorcycle_Per_100K = Number(csv[i].Motorcycle_Per_100K);
    csv[i].Bicycle_Per_100K = Number(csv[i].Bicycle_Per_100K);
    csv[i].Trucks_Per_100K = Number(csv[i].Trucks_Per_100K);
    csv[i].Total_Per_100K = Number(csv[i].Total_Per_100K);
  }
  Car_OccupantExtent = d3.extent(csv, function (row) { return row.Car_Occupant; });
  PedestrianExtent = d3.extent(csv, function (row) { return row.Pedestrian; });
  MotorcycleExtent = d3.extent(csv, function (row) { return row.Motorcycle; });
  BicycleExtent = d3.extent(csv, function (row) { return row.Bicycle; });
  TrucksExtent = d3.extent(csv, function (row) { return row.Trucks; });
  TotalExtent = d3.extent(csv, function (row) { return row.Total; });
  Car_Per_100KExtent = d3.extent(csv, function (row) { return row.Car_Per_100K; });
  Ped_Per_100KExtent = d3.extent(csv, function (row) { return row.Ped_Per_100K; });
  Motorcycle_Per_100KExtent = d3.extent(csv, function (row) { return row.Motorcycle_Per_100K; });
  Bicycle_Per_100KExtent = d3.extent(csv, function (row) { return row.Bicycle_Per_100K; });
  Trucks_Per_100KExtent = d3.extent(csv, function (row) { return row.Trucks_Per_100K; });
  Total_Per_100KExtent = d3.extent(csv, function (row) { return row.Total_Per_100K; })
  dataFile = csv;

  var chart1 = d3.selectAll("#chart1").append("svg:svg").attr("id", "svg1").attr("width", width+500).attr("height", height+500);
  svg = d3.select("#svg1")
  Lwidth = width - 80
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",160).attr("r", 6).style("fill", "#FF9C33")
  svg.append("text").attr("x", Lwidth+30).attr("y", 160).text("Totals").style("font-size", "15px").attr("alignment-baseline","middle")
  Lheight = 190
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight + 0 ).attr("r", 6).style("fill", "#82FF88")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 0).text("Cars").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight +30).attr("r", 6).style("fill", "#00FFFF")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 30).text("Pedestrians").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight + 60 ).attr("r", 6).style("fill", "#0000FF")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 60).text("Motorcycles").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight +90).attr("r", 6).style("fill", "#FF09B4")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 90).text("Bicyles").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight + 120 ).attr("r", 6).style("fill", "#9D00FF")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 120).text("Trucks").style("font-size", "15px").attr("alignment-baseline","middle")
  
  ////
  Lwidth = width + 50
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",160).attr("r", 6).style("fill", "#C95000")
  svg.append("text").attr("x", Lwidth+30).attr("y", 160).text("Totals per 100K").style("font-size", "15px").attr("alignment-baseline","middle")
  Lheight = 190
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight + 0 ).attr("r", 6).style("fill", "#228B22")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 0).text("Cars per 100K").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight +30).attr("r", 6).style("fill", "#005AE0")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 30).text("Pedestrians per 100K").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight + 60 ).attr("r", 6).style("fill", "#00006F")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 60).text("Motorcycles per 100K").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight +90).attr("r", 6).style("fill", "#BB0070")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 90).text("Bicyles per 100K").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("circle").attr("cx",Lwidth+10).attr("cy",Lheight + 120 ).attr("r", 6).style("fill", "#62009F")
  svg.append("text").attr("x", Lwidth+30).attr("y", Lheight + 120).text("Trucks per 100K").style("font-size", "15px").attr("alignment-baseline","middle")
  /////
 



  svg.append("g").attr('class', 'circlesData')




  var title1 = d3.select("#svg1").append("text").attr("x", width / 2 - 200).attr("y", 15).attr("font-size", "18px").text(Title);
  //Xaxis
  yearExtent = d3.extent(csv, function (row) {
    return row.Year;
  });
  xScale = d3.scaleTime().domain(yearExtent).range([100, width - 100]);
  xAxis = d3.axisBottom().scale(xScale).ticks(15);
  chart1.append("g").attr('class', 'xAxis').attr("transform", "translate(0," + (height - 100) + ")").call(xAxis)


  //   ///// Left Y Axis
  // var leftYScale = d3.scaleLinear().domain(TotalExtent).range([height - 100,100 ]);
  // //var totalLabel = d3.select("#svg1").append("text").attr("x", (width-100)/2 + 50).attr("y", height).attr("font-size", "12px").text("Total");
  // var leftYAxis = d3.axisLeft().scale(leftYScale)

  chart1.append("g").attr("class", "leftAxis").attr("transform", "translate(100, 0)") //.call(leftYAxis)
  /// Right Y Axis

  // var rightYScale = d3.scaleLinear().domain(Total_Per_100KExtent).range([height - 100,100 ]);
  // //var totalLabel = d3.select("#svg1").append("text").attr("x", (width-100)/2 + 50).attr("y", height).attr("font-size", "12px").text("Total");
  // var rightYAxis = d3.axisRight().scale(rightYScale)

  //chart1.append("g").attr("class", "rightAxis").attr("transform", "translate(" + (width - 100) + ", 0)") //.call(rightYAxis)
  InitChart()

}
);

function InitChart() {
  InitAxis();
  InitData();
}

function InitAxis() {
  //update leftAxis
  leftValues.push(d3.select('input[name="leftAxis"]:checked').property("value"))
  left = d3.select('input[name="leftAxis"]:checked').property("value") + "Extent";
  //right = d3.select('input[name="rightAxis"]:checked').property("value") + "Extent";
  //console.log(left, right);
  leftYScale = d3.scaleLinear().domain(window[left]).range([height - 100, 100]);
  leftYAxis = d3.axisLeft().scale(leftYScale)
  d3.selectAll(".leftAxis").call(leftYAxis)
  leftMin = window[left][0]
  leftMax = window[left][1]
  // //update rightAxis
  // rightYScale = d3.scaleLinear().domain(window[right]).range([height - 100,100 ]);
  // rightYAxis = d3.axisRight().scale(rightYScale)
  //d3.selectAll(".rightAxis").call(rightYAxis)
}
function InitData() {
  left = d3.selectAll('input[name="leftAxis"]:checked').property("value")

  circles = d3.select(".circlesData").selectAll('circle')
  temp = circles.data(dataFile).enter().append('g').attr('class', function (d) {
    return 'tooltip';
  }).attr('id','Total'+"tooltipMain")
 //tooltipRect
 temp.append('rect').attr('class', 'myRect').attr('x', function (data) {
  return xScale(data.Year)
}).attr('y', function (data) { return leftYScale(data[left]) }).attr('width', 300).attr('height', 110).attr('stroke', 'black').attr('fill', 'grey').attr('id',left+"tooltip");


//tooltipText
temp.append('text')
  .attr('transform', function (data) {
    return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[left]) + 40) + ')';
  })
  .text(function (data) {
    var date = new Date(data.Year)
    return "Year: " + date.getFullYear();
  }
  ).attr('id',left+"tooltip");

temp.append('text')
  .attr('transform', function (data) {
    return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[left]) + 60) + ')';
  })
  .text(function (data) {

    return "Population: " + data.Population
  }
  ).attr('id',left+"tooltip");

temp.append('text')
  .attr('transform', function (data) {
    return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[left]) + 80) + ')';
  })
  .text(function (data) {

    return "Total Fatalities: " + data.Total;
  }
  ).attr('id',left+"tooltip");


  temp.append('circle').attr('cx', function (data) {
    return xScale(data.Year)
  }
  ).attr('cy', function (data) { return leftYScale(data[left]) }).attr('r', 5).attr("id", 'Total')

  




  var line = d3.line()
    .x(function (d) { return xScale(d.Year); })
    .y(function (d) { return leftYScale(d[left]); })
    .curve(d3.curveMonotoneX)

  d3.select("#svg1").append("path")
    .datum(dataFile)
    .attr("class", "line")
    .attr('id', left)
    .attr("d", line)
    .style("fill", "none")

    .style("stroke-width", "2");

   
}

function onChange(clicked) {

  if (clicked.checked) {
    leftValues.push(clicked.value)
    if (leftValues.length == 1) {
      if (d3.select('.leftAxis').size() == 0) {
        createLeftAxis()
      }
    }
    updateAxis()
    addData(clicked.value)
  } else {
    // if (leftValues.length == 1) {
    //   clicked.checked = true
    // } else {
    //   leftValues = leftValues.filter(function (val) { return val != clicked.value })
    //   updateAxis()
    //   removeData(clicked.value)
    // }
    leftValues = leftValues.filter(function (val) { return val != clicked.value })
    updateAxis()
    removeData(clicked.value)
    if (leftValues.length == 0) { removeLeftAxis() }


  }
  updateValue()
  console.log("This is the clicked value = " + clicked.value + clicked.checked)
  console.log("This are the leftValues = " + leftValues)

}
function createLeftAxis() {

  leftValue = leftValues[0] + "Extent";

  leftYScale = d3.scaleLinear().domain(window[leftValue]).range([height - 100, 100]);
  leftYAxis = d3.axisRight().scale(leftYScale)
  d3.select("#svg1").append('g').attr('class', 'leftAxis').attr("transform", "translate(100, 0)").call(leftYAxis)
  console.log("HELLOBELLO")
  if (rightValues.length == 0) {
    removeRightAxis()
  }
}
function removeLeftAxis() {
  if (d3.select('.rightAxis').size() == 0) { } else {
    d3.select(".leftAxis").remove()
  }

}
function updateAxis() {
  leftMin = 100000000000
  leftMax = 0
  for (let i = 0; i < leftValues.length; i++) {
    valueExtent = window[leftValues[i] + "Extent"]
    if (valueExtent[0] < leftMin) {
      leftMin = valueExtent[0]
    }
    if (valueExtent[1] > leftMax) {
      leftMax = valueExtent[1]
    }
    leftYScale = d3.scaleLinear().domain([leftMin, leftMax]).range([height - 100, 100])
    leftYAxis = d3.axisLeft().scale(leftYScale)
    d3.selectAll(".leftAxis").call(leftYAxis)

  }

}
function addData(value) {
  temp = circles.data(dataFile).enter().append('g').attr('class', function (d) {
    return 'tooltip';
  }).attr('id',value+"tooltipMain")
  temp.append('circle').attr('class',value).attr('cx', function (data) {
    return xScale(data.Year)
  }
  ).attr('cy', function (data) { return leftYScale(data[value]) }).attr('r', 5).attr("id",value)

  //tooltipRect
  temp.append('rect').attr('class', 'myRect').attr('x', function (data) {
    return xScale(data.Year)
  }).attr('y', function (data) { return leftYScale(data[value]) }).attr('width', 300).attr('height', 110).attr('stroke', 'black').attr('fill', 'grey').attr('id',value+"tooltip");


  //tooltipText
  temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[value]) + 40) + ')';
    })
    .text(function (data) {
      var date = new Date(data.Year)
      return "Year: " + date.getFullYear();
    }
    ).attr('id',value+"tooltip");

  temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[value]) + 60) + ')';
    })
    .text(function (data) {

      return "Population: " + data.Population
    }
    ).attr('id',value+"tooltip");

  temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[value]) + 80) + ')';
    })
    .text(function (data) {

      return "Total " + value +" Fatalities: " + data[value];
    }
    ).attr('id',value+"tooltip");


}
function removeData(value) {
  
  d3.selectAll('#'+value+"tooltipMain").remove()
  d3.selectAll('#'+value).remove()

}
function updateValue() {
  for (let i = 0; i < leftValues.length; i++) {
    d3.selectAll("#" + leftValues[i]).attr('cy', function (data) { return leftYScale(data[leftValues[i]]) })
    d3.selectAll("#" + leftValues[i]).attr('cx', function (data) { return xScale(data.Year) })
    d3.selectAll("#" + leftValues[i]).filter(".line").remove()
    d3.selectAll('#'+leftValues[i]+"tooltip").remove()
    temp = d3.selectAll('#'+leftValues[i]+"tooltipMain")
    temp.append('rect').attr('class', 'myRect').attr('x', function (data) {
      return xScale(data.Year)
    }).attr('y', function (data) { return leftYScale(data[leftValues[i]]) }).attr('width', 300).attr('height', 110).attr('stroke', 'black').attr('fill', 'grey').attr('id',leftValues[i]+"tooltip");
  
  
    //tooltipText
    temp.append('text')
      .attr('transform', function (data) {
        return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[leftValues[i]]) + 40) + ')';
      })
      .text(function (data) {
        var date = new Date(data.Year)
        return "Year: " + date.getFullYear();
      }
      ).attr('id',leftValues[i]+"tooltip");
  
    temp.append('text')
      .attr('transform', function (data) {
        return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[leftValues[i]]) + 60) + ')';
      })
      .text(function (data) {
  
        return "Population: " + data.Population
      }
      ).attr('id',leftValues[i]+"tooltip");
  
    temp.append('text')
      .attr('transform', function (data) {
        return 'translate(' + (xScale(data.Year) + 10) + ',' + (leftYScale(data[leftValues[i]]) + 80) + ')';
      })
      .text(function (data) {
  
        return "Total " + leftValues[i] +" Fatalities: " + data[leftValues[i]];
      }
      ).attr('id',leftValues[i]+"tooltip");
  
    var line = d3.line()
      .x(function (d) { return xScale(d.Year); })
      .y(function (d) { return leftYScale(d[leftValues[i]]); })
      .curve(d3.curveMonotoneX)

    d3.select("#svg1").append("path")
      .datum(dataFile)
      .attr("class", "line")
      .attr('id', leftValues[i])
      .attr("d", line)
      .style("fill", "none")

      .style("stroke-width", "2");
  }
}

function onChange2(clicked) {

  if (clicked.checked) {
    rightValues.push(clicked.value)
    if (rightValues.length == 1) {
      createRightAxis()
    }
    updateAxis2()
    addData2(clicked.value)
  } else {
    // if (leftValues.length == 1) {
    //   clicked.checked = true
    // } else {
    //   leftValues = leftValues.filter(function (val) { return val != clicked.value })
    //   updateAxis()
    //   removeData(clicked.value)
    // }
    rightValues = rightValues.filter(function (val) { return val != clicked.value })
    updateAxis2()
    removeData2(clicked.value)
    if (rightValues.length == 0) { removeRightAxis() }


  }
  updateValue2()
  console.log("This is the clicked value = " + clicked.value + clicked.checked)
  console.log("This are the leftValues = " + leftValues)

}
function createRightAxis() {
  rightValue = rightValues[0] + "Extent";

  rightYScale = d3.scaleLinear().domain(window[rightValue]).range([height - 100, 100]);
  rightYAxis = d3.axisRight().scale(rightYScale)
  d3.select("#svg1").append('g').attr('class', 'rightAxis').attr("transform", "translate(" + (width - 100) + ", 0)").call(rightYAxis)
  if (leftValues.length == 0) {
    removeLeftAxis()
  }
  console.log("HELLOBELLO")
}
function removeRightAxis() {
  if (d3.select('.leftAxis').size() == 0) { } else {
    d3.select(".rightAxis").remove()
  }


}
function addData2(value) {
  temp = circles.data(dataFile).enter().append('g').attr('class', function (d) {
    return 'tooltip';
  }).attr('id',value+"tooltipMain")
  
  temp.append('circle').attr('cx', function (data) {
    return xScale(data.Year)
  }
  ).attr('cy', function (data) { return rightYScale(data[value]) }).attr('r', 5).attr("id", value)
  
  temp.append('rect').attr('class', 'myRect').attr('x', function (data) {
    return xScale(data.Year)
  }).attr('y', function (data) { return rightYScale(data[value]) }).attr('width', 300).attr('height', 110).attr('stroke', 'black').attr('fill', 'grey').attr('id',value+"tooltip");

  temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (rightYScale(data[value]) + 40) + ')';
    })
    .text(function (data) {
      var date = new Date(data.Year)
      return "Year: " + date.getFullYear();
    }
    ).attr('id',value+"tooltip");
  
    temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (rightYScale(data[value]) + 60) + ')';
    })
    .text(function (data) {

      return "Population: " + data.Population
    }
    ).attr('id',value+"tooltip");

    temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (rightYScale(data[value]) + 80) + ')';
    })
    .text(function (data) {

      return "Total " + value +" Fatalities: " + data[value];
    }
    ).attr('id',value+"tooltip");

}
function updateValue2() {
  for (let i = 0; i < rightValues.length; i++) {
    d3.selectAll("#" + rightValues[i]).attr('cy', function (data) { return rightYScale(data[rightValues[i]]) })
    d3.selectAll("#" + rightValues[i]).attr('cx', function (data) { return xScale(data.Year) })
    d3.selectAll("#" + rightValues[i]).filter(".line").remove()
    d3.selectAll('#'+rightValues[i]+"tooltip").remove()
    temp = d3.selectAll('#'+rightValues[i]+"tooltipMain")
    
    temp.append('rect').attr('class', 'myRect').attr('x', function (data) {
      return xScale(data.Year)
    }).attr('y', function (data) { return rightYScale(data[rightValues[i]]) }).attr('width', 300).attr('height', 110).attr('stroke', 'black').attr('fill', 'grey').attr('id',rightValues[i]+"tooltip");
    
    temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (rightYScale(data[rightValues[i]]) + 40) + ')';
    })
    .text(function (data) {
      var date = new Date(data.Year)
      return "Year: " + date.getFullYear();
    }
    ).attr('id',rightValues[i]+"tooltip");
  
    temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (rightYScale(data[rightValues[i]]) + 60) + ')';
    })
    .text(function (data) {

      return "Population: " + data.Population
    }
    ).attr('id',rightValues[i]+"tooltip");

    temp.append('text')
    .attr('transform', function (data) {
      return 'translate(' + (xScale(data.Year) + 10) + ',' + (rightYScale(data[rightValues[i]]) + 80) + ')';
    })
    .text(function (data) {

      return "Total " + rightValues[i] +" Fatalities: " + data[rightValues[i]];
    }
    ).attr('id',rightValues[i]+"tooltip");
    
    
    
    
    
    
    var line = d3.line()
      .x(function (d) { return xScale(d.Year); })
      .y(function (d) { return rightYScale(d[rightValues[i]]); })
      .curve(d3.curveMonotoneX)

    d3.select("#svg1").append("path")
      .datum(dataFile)
      .attr("class", "line")
      .attr('id', rightValues[i])
      .attr("d", line)
      .style("fill", "none")

      .style("stroke-width", "2");
  }
}
function updateAxis2() {
  rightMin = 100000000000
  rightMax = 0
  for (let i = 0; i < rightValues.length; i++) {
    valueExtent = window[rightValues[i] + "Extent"]
    if (valueExtent[0] < rightMin) {
      rightMin = valueExtent[0]
    }
    if (valueExtent[1] > rightMax) {
      rightMax = valueExtent[1]
    }
    rightYScale = d3.scaleLinear().domain([rightMin, rightMax]).range([height - 100, 100])
    rightYAxis = d3.axisLeft().scale(rightYScale)
    d3.selectAll(".rightAxis").call(rightYAxis)

  }

}
function removeData2(value) {
  d3.selectAll('#'+value+"tooltipMain").remove()
  d3.selectAll("#" + value).remove()

}

