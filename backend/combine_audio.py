from pydub import AudioSegment

def combine_audio_files(voice_audio_path , background_audio_path): 
    voice_audio = AudioSegment.from_mp3(voice_audio_path)
    background_audio = AudioSegment.from_mp3(background_audio_path) - 20

    slow_down_factor = 0.9
    slow_audio = voice_audio._spawn(voice_audio.raw_data, overrides={
    "frame_rate": int(voice_audio.frame_rate * slow_down_factor)
    })
    voice_duration = len(slow_audio)
    background_audio = background_audio[:voice_duration]
    combined_audio = slow_audio.overlay(background_audio)
    combine_audio_filepath = f"./combined_audio/{background_audio_path.split('/')[-1].split('.')[0]}_combined_{voice_audio_path.split('/')[-1]}"
    combined_audio.export(combine_audio_filepath, format="mp3")
    return combine_audio_filepath


#%% 
# from pydub import AudioSegment 

# voice_audio = AudioSegment.from_mp3("./audio_files/somesh_meditation.wav")
# background_audio = AudioSegment.from_mp3("./backgrounds/seashore.mp3") - 20
# # # %%

# background_audio_path = "./backgrounds/seashore.mp3"
# voice_audio_path = "./audio_files/somesh_meditation.wav"

# slow_down_factor = 0.9
# slow_audio = voice_audio._spawn(voice_audio.raw_data, overrides={
# "frame_rate": int(voice_audio.frame_rate * slow_down_factor)
# })
# voice_duration = len(slow_audio)
# background_audio = background_audio[:voice_duration]
# combined_audio = slow_audio.overlay(background_audio)
# combine_audio_filepath = f"./combined_audio/{background_audio_path.split('/')[-1].split('.')[0]}_combined_{voice_audio_path.split('/')[-1]}"



# %%
