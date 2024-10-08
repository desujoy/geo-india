# Geo-India

Geo-India is a geospatial game focused on India's geography. It includes an interactive quiz where players guess Indian states from their maps, along with a fun GeoGuesser-style game to identify real-world locations. The game also features public and private rooms for players to challenge each other, with leaderboards to track progress.

## Features

- **MCQ Quiz**: 
  - Identify Indian states from their maps.
  - Multiple-choice questions with four possible options.
  
- **GeoGuesser Game**: 
  - Guess locations in India based on images.
  - Earn points based on accuracy and speed.

- **Rooms**:
  - **Public Rooms**: Play with random users or friends.
  - **Private Rooms**: Create private rooms with invite-only access for a more personalized experience.
  
- **Leaderboards**:
  - Track top performers in both public and private rooms.
  - Compare scores with friends and the broader community.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Firebase (for user authentication and room management)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/geo-india.git
   cd geo-india
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project.
   - Enable Firebase Authentication and Firestore for room management.
   - Configure Firebase in the project.

4. Run the development server:
   ```bash
   npm start
   ```

### How to Play

- **MCQ Quiz**:
  - Click "Start Quiz" to begin.
  - For each question, select the correct state from four options based on its map outline.

- **GeoGuesser Game**:
  - A random image of a location in India is displayed.
  - Guess the correct location from the four provided options.

- **Public and Private Rooms**:
  - Join or create a room.
  - In private rooms, share the room code with your friends to invite them.

### Leaderboards

- View the top players globally or within your private rooms.
- Earn points by correctly guessing states or locations, and climb the leaderboard!

## Technologies Used

- **Frontend**: React, Next.js
- **Backend**: Firebase (Firestore for room and leaderboard management, Firebase Auth for authentication)
- **Maps**: Mapbox/Google Maps API for GeoGuesser

## Contributing

We welcome contributions! Please submit a pull request with any changes or features you'd like to add.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
