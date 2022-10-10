import React, {useCallback, useEffect, useRef} from 'react'
import * as d3 from "d3"

function BarChart (props) {
    const {data, labels} = props;
    const chartRef = useRef();
    const drawChart = useCallback(() => {

    const margin = {top: 80, right: 40, bottom: 30, left: 80};
    const chartWidth = parseInt(d3.select('#bar_chart').style('width')) - margin.left - margin.right;
    const chartHeight = parseInt(d3.select('#bar_chart').style('height')) - margin.top - margin.bottom;
    
    // set size for svg
    const svg = d3.select(chartRef.current)
                    .attr('width', chartWidth +margin.left + margin.right)
                    .attr('height', chartHeight + margin.top +margin.bottom);
    
    // create x axis ,               
    const x = d3.scaleBand()
                  .domain(d3.range(data.length))
                  .range([margin.left, chartWidth - margin.right])
                  .padding(0.3)
    svg.append('g')
          .attr('transform', 'translate(0,'+ chartHeight +')')
          .call(d3.axisBottom(x).tickFormat(i=> data[i].label).tickSizeOuter(0))
      
    //find max of y axis
    const max = d3.max(data, function(d){return d.rate});
    const y = d3.scaleLinear()
                .domain([0,max])
                .range([chartHeight, margin.top])
    svg.append('g')
          .attr('transform', 'translate('+ margin.left +',0)')
          .call(d3.axisLeft(y))
        
    const barGroups = svg.selectAll()
        .data(data)
        .enter()
        .append('g')
  
    barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('fill', 'rgb(23, 167, 159)')
        .attr('x', (d,i)=> x(i))
        .attr('y', (g) => y(g.rate))
        .attr('height', d=> y(0)-y(d.rate))
        .attr('width', x.bandwidth())
    barGroups 
        .append('text')
        .attr('class', 'value')
        .attr('x', (d,i)=> x(i) + margin.right)
        .attr('y', (a) =>  y(a.rate)  )
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .text((a) => `${a.rate}%`)

    svg.append('text')
      .attr('x', -(chartHeight / 2) - margin.bottom)
      .attr('y', margin.left / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text(labels.yLabel)

    svg.append('text')
      .attr('class', 'label')
      .attr('x', chartHeight  + margin.top)
      .attr('y', chartWidth /2.1)
      .attr('text-anchor', 'middle')
      .text(labels.xLabel)
    },[data, labels]);

    useEffect(()=>{
      drawChart(); 
   },
   [drawChart, data] 
 );

  return (
    <div id='bar_chart'>
      <svg ref={chartRef}> </svg>
    </div>
  )
}

export default BarChart