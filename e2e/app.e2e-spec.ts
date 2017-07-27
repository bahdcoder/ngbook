import { NgbookPage } from './app.po'

describe('ngbook App', () => {
  let page: NgbookPage

  beforeEach(() => {
    page = new NgbookPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Welcome to app!')
  })
})
