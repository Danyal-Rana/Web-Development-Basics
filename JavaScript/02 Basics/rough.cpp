#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> getArray ()

int maximumGoodSubarraySum(vector<int> &nums, int k)
{
    int n = nums.size();
    vector<int> dp(n, 0); // dp[i] stores the maximum sum of a good subarray ending at index i
    int max_sum = 0;

    for (int i = 0; i < n; ++i)
    {
        for (int j = i; j >= 0; --j)
        { // Iterate from i to 0, inclusive
            if (abs(nums[i] - nums[j]) == k)
            {
                dp[i] = max(dp[i], dp[j] + nums[i]);
                max_sum = max(max_sum, dp[i]);
                break; // No need to check further elements in the subarray
            }
        }
    }

    return max_sum;
}

int main()
{
    vector<int> nums = {1, 2, 3, 4, 5, 6};
    int k = 1;
    int result = maximumGoodSubarraySum(nums, k);
    cout << result << endl; // Output: 11

    nums = {-1, 3, 2, 4, 5};
    k = 3;
    result = maximumGoodSubarraySum(nums, k);
    cout << result << endl; // Output: 11

    nums = {-1, -2, -3, -4};
    k = 2;
    result = maximumGoodSubarraySum(nums, k);
    cout << result << endl; // Output: -6

    return 0;
}
