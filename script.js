// *Task 1: Do the below programs in anonymous function & IIFE

//* a.Print Odd numbers in an array


        //* Using anonymous function

                //Function definition
                const oddNumbersArrayByAnonymousFunction = function(arr) {
                    const odd = arr.filter(num => num % 2 !== 0)
                    return JSON.stringify(odd);
                }

                //Function call and priting the output to console
                console.log(`1. a. Odd Numbers array by Anonymous Function: ${oddNumbersArrayByAnonymousFunction([1, 2, 3, 4, 5, 6, 7, 8, 34, 33, 121, 0, 55])}`)

                /*
                    Input: [1, 2, 3, 4, 5, 6, 7, 8, 34, 33, 121, 0, 55]
                    Output: 1. a. Odd Numbers array by Anonymous Function: [1,3,5,7,33,121,55]
                */


        //* Using IIFE function

                //Function definition
                const oddNumbersArrayByIIFEFunction = (
                    function(arr) {
                        const odd = arr.filter(num => num % 2 !== 0)
                        console.log(`1. a. Odd Numbers array by IIFE Function: ${JSON.stringify(odd)}`);
                    }
                )([1, 2, 3, 4, 5, 6, 7, 8, 34, 33, 121, 0, 55])

                /*
                    Input: [1, 2, 3, 4, 5, 6, 7, 8, 34, 33, 121, 0, 55]
                    Output: 1. a. Odd Numbers array by IIFE Function: [1,3,5,7,33,121,55]
                */


//* b. Convert all the strings to title caps in a string array


        //* Using anonymous function
        
                //Function definition
                const titleCapsArrayByAnonymousFunction = function(arr) {
                    let result = [];

                    for(let a of arr) {
                        const titleCapsArr = a.split(' ').map(d => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase());
                        result.push(titleCapsArr.join(' '));
                    }
                    return JSON.stringify(result);
                }

                //Function call and printing the output to console
                console.log(`1. b. Title Caps by Anonymous Function: Before conversion: ${JSON.stringify(["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"])} vs After Conversion: ${titleCapsArrayByAnonymousFunction(["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"])}`);

                /*
                    Input: ["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"]
                    Output: 1. b. Title Caps by Anonymous Function: Before conversion: ["tHIS iS cAt","pRInt hEllO wOrLD","fUlL stACk dEVEloPeR"] vs After Conversion: ["This Is Cat","Print Hello World","Full Stack Developer"]
                */
        
        
        //* Using IIFE function

                //Function definition
                const titleCapsArrayByIIFEFunction = (function(arr) {
                    let result = [];
                    for(let a of arr) {
                        const titleCapsArr = a.split(' ').map(d => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase());
                        result.push(titleCapsArr.join(' '));
                    }
                    console.log(`1. b. Title Caps by IIFE Function: Before conversion: ${JSON.stringify(["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"])} vs After Conversion: ${JSON.stringify(result)}`);
                })(["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"])

                /*
                    Input: ["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"]
                    Output: 1. b. Title Caps by IIFE Function: Before conversion: ["tHIS iS cAt","pRInt hEllO wOrLD","fUlL stACk dEVEloPeR"] vs After Conversion: ["This Is Cat","Print Hello World","Full Stack Developer"]
                */



//* c. Sum of all numbers in an array


        //* Using anonymous function
        
                //Function definition
                const sumOfNumbersByAnonymousFunction = function(arr) {
                    let sum = 0;
                    for(let a of arr) {
                        sum += a;
                    }
                    return sum;
                }

                //Function call and printing the output to console
                console.log(`1. c. Sum of array ${JSON.stringify([1, 2, 3, 4, 6, 7])} by Anonymous Function is ${sumOfNumbersByAnonymousFunction([1, 2, 3, 4, 6, 7])}`);

                /*
                    Input: [1, 2, 3, 4, 6, 7]
                    Output: 1. c. Sum of array [1,2,3,4,6,7] by Anonymous Function is 23
                */
        
        
        //* Using IIFE function

                //Function definition
                const sumOfNumbersByIIFEFunction = (function(arr) {
                    let sum = 0;
                    for(let a of arr) {
                        sum += a;
                    }
                    console.log(`1. c. Sum of array ${JSON.stringify([1, 2, 3, 4, 6, 7])} by IIFE Function is ${sum}`)
                })([1, 2, 3, 4, 6, 7])

                /*
                    Input: [1, 2, 3, 4, 6, 7]
                    Output: 1. c. Sum of array [1,2,3,4,6,7] by IIFE Function is 23
                */



