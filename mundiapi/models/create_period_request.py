# -*- coding: utf-8 -*-

"""
    mundiapi

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
"""

from mundiapi.api_helper import APIHelper

class CreatePeriodRequest(object):

    """Implementation of the 'CreatePeriodRequest' model.

    TODO: type model description here.

    Attributes:
        end_at (datetime): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "end_at":'end_at'
    }

    def __init__(self,
                 end_at=None):
        """Constructor for the CreatePeriodRequest class"""

        # Initialize members of the class
        self.end_at = APIHelper.RFC3339DateTime(end_at) if end_at else None


    @classmethod
    def from_dictionary(cls,
                        dictionary):
        """Creates an instance of this model from a dictionary

        Args:
            dictionary (dictionary): A dictionary representation of the object as
            obtained from the deserialization of the server's response. The keys
            MUST match property names in the API description.

        Returns:
            object: An instance of this structure class.

        """
        if dictionary is None:
            return None

        # Extract variables from the dictionary
        end_at = APIHelper.RFC3339DateTime.from_value(dictionary.get("end_at")).datetime if dictionary.get("end_at") else None

        # Return an object of this model
        return cls(end_at)


