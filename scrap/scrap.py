import requests
from bs4 import BeautifulSoup
import json


# URL of the web page you want to scrape
url = 'https://en.gdplayertv.to'

# Send a GET request to the web page
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the content of the page
    soup = BeautifulSoup(response.content, 'html.parser')

    tv_list = []
    
    # Find all the article titles (assuming they are in <h2> tags)
    article_titles = soup.find_all('div', class_='card-body')

    # Extract the text of each title and store it in a list
    titles = [title.get_text().strip() for title in article_titles]
    


    # Find all the <a> tags with the class 'card'
    links = soup.find_all('a', class_='card')
    
    # Extract the href attributes and store them in a list
    hrefs = [link.get('href') for link in links]


    # Find all the <img> tags with the class 'card'
    imgs = soup.find_all('img', class_='lazy')
    
    # Extract the href attributes and store them in a list
    imgs_link = [img.get('data-src') for img in imgs]
    
    # Open previous data
    # Open and read the JSON file
    saved_tv = []
    with open("../assets/js/tv-list.json", 'r') as file:
        saved_tv = json.load(file)


    for i in range(len(titles)):
        
        tv_dict = {
            "tv-name": titles[i],
            "tv-loc": "",
            "tv-lang": "",
            "tv-type": "copy_data",
            "tv-desc": "",
            "tv-logo": imgs_link[i],
            "tv-streaming": hrefs[i] + "?embed=1",
            "isSlow": 1
        }

        
        # Check if the string contains "GEO Blocked"
        if "GEO Blocked" in titles[i]:
            print("Tv is 'GEO Blocked'.")
        else:
            tv_list.append(tv_dict)

    # Save the list of TV entries to a JSON file
    with open('tv_data.json', 'w') as json_file:
        json.dump(tv_list, json_file, indent=4)

else:
    print(f'Failed to retrieve the page. Status code: {response.status_code}')