//* d. Return all the prime numbers in an array


        //* Using anonymous function
        
                //Function definition
                const primeNumbersInArrayByAnonymousFunction = function(arr) {
                    return JSON.stringify(arr.filter(function(num) {
                        if (num <= 1) {
                            return false;
                        }
                        for (let i = 2; i <= Math.sqrt(num); i++) {
                            if (num % i === 0) {
                                return false;
                            }
                        }
                        return true;
                    }));
                }

                //Function call and printing the output to console
                console.log(`1. d. Prime Numbers of array ${JSON.stringify([1, 2, 3, 4, 6, 7, 8, 9, 10])} by Anonymous Function are ${primeNumbersInArrayByAnonymousFunction([1, 2, 3, 4, 6, 7, 8, 9, 10])}`);

                /*
                    Input: [1, 2, 3, 4, 6, 7, 8, 9, 10]
                    Output: 1. d. Prime Numbers of array [1,2,3,4,6,7,8,9,10] by Anonymous Function are [2,3,7]
                */
        
        
        //* Using IIFE function

                //Function definition
                const primeNumbersInArrayByIIFEFunction = (function(arr) {
                    const primeNumbers = JSON.stringify(arr.filter(function(num) {
                        if (num <= 1) {
                            return false;
                        }
                        for (let i = 2; i <= Math.sqrt(num); i++) {
                            if (num % i === 0) {
                                return false;
                            }
                        }
                        return true;
                    }));

                    console.log(`1. d. Prime Numbers of array ${JSON.stringify([1, 2, 3, 4, 6, 7, 8, 9, 10])} by IIFE Function are ${primeNumbers}`)
                })([1, 2, 3, 4, 6, 7, 8, 9, 10])

                /*
                    Input: [1, 2, 3, 4, 6, 7, 8, 9, 10]
                    Output:1. d. Prime Numbers of array [1,2,3,4,6,7,8,9,10] by IIFE Function are [2,3,7]
                */



//* e. Return all the Palindrome in an array


        //* Using anonymous function
        
                //Function definition
                const palindromeInArrayByAnonymousFunction = function(arr) {
                    const palindrome = arr.filter(a => a.split('').reverse().join('').toLowerCase() === a.toLowerCase());
                    return JSON.stringify(palindrome);
                }

                //Function call and printing the output to console
                console.log(`1. e. Palindromes of array ${JSON.stringify(["racecar", "nitin", "rama"])} by Anonymous Function are ${palindromeInArrayByAnonymousFunction(["racecar", "nitin", "rama"])}`)
                
                /*
                    Input: ["racecar", "nitin", "rama"]
                    Output: 1. e. Prime Numbers of array [1,2,3,4,6,7,8,9,10] by Anonymous Function are [2,3,7]
                */
        
        //* Using IIFE function

                //Function definition
                const palindromeInArrayByIIFEFunction = (function(arr) {
                    const palindrome = arr.filter(a => a.split('').reverse().join('').toLowerCase() === a.toLowerCase());
                    console.log(`1. e. Palindromes of array ${JSON.stringify(["racecar", "nitin", "rama"])} by IIFE Function are ${JSON.stringify(palindrome)}`)

                })(["racecar", "nitin", "rama"])

                /*
                    Input: ["racecar", "nitin", "rama"]
                    Output: 1. e. Prime Numbers of array [1,2,3,4,6,7,8,9,10] by IIFE Function are [2,3,7]
                */



