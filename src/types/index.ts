export type CellValue = string | number | null;

export type CellStyle = {
  bold?: boolean;
  italic?: boolean;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center' | 'right';
};

export type Cell = {
  id: string;
  value: CellValue;
  formula: string;
  display: string;
  style: CellStyle;
};

export type SheetData = {
  [key: string]: Cell;
};

export type Selection = {
  start: { row: number; col: number };
  end: { row: number; col: number };
  active: { row: number; col: number };
};

export type SheetDimensions = {
  rows: number;
  cols: number;
};

export type ToolbarState = {
  bold: boolean;
  italic: boolean;
  fontSize: number;
  color: string;
  backgroundColor: string;
  textAlign: 'left' | 'center' | 'right';
};