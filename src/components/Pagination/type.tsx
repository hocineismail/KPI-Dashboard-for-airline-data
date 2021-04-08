export interface Ipagination {
  onchangePage: (s: number) => void;  
  onChangeRow: (s: string) => void;  
  totalPage: number,
  row: string,
  currentPage: number
  }