//use array and find even length array name of element
const friends = ['ansarul','masud','shopikul','kawsar','najmul','habibur'];
const evenFriendName =[];
const evenFriend = names =>{
   names.forEach(name => {
    // console.log(name.length)
    if(name.length % 2 ==0){
        evenFriendName.push(name);
    }
});
// console.log(evenFriendName)
return evenFriendName;
}
console.log(evenFriend(friends));