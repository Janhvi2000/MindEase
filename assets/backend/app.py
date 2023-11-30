from flask import Flask, request, jsonify
from google.cloud import dialogflow
from google.oauth2 import service_account

app = Flask(__name__)

@app.route('/dialogflow', methods=['POST'])
def dialogflow_webhook():
    data = request.get_json()

    # Extract relevant data from the request
    project_id = "chatbot-kqoq"  # Replace with your Dialogflow project ID
    session_id = str(data.get('session_id', 1))
    text = data.get('text', '')
    language_code = "en"

    # Call the detect_intent function
    fulfillment_text = detect_intent(project_id, session_id, text, language_code)

    # Return the response to the Expo app
    return jsonify({'fulfillment_text': fulfillment_text})

def detect_intent(project_id, session_id, text, language_code):
    credentials = service_account.Credentials.from_service_account_file(
        './credentials.json'
    )

    session_client = dialogflow.SessionsClient(credentials=credentials)
    session = session_client.session_path(project_id, session_id)

    text_input = dialogflow.TextInput(text=text, language_code=language_code)
    query_input = dialogflow.QueryInput(text=text_input)
    response = session_client.detect_intent(
        request={"session": session, "query_input": query_input}
    )

    return response.query_result.fulfillment_text

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
