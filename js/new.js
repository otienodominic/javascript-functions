// let arr = [1,3,5,6,9,6]
// let even = (e) => e % 2 ===0;
// console.log(arr.some(even))
// const corners = (state = []) => {
  
//     for(let i=0; i<state.length; i++){
//         console.log(state[1][0])
//       let max_first = Math.max(state[i][0])
//       let max_second = Math.max(state[i][1])
//       let min_first = Math.min(state[i][0])
//       let min_second = Math.min(state[i][1])
//       if(!state.length){
//         return console.log({topRight: [0,0], bottomLeft: [0,0]})
//       }
//       return console.log({topRight: [max_first,max_second], bottomLeft: [min_first,min_second]})
//     }  
     
//    };

//    corners([[1,2], [4,1]])

const corners = (state = [])=>{
    // create an list of first  and second rows    
    const first = state.map(e => e[0]) 
    const second = state.map(e => e[1])   
    console.log(Math.max(...second))

    if(!state.length){
        return {topRight: [0,0], bottomLeft: [0,0]}
      }
      else{
          return console.log({
            topRight: [Math.max(...first),Math.max(...second)] ,
            bottomLeft: [Math.min(...first),Math.min(...second)]
          })
      }    
}
corners([[3,2], [4,1]])