import os
from flask import Flask, request, send_file
from backend import AiMeditationForMeditationEnthusiast
from combine_audio import combine_audio_files
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

current_dir = os.path.dirname(os.path.realpath(__file__))

mapping = {
    "seashore" : "./backgrounds/seashore.mp3",
    "rain" : "./backgrounds/rain.mp3",
    "thunder" : "./backgrounds/thunder.mp3",
}

preferences = {
    "preferes_guided_meditation": True,
    "background_sounds": ["seashore", "rain"],
    "duration": "5 minutes"
}

user = AiMeditationForMeditationEnthusiast("somesh", preferences)

@app.route('/generate_meditation_text', methods=['POST'])
def generate_meditation_text():
    data = request.get_json()
    goal = data['goal']
    meditation_text = user.generate_meditation_text(goal)
    filename = os.path.join('..', 'meditation_text.txt')
    with open(filename, 'w') as f:
        f.write(meditation_text)
    print(f"Generated meditation text written to {os.path.abspath(filename)}")
    return send_file(os.path.abspath(filename), as_attachment=True)

@app.route('/generate_voiceover', methods=['POST'])
def generate_voiceover():
    data = request.get_json()
    meditation_text = data['meditation_text']
    # voice_audio_path = user.generate_voiceover(meditation_text)
    voice_audio_path = "/Users/somesh/Downloads/code/elevenlabs_lablab/backend/combined_audio/seashore_combined_audio_sample.wav"
    print(f"Generated voiceover written to {os.path.abspath(voice_audio_path)}")
    return send_file(voice_audio_path, as_attachment=True)

@app.route('/download_background', methods=['POST'])
def download_background():
    data = request.get_json()
    background_audio_path = mapping[data['background']]
    return send_file(background_audio_path, as_attachment=True)

@app.route('/combine_audio', methods=['POST'])
def combine_audio():
    data = request.get_json()
    background_audio_path = mapping[data['background']]
    print(f'background_audio_path: {background_audio_path}')
    voice_audio_path = os.path.join("./", "audio_files", f"{user.user_name}_meditation.wav")
    print(f'voice_audio_path: {voice_audio_path}')
    combined_audio_path = combine_audio_files(voice_audio_path, background_audio_path)
    return send_file(combined_audio_path, as_attachment=True)

if __name__ == "__main__":
    app.run()