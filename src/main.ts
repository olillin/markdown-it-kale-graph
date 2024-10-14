import { GraphData } from './../kale-graph/src/types';

const graph: GraphData = {
    flags: {
        directed: false,
        simple: false,
        auto: false,
        flipped: false,
    },
    vertices: ["a", "b", "c"],
    edges: [0, 1, 1, 2],
}

console.log(graph)