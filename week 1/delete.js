document.addEventListener('DOMContentLoaded', function() {
    function deleteF(moveThis, toThis) {
        toThis.appendChild(moveThis);
    
    
    }
    
    const moveThis = document.querySelector('#moveme');
    const toThis = document.querySelector('#listtwo');
    deleteF(moveThis, toThis);
});


