/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count=0;
  for(var i=0;i<preferences.length;i++){
    var k = preferences[i];
    var m = preferences[k-1];
    var n = preferences[m-1];
    if(n-1===i){
      count++;
    }
  }
  return Math.floor(count/3);
};