// Get the form element.
const form = document.querySelector('form');

// Get all of the input elements in the form.
const inputs = form.querySelectorAll('input');

// Add a submit event listener to the form.
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior.
  event.preventDefault();

  // Get the values of all of the input elements.
  const answers = inputs.map(input => input.value);

  // Calculate the user's insights.
  const insights = calculateInsights(answers);

  // Display the user's insights.
  const resultsContainer = document.querySelector('#results-container');
  resultsContainer.innerHTML = `<h2>Your Insights</h2><ul>${insights.map(insight => `<li>${insight}</li>`).join('')}</ul>`;
});

function calculateInsights(answers) {
  // This is a simple example of how to calculate insights from the user's answers.
  // You can implement more complex algorithms here.

  const insights = [];
  if (answers[0] === 'blue') {
    insights.push('You are a calm and collected person.');
  } else if (answers[0] === 'red') {
    insights.push('You are a passionate and energetic person.');
  }

  if (answers[1] === 'heights') {
    insights.push('You are afraid of heights.');
  } else if (answers[1] === 'spiders') {
    insights.push('You are afraid of spiders.');
  }

  if (answers[2] === 'The Lord of the Rings') {
    insights.push('You are a fan of fantasy books.');
  } else if (answers[2] === 'Harry Potter') {
    insights.push('You are a fan of science fiction books.');
  }

  if (answers[3] === 'problem-solving') {
    insights.push('You are good at solving problems.');
  } else if (answers[3] === 'communication') {
    insights.push('You are good at communicating with others.');
  }

  if (answers[4] === 'procrastination') {
    insights.push('You tend to procrastinate.');
  }

  return insights;
}
