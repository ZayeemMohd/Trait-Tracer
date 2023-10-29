from flask import Flask, render_template, request
import openai

app = Flask(name)

// Set your OpenAI GPT-3 API key here
api_key = "fyhby-hhiu-bugyft"

// Initialize the OpenAI API client
openai.api_key = api_key

// Sample Node.js code for handling user registration
const express = require('express');
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
    const username = req.body.username;
    // Handle user registration and data storage here
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});


// Define a function to generate questions using GPT-3
def generate_questions(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=50,  # Adjust the token limit as needed
        n = 5  # Generate 5 questions
    )
    questions = [choice['text'] for choice in response.choices]
    return questions

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_test', methods=['POST'])
def generate_test():
    user_input = request.form['user_input']


    // Generate questions based on user input
    questions = generate_questions(user_input)

    return render_template('test.html', questions=questions)

if name == 'main__':
    app.run(debug=True)