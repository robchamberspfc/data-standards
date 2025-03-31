## Summary

Gaining access to the API structure of your new system helps you identify and address potential integration issues before its implementation.

It can help you:

* document APIs in the appropriate format  
* discover and plan for necessary system dependencies  
* prevent delays and additional costs associated with unexpected integration issues

## Getting started

### 1. Request API documentation from your supplier before signing a contract 

Explain to technology suppliers that early API documentation is essential to plan your integration. You need to understand how they look like, how they are structured and how you can access them.

### 2. Use the correct specification to document your API

Once you get the API structure from your technology supplier, there are two possible pathways:

* For RESTful APIs, the most common in the housing sector, use the [OpenAPI specification]([http://xxx](https://housing-data-standards.netlify.app/procurement/describe-apis-using-the-openapi-specification/)).  
* For non-RESTful APIs, like GraphQL, use the [minimal API documentation]([http://xxx](https://housing-data-standards.netlify.app/procurement/minimal-api-documentation/)).

> The choice isn't about preference, but rather about which type of API is being used. Certain APIs can't be documented using the Open API specification due to their different structure and request methods.

#### What to include in your documentation

* Details of standards used  
* Details of endpoint locations  
* Authentication and permissions requirements  
* Endpoint description, details of data available and formats  
* Availability and performance expectations or restrictions  
* Whether you want it to be made publicly available

### 3. Share the documentation with other technology suppliers

This ensures all dependencies and integrations can be planned properly from the start of the project.
