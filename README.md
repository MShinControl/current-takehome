# current-takehome
Current API Design Takehome

Requirements:
1. This API must be available on a public endpoint you control
2. This API must expose the following two endpoints

POST /visit
- Accepts POST requests with ‘application/json’ types
- The schema for submitted objects is as follows:
    - userId - the user that is submitting the location
    - name - the name of the location
- Returns a visitId which can be referenced in the GET. Visit IDs are globally unique to the location submission

GET /visit
- Can be queried with either of the following patterns:
    - visitId
- both of the following two query params:
    - userId
    - searchString- A string which is attempted to be matched over the 5 most recent locations the user has visited. The matching should be fuzzy, and case insensitive.
- Returns an array of arrival objects that was submitted to the POST

Delivery:
Once you complete the API, please email me with the public endpoint and a link to a github repository of the code. Trevor will test the endpoint after submission and report the results.

Example timeline:

POST { userId: “user1”, name: “McDonald’s” } => Returns: { visitId: “some-visit-id-1” }

GET /visit?visitId=some-visit-id-1 => Returns: [{ userId: “user1”, name: “McDonald’s”, visitId:“some-visit-id-1” }]

POST { userId: “user1”, name: “Starbucks” } => Returns: { visitId: “some-visit-id-2” }

GET /visit?userId=user1&searchString=MCDONALD’S LAS VEGAS => Returns: [{ userId: “user1”, name: “McDonald’s”, visitId: “some-visit-id-1” }]

POST { userId: “user2”, name: “Starbucks” } => Returns: { visitId: “some-visit-id-3” }

GET /visit?userId=user2&searchString=APPLE