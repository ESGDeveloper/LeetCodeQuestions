/* 20. Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */
const isValid = (s) => {
    const sLength = s.length;
    if (sLength % 2 === 1) return false;
    let stack = [];
  
    for (let i = 0; i < sLength; ++i) {
        switch(s[i]){
            case '(' :
            case '[' :
            case '{' :
                stack.push(s[i]);
                break;
            case ')' :
                if('(' !== stack.pop())
                    return false;
                break;
            case ']' :
                if('[' !== stack.pop())
                    return false;
                break;
            case '}' :
                if('{' !== stack.pop())
                    return false;
                break;
            default :
                return false;
        }
    }
    
    return !stack.length;
};