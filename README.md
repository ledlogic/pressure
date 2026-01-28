# PRESSURE Character Sheet Viewer

An interactive web-based character sheet viewer for the PRESSURE RPG tabletop game.

## Files Included

- `character-sheet.html` - Main HTML file
- `character-sheet.css` - Styling with absolute positioning for character sheet layout
- `character-sheet.js` - jQuery script for loading and displaying characters
- `characters.json` - JSON data for all 10 pre-generated characters
- `Pressure_Industrial_Science_Fiction_Roleplaying-case-file.png` - Background image

## Setup Instructions

1. **Place all files in the same directory** on your computer or web server

2. **Open the viewer:**
   - Simply double-click `character-sheet.html` to open in your browser
   - Or host on a web server for full functionality

3. **If running locally** and the background image doesn't appear:
   - Some browsers block local file access for security
   - Use a local web server (Python: `python -m http.server 8000`)
   - Or use a browser extension that allows local file access

## How to Use

### Navigation
- **Dropdown menu**: Select any character from the list
- **Previous/Next buttons**: Navigate through characters sequentially
- **Keyboard arrows**: Use ← and → keys to navigate

### Features
- Displays all character attributes, skills, and totals
- Shows penalties, damage, pressure level
- Lists equipment for each character
- Character #10 (Unit 7-Victor) is a SAM with special rules

## Character List

1. **Sergeant Maya Cross** - The Veteran
2. **Dr. Kenji Yamamoto** - The Science Officer
3. **Corporal Jackson 'Jax' Reid** - The Shooter
4. **Specialist Hannah Okafor** - The Tech
5. **Lieutenant Sarah Kovacs** - The Commander
6. **Private Marcus Chen** - The Medic
7. **Sergeant Dmitri Volkov** - The Breacher
8. **Corporal Elena Vasquez** - The Hacker
9. **Sergeant James 'Ironside' Murphy** - The Engineer
10. **Unit 7-Victor 'Vic'** - The SAM (Synthetic)

## Customization

### Adjusting Field Positions
Edit `character-sheet.css` to adjust the absolute positioning of any field:

```css
#attr-charisma {
    top: 175px;    /* Distance from top */
    left: 120px;   /* Distance from left */
    width: 60px;   /* Field width */
}
```

### Adding New Characters
Edit `characters.json` and add new character objects following the existing format.

### Modifying Appearance
- Edit colors, fonts, and effects in `character-sheet.css`
- Current theme uses sci-fi aesthetics with cyan (#00f0ff) and orange (#ff6b35) accents

## Technical Details

### Dependencies
- jQuery 3.7.1 (loaded from CDN)

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design scales on smaller screens

### Data Structure
Each character in `characters.json` contains:
- `id`: Unique identifier
- `name`: Full character name
- `nickname`: Character archetype
- `attributes`: Charisma, Agility, Strength, Education (1-4)
- `penalties`: Attribute penalties from damage
- `skills`: 20 skills (0-2 at creation, specialist skills marked)
- `damage`: Current damage taken
- `pressureBonus`: Strength + Education
- `pressureLevel`: Current pressure accumulation
- `episodes`: Special notes about pressure episodes
- `equipment`: List of gear
- `experiencePoints`: XP earned

## Troubleshooting

**Background image not showing:**
- Ensure the PNG file is in the same directory as the HTML file
- Check browser console (F12) for error messages
- Try using a local web server instead of opening file directly

**Characters not loading:**
- Check that `characters.json` is in the same directory
- Open browser console (F12) to see any error messages
- Ensure JSON file is valid (use JSONLint.com to verify)

**Fields not aligning properly:**
- The CSS positions are calibrated for a 1000px wide container
- Adjust positions in `character-sheet.css` if using a different size background image
- Container automatically scales on smaller screens

## For Game Masters

This viewer is perfect for:
- Displaying character sheets on a TV/monitor during sessions
- Quick reference for NPC stats
- Player character management
- Online games via screen sharing

## License

These characters are pre-generated for "The Foster Report" scenario in the PRESSURE RPG by Jonathan Hicks (Osprey Games).

## Credits

- **PRESSURE RPG**: Jonathan Hicks, Osprey Games
- **Character Sheet Design**: Based on official PRESSURE character sheet
- **Pre-generated Characters**: Created for "The Foster Report" scenario
