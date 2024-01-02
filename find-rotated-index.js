function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      }
  
      if (arr[left] <= arr[mid]) {
       // sorts left
        if (arr[left] <= target && target < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        // sort right 
        if (arr[mid] < target && target <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

module.exports = findRotatedIndex}