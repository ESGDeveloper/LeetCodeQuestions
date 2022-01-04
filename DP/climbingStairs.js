/* 70. Climbing Stairs
* You are climbing a staircase. It takes n steps to reach the top.
* Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
* 처음에는 재귀로 풀다, timeout발생.
*/
const climbStairs = (stair) => {
    if (stair < 3) return stair;
    
    let first = 1;
    let second = 2;
    let step = true;
    
    for (let i = 2; i < stair; ++i) {
        if (step) first += second;
        else second += first;
        
        step = !step;
    }
    
    return step ? second : first;
};

/*const recursive = (stair, step) => {
    if(stair <= 0) return;
    console.log(`[ ${stair} ${step} ]`);
    const nextStair = stair - step;
    
    if(nextStair === 0) ++caseResult;
    if(nextStair <= 0) return;
    
    recursive(nextStair, 1);
    recursive(nextStair, 2);
}*/