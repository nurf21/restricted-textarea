# Character Counter Text Area

A responsive text area component with real-time character counting and visual feedback when reaching the character limit. Built with HTML, CSS, and JavaScript.

**Live Demo**: [https://nurf21.github.io/restricted-textarea](https://nurf21.github.io/restricted-textarea)  
**Project Source**: [https://roadmap.sh/projects/restricted-textarea](https://roadmap.sh/projects/restricted-textarea)

## Features

- **Live character counter** that updates as you type
- **250-character limit** with input blocking at the limit
- **Visual feedback** with border color change and animations
- **Progress bar** showing character usage percentage
- **Responsive design** works on all device sizes
- **Modern UI** with gradient backgrounds and smooth animations
- **Feature cards** explaining functionality

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/nurf21/restricted-textarea
   ```

2. Open the `index.html` file in any modern web browser.

3. Start typing in the text area:
   - Watch the character counter update in real-time
   - See the progress bar fill as you approach the limit
   - When you reach 250 characters, the border will turn red and input will be blocked

## Customization

You can easily customize the application by modifying these variables in the `script.js` file:

```javascript
// Change the maximum character limit
const maxLength = 500;

// Change warning threshold (90% by default)
if (length > maxLength * 0.9) {
  // Warning state
}
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations, and Responsive Design
- **JavaScript** - Real-time character counting and input validation
- **Font Awesome** - Icon set
- **Google Fonts** - Typography

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.