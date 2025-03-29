# import googlemaps
# import config

# gmaps = googlemaps.Client(key=config.hospital)

# def get_nearby_hospitals(location):
#     places = gmaps.places_nearby(profile=location, radius=5000, type="hospital")
    
#     results = places.get("results", [])
#     hospitals = [(hosp["name"], hosp["vicinity"]) for hosp in results[:5]]
    
#     return hospitals


import requests
import config
from math import radians, sin, cos, sqrt, atan2

def haversine_distance(lat1, lon1, lat2, lon2):
    """
    Calculate the great-circle distance between two points on the Earth using the Haversine formula.
    """
    R = 6371  # Radius of the Earth in kilometers
    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    return R * c  # Distance in kilometers

def get_nearby_hospitals(location):
    """
    Fetch nearby hospitals using the Mapbox API and calculate their distances.
    
    Args:
        location (tuple): A tuple containing latitude and longitude (lat, lon).
    
    Returns:
        list: A list of tuples with hospital names, addresses, and distances.
    """
    # Mapbox API endpoint for searching places
    endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json"
    
    # Construct the request parameters
    params = {
        "proximity": f"{location[1]},{location[0]}",  # Longitude, Latitude
        "access_token": config.hospital,  # API key from config
        "limit": 5  # Limit results to 5 hospitals
    }
    
    # Make the API request
    response = requests.get(endpoint, params=params)
    
    if response.status_code == 200:
        data = response.json()
        features = data.get("features", [])
        
        # Extract hospital names, addresses, and calculate distances
        hospitals = []
        for feature in features:
            name = feature["text"]
            address = feature["place_name"]
            coords = feature["geometry"]["coordinates"]  # [longitude, latitude]
            distance = haversine_distance(location[0], location[1], coords[1], coords[0])
            hospitals.append((name, address, round(distance, 2)))  # Round distance to 2 decimal places
        
        return hospitals
    else:
        print(f"Error: Unable to fetch data from Mapbox API (Status Code: {response.status_code})")
        return []

if __name__ == "__main__":
    # Example location: Latitude and Longitude of Delhi City
    location = (28.6139, 77.2090)
    hospitals = get_nearby_hospitals(location)
    
    if hospitals:
        print("Nearby Hospitals:")
        for name, address, distance in hospitals:
            print(f"{name} - {address} - {distance} km")
    else:
        print("No hospitals found.")