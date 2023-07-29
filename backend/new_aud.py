#%%
import requests
import os 
from dotenv import load_dotenv
load_dotenv()

url = "https://api.elevenlabs.io/v1/voices"

headers = {
  "Accept": "application/json",
  "xi-api-key": os.getenv("ELEVENLABS_API_KEY")
}

response = requests.get(url, headers=headers)

print(response.text)

# %%
import pandas as pd 
import json 

df = pd.DataFrame(response.json()['voices'])

# filter out the voices where in lables column description contains calm the labels column has the dictionary of vairous attrbutes in which the description is one key 
df = df[df['labels'].apply(lambda x: 'calm' == dict(x).get('description', 0))]

print(list(df.name.to_numpy()))
# %%
