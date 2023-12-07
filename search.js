     // Function to handle the search
     function search() {
        // Get the search input value
        var searchTerm = document.getElementById('searchbar').value;

        // Remove any previous search highlights
        var searchResults = document.querySelectorAll('.search-result');
        searchResults.forEach(function (element) {
           element.classList.remove('highlight');
        });

        // Check if the search term is not empty
        if (searchTerm.trim() !== '') {
           // Find all elements containing the search term
           var elements = document.querySelectorAll('*');
           elements.forEach(function (element) {
              if (element.textContent.includes(searchTerm)) {
                 element.classList.add('highlight');
              }
           });
        }
     }

     // Add an event listener to the search button
     document.getElementById('search-button').addEventListener('click', search);

     // Add an event listener to handle Enter keypress
     document.getElementById('searchbar').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
           search();
        }
     });