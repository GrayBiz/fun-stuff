var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main Street',
            '222 Lane Way'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 walker way'
        ]
    }
]






var callPermutate = function() {
    var word = document.getElementById('textBox').value
    document.getElementById('output').innerHTML = '';
    if (word.length < 7){
    recursivePermutate(word, '');
    }
    else {
        document.getElementById('output').innerHTML = "Please pick a word with 6 or less letters.";
    }
}

function recursivePermutate(rest, soFar) {
    var next;
    var remaining;
    
    if (rest == '') {
        
        var div = document.getElementById("output");
        
        div.innerHTML = div.innerHTML + soFar + '<br />';
        
       
        
    }
    else {
        for (var i = 0; i < rest.length; i++) {
            remaining = rest.substr(0,i) + rest.substr(i+1, rest.length-1);
            next = soFar + rest[i];
            
            recursivePermutate(remaining, next);
        }
    }
}