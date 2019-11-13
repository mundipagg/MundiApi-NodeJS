# -*- coding: utf-8 -*-

"""
    mundiapi

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
"""


class GetBillingAddressResponse(object):

    """Implementation of the 'GetBillingAddressResponse' model.

    Response object for getting a billing address

    Attributes:
        street (string): TODO: type description here.
        number (string): TODO: type description here.
        zip_code (string): TODO: type description here.
        neighborhood (string): TODO: type description here.
        city (string): TODO: type description here.
        state (string): TODO: type description here.
        country (string): TODO: type description here.
        complement (string): TODO: type description here.
        line_1 (string): Line 1 for address
        line_2 (string): Line 2 for address

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "street":'street',
        "number":'number',
        "zip_code":'zip_code',
        "neighborhood":'neighborhood',
        "city":'city',
        "state":'state',
        "country":'country',
        "complement":'complement',
        "line_1":'line_1',
        "line_2":'line_2'
    }

    def __init__(self,
                 street=None,
                 number=None,
                 zip_code=None,
                 neighborhood=None,
                 city=None,
                 state=None,
                 country=None,
                 complement=None,
                 line_1=None,
                 line_2=None):
        """Constructor for the GetBillingAddressResponse class"""

        # Initialize members of the class
        self.street = street
        self.number = number
        self.zip_code = zip_code
        self.neighborhood = neighborhood
        self.city = city
        self.state = state
        self.country = country
        self.complement = complement
        self.line_1 = line_1
        self.line_2 = line_2


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
        street = dictionary.get('street')
        number = dictionary.get('number')
        zip_code = dictionary.get('zip_code')
        neighborhood = dictionary.get('neighborhood')
        city = dictionary.get('city')
        state = dictionary.get('state')
        country = dictionary.get('country')
        complement = dictionary.get('complement')
        line_1 = dictionary.get('line_1')
        line_2 = dictionary.get('line_2')

        # Return an object of this model
        return cls(street,
                   number,
                   zip_code,
                   neighborhood,
                   city,
                   state,
                   country,
                   complement,
                   line_1,
                   line_2)


