export interface  Quote {
  id: string
  category: string;
  author: string;
  message: string;
}
export interface  QuoteMutation {
  category: string;
  author: string;
  message: string;
}

export interface QuotesList {
  [id: string]: Quote;
}