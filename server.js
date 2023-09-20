const userName = 'Harry';

let friends = ['Ron', 'Hermione', 'Hedwig'];

friends.push('Draco');

console.log(`${userName} has got ${friends.length} friends.`);

for(let i = 0; i < friends.length; i++){
    if(friends[i] === 'Draco'){
        weAreNotFriends(friends[i]);
        continue;
    }
    friends[i] = friends[i] + '*';
    greetings(friends[i]);
}

friends.forEach(friend => {
    
    console.log(friend);
});


function greetings(friendsname){
    console.log(`Hello, ${friendsname}!`);

}

function weAreNotFriends(enemyname){
    console.log(`Go away ${enemyname}! We are not friends!`);
}