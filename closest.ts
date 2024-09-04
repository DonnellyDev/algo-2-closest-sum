export function closest(nums: number[], target: number): number {
  // Implement me

  // Sort Array first to make linear search possible
  nums.sort((a, b) => a - b);

  // We know that at least something must work and there are at least 3 elements so this is the simplest case of exactly 3 elements
  let closestSum = nums[0] + nums[1] + nums[2];

  // Do some window searching to get this to work quick
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (currentSum === target) return currentSum;
      // These variables clean up the if statement but they're not needed tbh
      let closestDiff = Math.abs(closestSum - target);
      let currentDiff = Math.abs(currentSum - target);

      if (currentDiff < closestDiff) {
        closestSum = currentSum;
      }

      // current sum is less then target we need bigger values current sum is greater then target we need smaller values
      currentSum < target ? left++ : right--;
    }
  }
  return closestSum;
}