//* f. Return median of two sorted arrays of the same size


        //* Using anonymous function
        
                //Function definition
                const medianOfArrayByAnonymousFunction = function(arr1, arr2) {
                    const mergedArray = arr1.concat(arr2);

                    //Sorting the array
                    mergedArray.sort((a, b) => a - b);
                
                    const middle = Math.floor(mergedArray.length / 2);
                
                    if (length % 2 === 0) {
                        // If the length is even, average the two middle elements
                        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
                    } else {
                        // If the length is odd, return the middle element
                        return mergedArray[middle];
                    }
                };

                //Function call and printing the output to console
                console.log(`1. f. Median of arrays ${JSON.stringify([1, 3, 5])} and ${JSON.stringify([2, 4, 6])} by Anonymous Function are ${medianOfArrayByAnonymousFunction([1, 3, 5], [2, 4, 6])}`)
                
                /*
                    Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
                    Output: 1. f. Median of arrays [1,3,5] and [2,4,6] by Anonymous Function are 3.5
                */
        
        //* Using IIFE function

                //Function definition
                const medianOfArrayByIIFEFunction = (function(arr1, arr2) {
                    const mergedArray = arr1.concat(arr2);

                    //Sorting the array
                    mergedArray.sort((a, b) => a - b);
                
                    const middle = Math.floor(mergedArray.length / 2);
                    let result;

                    if (length % 2 === 0) {
                        // If the length is even, average the two middle elements
                        result = (mergedArray[middle - 1] + mergedArray[middle]) / 2;
                    } else {
                        // If the length is odd, return the middle element
                        result = mergedArray[middle];
                    }
                    console.log(`1. f. Median of arrays ${JSON.stringify([1, 3, 5])} and ${JSON.stringify([2, 4, 6])} by IIFE Function are ${result}`)


                })([1, 3, 5], [2, 4, 6])

                /*
                    Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
                    Output: 1. f. Median of arrays [1,3,5] and [2,4,6] by IIFE Function are 3.5
                */


//* g. Remove duplicates from an array


        //* Using anonymous function
        
                //Function definition
                const removeDuplicatesFromArrayByAnonymousFunction = function(arr) {
                    let unique = new Set();

                    for(let a of arr) {
                        unique.add(a);
                    }

                    return JSON.stringify(Array.from(unique));
                };

                //Function call and printing the output to console
                console.log(`1. g. Remove Duplicates from array by Anonymous Function: Before: ${JSON.stringify([1, 2, 3, 4, 5, 2, 3])} vs After: ${removeDuplicatesFromArrayByAnonymousFunction([1, 2, 3, 4, 5, 2, 3])}`);

                /*
                    Input: [1, 2, 3, 4, 5, 2, 3]
                    Output: 1. g. Remove Duplicates from array by Anonymous Function: Before: [1,2,3,4,5,2,3] vs After: [1,2,3,4,5]
                */
        
        
        //* Using IIFE function

                //Function definition
                const removeDuplicatesFromArrayByIIFEFunction = (function(arr) {
                    let unique = new Set();

                    for(let a of arr) {
                        unique.add(a);
                    }

                    console.log(`1. g. Remove Duplicates from array by IIFE Function: Before: ${JSON.stringify([1, 2, 3, 4, 5, 2, 3])} vs After: ${JSON.stringify(Array.from(unique))}`)

                })([1, 2, 3, 4, 5, 2, 3])

                /*
                    Input: [1, 2, 3, 4, 5, 2, 3]
                    Output: 1. g. Remove Duplicates from array by IIFE Function: Before: [1,2,3,4,5,2,3] vs After: [1,2,3,4,5]
                */


//* h. Rotate Array by K times


        //* Using anonymous function
        
                //Function definition
                const rotateArrayKTimesByAnonymousFunction = function(arr, k) {

                    // Rotate the array k times
                    for (let i = 1; i <= k; i++) {
                        const firstElement = arr.shift();
                        arr.push(firstElement);
                    }

                    return JSON.stringify(arr);
                };

                //Function call and printing the output to console
                console.log(`1. h. Rotating the array ${JSON.stringify([1, 2, 3, 4, 5])} by ${3} times in Anonymous Function: Before Rotation: ${JSON.stringify([1, 2, 3, 4, 5])} vs After Rotation: ${rotateArrayKTimesByAnonymousFunction([1, 2, 3, 4, 5], 3)}`)
                
                /*
                    Input: [1, 2, 3, 4, 5]
                    Output: 1. h. Rotating the array [1,2,3,4,5] by 3 times in Anonymous Function: Before Rotation: [1,2,3,4,5] vs After Rotation: [4,5,1,2,3]
                */
        
        //* Using IIFE function

                //Function definition
                const rotateArrayKTimesByIIFEFunction = (function(arr, k) {

                     // Rotate the array k times
                     for (let i = 1; i <= k; i++) {
                        const firstElement = arr.shift();
                        arr.push(firstElement);
                    }

                    console.log(`1. h. Rotating the array ${JSON.stringify([1, 2, 3, 4, 5])} by ${3} times in IIFE Function: Before Rotation: ${JSON.stringify([1, 2, 3, 4, 5])} vs After Rotation: ${JSON.stringify(arr)}`)

                })([1, 2, 3, 4, 5], 3)

                /*
                    Input: [1, 2, 3, 4, 5]
                    Output: 1. h. Rotating the array [1,2,3,4,5] by 3 times in IIFE Function: Before Rotation: [1,2,3,4,5] vs After Rotation: [4,5,1,2,3]
                */














