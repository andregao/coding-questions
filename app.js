class Graph { //undirected, unweighted, using adjacent list
  constructor() {
    this.totalNodes = 0;
    this.adjacentList = {}
  }

  addVertex(value) {
    if (!this.adjacentList[value]) {
      this.adjacentList[value] = [];
      return this.totalNodes++;
    }
  }

  addEdge(v1, v2) {
    if (this.adjacentList[v1] && this.adjacentList[v2]) {
      this.adjacentList[v1].push(v2);
      this.adjacentList[v2].push(v1);
    }
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
    }
  }
}

const graph = new Graph();
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('1', '2');
graph.addEdge('1', '0');
graph.addEdge('0', '2');
graph.addEdge('6', '5');

graph.showConnections();
