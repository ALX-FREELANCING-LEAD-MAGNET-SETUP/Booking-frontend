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
    const res = await fetch('https://booking-backend-oa6z.onrender.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      form.style.display = 'none';
      thankYou.style.display = 'block';
    } else {
      alert('There was an error. Please try again.');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    alert('Could not connect to the server.');
  }
});
