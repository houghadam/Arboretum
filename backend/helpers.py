import asyncio

"""
This file contains functions to handle async calls to entities endpoint
Broken out into this file to avoid cluttering the app routes
"""


async def create_task_list(entities: list, session):
    """
    Creates a task list to be processes asynchronously
    Input: list of entity ids
    Return: list of tasks
    """
    tasks = []
    for entity in entities:
        task = asyncio.create_task(get_entity(entity, session))
        tasks.append(task)
    return tasks


async def get_entity(entity, session):
    """
    Calls WSU entities endpoint to get details for specified entity
    Input: entity id
    Return: dict of attributes for specified entity
    """

    url = "https://w3.winona.edu/locations/api/entities/" + entity
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
    }
    details = {}
    response = await session.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        try:
            details["entityId"] = data["entityId"]
            details["defaultImagePath"] = data["defaultImagePath"]
            for attribute in data["attributeValues"]:
                key = attribute["attributeName"]
                details[key] = attribute["attributeValue"]
            if "description" not in list(details.keys()):
                details["Description"] = data["description"]
            if "Common Name" not in list(details.keys()):
                details["Common Name"] = data["displayName"]
            if "Scientific Name" not in list(details.keys()):
                details["Scientific Name"] = data["displayName"]
            images = []
            for resource in data["resources"]:
                if resource["resourceType"] == "Audio" and resource["path"].endswith(
                    "mp3"
                ):
                    details["Audio"] = resource["path"]
                if resource["resourceType"] == "Image":
                    images.append(resource["path"])
            details["additionalImages"] = images
            return details
        except Exception as e:
            print(f"Error getting entity: {e}")
    else:
        print(f"Error fetching data: {response.status_code}")


async def get_theme(theme, session):
    """
    Calls WSU theme endpoint to get entities within specified theme
    Input: theme id
    Return: dict of entity id and common name
    """

    url = "https://w3.winona.edu/locations/api/themes/" + str(theme)
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
    }
    entities = []

    response = await session.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        try:
            for entity in data:
                details = {}
                details["entityId"] = entity["entityId"]
                details["commonName"] = entity["displayName"]
                entities.append(details)
            return entities
        except Exception as e:
            print(f"Error getting entity: {e}")
    else:
        print(f"Error fetching data: {response.status_code}")
