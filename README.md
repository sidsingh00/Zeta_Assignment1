  # Zeta_Assignment_1

A web application that mimics the user interface and core functionalities of Google Sheets, with a focus on mathematical and data quality functions, data entry, and key UI interactions.

## Features

### Spreadsheet Interface
- Google Sheets-like UI with toolbar, formula bar, and cell structure
- Drag functionality for cell content and selections
- Cell dependencies with formula support
- Basic cell formatting (bold, italics, alignment)
- Add, delete, and resize rows and columns

### Mathematical Functions
- SUM: Calculates the sum of a range of cells
- AVERAGE: Calculates the average of a range of cells
- MAX: Returns the maximum value from a range of cells
- MIN: Returns the minimum value from a range of cells
- COUNT: Counts the number of cells containing numerical values in a range

### Data Quality Functions
- TRIM: Removes leading and trailing whitespace from a cell
- UPPER: Converts the text in a cell to uppercase
- LOWER: Converts the text in a cell to lowercase
- REMOVE_DUPLICATES: Removes duplicate rows from a selected range
- FIND_AND_REPLACE: Allows users to find and replace specific text within a range of cells

### Data Entry and Validation
- Support for various data types (numbers, text, formulas)
- Basic data validation for formulas

### Additional Features
- Save and load spreadsheets
- Undo/redo functionality
- Copy and paste cells
- Resize rows and columns

## Tech Stack and Data Structures

### Frontend Technologies
- **React**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Zustand**: For state management
- **Immer**: For immutable state updates
- **Tailwind CSS**: For styling
- **Lucide React**: For icons
- **Vite**: For fast development and building

### Data Structures

#### Core Data Model
The application uses a structured data model to represent the spreadsheet:

```typescript
interface SpreadsheetData {
  rows: number;
  cols: number;
  cells: Record<string, Cell>;
  selectedCell: string | null;
  selectedRange: string[] | null;
  copiedCells: Record<string, Cell> | null;
  undoStack: SpreadsheetState[];
  redoStack: SpreadsheetState[];
  columnWidths: Record<number, number>;
  rowHeights: Record<number, number>;
}

interface Cell {
  id: string;
  value: string;
  formula: string;
  computed: string | number | null;
  format: CellFormat;
}
```

#### Cell Addressing
- Cells are addressed using A1 notation (e.g., A1, B2)
- Internally, cells are stored in a map with their address as the key
- This allows for efficient lookup and updates

#### Formula Evaluation
- Formulas are parsed and evaluated using a recursive descent parser
- Cell references are resolved dynamically
- Circular references are detected and handled
- Functions are implemented as higher-order functions

#### Undo/Redo Stack
- The application maintains undo and redo stacks
- Each state change is captured and pushed to the undo stack
- This allows for efficient time-travel debugging

### Performance Optimizations

1. **Virtualized Rendering**: Only visible cells are rendered, improving performance for large spreadsheets
2. **Memoization**: Components are memoized to prevent unnecessary re-renders
3. **Efficient State Updates**: Using Immer for immutable state updates without the overhead
4. **Lazy Evaluation**: Formulas are only recalculated when needed

### Security Considerations

1. **Input Sanitization**: All user inputs are sanitized to prevent XSS attacks
2. **Safe Formula Evaluation**: Formulas are evaluated in a controlled environment
3. **Data Validation**: Input validation is performed to ensure data integrity

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sidharth-krowd/Zeta_Assignment_1.git
cd google-sheets-clone
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm run test
```

## Future Enhancements

- Add support for charts and graphs
- Implement collaborative editing
- Add more advanced formulas and functions
- Improve accessibility
- Add keyboard shortcuts
- Implement cell validation rules

## License

This project is licensed under the MIT License - see the LICENSE file for details.
