### VIN Decoder

# 1. Project Overview

VIN Decoder is a single-page web application featuring a clean and minimalistic design, allowing users to decode vehicle VIN numbers and view detailed vehicle information in a clear and structured format.

The application uses the public API provided by the National Highway Traffic Safety Administration (NHTSA) to retrieve vehicle data based on a VIN (Vehicle Identification Number).

A VIN is a unique 17-character identifier assigned to every vehicle. It contains information about the manufacturer, model, production year, engine type, assembly plant, and other technical characteristics.

This application provides a simple interface where users can enter a VIN number and instantly receive decoded vehicle information.

### VIN Decoding

Users can enter a VIN number into the input field on the main page.  
The application performs basic validation before sending a request to the API.
Validation rules include:

- the field must not be empty  
- the VIN must not exceed 17 characters  
- only valid VIN characters are allowed  

If the VIN passes validation, the application sends a request to the NHTSA API and displays the decoded vehicle data.
Only meaningful values returned by the API are displayed to the user.

### Decoding Results

The results section displays decoded vehicle information in a readable format.
Typical information includes:

- manufacturer  
- model  
- model year  
- body class  
- engine specifications  
- manufacturing plant  
- country of production  

Empty values returned by the API are filtered out before rendering.

### VIN History

The application stores the last three VIN numbers entered by the user.
The history is saved in the browser's localStorage, allowing users to quickly reuse previously entered VIN numbers.

### Variables Page

The Variables page displays a list of all available vehicle variables provided by the NHTSA API.
Each variable includes:

- variable name  
- variable description  
- a link to view additional details  

### Variable Details Page

The Variable Details page shows detailed information about a specific variable, including its full description and identifier.

### Navigation

The application contains a header with navigation links:

- **VIN Decoder** — main page where users can decode VIN numbers  
- **Variables** — page displaying all available API variables  

Navigation is implemented using React Router.

### Technologies Used

The project is built using modern frontend technologies:

- React  
- TypeScript  
- Vite  
- React Router  
- Axios  
- SCSS Modules  

The application follows a modular architecture with reusable UI components and a clear separation of concerns.

# 2. Running the Project

Clone the repository:

```git clone https://github.com/Blaize13/vin-decoder.git ```

Install dependencies:

``` npm install ```

Start the development server:

``` npm run dev ```

The application will be available at:
http://localhost:5173

# 3. Author

Dmytro Raryk

GitHub: [Blaize13](https://github.com/Blaize13)

Telegram: [blaizze_13](https://t.me/blaizze_13)

Email: [Blaizzze2281337@gmail.com](mailto:Blaizzze2281337@gmail.com)