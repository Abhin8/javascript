

// function removeDuplicate(arr){
//     const uniqueElement = [];
//     for( let i=0;i<arr.length;i++){
//         if(uniqueElement.indexOf(arr[i]===-1)){
//             uniqueElement.push(arr[i]);
//         }
//     }
//     return uniqueElement;
// }
 console.log(removeDuplicates([1,2,3,3,4,6,4,6,5]));


function removeDuplicates(arr){
    let uniqueElement = [];
    for (let i=0;i<arr.length;i++){
        
        if(uniqueElement.indexOf(arr[i])==-1){
            uniqueElement.push(arr[i]);
        }
    }
    return uniqueElement;
}

//using set
// console.log(removeDuplicates([1,2,3,4,4,5,6,6]));

// function removeDuplicates(arr){
//     return [ ...new Set(arr)]
// }