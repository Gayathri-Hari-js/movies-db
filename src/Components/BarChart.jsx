import React, {useCallback, useEffect, useRef} from 'react'
import * as d3 from "d3"

function BarChart (props) {
    const {data} = props;
    const chartRef = useRef();
    const drawChart = useCallback(() => {

      const margin = {top: 70, right: 40, bottom: 30, left: 80};
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
                  .padding(0.2)
      svg.append('g')
          .attr('transform', 'translate(0,'+ chartHeight +')')
          .call(d3.axisBottom(x).tickFormat(i=> data[i].label).tickSizeOuter(0))

      const y = d3.scaleLinear()
                .domain([0,10])
                .range([chartHeight, margin.top])
      svg.append('g')
          .attr('transform', 'translate('+ margin.left +',0)')
          .call(d3.axisLeft(y))
      svg.append('g')
      .attr('fill', '#65f0eb')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d,i)=> x(i))
      .attr('y', d=> y(d.rate))
      .attr('height', d=> y(0)-y(d.rate))
      .attr('width', x.bandwidth())

      svg.append('text')
      .attr('x', -(chartHeight / 2) - margin.bottom)
      .attr('y', margin.left / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Ratings')

      svg.append('text')
      .attr('class', 'label')
      .attr('x', chartHeight  + margin.top)
      .attr('y', chartWidth /2.1)
      .attr('text-anchor', 'middle')
      .text('Languages')

    svg.append('text')
    .attr('x', chartWidth / 2 + margin.top)
    .attr('y', margin.left)
    .attr('text-anchor', 'middle')
    .attr('text-color', '#fff')
    .text('Top 10 popular movies')
    },[data]);

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