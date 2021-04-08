export interface Ipagination {
  totalPage: number;
  row: string;
  currentPage: number;
}

export interface Itable {
  onchangePage: (s: number) => void;  
  onChangeRow: (s: string) => void;  
  data: IdataPassengers[];
  paginationData: Ipagination; 
  loading: boolean,
  headerTable: { title: string }[]
}
 

export interface IdataPassengers {
  _id: string, name: string, trips: string
}