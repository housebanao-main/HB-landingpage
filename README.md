# HouseBanao Landing Page - Popup Component

This project contains the code for the "Popup Component" on the HouseBanao landing page. This component is a visually appealing section designed to highlight two key features: contacting via WhatsApp and getting estimate calculations.

## Features

- **Responsive Design**: Ensures the layout adapts gracefully across devices (mobile, tablet, and desktop).
- **WhatsApp Integration**: Provides a direct link for users to contact the business on WhatsApp.
- **Estimate Calculator**: Includes a button that redirects users to customized package solutions.

## Technology Stack

- **Next.js**: For server-side rendering and frontend development.
- **Tailwind CSS**: For styling the components.
- **React**: For building dynamic and reusable UI elements.

## File Structure

- `popup_component.js`: Contains the code for the customizable cards and buttons.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/housebanao-landing-page.git
   ```

2. Navigate to the project directory:
   ```bash
   cd housebanao-landing-page
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

## How It Works

### Popup Component

- **Left Section**: Contains two cards.
  1. **Contact Us via WhatsApp**: A card with a button that opens WhatsApp for direct communication.
  2. **Get Estimate Calculation**: A card that allows users to get customized package details.

- **Right Section**: Includes a prominent "Contact Us" button and text promoting WhatsApp-exclusive services.

### Key Highlights

- **Icons and Logos**: Features WhatsApp logos for better recognition.
- **Hover Effects**: Button colors change on hover for better interactivity.
- **Rounded Elements**: Soft, rounded corners for a modern look.

## Customization

- Update WhatsApp phone number in the code:
  ```javascript
  href="https://api.whatsapp.com/send?phone=9810432124"
  ```

- Change styling by modifying Tailwind CSS classes in `popup_component.js`.

## Deployment

You can deploy the project using [Vercel](https://vercel.com/):

1. Push your project to a GitHub repository.
2. Connect the repository to your Vercel account.
3. Follow the deployment steps provided by Vercel.

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests for enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
