//#include <map>
//#include <set>
//#include <list>
//#include <cmath>
//#include <ctime>
//#include <deque>
//#include <queue>
//#include <stack>
//#include <string>
//#include <bitset>
//#include <cstdio>
//#include <limits>
//#include <vector>
//#include <climits>
//#include <cstring>
//#include <cstdlib>
//#include <fstream>
//#include <numeric>
//#include <sstream>
//#include <iostream>
//#include <algorithm>
//using namespace std;


/*
 * Complete the function below.
 */
void helper(int x, int y, vector<vector<int>>& result, vector<vector<char>> &mapLocker, int newValue) {
    if (x<0 || x>=result.size() || y<0 || y>=result[0].size()) return;
   
    if (mapLocker[x][y] == 'v') {
	if (newValue < result[x][y]) {
	    result[x][y] = newValue;
        } else {
            return;
        }
    } else {
        result[x][y] = newValue;
        mapLocker[x][y] = 'v';
    }   
    int self = result[x][y];  
    cout<<x<<":"<<y<<" ---value:"<<result[x][y]<<endl;
    helper(x-1, y-1, result, mapLocker, self + 2);
    helper(x, y-1, result, mapLocker, self + 1);
    helper(x+1, y-1, result, mapLocker, self + 2);
    helper(x+1, y, result, mapLocker, self + 1);
    helper(x+1, y+1, result, mapLocker, self + 2);
    helper(x, y+1, result, mapLocker, self + 1);
    helper(x-1, y-1, result, mapLocker, self + 2);
    helper(x-1, y, result, mapLocker, self + 1);
}

vector < vector < int > > getLockerDistanceGrid(int cityLength, int cityWidth, vector < int > lockerXCoordinates, vector < int > lockerYCoordinates) {
    if (cityLength <= 0 || cityWidth <= 0) return vector<vector<int>>(0);
    int xSize = lockerXCoordinates.size(), ySize = lockerYCoordinates.size();
    if (xSize == 0 || ySize == 0 || xSize != ySize) return vector<vector<int>>(0);

    vector<vector<int>> result(cityLength, vector<int>(cityWidth, 0));
    vector<vector<char>> mapLocker(cityLength, vector<char>(cityWidth, ' '));
 
    for (int i=0; i<xSize; i++) {
        helper(lockerXCoordinates[i]-1, lockerYCoordinates[i]-1, result, mapLocker, 0);
    }
    
    return result;
}

