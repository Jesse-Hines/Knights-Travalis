function knightMoves(start, end) {
 
  const moves = [[-2, -1], [-1, -2], [1, -2], [2, -1],
    [-2, 1], [-1, 2], [1, 2], [2, 1]
  ];
  

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }
  
  
  const queue = [[start]];
  
  
  const visited = new Set();
  visited.add(JSON.stringify(start));
  

  while (queue.length > 0) {
   
    const path = queue.shift();
    
    const [x, y] = path[path.length - 1];
    
   
    if (x === end[0] && y === end[1]) {
      const message = `You made it in ${path.length - 1} moves! Here's your path:`;
      console.log(message);
      for (const pos of path) {
        console.log(pos);
      }
      return path;
    }
    
  
    for (const [dx, dy] of moves) {
      const nextX = x + dx;
      const nextY = y + dy;
      
      if (isValid(nextX, nextY) && !visited.has(JSON.stringify([nextX, nextY]))) {
        const newPath = [...path, [nextX, nextY]];
        queue.push(newPath);
        visited.add(JSON.stringify([nextX, nextY]));
      }
    }
  }
  
  return null;
}
