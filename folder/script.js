const container = d3.select('#scrolly-overlay');
const stepSel = container.selectAll('.step');

function updateChart(index) {
  const sel = container.select(`[data-index='${index}']`);
  const width = sel.attr('data-width');
  stepSel.classed('is-active', (d, i) => i === index);
  container.select('.bar-inner').style('width', width);
}

function init() {
  Stickyfill.add(d3.select('.sticky').node());

  enterView({
    selector: stepSel.nodes(),
    offset: 0.5,
    enter: el => {
      const index = +d3.select(el).attr('data-index');
      updateChart(index);
    },
    exit: el => {
      let index = +d3.select(el).attr('data-index');
      index = Math.max(0, index - 1);
      updateChart(index);
    } });

}

init();