// *Task 2: Do the below programs in Arrow Functions

//* a.Print Odd numbers in an array


        //* Using arrow function

                //Function definition
                const oddNumbersArrayByArrowFunction = (arr) => {
                    const odd = arr.filter(num => num % 2 !== 0)
                    return JSON.stringify(odd);
                }

                //Function call and priting the output to console
                console.log(`2. a. Odd Numbers array by arrow Function: ${oddNumbersArrayByArrowFunction([1, 2, 3, 4, 5, 6, 7, 8, 34, 33, 121, 0, 55])}`)

                /*
                    Input: [1, 2, 3, 4, 5, 6, 7, 8, 34, 33, 121, 0, 55]
                    Output: 2. a. Odd Numbers array by arrow Function: [1,3,5,7,33,121,55]
                */


//* b. Convert all the strings to title caps in a string array


        //* Using arrow function
        
                //Function definition
                const titleCapsArrayByArrowFunction = (arr) => {
                    let result = [];

                    for(let a of arr) {
                        const titleCapsArr = a.split(' ').map(d => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase());
                        result.push(titleCapsArr.join(' '));
                    }
                    return JSON.stringify(result);
                }

                //Function call and printing the output to console
                console.log(`2. b. Title Caps by arrow Function: Before conversion: ${JSON.stringify(["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"])} vs After Conversion: ${titleCapsArrayByArrowFunction(["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"])}`)
                
                /*
                    Input: ["tHIS iS cAt", "pRInt hEllO wOrLD", "fUlL stACk dEVEloPeR"]
                    Output: 2. b. Title Caps by arrow Function: Before conversion: ["tHIS iS cAt","pRInt hEllO wOrLD","fUlL stACk dEVEloPeR"] vs After Conversion: ["This Is Cat","Print Hello World","Full Stack Developer"]
                */


//* c. Sum of all numbers in an array


        //* Using arrow function
        
                //Function definition
                const sumOfNumbersByArrowFunction = arr => {
                    let sum = 0;
                    for(let a of arr) {
                        sum += a;
                    }
                    return sum;
                }

                //Function call and printing the output to console
                console.log(`2. c. Sum of array ${JSON.stringify([1, 2, 3, 4, 6, 7])} by arrow Function is ${sumOfNumbersByArrowFunction([1, 2, 3, 4, 6, 7])}`)
                
                /*
                    Input: [1, 2, 3, 4, 6, 7]
                    Output: 2. c. Sum of array [1,2,3,4,6,7] by arrow Function is 23
                */
        

//* d. Return all the prime numbers in an array


        //* Using arrow function
        
                //Function definition
                const primeNumbersInArrayByArrowFunction = arr => {
                    return JSON.stringify(arr.filter(function(num) {
                        if (num <= 1) {
                            return false;
                        }
                        for (let i = 2; i <= Math.sqrt(num); i++) {
                            if (num % i === 0) {
                                return false;
                            }
                        }
                        return true;
                    }));
                }

                //Function call and printing the output to console
                console.log(`2. d. Prime Numbers of array ${JSON.stringify([1, 2, 3, 4, 6, 7, 8, 9, 10])} by arrow Function are ${primeNumbersInArrayByArrowFunction([1, 2, 3, 4, 6, 7, 8, 9, 10])}`);

                 /*
                    Input: [1, 2, 3, 4, 6, 7, 8, 9, 10]
                    Output: 2. d. Prime Numbers of array [1,2,3,4,6,7,8,9,10] by arrow Function are [2,3,7]
                */


//* e. Return all the Palindrome in an array


        //* Using arrow function
        
                //Function definition
                const palindromeInArrayByArrowFunction = arr => {
                    const palindrome = arr.filter(a => a.split('').reverse().join('').toLowerCase() === a.toLowerCase());
                    return JSON.stringify(palindrome);
                }

                //Function call and printing the output to console
                console.log(`2. e. Palindromes of array ${JSON.stringify(["racecar", "nitin", "rama"])} by Arrow Function are ${palindromeInArrayByArrowFunction(["racecar", "nitin", "rama"])}`);

                /*
                    Input: ["racecar", "nitin", "rama"]
                    Output: 2. e. Prime Numbers of array [1,2,3,4,6,7,8,9,10] by Arrow Function are [2,3,7]
                */