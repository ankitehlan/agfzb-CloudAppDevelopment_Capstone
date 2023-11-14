"""IBM Cloud Function that gets all reviews for a dealership

Returns:
    List: List of reviews for the given dealership
"""
from cloudant import Cloudant
from flask_apiexceptions import ApiException
import requests

def main(param_dict):
    """Main Function

    Args:
        param_dict (Dict): input paramater

    Returns:
        _type_: _description_ TODO
    """

    try:
        client = Cloudant.iam(
            account_name="e5c1f382-d6e3-4c53-b67f-a2e45ce95497-bluemix",
            api_key="u8v-rk2sni64qWz9lvYJLcbSw6NqgS27ijwCR4oVHhXu",
            connect=True,
        )
        print(f"Databases: {client.all_dbs()}")
    except ApiException as cloudant_exception:
        print("unable to connect")
        return {"error": cloudant_exception}
    except (requests.exceptions.RequestException, ConnectionResetError) as err:
        print("connection error")
        return {"error": err}

    return {"dbs": client.all_dbs()}
