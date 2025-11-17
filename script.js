const form = document.getElementById('leadForm');
const thankYou = document.getElementById('thankYouMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email')
  };

  try {
    // Make POST request to Node server
    const res = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      form.style.display = 'none';
      thankYou.style.display = 'block';
    } else {
      const result = await res.json();
      alert(`Error: ${result.message}`);
    }
  } catch (err) {
    console.error('Fetch error:', err);
    alert('There was an error sending your request. Please try again.');
  }
});
