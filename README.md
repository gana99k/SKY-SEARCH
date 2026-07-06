# SKY-SEARCH

The Sky Search Application is a web-based tool that allows users to search for flight information between two airports using real-time aviation data. The application is built using HTML, CSS, and JavaScript, and integrates with the AviationStack API to retrieve flight details dynamically.


Key Features
1. Flight Search

Users can enter:

Departure Airport (IATA code)
Arrival Airport (IATA code)

The application then sends a request to the AviationStack API and retrieves matching flight data.

2. Real-Time Flight Data

The application displays live flight information, including:

Airline Name
Flight Number
Flight Status
Departure Airport
Arrival Airport
Scheduled Departure Time
Scheduled Arrival Time
3. Dynamic Results Display

Results are generated dynamically using JavaScript and displayed as individual flight cards, making the information easy to read and navigate.

4. Loading Indicator

When a search is in progress, the application displays a loading message to inform users that data is being retrieved.

5. Error Handling

The system handles:

Invalid airport codes
API failures
Network errors
No-flight scenarios

This ensures a smooth user experience.

6. Date Filtering (Optional Enhancement)

Users can specify a date range:

From Date
To Date

The application can then filter flights based on scheduled departure dates.

Technologies Used
HTML

Provides the structure of the application:

Search form
Input fields
Results section
Loading indicators
CSS

Enhances the visual appearance:

Modern layout
Responsive design
Flight cards
Interactive buttons
JavaScript

Handles:

User interactions
Form submission
API communication
Data processing
Dynamic content generation
AviationStack API

Provides aviation data including:

Flight schedules
Airline information
Airport details
Flight statuses
Application Workflow
Step 1: User Input

The user enters:

Departure airport code
Arrival airport code

Example:

Departure: JFK
Arrival: LAX
Step 2: Form Submission

JavaScript captures the form submission and prevents page refresh.

Step 3: API Request

A request is sent to the AviationStack API:

https://api.aviationstack.com/v1/flights

with parameters:

dep_iata=JFK
arr_iata=LAX
Step 4: Data Retrieval

The API returns flight information in JSON format.

Step 5: Data Processing

JavaScript extracts relevant details from the response.

Step 6: Display Results

Flight cards are created dynamically and displayed on the page.

Benefits of the Application
Fast and user-friendly flight search
Real-time aviation information
Easy integration with third-party APIs
Demonstrates practical API usage
Enhances JavaScript and web development skills
Future Enhancements

The application can be extended with additional features such as:

Date range search
Airline filters
Flight status filters
Sorting options
Pagination
Responsive mobile support
Flight tracking on maps
Price comparison using flight pricing APIs
User authentication and saved searches
Summary

The Flight Search Application is a practical web development project that combines frontend technologies with a real-world aviation data API. It demonstrates how to collect user input, communicate with external services, process JSON responses, and present data dynamically in an interactive and user-friendly interface. This project serves as an excellent example of API integration and modern web application development.



[Live Link](https://gana99k.github.io/SKY-SEARCH/)
