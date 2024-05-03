document.addEventListener('DOMContentLoaded', function() {
    const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const peopleElements = document.querySelectorAll('.person');

    function filterPeople() {
        const showDead = document.getElementById('filter-dead').checked;
        const showAlive = document.getElementById('filter-alive').checked;

        peopleElements.forEach(person => {
            const status = person.dataset.status;
            if (showDead && showAlive) {
                person.style.display = 'block'; // Show all people
                if (status.includes('dead')) {
                    person.classList.add('dead'); // Add the 'dead' class
                } else {
                    person.classList.remove('dead'); // Remove the 'dead' class
                }
            } else if (showDead && status.includes('dead')) {
                person.style.display = 'block'; // Show people with "dead" in their status
                person.classList.add('dead'); // Add the 'dead' class
            } else if (showAlive && !status.includes('dead')) {
                person.style.display = 'block'; // Show people without "dead" in their status
                person.classList.remove('dead'); // Remove the 'dead' class
            } else {
                person.style.display = 'none'; // Hide the person
                person.classList.remove('dead'); // Remove the 'dead' class
            }
        });
    }

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterPeople);
    });

    // Show all people by default
    filterPeople();
});