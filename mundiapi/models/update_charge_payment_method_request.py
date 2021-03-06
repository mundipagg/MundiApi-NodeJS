# -*- coding: utf-8 -*-

"""
    mundiapi

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
"""

import mundiapi.models.create_credit_card_payment_request
import mundiapi.models.create_debit_card_payment_request
import mundiapi.models.create_boleto_payment_request
import mundiapi.models.create_voucher_payment_request
import mundiapi.models.create_cash_payment_request
import mundiapi.models.create_bank_transfer_payment_request

class UpdateChargePaymentMethodRequest(object):

    """Implementation of the 'UpdateChargePaymentMethodRequest' model.

    Request for updating the payment method of a charge

    Attributes:
        update_subscription (bool): Indicates if the payment method from the
            subscription must also be updated
        payment_method (string): The new payment method
        credit_card (CreateCreditCardPaymentRequest): Credit card data
        debit_card (CreateDebitCardPaymentRequest): Debit card data
        boleto (CreateBoletoPaymentRequest): Boleto data
        voucher (CreateVoucherPaymentRequest): Voucher data
        cash (CreateCashPaymentRequest): Cash data
        bank_transfer (CreateBankTransferPaymentRequest): Bank Transfer data

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "update_subscription":'update_subscription',
        "payment_method":'payment_method',
        "credit_card":'credit_card',
        "debit_card":'debit_card',
        "boleto":'boleto',
        "voucher":'voucher',
        "cash":'cash',
        "bank_transfer":'bank_transfer'
    }

    def __init__(self,
                 update_subscription=None,
                 payment_method=None,
                 credit_card=None,
                 debit_card=None,
                 boleto=None,
                 voucher=None,
                 cash=None,
                 bank_transfer=None):
        """Constructor for the UpdateChargePaymentMethodRequest class"""

        # Initialize members of the class
        self.update_subscription = update_subscription
        self.payment_method = payment_method
        self.credit_card = credit_card
        self.debit_card = debit_card
        self.boleto = boleto
        self.voucher = voucher
        self.cash = cash
        self.bank_transfer = bank_transfer


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
        update_subscription = dictionary.get('update_subscription')
        payment_method = dictionary.get('payment_method')
        credit_card = mundiapi.models.create_credit_card_payment_request.CreateCreditCardPaymentRequest.from_dictionary(dictionary.get('credit_card')) if dictionary.get('credit_card') else None
        debit_card = mundiapi.models.create_debit_card_payment_request.CreateDebitCardPaymentRequest.from_dictionary(dictionary.get('debit_card')) if dictionary.get('debit_card') else None
        boleto = mundiapi.models.create_boleto_payment_request.CreateBoletoPaymentRequest.from_dictionary(dictionary.get('boleto')) if dictionary.get('boleto') else None
        voucher = mundiapi.models.create_voucher_payment_request.CreateVoucherPaymentRequest.from_dictionary(dictionary.get('voucher')) if dictionary.get('voucher') else None
        cash = mundiapi.models.create_cash_payment_request.CreateCashPaymentRequest.from_dictionary(dictionary.get('cash')) if dictionary.get('cash') else None
        bank_transfer = mundiapi.models.create_bank_transfer_payment_request.CreateBankTransferPaymentRequest.from_dictionary(dictionary.get('bank_transfer')) if dictionary.get('bank_transfer') else None

        # Return an object of this model
        return cls(update_subscription,
                   payment_method,
                   credit_card,
                   debit_card,
                   boleto,
                   voucher,
                   cash,
                   bank_transfer)


