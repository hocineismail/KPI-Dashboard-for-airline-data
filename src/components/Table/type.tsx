export interface Ipagination {
  totalPage: number;
  row: string;
  currentPage: number;
}

export type IdataPassengers = {
  _id: string, name: string, trips: string
}
export type TheaderTable = [
  { title: string } 
]
export interface Itable {
  onchangePage: (s: number) => void;  
  onChangeRow: (s: string) => void;  
  data: IdataPassengers[];
  paginationData: Ipagination; 
  loading: boolean,
  headerTable: Array<{title: string}>
}
 

