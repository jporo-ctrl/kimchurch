document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/mwvrpkzo', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert('Thank you! Your application has been submitted. We will be in touch soon!');
      form.reset();
    } else {
      alert('Something went wrong. Please try again or email us at jporo@kim.church');
    }
  });
});
