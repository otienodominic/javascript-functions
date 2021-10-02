function seed() {return [...arguments]}

function same([x, y], [j, k]) {return x==j && y==k}


// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) { return this.some(a => same(a, cell))}

const printCell = (cell, state) => {
   return contains.call(state, cell) ? '\u25A3' : '\u25A2'
};

const corners = (state = []) => {
 // create an list of first  and second rows    
 const first = state.map(e => e[0]) 
 const second = state.map(e => e[1])   

 if(!state.length){
     return {topRight: [0,0], bottomLeft: [0,0]}
   }
   else{
       return {
         topRight: [Math.max(...first),Math.max(...second)] ,
         bottomLeft: [Math.min(...first),Math.min(...second)]
       }
   }    
  
};

const printCells = (state) => {
  // Destructure bottomLeft and topRight from corners function
  const {bottomLeft, topRight} = corners(state)
  // Print the states using the printCell function
  let cells = '';
  for(let y=topRight[1]; y>=bottomLeft[1]; y--){
    let row_to_print = [];
    for(let x=bottomLeft[0]; x<=topRight[0]; x++){
      row_to_print.push(printCell([x,y], state))
    }
    cells += (row_to_print.join(' ')+ '\n')
  }
return cells
  
};

const getNeighborsOf = ([x, y]) => {
  return [[x-1, y-1],[x-1,y],[x-1,y+1],[x+1,y-1],[x+1,y],[x+1,y+1],[x,y-1],[x,y+1]]
};

const getLivingNeighbors = (cell, state) => {
  // Get neighbours
  let neighbours = getNeighborsOf(cell)
// Get and return Live neighbours
return neighbours.filter(a => contains.bind(state)(a))
};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;