from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from curl_cffi.requests import AsyncSession
import requests
import asyncio
import helpers


# TODO: Add /api/search route for returning a single entity when passed entity id


app = FastAPI()

# Allowed origins for CORS
origins = [
    "http://localhost:5173",
    "http://192.168.1.111:5173",
    "http://192.168.1.41:5173",
]
# Middleware to allow requests from different origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/themes/{theme}")
def get_entities(theme):
    """
    Fetches the IDs of all entities within a given theme
    Input: theme ID
    Return: list of entity ids
    """
    url = "https://w3.winona.edu/locations/api/themes/" + theme
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
    }
    entities = []

    response = requests.request("GET", url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        try:
            for entity in data:
                entities.append(entity["entityId"])
        except Exception as e:
            print(f"Error getting entitys: {e}")
    return entities


@app.get("/api/entities/{entities}")
def get_details(entities):
    """
    Fetches all details each entity in a given list of entities (theme)
    Input: list of entities
    Return: list of dicts containing details for each entity
    """
    entities = entities.split(",")
    detailsJSON = []

    async def main():
        """
        Handles async fetching (necessary for larger themes)
        Input: None
        Return: None
        """
        async with AsyncSession() as s:
            tasks = await helpers.create_task_list(entities, s)
            for future in asyncio.as_completed(tasks):
                results = await future
                if results:
                    detailsJSON.append(results)

    asyncio.run(main())
    return detailsJSON


@app.get("/api/summary/{theme}")
def get_summary(theme):
    """
    Fetches theme name and description for given theme ID
    Input: theme ID
    Return: dict of theme name and description
    """
    url = "https://w3.winona.edu/locations/api/themes/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
    }
    summary = {}
    response = requests.request("GET", url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        try:
            for d in data:
                if d["themeId"] == int(theme):
                    summary["themeName"] = d["themeName"]
                    summary["description"] = d["description"]
        except Exception as e:
            print(f"Error getting entity: {e}")
    return summary


@app.get("/api/theme/themelist")
def theme_list():
    """
    Fetches all theme IDs and names
    Input: None
    Return: list of dicts
    """
    url = "https://w3.winona.edu/locations/api/themes/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
    }
    themes = []
    response = requests.request("GET", url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        try:
            for d in data:
                theme = {}
                theme["themeId"] = d["themeId"]
                theme["themeName"] = d["themeName"]
                themes.append(theme)
        except Exception as e:
            print(f"Error getting theme list: {e}")
    else:
        print(f"Fetching theme list returned error code: {response.status_code}")
    return themes


@app.get("/api/list/entities")
def entities_list():
    """
    Fetches all entity IDs and matching common name
    Input: None
    Return: list of dicts
    """
    url = "https://w3.winona.edu/locations/api/themes/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
    }
    themes = []
    entity_list = []
    response = requests.request("GET", url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        try:
            for d in data:
                themes.append(d["themeId"])
        except Exception as e:
            print(f"Error getting theme list: {e}")
    else:
        print(f"Fetching theme list returned error code: {response.status_code}")

    async def get_entities_from_theme():
        """
        Handles async fetching (necessary for larger themes)
        Input: None
        Return: None
        """
        async with AsyncSession() as s:
            tasks = []
            for theme in themes:
                task = asyncio.create_task(helpers.get_theme(theme, s))
                tasks.append(task)
            for future in asyncio.as_completed(tasks):
                results = await future
                if results:
                    entity_list.extend(results)

    asyncio.run(get_entities_from_theme())
    return entity_list
