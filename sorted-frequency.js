function sortedFrequency(arr, target) {
    // use this function to find the first occurance if it exists
    function findFirstOccurrence() {
      let left = 0;
      let right = arr.length - 1;
      let firstOccurrence = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === target) {
          firstOccurrence = mid;
          right = mid - 1; // Move left to find earlier occurrences
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return firstOccurrence;
    }
  
    function findLastOccurrence() {
      let left = 0;
      let right = arr.length - 1;
      let lastOccurrence = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === target) {
          lastOccurrence = mid;
          left = mid + 1; // Move right to find later occurrences
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return lastOccurrence;
    }
  
    // Find the first and last occurrences
    const firstIndex = findFirstOccurrence();
    const lastIndex = findLastOccurrence();
  
    // Calculate the frequency
    if (firstIndex !== -1 && lastIndex !== -1) {
      return lastIndex - firstIndex + 1;
    } else {
      return -1; // Target not found
    }
  }
  
  module.exports = sortedFrequency;