document.getElementById('SelectOption').addEventListener('change', function() {
      val = $( "#SelectOption" ).val();
        
      console.log(val)
      if(val === 'Home') {
        window.open('http://127.0.0.1:5501/tea.html','_blank');
        }
      if(val === 'Contact') {
        window.open('contact.php', '_blank');
      }
      if (val === 'Sitemap') {
        window.open('sitemap.php', '_blank');
      }
    });