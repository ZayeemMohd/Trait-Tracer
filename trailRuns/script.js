initial_question = "What is your favorite color?"

@app.route('/')
def home():
    return render_template('form.html', question=initial_question)

// Route to analyze user input
@app.route('/analyze', methods=['POST'])
def analyze():
    # Get the user's answer from the form
    user_answer = request.form['answer']


    // Route to analyze user input
    @app.route('/analyze', methods=['POST'])
    def analyze():
        # Get the user's answer from the form
        user_answer = request.form['answer']
    
    // You can use the user's answer as input to GPT-3 for analysis
        response = nlp(f"The user's answer was: {user_answer}. What is their personality?")
    
    // Extract the model's generated text
        personality_analysis = response[0]['generated_text']
    
    // Display the analysis to the user
        return f"<h2>Personality Analysis:</h2><p>{personality_analysis}</p>"
    
    if name == 'main__':
        app.run(debug=True)