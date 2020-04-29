export default class SearchBlogRequest { 
    public ID: number
    public Title: string
    public Author: number
    public Excerpt: string
    public Content: string
    public IsPublished: boolean
    public IsActive: boolean
    public BlogID: number
    public CreatedAt: Date
    public CreatedBy: number
    public Orderby: string
    public NumRecord: string
    public PageNumber: number
  }