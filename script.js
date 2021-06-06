function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
    
    setInterval(() => {
        var dictionary = { "a": "ש", "b": "נ", "c": "ב", "d": "ג", "e": "ק", "f": "כ", "g": "ע", "h": "י", "i": "ן", "j": "ח", "k": "ל", "l": "ך", "m": "צ", "n": "מ", "o": "ם", "p": "פ", "q": "/", "r": "ר", "s": "ד", "t": "א", "u": "ו", "v": "ה", "w": "'", "x": "ס", "y": "ט", "z": "ז" }
        var dictionary2 = { "ש": "a", "נ": "b", "ב": "c", "ג": "d", "ק": "e", "כ": "f", "ע": "g", "י": "h", "ן": "i", "ח": "j", "ל": "k", "ך": "l", "צ": "m", "מ": "n", "ם": "o", "פ": "p", "/": "q", "ר": "r", "ד": "s", "א": "t", "ו": "u", "ה": "v", "'": "w", "ס": "x", "ט": "y", "ז": "z" }
        var letters = ["א", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "ש", "ת", ];
        var string = document.getElementById("input1").value.toLowerCase();
        var test1 = letters.some(el => string.includes(el));
        if(test1) {
            result = string.replace(/[א-ת]/gi, m => dictionary2[m]);
        } else {
            result = string.replace(/[a-z]/gi, m => dictionary[m]);
        }

        var string2 = document.getElementById("input2").value
        var result2 = reverseString(string2)
        
        document.getElementById("output1").innerHTML = result;    
        document.getElementById("output2").innerHTML = result2;    
    }, 500);
        

    