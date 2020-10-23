$( document ).ready(function() {
    console.log( "ready!" );

    localStorage.setItem('myCat', 'Tom');
    const cat = localStorage.getItem('myCat');
    console.log('My cat', cat)

    // --- Add button listeners ---
    // Clear local storage
    document.getElementById('clear').onclick = function () {
        console.log('Local storage cleared')
        localStorage.clear();
    }
});