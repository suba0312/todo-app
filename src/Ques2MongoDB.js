// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
// For example, given:
// const nums = [2, 7, 11, 15];
// const target = 9;
// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.


function twoSum(numArray, target) {
    const item = {}
    
    for (let i = 0; i < numArray.length; i++) {
      const sum = target - numArray[i];
      
      if (item.hasOwnProperty(sum)) {
        return [item[sum], i];
      }
      
      item[numArray[i]] = i;
    }
    
    throw new Error("No two sum solution"); 
  }
  
  const numArray = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSum(numArray, target)); // Output: [0, 1]


  // Mongo DB Aggregate query

db.sales.aggregate([
  { $unwind: "$items" },

  // Group by store and month, and calculate the total revenue and average price
  {
      $group: {
          _id: {
              store: "$store",
              month: { $substr: ["$date", 0, 7] }
          },
          totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } },
          totalQuantity: { $sum: "$items.quantity" },
          totalPrice: { $sum: "$items.price" }
      }
  },

  {
      $project: {
          store: "$_id.store",
          month: "$_id.month",
          totalRevenue: 1,
          averagePrice: { $divide: ["$totalPrice", "$totalQuantity"] }
      }
  },

  { $sort: { store: 1, month: 1 } }
])
