let count = 0;
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space') {
                count++;
                document.getElementById('counter').textContent = count;
            }
        });
        
        document.getElementById('reset').addEventListener('click', function() {
            count = 0;
            document.getElementById('counter').textContent = count;
        });